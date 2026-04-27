import time
code = []

def hc595_shift(sdi, rclk, srclk, dat): # Shift the data to 74HC595
    for bit in range(0, 8):
        if (0x80 & (dat << bit)) == 1:
            sdi.high()
        else:
            sdi.low()
        srclk.high()
        time.sleep(0.001)
        srclk.low()

def display(sdi, rclk, srclk, value):
    global code
    code = value
    for i in range(0, 8):
        hc595_shift(sdi, rclk, srclk, code[i])
        hc595_shift(sdi, rclk, srclk, 0x80>>i)
        rclk.high()
        rclk.low()

def display_addspot(sdi, rclk, srclk, x, y):
    global code
    code[x-1] = code[x-1] & (0x7F >> (y-1))
    display(sdi, rclk, srclk, code)     

def display_addrow(sdi, rclk, srclk, num, row):
    global code
    if row == 'X':
        for i in range(8):
            code[i] = code[i] & (0x7F >> (num-1))
    if row == 'Y':
        code[num] = code[num] & 0x0
    display(sdi, rclk, srclk, code)

