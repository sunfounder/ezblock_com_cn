
import time

SEGCODE = [0x3f,0x06,0x5b,0x4f,0x66,0x6d,0x7d,0x07,0x7f,0x6f] #cathode
SEGNUM = [0xc0, 0xf9, 0xa4, 0xb0, 0x99, 0x92, 0x82, 0xf8, 0x80, 0x90] #anode

def hc595_shift(sdi, rclk, srclk, dat): # Shift the data to 74HC595
    for bit in range(0, 8):
        if (0x80 & (dat << bit)) == 1:
            sdi.high()
        else:
            sdi.low()
        srclk.high()
        time.sleep(0.001)
        srclk.low()
    rclk.hihg()
    time.sleep(0.001)
    rclk.low()

def seg_display(sdi, rclk, srclk, num):
    num =min(9,max(0,num))
    hc595_shift(sdi, rclk, srclk, SEGCODE[num])

  

def pickDigit(pins, digit):
    for i in pins:
        i.high()
    pins[digit].low()

def fseg_display(sdi, rclk, srclk, pins, num):
    num =min(9999,max(0,num))
    pickDigit(pins, 0)  
    hc595_shift(sdi, rclk, srclk,SEGNUM[num % 10])
    pickDigit(pins, 1)
    hc595_shift(sdi, rclk, srclk,SEGNUM[num % 100//10])
    pickDigit(pins, 2)
    hc595_shift(sdi, rclk, srclk,SEGNUM[num % 1000//100])
    pickDigit(pins, 3)
    hc595_shift(sdi, rclk, srclk,SEGNUM[num % 10000//1000])

def fseg_cleardisplay(sdi, rclk, srclk, pins):
    for _ in range(8):
        sdi.high()
        srclk.high()
        time.sleep(0.001)
        srclk.low()
    rclk.high()
    time.sleep(0.001)
    rclk.low()  
    
