### sensorKit文件
`sensorKit`内容是由JavaScript对象的格式来进行定义的,包含`SensorKit`对象的名字及id,并以硬件的各个模块进行分类,配置每个硬件模块。

####name
配置`sensorKit.js`文件中的SensorKit对象名为`Sensor Kit`

####id
配置`sensorKit.js`文件中的SensorKit对象名为`sensorkit`

####modules
每一个`sensorKit.js`文件下都会有`modules`这么一个变量，我们把它叫做一个对象，`modules`下面都是都是用`kit`的名称来命名的一个对象，我们以一个LED的kit为例：
```javascript
"dual-color-led": {
            'id': 0,//配置routing中LED模块的id
            'name': 'Dual Color LED',// 配置routing中LED模块的名字
            'blocks': ['<block type = "sensorkit_dual_color_led_set_value"><value name="value"><shadow type="sensorkit_pin_switch"></shadow></value></block >'],//配置routing中LED模块对应的块
            'img': 'dual-color-led.webp',//配置routing中LED模块的图片
            'simulator': { 
                "type": "digitalOutput",
                "onHigh": "dual-color-led_on.webp",
                "onLow": "dual-color-led_off.webp"
            },
            'pins': {//配置LED模块的pin脚
                "R": {
                    'id': 0,//配置LED模块R脚的id为0
                    'name': 'R',//配置LED模块R脚的名字为R
                    'x': 0.3,//配置LED模块R脚的x轴坐标为0.3
                    'y': 1,//配置LED模块R脚的y轴坐标为1
                    'isSource': true,//配置LED模块的R脚为起点(如果是起点则可以与其它pin脚连接，否则不能连接)
                    'property': ['din'],//配置LED模块的R口为输入口
                    'type': 'digital',//配置LED模块R脚类型为数字类型
                },
                "G": {
                    'id': 1,
                    'name': 'G',
                    'x': 0.7,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital',
                },
                "GND": {
                    'id': 2,
                    'name': 'GND',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['GND'],
                    'type': 'ground',//配置LED模块的GND脚类型为接地类型
                }
            }
        },
```
#### Lessons
每一个sensorKit模块的对象中都有一个pins的属性，当前sensorKit的pins属性可分为五种type(类型)
 - power
 - pwm
 - digital
 - analog
 - ground