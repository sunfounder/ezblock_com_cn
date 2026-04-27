
import time

def relay_on(pin):
    pin.high()

def relay_off(pin):
    pin.low()

def button_getvalue(pin):
    return pin.value()

def tilt_getvalue(pin):
    pin.init(pin.IN, pin.PUD_UP)
    return pin.value()

def map(value, inMin, inMax, outMin, outMax):
    return (outMax - outMin) * (value - inMin) / (inMax - inMin) + outMin

SERVO_MIN_PULSE = 500
SERVO_MAX_PULSE = 2500
    
def setangle(pin, angle):
    angle = max(0, min(180, angle))
    pulse_width = map(angle, 0, 180, SERVO_MIN_PULSE, SERVO_MAX_PULSE)
    pwm = map(pulse_width, 0, 20000, 0, 100)
    pin.pulse_width_percent(pwm)  #map the angle to duty cycle and output it

def servo_stop(pin):
    pin.pulse_width_percent(0)

def get_distance(trig, echo):
    trig.low()
    time.sleep(0.000002)
    trig.high()
    time.sleep(0.00001)
    trig.low()
    while echo.value() == 0:
        # a = 0
        pass
    time1 = time.time()
    while echo.value() == 1:
        # a = 1
        pass
    time2 = time.time()

    during = time2 - time1
    return during * 340 / 2 * 100
   
 


    