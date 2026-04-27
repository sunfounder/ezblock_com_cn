#！/usr/bin/env/ python3
from ezblock import *
import time
import math

PERIOD = 4095
PRESCALER = 10
MIN_PW = 500
MAX_PW = 2500
DS18B20 = ''

def LEDModule_set_value(pin, value):
	if isinstance(pin, Pin):
		pin.value(value)
	elif isinstance(pin, PWM):
		value = 4095 - value
		pin.pulse_width(value)

def RGBLED_set_value(Rpin, Gpin, Bpin, color, common=1):
	# Rpin = PWM(Rpin)
	# Gpin = PWM(Gpin)
	# Bpin = PWM(Bpin)
	color = color.strip("#")
	col = int(color, 16)
	R_val = (col & 0xff0000) >> 16
	G_val = (col & 0x00ff00) >> 8
	B_val = (col & 0x0000ff) >> 0
	val = [R_val, G_val, B_val]

	for i in range(0, 3):
		val[i] = val[i]/255.0 * 4095.0 # 0-255 map 0-4095
	if common == 1: # common anode 
		R_val = 4095-val[0]
		G_val = 4095-val[1]
		B_val = 4095-val[2]
	
	Rpin.pulse_width(R_val)
	Gpin.pulse_width(G_val)
	Bpin.pulse_width(B_val)

def Button_get_value(pin):
	# pin = Pin(pin)
	value = pin.value()
	# if value == 1:
	# 	value = 0
	# else:
	# 	value = 1
	return value

def Buzzer_play(pin, note, beat):
	# pwm = PWM(pin)
	pin.freq(note)
	pin.pulse_width_percentage(50)
	delay(beat)
	pin.pulse_width_percentage(0)

def TiltSwitch_get_value(pin):
	# pin = Pin(pin)
	value = pin.value()
	return value

def MoistureSensor_get_value(pin):
	# adc = ADC(pin)
	value = pin.read()
	return value

def Potentiometer_get_value(pin):
	# adc = ADC(pin)
	value = pin.read()
	return value

def UltrasonicSensor_get_value( trig, echo, timeout=0.02):
	# trig = Pin(trig)
	# echo = Pin(echo)
	trig.low()
	time.sleep(0.01)
	trig.high()
	time.sleep(0.00001)
	trig.low()
	pulse_end = 0
	pulse_start = 0
	timeout_start = time.time()
	while echo.value()==0:
		pulse_start = time.time()
		if pulse_start - timeout_start > timeout:
			return -1
	while echo.value()==1:
		pulse_end = time.time()
		if pulse_end - timeout_start > timeout:
			return -1
	during = pulse_end - pulse_start
	return during * 340 / 2 * 100

def GasSensor_get_value(pin):
	# adc = ADC(pin)
	value = pin.read()
	return value

def SoundSensor_get_value(pin):
	# adc = ADC(pin)
	value_list = []
	for i in range(0, 50):
		value = pin.read()
		value_list.append(value)
	value = sum(value_list)/50.0
	return value

def Photoresistor_get_value(pin):
	# adc = ADC(pin)
	value = pin.read()
	return value

def VibrationSwitch_get_value(pin):
	# pin = Pin(pin)
	value = pin.value()
	return value


def Joystick_get_value(Xpin, Ypin, Btpin, pin_select):
	array = [Xpin, Ypin, Btpin]
	pin = array[pin_select]
	if pin_select == 2:
		# pin = Pin(pin)
		value = pin.value()
	else:
		# adc = ADC(pin)
		value = pin.read()
	return value


def Joystick_get_status(X, Y, Bt):
	# X = ADC(Xpin)
	# Y = ADC(Ypin)
	# Bt = Pin(Btpin)
	state = ['home', 'up', 'down', 'left', 'right', 'pressed']
	i = 0
	if Y.read() <= 1024:
		i = 1       #up
	elif Y.read() >= 3072:
		i = 2       #down
	elif X.read() <= 1024:
		i = 3       #right
	elif X.read() >= 3072:
		i = 4       #left
	elif Bt.value() == 0:
		i = 5       # Button pressed
	if Y.read() > 1024 and Y.read() <3072 and \
		X.read() >1024 and X.read() <3072 and \
		Bt.value() == 1:
		i = 0
	return state[i]

def DS18B20_get_value(unit=1):
	import os
	# unit=0:  Fahrenheit
	# unit=1:  degree Celsius
	for i in os.listdir('/sys/bus/w1/devices'):
		if i.startswith('28-'):
			DS18B20 = i
	location = '/sys/bus/w1/devices/' + DS18B20 + '/w1_slave'
	with open(location) as f:
		text = f.read()
	secondline = text.split("\n")[1]
	temperaturedata = secondline.split(" ")[9]
	temperature = float(temperaturedata[2:])
	temperature = temperature / 1000
	if unit == 0:
		temperature = 32 + temperature*1.8
	return temperature

def ADXL345_get_value(busnum=-1, debug=False):  
	i2c = I2C()
	ADXL345_ADDRESS          = 0x53 
	ADXL345_REG_DEVID        = 0x14 # Device ID
	ADXL345_REG_DATA_X       = 0x32 # X-axis data 0 (6 bytes for X/Y/Z)
	ADXL345_REG_DATA_Y       = 0x34 # X-axis data 0 (6 bytes for X/Y/Z)
	ADXL345_REG_DATA_Z       = 0x36 # X-axis data 0 (6 bytes for X/Y/Z)
	ADXL345_REG_POWER_CTL    = 0x2D # Power-saving features control

	result = i2c.recv(ADXL345_ADDRESS, ADXL345_REG_DEVID)
	send = (0x08<< 8) + ADXL345_REG_POWER_CTL
	if result:
		i2c.send( send, ADXL345_ADDRESS)
	raw_X = i2c.mem_read(2, ADXL345_ADDRESS, ADXL345_REG_DATA_X)
	raw_Y = i2c.mem_read(2, ADXL345_ADDRESS, ADXL345_REG_DATA_Y)
	raw_Z = i2c.mem_read(2, ADXL345_ADDRESS, ADXL345_REG_DATA_Z)
	raw = [raw_X, raw_Y, raw_Z]
	value = []
	for i in range(0, 3):
		if raw[i][1]>>7 == 1:
			raw[i][1] = -((((raw[i][1]^128)^127)+1))
		g = raw[i][1]<< 8 | raw[i][0]
		value.append(g)
	for i in range(0, 3):
		value[i] = value[i] /256.0
	return value[direction]

def Servo_set_value(pin, angle):
	# pin = PWM(pin)
	if angle < -90:
		angle = -90
	if angle > 90:
		angle = 90
	High_level_time = map(angle, -90, 90, MIN_PW, MAX_PW)
	pwr =  High_level_time / 20000
	value = int(pwr*4095)
	pin.pulse_width(value)
	
def TouchSwitch_get_value(pin):
	# pin = Pin(pin)
	value = pin.value()
	return value

def test():
	while True:
		value  = ADXL345_get_value()
		print(value) 
		time.sleep(1)

if __name__ == "__main__":
	test() 