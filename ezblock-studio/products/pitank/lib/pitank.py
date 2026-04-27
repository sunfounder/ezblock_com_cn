from ezblock import Servo, PWM, Pin, RGB_Matrix, Color
import time


PERIOD = 4095
PRESCALER = 10

pan_pin = Servo(PWM('P1'))
tilt_pin = Servo(PWM('P0'))
left_rear_pwm_pin = PWM("P13")
right_rear_pwm_pin = PWM("P12")
left_rear_dir_pin = Pin("D4")
right_rear_dir_pin = Pin("D5")
water_gun_pin = PWM("P6")
head_lamp_pin = PWM("P7")
rr = RGB_Matrix(0X74)
head_lamp_pin.freq(1000)


Servo_dir_flag = 1
dir_cal_value = 0
pan_cal_value = 0
tilt_cal_value = 0
motor_direction_pins = [left_rear_dir_pin, right_rear_dir_pin]
motor_speed_pins = [left_rear_pwm_pin, right_rear_pwm_pin]
cali_dir_value = [1, -1]
cali_speed_value = [0, 0]
#初始化PWM引脚
for pin in motor_speed_pins:
    pin.period(PERIOD)
    pin.prescaler(PRESCALER)

def set_motor_speed(motor, speed):
    global cali_speed_value,cali_dir_value
    motor -= 1
    if speed >= 0:
        direction = 1 * cali_dir_value[motor]
    elif speed < 0:
        direction = -1 * cali_dir_value[motor]
    speed = abs(speed)
    if speed != 0:
        speed = int(speed /2 ) + 50
    speed = speed - cali_speed_value[motor]
    if direction < 0:
        motor_direction_pins[motor].high()
        motor_speed_pins[motor].pulse_width_percent(speed)
    else:
        motor_direction_pins[motor].low()
        motor_speed_pins[motor].pulse_width_percent(speed)

def motor_speed_calibration(value):
    global cali_speed_value,cali_dir_value
    cali_speed_value = value
    if value < 0:
        cali_speed_value[0] = 0
        cali_speed_value[1] = abs(cali_speed_value)
    else:
        cali_speed_value[0] = abs(cali_speed_value)
        cali_speed_value[1] = 0

def motor_direction_calibration(motor, value):
    # 0: positive direction
    # 1:negative direction
    global cali_dir_value
    motor -= 1
    if value == 1:
        cali_dir_value[motor] = -1*cali_dir_value[motor]
        
def pan_angle_calibration(value):
    global pan_cal_value
    pan_cal_value = value
    pan_pin.angle(pan_cal_value)

def tilt_angle_calibration(value):
    global tilt_cal_value
    tilt_cal_value = value
    tilt_pin.angle(tilt_cal_value)

def set_pan_angle(value):
    global pan_cal_value
    pan_pin.angle(value+pan_cal_value)

def set_tilt_angle(value):
    global tilt_cal_value
    tilt_pin.angle(value+tilt_cal_value)
    
def set_power(speed):
    set_motor_speed(1, -1*speed)
    set_motor_speed(2, -1*speed) 

def backward(speed):
    set_motor_speed(1, speed)
    set_motor_speed(2, speed)

def forward(speed):
    set_motor_speed(1, speed)
    set_motor_speed(2, speed)

def move(dir, speed):
    if dir == 'forward':
        set_motor_speed(1, -1*speed)
        set_motor_speed(2, -1*speed)
    elif dir == 'backward':
        set_motor_speed(1, speed)
        set_motor_speed(2, speed)
    elif dir == 'left':
        set_motor_speed(1, -1*speed)
        set_motor_speed(2, speed)
    elif dir == 'right':
        set_motor_speed(1, speed)
        set_motor_speed(2, -1*speed)

def stop():
    set_motor_speed(1, 0)
    set_motor_speed(2, 0)

def gun_shoot(speed):
    water_gun_pin.pulse_width_percent(speed)
    
def set_head_lamp(value):
    
    head_lamp_pin.pulse_width_percent(value)

def set_rear_light(data):
    c = Color()
    image = []
    if data[0][0] == "#":
        for rgb in data:
            c.color(rgb)
            red = c.get_from("red", rgb)
            green = c.get_from("green", rgb)
            blue = c.get_from("blue", rgb)
            image.append([red, green, blue])
    else: 
        image = data
    rr.image(image)
    