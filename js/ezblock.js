var Ezblock = {};

Ezblock.userToken = "";


$(function () {
    $('.main-slider').addClass('animate-in');
    // $('.preloader').remove();

    // 轮播图幻灯片
    if ($('#sld').length) {
        $('#sld').slides({
            generatepagination: true,
            generateNextPrev: true,
            play: 3000,
            pause: 2500,
            hoverPause: true,
            next: 'icon-youjiantou',
            prev: 'icon-zuojiantou'
        });
    }

    // 推荐、精选列表页下拉
    $('.tab-tit').on('mouseover', '.tab-li', function () {
        $(this).find('.tab-list').show();
    })
        .on('mouseleave', '.tab-li', function () {
            $(this).find('.tab-list').hide();
        })
        .on('mouseover', '.tab-list-li', function () {
            if ($(this).find('.tab-list2').length) {
                $(this).find('.tab-list2').show().parents('.tab-list').addClass('tab-list-cur');
            }
        })
        .on('mouseleave', '.tab-list-li', function () {
            if ($(this).find('.tab-list2').length) {
                $(this).find('.tab-list2').hide().parents('.tab-list').removeClass('tab-list-cur');
            }
        });


    // radio美化
    if ($('.ico-radio').length) {
        $.each($('.ico-radio'), function (index, val) {
            Utils.radioSelect('.ico-radio');
            $('.ico-radio').on('change', function () {
                Utils.radioSelect('.ico-radio');
            });
        });
    };
    
    // 关闭任意弹窗
    $('.popup-box').on('click', '.popup-close', function () {
        $(this).parents('.popup-box').hide();
        Utils.maskHide();
    });

    //留言
    // 判断评论框字数是否输入
    $('.ct-comment-box .textarea').bind('input propertychange', function () {
        var _this = $(this);
        if (_this.val().length > 0) {
            _this.css('background', '#fff');
            _this.parents('.ct-comment-box').find('.btn-comment').removeClass('dis');
        } else {
            _this.css('background', '#f7f8fa');
            _this.parents('.ct-comment-box').find('.btn-comment').addClass('dis');
        }
    });

    // 留言评论字数限制
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
    if ($('.homepage-box .num-box,.ct-comment .num-box').length) {
        monitorVal('.ct-comment-box .textarea', 500, 'minus');
    }




    // 点赞评论
    $('.ct-comment,.user-msg-list').on('click', '.btn-praise', function () {
        var _this = $(this);
        if (!_this.hasClass('praise-ok')) {
            // var pid = _this.attr('pid');
            // var tid = _this.attr('tid');
            if (!_this.find('.add').length) {
                _this.append('<span class="add">+1</span>');
            }
            _this.find('.add').fadeIn();
            setTimeout(function () {
                _this.find('.add').fadeOut().remove();
            }, 500);

            var num = 0;
            if (_this.find('.num').length) {
                var num = _this.find('.num').text();
            } else {
                _this.append('<span class="num"></span>');
            }
            num = parseInt(num) + 1;
            _this.addClass('praise-ok').find('.num').html(num);
        }
        else {
            if (!_this.find('.add').length) {
                _this.append('<span class="add" style="color:#999">-1</span>');
            }
            _this.find('.add').fadeIn();
            setTimeout(function () {
                _this.find('.add').fadeOut().remove();
            }, 500);


            var num = 0;
            if (_this.find('.num').length) {
                var num = _this.find('.num').text();
            } else {
                _this.append('<span class="num"></span>');
            }
            num2 = parseInt(num) - 1;
            _this.removeClass('praise-ok');
            if (num2 == 0) {
                _this.find('.num').remove();
            } else {
                _this.find('.num').html(num2);
            }
        }
    });







    //项目详情小图的滚动
    var count = $('.work-preview ul li').length - 5;
    var interval = $('.work-preview ul li:first').width() + 15;
    var curIndex = 0;

    // 获取第一张缩略图
    $(document).ready(function () {
        var src = $('.img-block img').eq(0).attr('src');
        $('#stage-container img').attr('src', src);
    })

    $('.scrollBtn').click(function () {
        if ($(this).hasClass('disabled')) return false;
        if ($(this).hasClass('smallImgUp')) {
            --curIndex
        } else {
            ++curIndex
        }

        $('.scrollBtn').removeClass('disabled');
        if (curIndex == 0) {
            $('.smallImgUp').addClass('disabled');
        }
        if (curIndex == count - 1) {
            $('.smallImgDown').addClass('disabled')
        }

        $('.work-preview ul').stop(false, true).animate({
            "marginLeft": -curIndex * interval + "px"
        }, 600)
    });


    //获取缩略图地址，传到div形成大图
    $('.img-block').each(function () {
        $(this).click(function () {
            var src = $(this).find('img').attr('src');
            $('#stage-container img').attr('src', src);

            $(this).parent('li').addClass('active').siblings('li').removeClass('active')
        })
    })

})



//发邮件(原接口)
Ezblock.sendEmail = function () {
    var url = 'compilers/email';
    var reg = /^([A-ZA-z0-9_\-\.])+\@([A-ZA-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var fromAddress = $('.contact-form input.email').val();
    var receiverAddress = 'support@sunfounder.com';
    var subjectVal = $('.contact-form input.subject').val();
    var textVal = $('.contact-form #message').val();
    if (fromAddress.length < 1) {
        Utils.tipSave('fail', "Please enter email address")
        $('.contact-form input.email').val('');
        return;
    } else if (!reg.test(fromAddress)) {
        Utils.tipSave('fail', 'Please enter the correct email address format')
        $('.contact-form input.email').val('');
        return;
    } else if (subjectVal.length < 1) {
        Utils.tipSave('fail', 'Please fill in the subject')
    } else if (textVal.length < 1) {
        Utils.tipSave('fail', 'Please fill in the text');
    } else {
        var payload = {
            'accessToken': "123",
            'userEmail': fromAddress,
            'targetEmail': receiverAddress,
            'subject': subjectVal,
            'context': textVal,
        }
        API.get(url, payload).then(function (response) {
            if (response.status) {
                Utils.tipSave('suc', 'Send successfully');   //发送成功
                $('#footer input,#footer textarea').val('')
            } else {
                Utils.tipSave('fail', 'Send failed');    //发送失败
            }
            console.log(response);
        });
    }

}



