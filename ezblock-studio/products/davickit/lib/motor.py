
import time

def motor_rotate(pin1, pin2, pin3, dir):
    if dir == 1:
        # Set direction
        pin1.high()
        pin2.low()
        # Enable the motor
        pin3.high()
    # Counterclockwise
    elif dir == -1:
        # Set direction
        pin1.low()
        pin2.high()
        # Enable the motor
        pin3.high()

def motor_stop(pin1, pin2, pin3):
    pin3.low()

STEPSPEED = 60/15/2048

def spmotor_rotate(pins, dir):
    if dir == 1:
        for j in range(4):
            for i in range(4):
                if (0x99>>j & (0x08>>i)) == 1:
                    pins[i].high()
                else:
                    pins[i].low()
            time.sleep(STEPSPEED)
    elif dir == -1:
        for j in range(4):
            for i in range(4):
                if (0x99<<j & (0x08>>i)) == 1:
                    pins[i].high()
                else:
                    pins[i].low()
            time.sleep(STEPSPEED)

def spmotor_stop(pins):
    for i in pins:
        i.low()
    
                
 