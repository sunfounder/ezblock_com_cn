var Reference = {};


$(function () {
    Reference.show();
})
// 页面ID
Reference.id = "reference"
//  Video.player = '';

// // 视频教程数据
// Reference.link = [
//     { sequence: 'First lesson', describe: 'Demonstration text', link: 'https://www.youtube.com/embed/-T0ylQ7CmUU' },
//     { sequence: 'second lesson', describe: 'introduction of tools', link: 'xxxxx' },
//     { sequence: 'First lesson', describe: 'Demonstration text', link: 'https://www.youtube.com/embed/-T0ylQ7CmUU' },
//     { sequence: 'second lesson', describe: 'introduction of tools', link: 'https://www.youtube.com/embed/-T0ylQ7CmUU' }
// ]

// video窗口的显示
Reference.show = function () {
    var parser = new HyperDown();

    // console.log(parser)
    // var getStarted = API.getMarkdown('./ezblock2.0-gettingstart.md/ezblock2.0-gettingstart.md');
    // var getStarted_html = parser.makeHtml(getStarted);
    // console.log(getStarted_html);
    // $('.getStartedMd').html(getStarted_html);
    function getHashParamters() {
        var arr = (location.href || "").replace(/^\#/, '').split("?");
        // var arr = location.href
        // console.log(arr)
        if (arr.length < 2) {
            return true
        } else {
            arr = arr[1].split("=")
            return arr[1]
        }

    }
    var embeded = getHashParamters();
    if (embeded === "false") {
        $(".referenceHead").hide();
    } else {
        $(".referenceHead").show();
    }

    var Ezblock_apiDoc = API.getMarkdown('./reference/Ezblock.md');
    var Methods_apiDoc = API.getMarkdown('./reference/Methods.md');

    var Ezblock_html = parser.makeHtml(Ezblock_apiDoc);
    var Methods_html = parser.makeHtml(Methods_apiDoc);

    $('.ezblock_md .about-cont').html(Ezblock_html);
    $('.methods_md .about-cont').html(Methods_html);

    var Pin_apiDoc = API.getMarkdown('./reference/Pin.md');
    var ADC_apiDoc = API.getMarkdown('./reference/ADC.md');
    var PWM_apiDoc = API.getMarkdown('./reference/PWM.md');
    var Servo_apiDoc = API.getMarkdown('./reference/Servo.md');
    var UART_apiDoc = API.getMarkdown('./reference/UART.md');
    var I2C_apiDoc = API.getMarkdown('./reference/I2C.md');
    var Remote_apiDoc = API.getMarkdown('./reference/Remote.md');
    var IOT_apiDoc = API.getMarkdown('./reference/IOT.md');
    var Music_apiDoc = API.getMarkdown('./reference/Music.md');
    var Color_apiDoc = API.getMarkdown('./reference/Color.md');
    var TTS_apiDoc = API.getMarkdown('./reference/TTS.md');
    var IRQ_apiDoc = API.getMarkdown('./reference/IRQ.md');
    var WiFi_apiDoc = API.getMarkdown('./reference/WiFi.md');
    var Taskmgr_apiDoc = API.getMarkdown('./reference/Taskmgr.md');
    var SendMail_apiDoc = API.getMarkdown('./reference/SendMail.md');
    var Ultrasonic_apiDoc = API.getMarkdown('./reference/Ultrasonic.md');
    var DS18X20_apiDoc = API.getMarkdown('./reference/DS18X20.md');
    var ADXL345_apiDoc = API.getMarkdown('./reference/ADXL345.md');
    var RGB_LED_apiDoc = API.getMarkdown('./reference/RGB_LED.md');
    var Buzzer_apiDoc = API.getMarkdown('./reference/Buzzer.md');
    var Sound_apiDoc = API.getMarkdown('./reference/Sound.md');
    var Joystick_apiDoc = API.getMarkdown('./reference/Joystick.md');
    var LED_apiDoc = API.getMarkdown('./reference/LED.md');
    var Switch_apiDoc = API.getMarkdown('./reference/Switch.md');
    var BLE_apiDoc = API.getMarkdown('./reference/BLE.md');



    var Pin_html = parser.makeHtml(Pin_apiDoc);
    var ADC_html = parser.makeHtml(ADC_apiDoc);
    var PWM_html = parser.makeHtml(PWM_apiDoc);
    var Servo_html = parser.makeHtml(Servo_apiDoc);
    var UART_html = parser.makeHtml(UART_apiDoc);
    var I2C_html = parser.makeHtml(I2C_apiDoc);
    var Remote_html = parser.makeHtml(Remote_apiDoc);
    var IOT_html = parser.makeHtml(IOT_apiDoc);
    var Music_html = parser.makeHtml(Music_apiDoc);
    var Color_html = parser.makeHtml(Color_apiDoc);
    var TTS_html = parser.makeHtml(TTS_apiDoc);
    var IRQ_html = parser.makeHtml(IRQ_apiDoc);
    var WiFi_html = parser.makeHtml(WiFi_apiDoc);
    var Taskmgr_html = parser.makeHtml(Taskmgr_apiDoc);
    var SendMail_html = parser.makeHtml(SendMail_apiDoc);
    var Ultrasonic_html = parser.makeHtml(Ultrasonic_apiDoc);
    var EDS18X20_html = parser.makeHtml(DS18X20_apiDoc);
    var ADXL345_html = parser.makeHtml(ADXL345_apiDoc);
    var RGB_LED_html = parser.makeHtml(RGB_LED_apiDoc);
    var Buzzer_html = parser.makeHtml(Buzzer_apiDoc);
    var Sound_html = parser.makeHtml(Sound_apiDoc);
    var Joystick_html = parser.makeHtml(Joystick_apiDoc);
    var LED_html = parser.makeHtml(LED_apiDoc);
    var Switch_html = parser.makeHtml(Switch_apiDoc);
    var BLE_html = parser.makeHtml(BLE_apiDoc);



    $('.classes_md .about-cont .Pin div').html(Pin_html);
    $('.classes_md .about-cont .ADC div').html(ADC_html);
    $('.classes_md .about-cont .PWM div').html(PWM_html);
    $('.classes_md .about-cont .Servo div').html(Servo_html);
    $('.classes_md .about-cont .UART div').html(UART_html);
    $('.classes_md .about-cont .I2C div').html(I2C_html);
    $('.classes_md .about-cont .Remote div').html(Remote_html);
    $('.classes_md .about-cont .IOT div').html(IOT_html);
    $('.classes_md .about-cont .Music div').html(Music_html);
    $('.classes_md .about-cont .Color div').html(Color_html);
    $('.classes_md .about-cont .TTS div').html(TTS_html);
    $('.classes_md .about-cont .IRQ div').html(IRQ_html);
    $('.classes_md .about-cont .WiFi div').html(WiFi_html);
    $('.classes_md .about-cont .Taskmgr div').html(Taskmgr_html);
    $('.classes_md .about-cont .SendMail div').html(SendMail_html);
    $('.classes_md .about-cont .Ultrasonic div').html(Ultrasonic_html);
    $('.classes_md .about-cont .DS18X20 div').html(EDS18X20_html);
    $('.classes_md .about-cont .ADXL345 div').html(ADXL345_html);
    $('.classes_md .about-cont .RGB_LED div').html(RGB_LED_html);
    $('.classes_md .about-cont .Buzzer div').html(Buzzer_html);
    $('.classes_md .about-cont .Sound div').html(Sound_html);
    $('.classes_md .about-cont .Joystick div').html(Joystick_html);
    $('.classes_md .about-cont .LED div').html(LED_html);
    $('.classes_md .about-cont .Switch div').html(Switch_html);
    $('.classes_md .about-cont .BLE div').html(BLE_html);

    // $('.reference-content>ul>li>a').click(function () {
    //     console.log('xxx');
    //     var path = $(this).attr('href')
    //     var apiDocchild = API.getMarkdown(`./reference/${path}`);
    //     var htmlchild = parser.makeHtml(apiDocchild);
    //     $('.reference-content').html(htmlchild)
    //     return false;
    // })

}

