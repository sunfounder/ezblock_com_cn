var Sign = {};

Sign.id = "register";
// 注册需要用的条件
Sign.condition = {
    accessToken: "123",
    email: "",
    name: "",
    password: "",
    verifyCode: "",
    distributor: "",
    sex: "",
    age: "",
    city: "China",
    job: "",
    img: "",
    allowUpload: "",
    distributor: "sunfounder"
};
Sign.usertoken = "";


$(function () {
    //验证用户名是否有效
    $('.signup-page #username').blur(function () {
        Sign.checkUsername();
    });

    //验证邮箱是否有效
    $('.signup-page #email').blur(function() {
        Sign.checkEmail();
    })


    //登录、注册、忘记密码弹窗切换
    $('.reset-link').click(function () {
        $('.signin-page').hide();
        $('.reset-page').show();
        $('.reset-page #username').val("");
        $('.reset-page #set-password').val("");
        $('.reset-page #code').val("");
    });
    $('.signup-link').click(function () {
        $('.signin-page').hide();
        $('.reset-page').hide();
        $('.signup-page').show();
        $('.signup-page #username').val("");
        $('.signup-page #password').val("");
        $('.signup-page #verifyCode').val("");
    });

    $('.signin-link').click(function () {
        $('.signup-page').hide();
        $('.reset-page').hide();
        $('.signin-page').show();
        $('.signin-page #username').val("");
        $('.signin-page #password').val("");
    });
    $('.signin-page #submit-btn').click(function () {
        Sign.login();
        console.log("hi")
    });

    //Input获取焦点时的变化效果
    $('.signin-page,.signup-page,.reset-page').find(".required").focus(function (e) {
        var e = e || window.event,
            t = $(e.target).parent(),
            n = t.find("i").first(),
            i = "icon-" + n.attr("icon") + "-gray",
            r = "icon-" + n.attr("icon") + "-orange";
        t.addClass("active"), n.removeClass(i), n.addClass(r)
    }),
        $('.signin-page,.signup-page,.reset-page').find(".required").blur(function (e) {
            var e = e || window.event,
                t = $(e.target).parent(),
                n = t.find("i").first(),
                i = "icon-" + n.attr("icon") + "-gray",
                r = "icon-" + n.attr("icon") + "-orange";
            t.removeClass("active"), n.addClass(i), n.removeClass(r)
        })


    //sign up按钮点击注册
    $(".signup-btn #submit-btn").click(function () {
        Sign.register();
    });

    // 验证邮箱
    $(".signup-page .private").bind("click", function () {
        var val = $(".signup-page .private").is(":checked");
        console.log(val);
    });

    // 注册发送邮箱验证码
    $(".signup-page #getverifyCode").click(function () {
        Sign.getRegisterCode();
    });

    //忘记密码，点击获取邮箱验证码
    $('.reset-page #getverifyCode').click(function () {
        Sign.getForgetpwdCode();
    })

    //输入验证码注册成功按钮点击事件
    // $(".signup-page #submit-btn").click(function () {
    //     Sign.condition["verifyCode"] = $(".signup-page #verifyCode").val();
    //     Sign.condition["allowUpload"] = $("#.signup-page .allowUpload").is(
    //         ":checked"
    //     );
    //     // Sign.condition["userInfo"]["allowUpload"] = $(
    //     //     "#email .allowUpload"
    //     // ).is(":checked");
    //     Sign.signUp();
    // });

    //确认重置密码
    $('.reset-page #confirmReset').click(function () {
        Sign.findPwd();
    })

    //sign up文字点击跳转至注册页面
    // $(".register-label").click(function() {
    //     $("#login").modal("hide");
    //     $("#register").modal("show");
    //     $("#register #register_username").val("");
    //     $("#register #register_password").val("");
    //     $("#register #register_repassword").val("");
    //     $("#email_address").val("");
    //     $("#Verification #verifyCode").val("");
    // });

    //Find password文字跳转至找回密码页面
    // $(".findPwd-label").click(function() {
    //     if ($("#login .userName").val() == "") {
    //         $(".login_errMsg").html(MSG.userNameEmailAddress); //用户名/邮箱不为空
    //         $(".login_errMsg").show();
    //         setTimeout(function() {
    //             $(".login_errMsg").hide();
    //         }, 1200);
    //     } else {
    //         $("#login").modal("hide");
    //         $("#findPwd").modal("show");
    //         $("#login .userName").val("");
    //         $("#login .password").val("");
    //     }
    // });

    //验证码未确认并返回登录页面
    // $(".findPwdBack").click(function() {
    //     $("#findPwd").modal("hide");
    //     $("#login").modal("show");
    //     $("#find_password").val("");
    //     $("#findPwdCode").val("");
    // });

    //返回密码验证页面
    // $(".setPwdBack").click(function() {
    //     $("#setPwd").modal("hide");
    //     $("#findPwd").modal("show");
    //     $("#set_password").val("");
    //     $("#set_repassword").val("");
    // });



    //sign in按钮点击登录
    // $(".signin-page .submit #submit-btn").click(Sign.login);

    //点击头部登录按钮，如果已登录直接跳转至个人信息页面，若没有则去登录
    // $(".dragheader2 .parent_login .login").click(function() {
    //     if(EzBlock.page.id == 'pInformation') {
    //         return false;
    //     } else {
    //         Register.isLogin();
    //     }
    // });


    //点击导航栏登录按钮，登录
    $('#topbar-reg').click(function () {
        $('#mask').show();
    })

});

//判断用户是否登录
Sign.isLogin = function () {
    if (window.sessionStorage) {
        var usertoken = window.sessionStorage.getItem("usertoken");
        if (usertoken != "" && usertoken != null) {
            return true;
        }
    }
   
};


//阅读并同意隐私条款
// Sign.privateConfirm = function() {
//     if ($("#privateTerms .checkBox").is(":checked")) {
//         $("#privateTerms").modal("hide");
//         $("#emial").modal("show");
//         $("#email .private").attr("checked", true);
//     } else {
//         $(".private_error").show();
//         $(".private_error").html(MSG.privatePolicy);
//         setTimeout(function() {
//             $(".private_error").hide();
//         }, 1200);
//     }
// };


// 注册
Sign.register = function () {
    if ($(".signup-page #username").val() == "") {
        $('.signup-page #username_warn_false').fadeIn(200);
        $('.signup-page #username_warn_false .error_txt').html(Utils.get_lan('error_txt_usernamrNotEmpty')); //用户名不能为空
        setTimeout(function () {
            $('.signup-page #username_warn_false').fadeOut();
        }, 1200);
        return false;
    } else if ($(".signup-page #password").val() == "") {
        $('.password-error #password_warn_false .error_txt').html(Utils.get_lan('error_txt_passwordNotEmpty'));    //密码不为空
        $('.password-error #password_warn_false').fadeIn(200);
        setTimeout(function () {
            $(".signup-page #password_warn_false").fadeOut();
        }, 1200);
        return false;
    } else if ($(".signup-page #email").val() == "") {
        $('.email-warn #email_warn_false .error_txt').html(Utils.get_lan('error_txt_emailNotEmpty'));  //邮箱不能为空  
        $('.email-warn #email_warn_false').fadeIn(200);
        setTimeout(function () {
            $(".email-warn #email_warn_false").fadeOut();
        }, 1200);
        return false;
    } else if ($('.signup-page #verifyCode').val() == "") {
        $('.signup-page #verifyCode_warn_false .error_txt').html(Utils.get_lan('tip_fillCode'));   //请输入验证码
        $('.signup-page #verifyCode_warn_false').fadeIn();
        setTimeout(function () {
            $('.signup-page .verifyCode_warn_false').fadeOut();
        }, 1200);
    } else {
        // Sign.condition["email"] = $(".signup-page #email").val();
        // Sign.condition["name"] = $(".signup-page #username").val();
        Sign.condition["password"] = $(".signup-page #password").val();
        Sign.condition["allowUpload"] = $(".signup-page .private").is(":checked");
        Sign.condition["verifyCode"] = $(".signup-page #verifyCode").val();
        console.log(Sign.condition);
        API.get("member/regist", JSON.stringify(Sign.condition)).then(function (data) {
            console.log(data);
            if (data.errorMsg == "验证码错误") {
                $('.signup-page #verifyCode_warn_false .error_txt').html(Utils.get_lan('tip_fillCode'));   //请输入验证码
                $('.signup-page #verifyCode_warn_false').fadeIn();
                setTimeout(function () {
                    $('.signup-page .verifyCode_warn_false').fadeOut();
                }, 1200);
            } else if (data.status == 'true') {
                alert("注册成功,请登录");
                $('.signin-link').trigger("click");
            } else {
                alert("网络错误")
            }
        });
    }
}


//注册获取验证码
Sign.getRegisterCode = function () {
    var emailVal = $(".signup-page #email").val();
    if (Sign.checkEmailOrName(emailVal) && $(".signup-page .private").is(":checked")) {
        Utils.countTime($(".signup-page #getverifyCode"), 60);
        var url = "member/sendEmail";
        var payload = {
            email: emailVal,
            tags: "register"
        };
        API.get(url, JSON.stringify(payload)).then(function (response) {
            console.log(response);
            if (response.errorMsg == "该邮箱已注册") {
                $('.signup-page #email_warn_false .error_txt').html(Utils.get_lan('tip_occupiedEmail'));
                $(".signup-page #email_warn_false").fadeIn(200); //该邮箱已注册
                setTimeout(function () {
                    $(".signup-page #email_warn_false").fadeOut();
                }, 1200);
                return false;
            } else if ($(".signup-page .private").is(":checked")) {
                Sign.condition["email"] = emailVal;
                if (window.sessionStorage) {
                    var email = window.sessionStorage.setItem(
                        "email",
                        emailVal
                    );
                }
                Sign.verifyEmail(Sign.condition["email"]);
            }
        })
    } else if (!Sign.checkEmailOrName(emailVal)) {
        $('.signup-page #email_warn_false .error_txt').html(Utils.get_lan('tip_trueEmail'));
        $(".signup-page #email_warn_false").fadeIn(200); //请输入正确的邮箱格式
        setTimeout(function () {
            $(".signup-page #email_warn_false").fadeOut();
        }, 1200);
        return false;
    } else if (!$(".signup-page .private").is(":checked")) {
        $(".policy-tip").css('color', 'red'); //同意隐私条款
    }
}


// 注册————用户名判断是否已存在
Sign.checkUsername = function () {
    if ($(".signup-page #username").val() == "") {
        $('.signup-page #username_warn_false').fadeIn(200);
        $('.signup-page #username_warn_false .error_txt').html(Utils.get_lan('error_txt_usernamrNotEmpty')); //用户名不能为空
        setTimeout(function () {
            $('.signup-page #username_warn_false').fadeOut();
        }, 1200);
        return false;
    } else {
        var payLoad = {
            name: $(".signup-page #username").val(),
            distributor: "sunfounder"
        };
        API.get("member/check/name", JSON.stringify(payLoad)).then(function (response) {
            console.log(response);
            if (response.status == 'true') {
                Sign.condition["name"] = $(".signin-page #username").val();
            } else if (response.errorMsg == '用户名已被占用') {
                $('.signup-page #username_warn_false').fadeIn(200);
                $('.signup-page #username_warn_false .error_txt').html('用户名已被占用'); //用户名已被占用
                setTimeout(function () {
                    $('.signup-page #username_warn_false').fadeOut();
                }, 1200);
            } else if (response.errorMsg == '内容涉及敏感词汇') {
                $('.signup-page #username_warn_false').fadeIn(200);
                $('.signup-page #username_warn_false .error_txt').html('内容涉及敏感词汇'); //内容涉及敏感词汇
                setTimeout(function () {
                    $('.signup-page #username_warn_false').fadeOut();
                }, 1200);
            } else {
                alert('网络失败');
            }
        })
    }
}


// 注册————验证邮箱是否有效
Sign.checkEmail = function () {
    if ($(".signup-page #email").val() == "") {
        $('.email-warn #email_warn_false .error_txt').html(Utils.get_lan('error_txt_emailNotEmpty'));  //邮箱不能为空  
        $('.email-warn #email_warn_false').fadeIn(200);
        setTimeout(function () {
            $(".email-warn #email_warn_false").fadeOut();
        }, 1200);
        return false;
    } else {
        var payLoad = {
            email: $(".signup-page #email").val(),
            distributor: "sunfounder"
        };
        API.get("member/isemail", JSON.stringify(payLoad)).then(function (response) {
            console.log(response);
            if (response.status == 'true') {
                Sign.condition["email"] = $(".signin-page #email").val();
            } else if (response.errorMsg == '邮箱已被占用') {
                $('.signup-page #username_warn_false').fadeIn(200);
                $('.signup-page #username_warn_false .error_txt').html('邮箱已被占用'); //用户名不能为空
                setTimeout(function () {
                    $('.signup-page #username_warn_false').fadeOut();
                }, 1200);
            } else {
                alert('网络失败');
            }
        })
    }
}

// //注册后自动登录
// Sign.automaticLogin = function () {
//     var payLoad = {
//         userNameOrEmail: "",
//         password:""
//     };
//     payLoad["email"] = $(".signup-page #username").val();
//     payLoad["name"] = $(".signup-page #username").val();
//     API.get("users/login", payLoad).then(function (data) {
//         console.log(data);
//         data.userInfo.password = $(".signup-page #password").val();
//         Sign.password = $(".signup-page #password").val();
//         Sign.username = $(".signup-page #username").val();
//         if (window.sessionStorage) {
//             Ezblock.userToken = data.userToken;
//             window.sessionStorage.setItem("usertoken", data.userToken);
//             var username = window.sessionStorage.setItem(
//                 "username",
//                 Sign.username
//             );
//         }
//         Personal.getUserInfo();
//         Personal.enterPersonMessage();
//     });
// };

// 手动登录
Sign.login = function () {
    if ($(".signin-page #username").val() == "") {
        $(".signin-page #username_warn_false .error_txt").html(Utils.get_lan('error_txt_usernamrNotEmpty'));
        $(".signin-page #username_warn_false").fadeIn(200);   //用户名不为空
        setTimeout(function () {
            $(".signin-page #username_warn_false").fadeOut();
        }, 2200);
    } else if ($(".signin-page #password").val() == "") {
        $(".signin-page #password_warn_false .error_txt").html(Utils.get_lan('error_txt_passwordNotEmpty'));
        $(".signin-page #password_warn_false").fadeIn(200); //密码不为空
        setTimeout(function () {
            $(".signin-page #password_warn_false").fadeOut();
        }, 1200);
    } else {
        var payLoad = {
            userNameOrEmail: $(".signin-page #username").val(),
            password: $(".signin-page #password").val(),
            distributor: "sunfounder"
        };
        console.log(payLoad)
        API.get("member/login", JSON.stringify(payLoad)).then(function (data) {
            console.log(data)
            if (data.errorMsg == "登录失败，请检查账户和密码") {
                $(".signin-page #password_warn_false .error_txt").html(Utils.get_lan('tip_false_userOrPassword'));
                $(".signin-page #password_warn_false").fadeIn(200); //密码错误
                setTimeout(function () {
                    $(".signin-page #password_warn_false").fadeOut();
                }, 1200);
            } else {
                $('.mask').hide();
                // Sign.password = $(".signin-page #password").val();
                // Sign.username = $(".signin-page #username").val();
                if (window.sessionStorage) {
                    Ezblock.userToken = data.userToken;
                    window.sessionStorage.setItem("usertoken", data.userToken);
                }
                Nav.loginCheck();
                Personal.getUserInfo();
            }
        });
    }
};


//忘记密码获取邮箱验证码
Sign.getForgetpwdCode = function () {
    var emailVal = $(".reset-page #username").val();
    var codeVal = $(".reset-page #verifyCode").val();
    if (emailVal.length < 1) {
        $(".reset-page #not_blank").fadeIn(200); //邮箱号不能为空
        setTimeout(function () {
            $(".reset-page #not_blank").fadeOut();
        }, 1200);
    } else if (!Sign.checkEmailOrName(emailVal)) {
        $(".reset-page #email_invalid_warn").fadeIn(200); //输入正确的邮箱格式
        setTimeout(function () {
            $(".reset-page #email_invalid_warn").fadeOut();
        }, 1200);
    } else {
        var url = "member/sendEmail";
        var payload = {
            email: emailVal,
            tags: "forgetpwd"
        };
        API.get(url, JSON.stringify(payload)).then(function (response) {
            console.log(response);
            Utils.countTime($(".reset-page #getverifyCode"), 60);
            if (response.status == 'true') {
                $(".reset-page #code_warn_false .error_txt").html(Utils.get_lan('tip_codeSend'));
                $(".reset-page #code_warn_false").fadeIn(200); //验证码已发送
                setTimeout(function () {
                    $(".reset-page #code_warn_false").fadeOut();
                }, 1200);
            } else {
                alert('网络错误')
            }
        });
    }
};

//找回密码
Sign.findPwd = function () {
    var codeVal = $(".reset-page #verifyCode").val();
    var pwdVal = $(".reset-page #set-password").val();
    var pwdAgainVal = $(".reset-page #reset-password").val();
    var emailVal = $(".reset-page #username").val();
    if (codeVal == "") {
        $(".reset-page #code_warn_false .error_txt").html(Utils.get_lan('tip_codeNotEmpty'));
        $(".reset-page #code_warn_false").fadeIn(200); //验证码不为空
        setTimeout(function () {
            $(".reset-page #code_warn_false").fadeOut();
        }, 1200);
    } else if (pwdVal == "") {
        $(".reset-page #password_warn_false .error_txt").html(Utils.get_lan('error_txt_passwordNotEmpty'));
        $(".reset-page #password_warn_false").fadeIn(200); //密码不为空
        setTimeout(function () {
            $(".reset-page #password_warn_false").fadeOut();
        }, 1200);
    } else if (pwdAgainVal == "") {
        $(".reset-page #repassword_warn_false .error_txt").html(Utils.get_lan('error_txt_repasswordNotEmpty'));
        $(".reset-page #repassword_warn_false").fadeIn(200);    //确认密码不为空
        setTimeout(function () {
            $(".reset-page #repassword_warn_false").fadeOut();
        }, 1200);
    } else if (pwdVal != pwdAgainVal) {
        $(".reset-page #repassword_warn_false .error_txt").html(Utils.get_lan('error_txt_differentPassword'));
        $(".reset-page #repassword_warn_false").fadeIn(200); //两次密码不一致
        setTimeout(function () {
            $(".reset-page #repassword_warn_false").fadeOut();
        }, 1200);
    } else {
        var changePwdUrl = "member/updatepassword";
        var changePwdLoad = {
            updateCase: 2,
            email: emailVal,
            verifyCode: codeVal,
            password: pwdAgainVal,
            distributor: "sunfounder"
        };
        API.get(changePwdUrl, JSON.stringify(changePwdLoad)).then(function (response) {
            console.log(response);
            if (response.errorMsg == "验证码无效") {
                $(".findPwd_errorMsg").html('验证码无效,请重新获取');
                $(".findPwd_errorMsg").show();
                setTimeout(function () {
                    $(".findPwd_errorMsg").hide();
                }, 1200);
            } else if (response.status == 'true') {
                $('.reset-page').hide();
                Utils.tipSave('suc', Utils.get_lan('suc_change'));
                setTimeout(function () {
                    $(".signin-page").show();
                    $(".signin-page input").val("");
                    $("..reset-page input").val("");
                }, 1200);
            }
        });

    }
};

// 验证是否输入的是邮箱
Sign.checkEmailOrName = function (value) {
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (reg.test(value)) {
        return true;
    } else {
        return false;
    }
};


// 邮箱验证码验证方法
Sign.verifyEmail = function (email) {
    var payLoad = {
        accessToken: "123",
        email: email
    };
    // $("#emailShadow").show();
    API.get("users/email", payLoad).then(function (data) {
        console.log(data);
        if (data.status == true) {
            $(".signup-page #verifyCode_warn_send").fadeIn();
            setTimeout(function () {
                $(".signup-page #verifyCode_warn_send").fadeOut();
            }, 1200);
            setTimeout(function () {
                data.userInfo = {
                    name: Sign.condition["name"],
                    email: Sign.condition["email"],
                    password: Sign.condition["password"],
                    allowUpload: Sign.condition["allowUpload"]
                };
            }, 1200);
        } else {
            $(".signup-page #verifyCode_warn_send").fadeIn();
            setTimeout(function () {
                $(".signup-page #verifyCode_warn_send").fadeOut();
            }, 1200);
        }
    });
};


