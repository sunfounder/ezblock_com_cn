import smbus
import math
import time

class MPU6050():
    # Power management registers
    POWER_MGMT_1 = 0x6b
    POWER_MGMT_2 = 0x6c

    def __init__(self, address=0x68):
        self.bus = smbus.SMBus(1) # or bus = smbus.SMBus(1) for Revision 2 boards
        self.address = address
        # Now wake the 6050 up as it starts in sleep mode
        self.bus.write_byte_data(self.address, self.POWER_MGMT_1, 0)


    def read_byte(self, adr):
        return self.bus.read_byte_data(self.address, adr)

    def read_word(self, adr):
        high = self.bus.read_byte_data(self.address, adr)
        low = self.bus.read_byte_data(self.address, adr+1)
        val = (high << 8) + low
        return val

    def read_word_2c(self, adr):
        val = self.read_word(adr)
        if (val >= 0x8000):
            return -((65535 - val) + 1)
        else:
            return val

    def dist(self, a, b):
        return math.sqrt((a*a)+(b*b))

    def get_y_rotation(self, x, y, z):
        radians = math.atan2(x, self.dist(y,z))
        return -math.degrees(radians)

    def get_x_rotation(self, x, y, z):
        radians = math.atan2(y, self.dist(x,z))
        return math.degrees(radians)

        
    def get_angle(self, dr):
        accel_xout = self.read_word_2c(0x3b)
        accel_yout = self.read_word_2c(0x3d)
        accel_zout = self.read_word_2c(0x3f)

        accel_xout_scaled = accel_xout / 16384.0
        accel_yout_scaled = accel_yout / 16384.0
        accel_zout_scaled = accel_zout / 16384.0
        angle_x = self.get_x_rotation(accel_xout_scaled, accel_yout_scaled, accel_zout_scaled)
        angle_y=self.get_y_rotation(accel_xout_scaled, accel_yout_scaled, accel_zout_scaled)
        if dr == 'X':
            return angle_x
        elif dr == 'Y':
            return angle_y
        
    def get_accel(self, dr):
        accel_xout = self.read_word_2c(0x3b)
        accel_yout = self.read_word_2c(0x3d)
        accel_zout = self.read_word_2c(0x3f)
        accel_xout_scaled = accel_xout / 16384.0
        accel_yout_scaled = accel_yout / 16384.0
        accel_zout_scaled = accel_zout / 16384.0
        if dr == 'X':
            return accel_xout_scaled
        elif dr == 'Y':
            return accel_yout_scaled
        elif dr == 'Z':
            return accel_zout_scaled
        
    