
def led_on(pin):
    pin.on()

def led_off(pin):
    pin.off()
    
def map(x, in_min, in_max, out_min, out_max):
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    
def rgb_setcolor(pin1, pin2, pin3, color):
    # Devide colors from 'color' veriable
    R_val = (color & 0xFF0000) >> 16
    G_val = (color & 0x00FF00) >> 8
    B_val = (color & 0x0000FF) >> 0  
    # Map color value from 0~255 to 0~100
    R_val = map(R_val, 0, 255, 0, 100)
    G_val = map(G_val, 0, 255, 0, 100)
    B_val = map(B_val, 0, 255, 0, 100)
    pin1.pulse_width_percent(R_val)
    pin2.pulse_width_percent(G_val)
    pin3.pulse_width_percent(B_val)

def rgb_off(pin1, pin2, pin3):
    pin1.pulse_width_percent(0)
    pin2.pulse_width_percent(0)
    pin3.pulse_width_percent(0)

def ledbar_string(pins, str):
    i = 9
    for j in str:
        if j == 1:
            pins[i].on()
        else:
            pins[i].off()
    i -= 1

def ledbar_num(pins, num):
    for i in range(num):
        pins[i].on()

def ledbar_off(pins):
    for i in pins:
        pins[i].off()

