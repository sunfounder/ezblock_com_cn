from pw import PWM
from time import sleep_us
class Robot(PWM):
 move_list={}
 def __init__(self,pl):
  super().__init__(pl)
  self.pin_num=len(pl)
  self.origin_positions=self.new_list(90)
  self.offset=self.new_list(0)
  self.sp=self.new_list(0)
 def new_list(self,dv):
  _=[]
  for i in range(self.pin_num):
   _.append(dv)
  return _
 def servo_write_all(self,a):
  rel_angles=[]
  for i in range(self.pin_num):
   rel_angles.append(self.origin_positions[i]+a[i]+self.offset[i])
  self.angle_list(rel_angles)
 def servo_move(self,tg,sp=50):
  delta=[]
  absdelta=[]
  adder_flag=[]
  max_step=0
  for i in range(self.pin_num):
   value=tg[i]-self.sp[i]
   delta.append(value)
   absdelta.append(abs(value))
  max_step=2*abs(max(absdelta))
  if max_step!=0:
   for i in range(self.pin_num):
    if abs(delta[i])!=0:
     adder_flag.append(int(max_step/abs(delta[i])))
    else:
     adder_flag.append(0)
   for step in range(max_step):
    for j in range(self.pin_num):
     if adder_flag[j]!=0:
      if step%adder_flag[j]==0:
       if self.sp[j]!=tg[j]:
        self.sp[j]=int(self.sp[j]+(delta[j]/abs(delta[j])))
        self.servo_write_all(self.sp)
      sleep_us((101-sp)*10)
 def do_action(self,mn,st=1,sp=50):
  for i in range(st):
   for motion in self.move_list[mn]:
    self.servo_move(motion,sp)
 def set_offset(self,ol):
  self.offset=ol
  self.reset()
 def reset(self):
  self.sp=self.new_list(0)
  self.servo_write_all(self.sp)
 def soft_reset(self):
  self.sp=self.new_list(0)
  self.servo_move(self.sp)