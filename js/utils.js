Utils = {};

$(function() {
    // 切换语言
    $('[set-lan]').each(function () {
        var me = $(this);
        var a = me.attr('set-lan').split(':');
        var p = a[0]; //文字放置位置
        var m = a[1]; //文字的标识

        //用户选择语言后保存在cookie中，这里读取cookie中的语言版本
        var lan = getCookie('lan');

        //选取语言文字
        switch (lan) {
            case 'cn':
                var t = cn[m]; //这里cn[m]中的cn是上面定义的json字符串的变量名，m是json中的键，用此方式读取到json中的值
                break;
            default:
                var t = en[m];
            // case 'en':
            //     var t = en[m];
            //     break;

        }

        //如果所选语言的json中没有此内容就选取其他语言显示
        if (t == undefined) t = cn[m];
        if (t == undefined) t = en[m];
        // if (t == undefined) t = hk[m];

        if (t == undefined) return true; //如果还是没有就跳出

        //文字放置位置有（html,val等，可以自己添加）
        switch (p) {
            case 'html':
                me.html(t);
                break;
            case 'val':
            case 'value':
                me.val(t);
                break;
            default:
                me.html(t);
        }

    });
})



//获取cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

// 设置cookie
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path = /";
}


 //获取文字
 Utils.get_lan = function(m) {
    //获取文字
    var lan = getCookie('lan'); //语言版本
    //选取语言文字
    switch (lan) {
        case 'cn':
            var t = cn[m];
            break;
        default:
            var t = en[m];
    }
    //如果所选语言的json中没有此内容就选取其他语言显示
    if (t == undefined) t = cn[m];
    if (t == undefined) t = en[m];

    if (t == undefined) t = m; //如果还是没有就返回他的标识

    return t;
}
// 清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}


// 用于美化alert弹窗
(function () {
    $.msgBox = {
        Alert: function (title, msg) {
            GenerateHtml('alert', title, msg);
            btnOk();
            btnNo();
        },
        Confirm: function (title, msg, callback, callbackno) {
            GenerateHtml('confirm', title, msg);
            btnOk(callback);
            btnNo(callbackno);
        }
    }
    //生成Html
    var GenerateHtml = function (type, title, msg) {
        var _html = '<div id="sw-con">';
        if (title) {
            _html += '<div id="sw-tit">' + title + '</div><a id="sw-close" href="javascript:;"><span class="icon-close"></span></a>';
        }
        _html += '<div id="sw-msg">' + msg + '</div><div id="sw-btn-box">';

        if (type == 'alert') {
            _html += '<a id="sw-btn-ok" href="javascript:;" set-lan="html:btn_comfirm"></a>';
        }
        if (type == 'confirm') {
            _html += '<a id="sw-btn-ok" href="javascript:;" set-lan="html:btn_comfirm"></a>';
            _html += '<a id="sw-btn-no" href="javascript:;" set-lan="html:btn_cancel"></a>';
        }
        _html += '</div></div>';
        //必须先将_html添加到body，再设置Css样式
        jQuery('body').append(_html);
        Utils.maskShow();
        GenerateCss();
    }

    //生成css
    var GenerateCss = function () {
        var _widht = document.documentElement.clientWidth; //屏幕宽
        var _height = document.documentElement.clientHeight; //屏幕高
        var boxWidth = jQuery('#sw-con').width();
        var boxHeight = jQuery('#sw-con').height();
        //让提示框居中
        jQuery('#sw-con').css({
            top: (_height - boxHeight) / 2 + 'px',
            left: (_widht - boxWidth) / 2 + 'px'
        });
    }
    //确定按钮事件
    var btnOk = function (callback) {
        jQuery('#sw-btn-ok').on('click', function () {
            jQuery('#sw-con').remove();
            Utils.maskHide();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    //取消按钮事件
    var btnNo = function (callback) {
        jQuery('#sw-btn-no, #sw-close').on('click', function () {
            jQuery('#sw-con').remove();
            Utils.maskHide();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
})();

Utils.alertMsg = function(txt) {
    $.msgBox.Alert(null, txt);
}

// 里面元素滚动到底外部容器不滚动
jQuery.fn.scrollUnique = function () {
    return jQuery(this).each(function () {
        var eventType = 'mousewheel';
        if (document.mozHidden !== undefined) {
            eventType = 'DOMMouseScroll';
        }
        jQuery(this).on(eventType, function (event) {
            // 一些数据
            var scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = this.clientHeight;

            var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

            if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                this.scrollTop = delta > 0 ? 0 : scrollHeight;
                // 向上滚 || 向下滚
                event.preventDefault();
            }
        });
    });
};

// 背景遮罩函数
Utils.maskShow = function() {
    if (!$('#mask').length) {
        $('body').append('<div id="mask"></div>');
    }
    $('#mask').show();
};

Utils.maskHide = function() {
    $('#mask').hide();
};

Utils.centerObj = function(obj) {
    var boxWidth = $(obj).outerWidth();
    var boxHeight = $(obj).outerHeight();
    $(obj).css({
        'margin-top': -boxHeight / 2 + 'px',
        'margin-left': -boxWidth / 2 + 'px'
    });
};


// 保存成功失败 status为suc或者fail，cont为提示的内容
Utils.tipSave = function(status, cont, times) {
    var time;
    if (status == 'suc') {
        icon = 'gou'
    }
    if (status == 'fail') {
        icon = 'fail'
    }
    times ? time = times : time = 2000
    if (!$('.user-tip').length) {
        $('body').append('<div class="user-tip">' + '<span class="icon icon-' + icon + '"></span>' + '<span class="text">' + cont + '</span>' + '</div>');
    } else {
        $('.user-tip').find('.icon').attr('class', 'icon icon-' + icon);
        $('.user-tip').find('.text').html(cont);
    }
    $('.user-tip').css({
        'margin-left': - $('.user-tip').outerWidth() / 2
    }).show();
    Utils.maskShow();
    if ($('.tip-num').length) {
        var tipTimer = setInterval(function () {
            if ($('.tip-num').html() == 1) {
                $('.user-tip').hide();
                Utils.maskHide();
                clearInterval(tipTimer);
            }
            $('.tip-num').html($('.tip-num').html() - 1);
        }, 1000);
    } else {
        setTimeout(function () {
            $('.user-tip').hide();
            Utils.maskHide();
        }, time);
    }
};


// radio选中效果
Utils.radioSelect = function(obj) {
    $(obj).removeClass('ico-radio-cur');
    $.each($(obj).find('input[type=radio]'), function (index) {
        if (!$(this).parents('label').find('.ico-radio').length) {
            $(this).wrap('<span class="ico-radio"></span>');
        }
        if ($(this).prop('checked')) {
            $(this).parents('span').addClass('ico-radio-cur')
        }
    });
};




//获取邮箱验证码
//倒计时
Utils.countTime = function(domObj, wait) {
    if (wait === 0) {
        domObj.html(Utils.get_lan('btn_getCode'));
        domObj.addClass('getVeriryCode');
        domObj.removeAttr('disabled');
    } else {
        domObj.html(wait + 's');
        domObj.removeClass('getVeriryCode');
        domObj.attr('disabled', 'disabled');
        wait--;
        setTimeout(function () {
            Utils.countTime(domObj, wait)
        }, 1000)
    }
}


var myDate = new Date();
//获取当前年
var year = myDate.getFullYear();
//获取当前月
var month = myDate.getMonth() + 1;
//获取当前日
var date = myDate.getDate();
var h = myDate.getHours();       //获取当前小时数(0-23)
var m = myDate.getMinutes();     //获取当前分钟数(0-59)
if (m < 10) m = '0' + m;
var s = myDate.getSeconds();
if (s < 10) s = '0' + s;
var now = year + '-' + month + "-" + date + " " + h + ':' + m + ":" + s;



(function ($) {
    // Constructor
    function FT(elem) {
        this.$textarea = $(elem);

        this._init();
    }

    FT.prototype = {
        _init: function () {
            var _this = this;
            this.$textarea.wrap('<div class="flex-text-wrap" />').before('<pre class="pre"><span /><br /></pre>');
            this.$span = this.$textarea.prev().find('span');
            this.$textarea.on('input propertychange keyup change', function () {
                _this._mirror();
            });
            $.valHooks.textarea = {
                get: function (elem) {
                    return elem.value.replace(/\r?\n/g, "\r\n");
                }
            };

            this._mirror();
        },
        _mirror: function () {
            this.$span.text(this.$textarea.val());
        }
    };

    $.fn.flexText = function () {
        return this.each(function () {
            if (!$.data(this, 'flexText')) {
                $.data(this, 'flexText', new FT(this));
            }
        });
    };
})(jQuery);



// 将时间戳转换成时间
Utils.formatTime = function(number, format) {
    var formatArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];
    var date = new Date(number);
    returnArr.push(date.getFullYear());
    returnArr.push(Utils.formatNumber(date.getMonth() + 1));
    returnArr.push(Utils.formatNumber(date.getDate()));

    returnArr.push(Utils.formatNumber(date.getHours()));
    returnArr.push(Utils.formatNumber(date.getMinutes()));
    returnArr.push(Utils.formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formatArr[i], returnArr[i]);
    }
    return format;
}

Utils.formatNumber = function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}