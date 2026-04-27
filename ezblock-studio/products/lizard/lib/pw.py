from leaf import Timer
from leaf import Pin
class PWM(object):
 PERIOD=4095
 _period=PERIOD
 PINS=[None,"D0","D1","D2","D3","D6","D7","A8","A9","A10","A11","A12","A13"]
 def __init__(self,pin_list):
  self.pin_list=pin_list
  self.pin_obj_list=[]
  self._pwl=[]
  for pin in pin_list:
   self.pin_obj_list.append(Pin(self.PINS[pin],Pin.OUT_PP))
   self._pwl.append(300)
  self.pin=self.pin_obj_list[0]
  self.tick_count=0
  self.tim=Timer(2)
  self.tim.init(prescaler=410,period=4095)
  self.tim.callback(self.tick)
  self.freq(50)
  self._counter=True
  self._pulse_width=self._pwl[0]
 def tick(self,t):
  self._counter=not self._counter
  if self._counter:
   self.pin.high()
   self.tim.period(self.PERIOD-self._pulse_width)
   self.tick_count+=1
   if self.tick_count==len(self._pwl):
    self.tick_count=0
   self._pulse_width=self._pwl[self.tick_count]
  else:
   self.pin.low()
   self.tim.period(self._pulse_width)
   self.pin=self.pin_obj_list[self.tick_count]
 def freq(self,f):
  self._freq=f
  _p=int(84000000/f/4095)
  self.tim.prescaler(_p)
 def pulse_width_list(self,pw):
  self._pwl=pw
 def pulse_width(self,chn,pw):
  chn_num=self.pin_list.index(chn)
  self._pwl[chn_num]=pw
 def pulse_width_all(self,v):
  self._pwl=[]
  for pin in self.pin_obj_list:
   self._pwl.append(v)
 def angle(self,chn,a):
  Th=a*2000/180+500
  pw=int(Th*self._freq*self.PERIOD/1000000)
  self.pulse_width(chn,pw)
 def angle_list(self,angle_list):
  l=[]
  for a in angle_list:
   Th=a*2000/180+500
   pw=int(Th*self._freq*self.PERIOD/1000000)
   l.append(pw)
  self.pulse_width_list(l)
 def angle_all(self,a):
  Th=a*2000/180+500
  pw=int(Th*self._freq*self.PERIOD/1000000)
  self.pulse_width_all(pw)