
import math

def pm_getvalue(pin):
    return pin.read()

def js_getvalue(pinx, piny, btn, dir):
    if dir == 'X':
        return pinx.read()
    elif dir == 'Y':
        return piny.read()
    elif dir == 'BTN':
        return btn.value()

def ph_getvalue(pin):
    return pin.read()

def th_getvalue(pin):
    analogVal = pin.read()
    Vr = 5 * float(analogVal) / 255
    Rt = 10000 * Vr / (5 - Vr)
    temp = 1/(((math.log(Rt / 10000)) / 3950) + (1 / (273.15+25)))
    Cel = temp - 273.15
    return Cel

