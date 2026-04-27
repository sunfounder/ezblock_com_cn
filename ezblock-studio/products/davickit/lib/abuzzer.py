import time

MORSECODE = {
        'A':'01', 'B':'1000', 'C':'1010', 'D':'100', 'E':'0', 'F':'0010', 'G':'110',
        'H':'0000', 'I':'00', 'J':'0111', 'K':'101', 'L':'0100', 'M':'11', 'N':'10',
        'O':'111', 'P':'0110', 'Q':'1101', 'R':'010', 'S':'000', 'T':'1',
        'U':'001', 'V':'0001', 'W':'011', 'X':'1001', 'Y':'1011', 'Z':'1100',
        '1':'01111', '2':'00111', '3':'00011', '4':'00001', '5':'00000',
        '6':'10000', '7':'11000', '8':'11100', '9':'11110', '0':'11111',
        '?':'001100', '/':'10010', ',':'110011', '.':'010101', ';':'101010',
        '!':'101011', '@':'011010', ':':'111000',
        }
    
def abuzzer_on(beeppin):
    beeppin.on()

def abuzzer_off(beeppin):
    beeppin.off()
    
def beep(beeppin, dt):
    abuzzer_on(beeppin)
    time.sleep(dt)
    abuzzer_off(beeppin)
    time.sleep(dt)
    
def play_morse(beeppin, code, pause):
    if not isinstance(code, str):
        code = str(code)
    for letter in code:
        for tap in MORSECODE[letter]:
            if tap == '0':
                beep(beeppin, pause/2)
            if tap == '1':
                beep(beeppin, pause)
    time.sleep(pause)
  
def pbuzzer_on(buzzer, value):
    buzzer.freq(value)

def pbuzzer_off(buzzer):
    buzzer.pulse_width_percent(0)

