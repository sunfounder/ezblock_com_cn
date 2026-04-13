//定义个人信息对象
var Personal = {};

//定义个人信息对象id
Personal.id = "personal";

//邮箱验证正则表达式
Personal.emailReg = /^([A-Za-z\d])+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;

//用户名
Personal.username = '';

//验证码
Personal.verificationCode = '';

$(function () {


    //监听字数的方法
    function monitorVal(obj, nums, minus) {
        if (minus) {
            if (jQuery(obj).nextAll('.num-box').find('.num').length) {
                jQuery(obj).nextAll('.num-box').find('.num').html(nums - jQuery(obj).val().length);
            }
        } else {
            if (jQuery(obj).nextAll('.num-box').find('.num').length) {
                jQuery(obj).nextAll('.num-box').find('.num').html(jQuery(obj).val().length);
            }
        }

        jQuery(obj).bind('input propertychange', function () {
            if (jQuery(obj).val().length >= nums) {
                jQuery(obj).val(jQuery(obj).val().substr(0, nums));
            }
            if (minus) {
                jQuery(obj).nextAll('.num-box').find('.num').html(nums - jQuery(obj).val().length);
            } else {
                jQuery(obj).nextAll('.num-box').find('.num').html(jQuery(obj).val().length);
            }
        });
    };


    
    //点击保存，保存个人信息
    $('.user-basedata .btn-save').click(function () {
        Personal.setUserInfo()
    })


    // 裁剪头像
    $('#avatarInput').on('change', function (e) {
        var filemaxsize = 1024 * 10;//5M
        var target = $(e.target);
        var Size = target[0].files[0].size / 1024;
        if (Size > filemaxsize) {
            $.msgBox.Alert(null, Utils.get_lan('tip_bigpic'));
            return false;
        }
        if (!this.files[0].type.match(/image.*/)) {
            $.msgBox.Alert(null, Utils.get_lan('tip_truepic'));
        } else {
            var file = target[0].files[0];
            var src = window.URL.createObjectURL(file);
            $('.user-editbox .img').html('<img id="image" src="' + src + '" width="335" height="335"/>');
            var image = document.getElementById('image');
            $(image).on('load', function () {
                $(image).cropper({
                    aspectRatio: 200 / 200,
                    viewMode: 2,//显示
                    dragMode: "move",
                    preview: '.img-preview'
                });
            });
        }
    });


    // 上传图像
    $('.data-img .img').on('click', function () {
        $('.user-editbox').show();
        Utils.maskShow();
        var src = $('.data-img .img img').attr('src');
        $('.user-editbox .img').html('<img id="image" src="' + src + '" width="335" height="335"/>');

        var image = document.getElementById('image');
        $(image).on('load', function () {
            $(image).cropper({
                aspectRatio: 200 / 200,
                viewMode: 2,//显示
                dragMode: "move",
                preview: '.img-preview'
            });
        });
    });

    // 保存头像
    $('.user-editbox').on('click', '.btn', function () {
        var $imgData = $(image).cropper('getCroppedCanvas', {
            width: 200,
            height: 200
        });
        var $imgData2 = $(image).cropper('getData');

        $('#w').val($imgData2.width);
        $('#h').val($imgData2.height);
        $('#x').val($imgData2.x);
        $('#y').val($imgData2.y);

        dataurl = $imgData.toDataURL('image/png');

        $('.data-img .img img, .user-infos img, .loginhead img').attr('src', dataurl);
        $('.user-ava img').attr('src', dataurl)
        $('.user-editbox').hide();
        Utils.maskHide();
        
        var url = 'member/upimg';
        var payload = {
            userToken: Ezblock.userToken,
            img: dataurl
        };
        API.get(url, JSON.stringify(payload)).then(function (response) {
            console.log(response);
            Utils.tipSave('suc', Utils.get_lan('suc_change'));
        })
    });

    // 关闭裁剪头像
    $('.user-editbox-close').on('click', function () {
        $('.user-editbox').hide();
        Utils.maskHide();
    });


    // 监听input字数
    if ($('.user-basedata .num-box').length) {
        monitorVal('.user-basedata .txt:eq(0)', 16, 'minus');
        monitorVal('.user-basedata .txt:eq(2)', 16, 'minus');
        monitorVal('.user-basedata .text', 40, 'minus');
        // monitorVal('.user-basedata .text2', 500, 'minus');
    }

    // 关闭弹窗
    $('.popup-box').on('click', '.popup-close', function () {
        $(this).parents('.popup-box').hide();
        Utils.maskHide();
    });


    //注销账号
    $('.user-delete .btn-delete').on('click', function () {
        Personal.cancelUser();
    })

    //点击导航栏进行登录
    // $('#topbar-reg').click(function () {
    //     $('#mask').show();
    // });


    //退出登录
    $('.loginhead .avatar-info ul #logout').on('click', function () {
        Personal.deleteUsertoken();
    })


    // 修改密码保存
    $('.user-password').on('click', '.btn-save', function () {
        $.each($('.user-password').find('.txt'), function () {
            var _this = $(this);
            if (!_this.nextAll('.tips').length) {
                _this.after('<span class="tips"></span>');
            }
            // 判断非空和长度
            if (!_this.val()) {
                _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + _this.parents('.item').find('dt').html() + Utils.get_lan('tip_notEmpty')).show();
                return false;
            }
            else if (_this.val().length < 3) {
                _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + _this.parents('.item').find('dt').html() + Utils.get_lan('tip_length') + '小于3!').show();
                return false;
            }
            else if (_this.val().length > 16) {
                _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + _this.parents('.item').find('dt').html() + Utils.get_lan('tip_length') + '大于16!').show();
                return false;
            }
        })
        var oldPwdVal = $('.user-password').find('.txt:eq(0)').val();
        var newPwdVal = $('.user-password').find('.txt:eq(1)').val();

        var url = 'member/updatepassword';
        var payload = {
            updateCase: "1",
            userToken: window.sessionStorage.getItem('usertoken'),
            old: oldPwdVal,
            password: newPwdVal
        }
        API.get(url, JSON.stringify(payload)).then(function (response) {
            console.log(response);
            if (response.errorMsg == '请确认密码是否有效') {
                $('.user-password').find('.txt:eq(0)').nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + Utils.get_lan('error_txt_passwordFalse')).show();
            } else if(response.status == 'true') {
                Sign.condition['password'] = newPwdVal;
                $('.user-password').find('.txt').val("");
                $('.tips').remove();
                var time = 3
                Utils.tipSave('suc', Utils.get_lan('tip_suc_modify_login'));
                var timer = setInterval(function () {
                    if (time >= 1) {
                        time--;
                    } else {
                        clearInterval(timer);
                        window.sessionStorage.removeItem('usertoken');
                        location.href = "../../userinfo/index.html"
                    }
                }, 500)
            }
        })
    })


    // 检验邮箱格式
    function isEmail(str) {
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return reg.test(str);
    };

    // 更换绑定邮箱(验证邮箱是否可用)
    $('.user-bind').on('click', '.btn-bind-email', function () {
        var _this = $('.user-bind .btn-bind-email');
        var input = $(this).prevAll('.txt');
        if (!isEmail($.trim(input.val()))) {
            if (!$(this).nextAll('.tips').length) {
                $(this).parents('dd').append('<div class="tips"></div>');
            }
            $(this).nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + Utils.get_lan('tip_trueEmail')).show();;
        } else {
            var emailVal = $('.user-data .changeEmail').val();
            var payLoad = {
                email: emailVal,
                distributor: "sunfounder"
            };
            API.get("member/isemail", JSON.stringify(payLoad)).then(function (response) {
                console.log(response);
                if (response.status == 'true') {
                    $('.popup-email').show().find('.txt-email').val($.trim(input.val()));
                    Utils.centerObj('.popup-email .popup');
                    _this.nextAll('.tips').hide();
                } else if (response.errorMsg == "邮箱已被占用")  {
                    if (!_this.nextAll('.tips').length) {
                        _this.parents('dd').append('<div class="tips"></div>');
                    }
                    _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + Utils.get_lan('tip_occupiedEmail')).show();;
                } 
            })
        }
    });

    //点击获取邮箱验证码
    $('.popup-email').find('.sendcode').click(function () {
        var emailVal = $('.user-data .changeEmail').val();
        var url = "member/sendEmail";             
        var payload = {
            email: emailVal,
            tags: "putemail"
        };
        API.get(url, JSON.stringify(payload)).then(function (response) {
            console.log(response);
            if (response.status == 'true') {
                Utils.countTime($('.popup-email').find('.sendcode'), 60);
            } else {
                Utils.tipSave('fail', Utils.get_lan('fail_sendCode'));
            }
        })
    })

    // 修改邮箱
    $('.popup-email .popup-btn-box .btn-comfirm').click(function () {
        var emailVal = $('.popup-email .txt-email').val();
        var codeVal = $('.popup-email .txt-yzm').val();
        if ($('.txt-yzm').val() == '') {
            if (!$('.txt-yzm').parents('.item').find('.tips').length) {
                $('.txt-yzm').parents('.item').append('<div class="tips"></div>');
            }
            $('.txt-yzm').addClass('txt-error').parents('.item').find('.tips').html(Utils.get_lan('tip_codeNotEmpty')).show();
            return false;
        } else {
            var url = 'member/putemail';                
            var payload = {
                userToken: window.sessionStorage.getItem('usertoken'),
                email: emailVal,
                verifyCode: codeVal
            };
            API.get(url, JSON.stringify(payload)).then(function (response) {
                console.log(response)
                if (response.status == "true") {
                    Utils.tipSave('suc', Utils.get_lan('suc_change'));
                    $('.popup-email').find('.txt').val("");
                    $('.popup-email').hide();
                    $('.user-bind .changeEmail').val("");
                    $('.user-delete .txt-username').val(emailVal);
                } else {
                    if (!$('.txt-yzm').parents('.item').find('.tips').length) {
                        $('.txt-yzm').parents('.item').append('<div class="tips"></div>');
                    }
                    $('.txt-yzm').addClass('txt-error').parents('.item').find('.tips').html(Utils.get_lan('tip_falseCode')).show();
                    return false;
                }
            })
        }
    })
})


//获取个人信息
Personal.getUserInfo = function () {
    Ezblock.userToken = window.sessionStorage.getItem('usertoken');
    var url = 'member/info';   
    var payload = {
        userToken: Ezblock.userToken,
    }
    API.get(url, JSON.stringify(payload)).then(function (response) {
        var info = response.data;
        console.log(info);
        if (window.sessionStorage) {
            window.sessionStorage.setItem("userEmail", info.email);
            window.sessionStorage.setItem("userName", info.name);
            window.sessionStorage.setItem("userAvatar", info.img);
            window.sessionStorage.setItem("userId", info.id);
        }
        var name, sex, age, country, job, email, img = '';
        var arr = ['name', 'sex', 'age', 'country', 'job', 'email', 'img', 'intro'];
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            for (var key in info) {
                if (arr[i] == key) {
                    obj[key] = info[key];
                }
            }
        }

        if (obj.name) {
            $('.user-basedata .data-img .name').html(obj.name);
            $('.user-basedata .txt-username').val(obj.name);
            $('.logined .menu-list section a').html(obj.name);
            $('.user-left .user-title .user-info p:eq(0)').html(obj.name);
        }
        if (obj.sex) {
            $('.user-basedata #sex input:radio[name="sex"][value=' + obj.sex + ']').prop('checked', true);
        }

        if (obj.age) {
            $('.user-basedata .txt-age').val(obj.age);
        }
        if (obj.country) {
            $('.fastbannerform__country option[value = "' + obj.country + '"]').attr("selected", 'selected');
            // $('.user-basedata .select2-selection__rendered .fastbannerform__span').html(obj.country);
            $('.user-left .user-title .user-info .address').html(obj.country);
        }
        if (obj.job) {
            $('.user-basedata .txt-job').val(obj.job);
        }
        if (obj.email) {
            $('.user-basedata .txt-email').val(obj.email);
            $('.user-delete .txt-username').val(obj.email);
        }
        if (obj.img) {
            $('.user-basedata .fll img').attr('src', 'https://test2.ezblock.com.cn'+info.img);
            $('.logined .login-avatar img').attr('src', 'https://test2.ezblock.com.cn'+info.img);
            $('.user-ava img').attr('src', 'https://test2.ezblock.com.cn'+info.img);
        }
        if (obj.intro) {
            $('.user-basedata .txt-intro').val(obj.intro);

        }
    });

    $('.loginhead').html('<div class="h-user"><a href="#"><img class="head_avatar" src="./images/avatar.png" alt=""></a><div class="avatar-info" style="none"><dl><a target="_blank"><dt></dt></a><dd></dd></dl><ul><li><a href="./ziliao.html" set-lan="html:loginhead_myFollow"></a></li><li><a href="../../userInfo/message.html" set-lan="html:loginhead_myMessage"></a></li><li><a href="../../userinfo/index.html" set-lan="html:loginhead_myData"></a></li><li id="logout" onclick="Personal.deleteUsertoken()"><a set-lan="html:loginhead_signout"></a></li></ul></div></div>')

}


//设置个人信息
Personal.setUserInfo = function () {
    var usernameVal = $('.user-basedata .txt-username').val();
    var sexVal = $('.user-basedata #sex input:radio[name="sex"]:checked').val();
    var ageVal = $('.user-basedata .txt-age').val()
    // var emailVal = $('.user-basedata .txt-email').val();
    var countryVal = $('.fastbannerform__country').find("option:selected").text();
    var workVal = $('.user-basedata .txt-job').val();
    // var avatarImg = $('.data-img .avatarImg').attr('src');
    var introVal = $('.user-basedata .txt-intro').val();

    Ezblock.userToken = window.sessionStorage.getItem('usertoken');
    if (usernameVal == '' || sexVal == '' || countryVal == '请选择国家' || ageVal == '') {
        Utils.tipSave('fail', Utils.get_lan('tip_fillData'));
    } else {
        if (parseInt(ageVal) != ageVal || ageVal <= 0) {
            var _this = $('.user-basedata .txt-age');
            if (_this.nextAll('.tip').length) {
                _this.nextAll('.tip').find('.text').html('<span class="icon-tanhao"></span>' + _this.parents('dl').find('dt').text() + Utils.get_lan('tip_mustbeNum')).show();
            } else {
                _this.after('<span class="tip"><span class="icon-tanhao"></span>' + _this.parents('dl').find('dt').text() + Utils.get_lan('tip_mustbeNum') + '</span>').show()
            }
            return;
        } else {
            var url = 'member/updateInfo';      //新
            var payload = {
                userToken: Ezblock.userToken,
                name: usernameVal,
                age: ageVal,
                allowUpload: "true",
                job: workVal,
                country: countryVal,
                sex: sexVal,
                intro: introVal
            };
            API.get(url, JSON.stringify(payload)).then(function (response) {
                console.log(response)
                if (response.errorMsg == '修改失败') {
                    Utils.tipSave('fail', Utils.get_lan('fail_change'));
                } else if(response.status == 'true') {
                    Utils.tipSave('suc', Utils.get_lan('suc_change'));
                    Personal.getUserInfo();
                    Sign.condition['name'] = usernameVal;
                    Sign.condition['sex'] = sexVal;
                    Sign.condition['age'] = ageVal;
                    Sign.condition['country'] = countryVal;
                    Sign.condition['job'] = workVal;
                    Sign.condition['email'] = emailVal;
                    Sign.condition['img'] = $('.data-img .avatarImg').attr('src');
                    Sign.condition['intro'] = introVal;
                    if (window.sessionStorage) {
                        window.sessionStorage.setItem('username', usernameVal)
                    }
                }
            })
        }

    }

}


//注销用户
Personal.cancelUser = function () {
    var username = $('.user-delete .txt-username').val();
    var password = $('.user-delete .txt-password').val();
    if (password == '') {
        var _this = $('.user-delete .txt-password');
        if (!_this.nextAll('.tips').length) {
            _this.after('<span class="tips"></span>');
        }
        _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + _this.parents('.item').find('dt').html() + Utils.get_lan('tip_notEmpty')).show();
        return false;
    } else {
        $('.tips').remove();
        var url = 'user/remove';
        var payload = {
            nameOrEmail: window.sessionStorage.getItem('username'),
            password: $('.user-delete .txt-password').val(),
            distributor: "sunfounder"
        }
        API.get(url, JSON.stringify(payload)).then(function (response) {
            console.log(response);
            var _this = $('.user-delete .txt-password');
            if (response.errorMsg == null) {
                if (!_this.nextAll('.tips').length) {
                    _this.after('<span class="tips"></span>');
                }
                _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + _this.parents('.item').find('dt').html() + '不为空').show();
                return false;
            } else if (response.errorMsg == '密码错误') {
                if (!_this.nextAll('.tips').length) {
                    _this.after('<span class="tips"></span>');
                }
                _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + _this.parents('.item').find('dt').html() + '错误').show();
                return false;
            } else if (response.status == "true") {
                Utils.tipSave('suc', Utils.get_lan('suc_deleteUser'));
                Personal.deleteUsertoken();
            } else {
                Utils.tipSave('fail', Utils.get_lan('fail_deleteUser'));
            }
        })

        //     var url = 'users/deluser';
        //     var payload = {
        //         "accessToken": 123,
        //         "name": window.sessionStorage.setItem("username"),
        //         "password": password,
        //     }
        //     API.get(url, payload).then(function (response) {
        //         console.log(response);
        //         var _this = $('.user-delete .txt-password');
        //         if (response.errorMsg == '用户不存在') {
        //             if (!_this.nextAll('.tips').length) {
        //                 _this.after('<span class="tips"></span>');
        //             }
        //             _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + Utils.get_lan('tip_inexistence_user')).show();
        //             return false;
        //         } else if (response.errorMsg == '密码错误') {
        //             if (!_this.nextAll('.tips').length) {
        //                 _this.after('<span class="tips"></span>');
        //             }
        //             _this.nextAll('.tips').attr('class', 'tips tips-err').html('<span class="icon-gt"></span>' + Utils.get_lan('error_txt_passwordFalse')).show();
        //             return false;
        //         } else if (response.status == true) {
        //             Utils.tipSave('suc', Utils.get_lan('suc_deleteUser'));
        //             Personal.deleteUsertoken();
        //         } else { Utils.tipSave('fail', Utils.get_lan('fail_deleteUser'));}
        //     })
        // }
    }
}

//退出登录
Personal.deleteUsertoken = function () {
    if (window.sessionStorage) {
		window.sessionStorage.removeItem('usertoken')
        window.sessionStorage.removeItem('userAvatar');
		window.sessionStorage.removeItem('userEmail');
		window.sessionStorage.removeItem('userId');
		window.sessionStorage.removeItem('userName');
    }
	Ezblock.userToken = '';
	Personal.msgNull();
}

//退出登录后信息清空
Personal.msgNull = function () {
    $('.unlogin').removeClass('hide');
    $('.logined').addClass('hide');
    if(window.location.href == "http://127.0.0.1:5501/userinfo/index.html") {
        window.location.href == "http://127.0.0.1:5501/index.html"
    }
}








