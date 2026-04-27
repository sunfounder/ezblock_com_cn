import argparse
import struct
import sys
import time

import bluetooth
from bluetooth.ble import DiscoveryService, GATTRequester



class Driver(object):
    handle = 0x16
    commands = {
        'press' : '\x57\x01\x00',
        'on'    : '\x57\x01\x01',
        'off'   : '\x57\x01\x02',
    }

    # def __init__(self, bt_interface=None, timeout_secs=None):
    #     self.bt_interface = bt_interface
    #     self.timeout_secs = timeout_secs if timeout_secs else 5
    #     self.req = None


    def connect(self, device, bt_interface=None, timeout_secs=None):
        self.bt_interface = bt_interface
        self.timeout_secs = timeout_secs if timeout_secs else 5
        self.req = None
        self.device = device
        if self.bt_interface:
            self.req = GATTRequester(self.device, False, self.bt_interface)
        else:
            self.req = GATTRequester(self.device, False)

        self.req.connect(True, 'random')
        connect_start_time = time.time()
        while not self.req.is_connected():
            if time.time() - connect_start_time >= self.timeout_secs:
                raise RuntimeError('Connection to {} timed out after {} seconds'
                                   .format(self.device, self.timeout_secs))

    def run_command(self, command):
        return self.req.write_by_handle(self.handle, self.commands[command])




class SwitchBot(Driver):

    def __init__(self, mac):
        self.mac = mac

    def write(self, cmd):
        self.cmd = cmd
        self.connect(self.mac)
        self.run_command(self.cmd)
        print("1")


def test():
    Switchbot("FF:CD:6B:47:09:80", "press").write()

if __name__ == '__main__':
    test()