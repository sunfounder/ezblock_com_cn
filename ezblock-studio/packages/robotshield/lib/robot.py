from leaf import Timer
from leaf import Pin
from time import sleep_ms


class PWM(object):
    PERIOD = 4095
    _period = PERIOD
    PINS = [None, "D0","D1","D2","D3","D6","D7","A8","A9","A10","A11","A12","A13"]

    def __init__(self, pin_list):
        self.pin_list = pin_list
        self.pin_obj_list = []
        self._pulse_width_list = []
        for pin in pin_list:
           self.pin_obj_list.append(Pin(self.PINS[pin], Pin.OUT_PP))
           self._pulse_width_list.append(300)

        self.pin = self.pin_obj_list[0]
        self.tick_count = 0
        self.tim = Timer(2)
        self.tim.init(prescaler=410, period=4095)
        self.tim.callback(self.tick)
        # self.tim.init(prescaler=410, period=4095)
        self.freq(50)
        # __PRINT__(self.tim.prescaler())
        self._counter = True
        self._pulse_width = self._pulse_width_list[0]

    def tick(self, timer):
        
        self._counter = not self._counter
        if self._counter:
            self.pin.high()
            self.tim.period(self.PERIOD - self._pulse_width)
            self.tick_count += 1
            if self.tick_count == len(self._pulse_width_list):
                self.tick_count = 0
            self._pulse_width = self._pulse_width_list[self.tick_count]

        else:
            self.pin.low()
            self.tim.period(self._pulse_width)
            self.pin = self.pin_obj_list[self.tick_count]


    def freq(self, freq):
        self._freq = freq
        _prescaler = int(84000000/freq/4095)
        self.tim.prescaler(_prescaler)

    def pulse_width_list(self, pulse_width_list):
        self._pulse_width_list = pulse_width_list

    def pulse_width(self, chn, pulse_width):
        chn_num = self.pin_list.index(chn)
        self._pulse_width_list[chn_num] = pulse_width

    def pulse_width_all(self, value):
        self._pulse_width_list = []
        for pin in self.pin_obj_list:
            self._pulse_width_list.append(value)

    def angle(self, chn, angle):
        Th = angle * 2000 / 180 + 500
        pw = int(Th * self._freq * self.PERIOD / 1000000)
        self.pulse_width(chn, pw)

    def angle_list(self, angle_list):
        _pulse_width_list = []
        for angle in angle_list:
            Th = angle * 2000 / 180 + 500
            pw = int(Th * self._freq * self.PERIOD / 1000000)
            _pulse_width_list.append(pw)
        self.pulse_width_list(_pulse_width_list)

    def angle_all(self, angle):
        Th = angle * 2000 / 180 + 500
        pw = int(Th * self._freq * self.PERIOD / 1000000)
        self.pulse_width_all(pw)

class Robot(PWM):
    move_list = {}
    def __init__(self,pin_list):
        super().__init__(pin_list)
        self.pin_num = len(pin_list)
        self.origin_positions = self.new_list(90)
        self.offset = self.new_list(0)
        self.servo_positions = self.new_list(0)

    def new_list(self, default_value):
        _ = []
        for i in range(self.pin_num):
            _.append(default_value)
        return _

    def servo_write_all(self, angles):
        rel_angles = []  # ralative angle to home
        for i in range(self.pin_num):
            rel_angles.append(self.origin_positions[i] + angles[i] + self.offset[i])
        self.angle_list(rel_angles)

    def servo_move(self, targets, speed=50):
        '''
            calculate the max delta angle, multiply by 2 to define a max_step
            loop max_step times, every servo add/minus 1 when step reaches its adder_flag
        '''
        delta = []
        absdelta = []
        adder_flag = []
        max_step = 0

        for i in range(self.pin_num):
            value = targets[i] - self.servo_positions[i]
            delta.append(value)
            absdelta.append(abs(value))

        max_step = 2 * abs(max(absdelta))

        if max_step != 0:
            for i in range(self.pin_num):
                if abs(delta[i]) != 0:
                    adder_flag.append(int(max_step / abs(delta[i])))
                else:
                    adder_flag.append(0)

            for step in range(max_step):
                for j in range(self.pin_num):
                    if adder_flag[j] != 0:
                        if step % adder_flag[j] == 0:
                            if self.servo_positions[j] != targets[j]:
                                self.servo_positions[j] = int(self.servo_positions[j] + (delta[j] / abs(delta[j])))
                                self.servo_write_all(self.servo_positions)
                        sleep_ms(int(21-speed/(100/20)))

    def do_action(self,motion_name, step=1, speed=50):
        for i in range(step):
            for motion in self.move_list[motion_name]:
                self.servo_move(motion, speed)

    def set_offset(self,offset_list):
        self.offset = offset_list
        self.reset()


    def reset(self,):
        self.servo_positions = self.new_list(0)
        self.servo_write_all(self.servo_positions)

    def soft_reset(self,):
        self.servo_positions = self.new_list(0)
        self.servo_move(self.servo_positions)
