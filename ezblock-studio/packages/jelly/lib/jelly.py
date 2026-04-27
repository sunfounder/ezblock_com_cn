from ezblock import Pin, PWM, ADC

class Jelly(object):
    '''
    Input(chn, device)
    param: 
        @chn: input channel
        @device: device choice, leaf = 0, rpi = 1
    return: class
    '''
    PORT = [
        # Leaf
        # IN
        ['A10', 'A11'],
        ['A12','A13'],
        ['A8', 'A9'],
        ['A6', 'A7'],
        # OUT
        ['A0', 'A1'],
        ['A2', 'A3'],
        ['D6', 'D7'],
        ['D4', 'D5'],
        # # Raspberry Pi
        # # IN
        # [17, 0],#D0
        # [18, 1],#D1
        # [27, 2],#D2
        # [22, 3],#D3
        # # OUT
        # [1, 0],
        # [3, 2],
        # [5, 4],
        # [7, 6],
    ]
    period = 4095
    prescaler = 10
    def __init__(self, port):
        if port.startswith("IN"):
            chn = int(port.replace("IN", ""))
            self.p_out = Pin(self.PORT[chn][0])
            self.p_in = ADC(self.PORT[chn][1])
        elif port.startswith("OUT"):
            chn = int(port.replace("OUT", "")) + 4  
            self.p_out = Pin(self.PORT[chn][0])
            self.p_in = PWM(self.PORT[chn][1])
            self.p_in.period(self.period)
            self.p_in.prescaler(self.prescaler)

    def read(self):
        self.p_out.value(1)
        value = self.p_in.read()
        return value

    def write(self, value):
        if value > 0:
            self.p_in.pulse_width(int(abs(value)))
            self.p_out.value(1)
        else:
            self.p_in.pulse_width(int(abs(value)))
            self.p_out.value(0)

class JellyModule(object):
    def __init__(self, port):
        if not isinstance(port, Jelly):
            raise ValueError("inport must be Jelly port instance")
        self.port = port
    def read(self):
        return self.port.read()
    def write(self, value):
        return self.port.write(value)

"""
    input:
"""
class Button(JellyModule):
    def read(self):
        raw_result = super().read()
        result =  0 if raw_result < (4095/2) else 1
        return result

class Slider(JellyModule):
    pass

class SoundSensor(JellyModule):
    pass

class LightSensor(JellyModule):
    pass

class DistanceSensor(JellyModule):
    def distance(self):
        dis_list = []
        for i in range(0,20):
            dis_list.append(self.read())
        result = sum(dis_list)/20.0
        dis_list = []
        result = 27 - result / 4096.0 * 27
        if result < 18 and result >= 9:
            result +=2
        if result < 9 and result > 1:
            result +=3.5
        if result < 4:
            result = 4
        if result > 24:
            result = 24
        return result

"""
    Output:
"""
class LED(JellyModule):
    pass

class RGB(JellyModule):
    # "#00ff99"
    def color(self, clr):
        if isinstance(clr, int):
            r = clr >> 16 & 0xFF
            g = clr >> 8 & 0xFF
            b = clr >> 0 & 0xFF
        elif isinstance(clr, str):
            r = int(clr[1:3], 16)
            g = int(clr[3:5], 16)
            b = int(clr[5:7], 16)
        else:
            raise ValueError("Color must be int(0x56ABF4) or string(\"56ABF4\")")

        r, g, b = r/255.0, g/255.0, b/255.0
        mx = max(r, g, b)
        mn = min(r, g, b)
        df = mx-mn
        #print(df)
        if mx == mn:
            h = 0
        elif mx == r:
            h = 60 * ((g-b)/df+0)
        elif mx == g:
            h = 60 * ((b-r)/df + 2)
        elif mx == b:
            h = 60 * ((r-g)/df + 4)
        # print(h)
        h = int(h / 360.0 * 4095.0)
        self.write(h)
        # print(h)

class LEDBar(JellyModule):
    pass

class J_Buzzer(JellyModule):
    # NOTE = [
    #     'LC', 'LC#', 'LD', 'LD#', 'LE', 'LF', 'LF#', 'LG', 'LG#', 'LA', 'LA#', 'LB',
    #     'MC', 'MC#', 'MD', 'MD#', 'ME', 'MF', 'MF#', 'MG', 'MG#', 'MA', 'MA#', 'MB',
    #     'HC', 'HC#', 'HD', 'HD#', 'HE', 'HF', 'HF#', 'HG', 'HG#', 'HA', 'HA#', 'HB',
    # ]
    NOTE = [
        'Low F', 'Low F#', 'Low G', 'Low G#', 'Low A', 'Low A#', 'Low B',
        'Middle C', 'Middle C#', 'Middle D', 'Middle D#', 'Middle E', 'Middle F', 'Middle F#', 'Middle G', 'Middle G#', 'Middle A', 'Middle A#', 'Middle B',
        'High C', 'High C#', 'High D', 'High D#', 'High E', 'High F', 'High F#',
    ]
    import math

    def note(self, n):
        n = self.NOTE.index(n)
        value = int((n + 1) / 26.0 * 4095)
        self.write(value)
        # return f 

    def off(self):
        self.write(0)

class Motor(JellyModule):
    def speed(self, value):
        self.write(value)

class J_Servo(JellyModule):
     def angle(self, angle):
         # result = int(angl / 180 * self.period)
         result = int((angle + 90) / 180.0 * 4095.0)
         self.write(result)

# def test_input():
#     import time
#     result = Jelly("IN2")
#     while(True):
#         print(result.read())
#         time.sleep(0.5)

# def test_output():
#     import time
#     result = Jelly("OUT2")
#     # result.write(2047)
#     while(True):
#         for i in range(0, 4095, 1):
#             result.write(i)
#             print(i)
#             time.sleep(1/4095)
#         time.sleep(1)
#         for i in range(4095, 0, -10):
#             result.write(i)
#             print(i)
#             time.sleep(1/4095)
#         time.sleep(1)

# def test_rgb():
#         a = DistanceSensor(Jelly('IN0'))
#         print(a.distance())
if __name__ == '__main__':
    import time
    while 1:
        test_rgb()
        time.sleep(0.5)
