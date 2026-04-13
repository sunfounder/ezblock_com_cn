var Community = {};

Community.communityToken = "";

//当前页号
Community.pageNo = 1;

//被访问人ID
Community.accessID = "";

// 作品作者ID(用于判断与是否是作者本人)
Community.userName = "";

//每页消息条数
Community.pageSize = 20;

Community.commentId = [];




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


// checkbox选中效果
function checkboxSelect(obj) {
    jQuery.each($(obj).find('input[type=checkbox]'), function (i) {
        if (!jQuery(this).parents('label').find('.ico-radio').length) {
            jQuery(this).wrap('<span class="ico-radio"></span>');
        }
        if (jQuery(this).prop('checked')) {
            jQuery(this).parents('span').addClass('ico-radio-cur');
        }
        jQuery(this).on('change', function () {
            if (jQuery(this).prop('checked')) {
                jQuery(this).val(1);
                jQuery(this).parents('span').addClass('ico-radio-cur');
            } else {
                jQuery(this).val(0);
                jQuery(this).parents('span').removeClass('ico-radio-cur');
            }
        });
    });
};



$(function () {
    window.onload = function () {
        Community.renderRecommend();
    }
    // radio美化
    if ($('.ico-radio').length) {
        $.each($('.ico-radio'), function (index, val) {
            Utils.radioSelect('.ico-radio');
            $('.ico-radio').on('change', function () {
                Utils.radioSelect('.ico-radio');
            });
        });
    };
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


    // 内容页为作品点赞(取消点赞)
    $('.content-box, .fix-topbar,.praise-box').off('click', '.praise').on('click', '.praise', function () {
        if (window.sessionStorage.getItem("usertoken") != null) {
            var _this = $(this)
            if (!$(this).hasClass('praise-ok')) {
                var url = "community/project/like";
                var payload = {
                    userToken: window.sessionStorage.getItem("usertoken"),
                    projectId: window.location.search.split("=")[1],
                    distributor: "sunfounder"
                }
                API.get(url, JSON.stringify(payload)).then((response) => {
                    console.log(response);
                    if ($(".praise-box .praise").attr('tid') == window.sessionStorage.getItem('userId')) {
                        return false;
                    } else if (response.status == "true") {
                        $('.content-box, .fix-topbar,.praise-box').find('.praise').addClass('praise-ok').find('.num').html(+_this.find('.num').text() + 1);
                        Utils.tipSave('suc', Utils.get_lan('suc_like'))
                    } else {
                        Utils.tipSave('fail', Utils.get_lan('fail_like'))
                    }
                })
            } else {
                var url = "community/project/unlike";
                var payload = {
                    userToken: window.sessionStorage.getItem("usertoken"),
                    projectId: window.location.search.split("=")[1],
                    distributor: "sunfounder"
                }
                API.get(url, JSON.stringify(payload)).then((response) => {
                    console.log(response);
                    if (response.status == "true") {
                        $('.content-box, .fix-topbar,.praise-box').find('.praise').removeClass('praise-ok').find('.num').html(+_this.find('.num').text() - 1);
                        Utils.tipSave('suc', Utils.get_lan('suc_cancelLike'))
                    } else {
                        Utils.tipSave('fail', Utils.get_lan('fail_cancelLike'))
                    }
                })
            }
        } else {
            $('.mask').show();
        }
    });


    // 收藏作品（取消收藏）
    $('.ct-share, .fix-topbar').off('click', '.collect').on('click', '.collect', function () {
        var pid = window.location.search.split("=")[1];
        var payLoad = {
            userToken: window.sessionStorage.getItem("usertoken"),
            projectId: pid
        };
        if ($(this).hasClass('dis')) {
            API.get("community/collection", JSON.stringify(payLoad)).then(function (response) {
                Utils.tipSave('suc', Utils.get_lan('suc_cancleCollect'));
                var sp = $('.content-box, .fix-topbar,.ct-share').find('.collect');
                sp.removeClass('dis').find('.text').html(Utils.get_lan('collect'));
                sp.find('.icon-shoucang').removeClass('suc-collect');
                sp.find('.text').removeClass('suc-collect');
                sp.find('.num').html(+$('.ct-share .collect').find('.num').html() - 1);
            })
        } else {
            API.get("community/collection", JSON.stringify(payLoad)).then(function (response) {
                console.log(response);
                Utils.tipSave('suc', Utils.get_lan('suc_collect'));
                $(".popup-collect").hide();
                var sp = $('.content-box, .fix-topbar,.ct-share').find('.collect');
                sp.addClass('dis').find('.text').html(Utils.get_lan('collected'));
                sp.find('.icon-shoucang').addClass('suc-collect');
                sp.find('.text').addClass('suc-collect');
                sp.find('.num').html(+$('.content-box').find('.collect').find('.num').html() + 1);
            })
        }
    });



    // 关注订阅某个人
    $('.designer,.user-homepage').off('click', '.btn-gz').on('click', '.btn-gz', function () {
        var _this = $(this);
        if (window.sessionStorage.getItem("userName") == Community.userName) {   //自己不能关注自己
            $(this).hasClass('dis');
        } else if (window.sessionStorage.getItem("usertoken") !== null) {
            var befocusedId = $(this).siblings('.name').attr('lid');
            var subscribePayload = {
                userToken: window.sessionStorage.getItem("usertoken"),
                befocused: befocusedId
            }
            if (!$(this).hasClass('dis')) {
                API.get("community/project/subscribe", JSON.stringify(subscribePayload)).then((data) => {
                    console.log(data);
                    if (data.status == "true") {
                        Utils.tipSave('suc', Utils.get_lan('suc_focus'));
                        $('.btn-gz').addClass('dis').html(Utils.get_lan('focused'));
                        _this.addClass('dis').html(Utils.get_lan('focused')); //.removeClass("btn-blue")
                        $('.ranking .item:eq(2) span').html(+$('.ranking .item:eq(2) span').html() + 1);
                        // $('.at-gz').find('.btn-gz').html('已关注作者');
                    } else {
                        Utils.tipSave('fail', Utils.get_lan('fail_focus'));
                        return false;
                    }
                })
            } else {
                API.get("community/project/unsubscribe", JSON.stringify(subscribePayload)).then((data) => {
                    console.log(data);
                    if (data.status == "true") {
                        $('.btn-gz').removeClass('dis').addClass("btn-blue").html(Utils.get_lan('focus'));
                        Utils.tipSave('suc', Utils.get_lan('suc_cancelFocus'));
                        $('.ranking .item:eq(2) span').html(+$('.ranking .item:eq(2) span').html() - 1);
                        // _this.removeClass('dis').addClass("btn-blue").html('关注');
                        // $('.at-gz').find('.btn-gz').html('+ 关注作者');
                    } else {
                        Utils.tipSave('fail', Utils.get_lan('fail_cancelFocus'));
                        return false;
                    }
                })
            }
        } else {   //未登录不可关注
            $(".mask").show();
        }
    });


    // 个人主页与作品页 提交评论(个人的评论)
    $('.ct-comment-box').off('click', '.btn-comment').on('click', '.btn-comment', function () {
        //判断是否登录
        if (window.sessionStorage.getItem("usertoken") !== null) {
            var _this = $(this).parents('.ct-comment-box');
            if ($(this).hasClass('dis')) {
                return false;
            }
            if (!$.trim(_this.find('.textarea').val())) {
                $.msgBox.Alert(null, Utils.get_lan('tip_commentNotEmpty'));
                return false;
            } else {
                // 创建评论条
                //获取输入内容
                var comment_txt = _this.find('.textarea').val();
                var comment_img = 'https://test2.ezblock.com.cn' + window.sessionStorage.getItem("userAvatar")
                console.log(comment_txt);

                var payload = {
                    userToken: window.sessionStorage.getItem("usertoken"),
                    content: comment_txt,
                    projectId: window.location.search.split("=")[1],
                    name: window.sessionStorage.getItem("userName"),
                    img: comment_img

                }
                console.log(payload);
                API.get("community/comment", JSON.stringify(payload)).then((response) => {
                    console.log(response);
                    commenter_name = window.sessionStorage.getItem("userName");
                    //动态创建评论模块
                    comment_box = '<li><div class="com-box"><a href="" target="_blank" class="fll avatar"><img src=' + comment_img + ' class="" height="54" width="54"></a><div class="tt"><a href="#" target="_blank"><strong class="username">' + commenter_name + '</strong></a><span class="times">' + now + '</span></div><div class="info">' + comment_txt + '<div class="btn-box"><a href="javascript:;" class="btn-reply"><span class="icon-comment"></span>  <span class="btn-reply-txt">  ' + Utils.get_lan('btn_reply') + '</span></a><a href="javascript:;" class="btn-praise"><span class="icon-praise2"></span>  ' + Utils.get_lan('btn_zan') + '</a><a href="javascript:;" class="btn-del actdel_one"><span class="icon-shanchu"></span>  ' + Utils.get_lan('btn_delete') + '</a><a href="javascript:;" class="btn-report report" type="comments";><span class="icon-jubao"></span>  ' + Utils.get_lan('btn_report') + '</a></div></div></div></li>'
                    if (comment_txt.replace(/(^\s*)|(\s*$)/g, "") != '') {
                        $('#all-comment').prepend(comment_box);
                        $('.textarea').prop('value', '').siblings('pre').find('span').text('');
                    }
                    $('.ct-comment .message_num').html(+$('.ct-comment .message_num').html() + 1);
                })
            }
        } else {
            Utils.alertMsg(Utils.get_lan('tip_login'));
        }
    });


    // 点击回复他人的留言（动态创建回复块）
    $('.ct-comment').off('click', '.btn-reply').on('click', '.btn-reply', function () {
        var replyForm = $(this).parents('.info');
        //获取回复人的名字
        var n = replyForm.prev("div").find('strong').find('a').html();
        if (n) {
            var n = n.replace(/(^\s*)|(\s*$)/g, "");
        } else {
            //名字
            var n = replyForm.prev("div").find('strong').html();
        }
        $("#tmp").find('textarea').attr('placeholder', Utils.get_lan('btn_reply') + ': ' + n);


        // 点开显示'收起'，再点显示'回复'
        if ($(this).parent('.time').length) {
            replyForm = $(this).parent('.time');
        } else {
            $(this).parents('.com-box').find(".btn-reply").addClass("btn-reply-blue").html('<span class="icon-comment"></span>  ' + Utils.get_lan('btn_fold'));
        }

        // 进行点开与收起动作
        if (replyForm.nextAll('.reply-form').length > 0) {
            replyForm.nextAll('.reply-form').remove();
            $(this).parents('.com-box').find(".btn-reply").removeClass("btn-reply-blue").html('<span class="icon-comment"></span>  ' + Utils.get_lan('btn_reply'));
        } else {
            if ($('.reply-form').length > 1) {
                $('.com-box .reply-form').remove();
            }
            replyForm.after($("#tmp").html());
            replyForm.nextAll('.reply-form').show();
            // 判断回复框字数是否输入（回复按钮背景颜色变化）
            $.each($('.ct-comment').find('.text'), function (index, val) {
                var _this = $(this);
                _this.bind('input propertychange', function () {
                    if (_this.val().length > 0) {
                        _this.parents('.reply-form').find('.btn-sure').removeClass('dis');
                    }
                    else {
                        _this.parents('.reply-form').find('.btn-sure').addClass('dis');
                    }
                });
            });
            //监听回复框的字数
            $.each($('.ct-comment .text'), function (i) {
                monitorVal($(this), 500, 'minus');
            });
        }
    });


    // 评论回复块创建
    $('.ct-comment').off('click', '.btn-sure').on('click', '.btn-sure', function () {
        //判断是否登录
        if (window.sessionStorage.getItem("usertoken") != null) {
            // 判断文本内容非空
            if (!$.trim($(this).parents('.reply-form').find('.text').val())) {
                $.msgBox.Alert(null, Utils.get_lan('tip_replyNotEmpty'));
                return false;
            }
            if ($(this).attr("disabled") == "disabled") {
                return false;
            }
            $(this).attr("disabled", "disabled");
            //获取父级评论
            var commentId = $(this).parents('li').attr('cid');
            console.log('commentId=' + commentId);
            //获取被回复人的名字
            var replyForm = $(this).parents('.reply-form');
            var toName = replyForm.siblings('.tt').find('strong').html();
            console.log('toName=' + toName);
            //获取回复人的名字、头像
            var fromName = window.sessionStorage.getItem("userName");
            console.log('fromName=' + fromName);
            var fromImg = 'https://test2.ezblock.com.cn' + window.sessionStorage.getItem("userAvatar");
            var toId = $(this).parents('.com-box').attr('rpid');
            console.log('toId=' + toId);
            var reply_txt = replyForm.find('textarea').val();
            console.log('reply_txt=' + reply_txt);
            var payload = {
                userToken: window.sessionStorage.getItem("usertoken"),
                fromName: fromName,
                fromImg: fromImg,
                projectId: window.location.search.split("=")[1],
                commentId: commentId,
                toId: toId,
                toName: toName,
                content: reply_txt
            }
            console.log(payload);
            API.get("community/reply", JSON.stringify(payload)).then((data) => {
                console.log(data);
                // 判断回复盒子是否存在，不存在创造追加
                if (!$(this).parents('li').find('.reply-box').length) {
                    $(this).parents('li').append('<div class="reply-box"></div>');
                }

                var replyform = $(this).parents('.reply-form');
                var replybox = $(this).parents('li').find('.reply-box');


                //获取输入内容
                var reply_txt = $(this).parents('.btn-box').parents('.reply-form').find('textarea').val();
                console.log(reply_txt);
                // var oAllVal = '回复@' + oHfName;
                if (!reply_txt.indexOf("@") == -1) {
                    data['atName'] = '';
                    data['hfContent'] = reply_txt;
                } else {
                    data['hfContent'] = reply_txt;
                    data['atName'] = toName;
                }
                if (data.atName == '') {
                    oAt = data.hfContent;
                } else {
                    oAt = '回复<a href="#" class="atName">@' + data.atName + '</a> : ' + data.hfContent;
                }
                oHf = data.hfName;

                var oHtml = '<div class="com-box"><a href="" target="_blank" class="fll avatar"><img src=" ' + fromImg + ' " class="" height="54" width="54"></a><div class="tt"><a href="#" target="_blank" rid=' + toId + '><strong class="username">' + fromName + '</strong>' + oAt + '</a><span class="times">' + now + '</span></div><div class="info">' + reply_txt + '<div class="btn-box"><a href="javascript:;" class="btn-reply"><span class="icon-comment"></span><span class="btn-reply-txt"> 回复</span></a><a href="javascript:;" tid="1382754" pid="3018082" class="btn-praise"><span class="icon-praise2"></span> 赞</a><a href="javascript:;" class="btn-del actdel_two"><span class="icon-shanchu"></span> 删除</a><a href="javascript:;" class="btn-report report" type="reportReply" onclick="Community.report(event)"><span class="icon-jubao"></span> 举报</a></div></div></div>'
                replybox.css('display', 'block').prepend(oHtml);

                replyform.prev().children('.btn-box').find(".btn-reply").removeClass("btn-reply-blue").html('<span class="icon-comment"></span> 回复');
                replyform.remove();
            })
        } else {
            Utils.alertMsg(Utils.get_lan('tip_login'));
        }
    });

    //私信
    /* 聊天记录 */
    $('.btn-letter').off('click').on('click', function () {
        if ($(".content-tit .info .btn-letter").attr('followid') == window.sessionStorage.getItem('userId')) {
            return false;
        } else {
            $('.popup-letter').show();
            var payload = {
                userToken: window.sessionStorage.getItem("usertoken"),
                friend: $(this).parents(".info").find('.name').attr('lid')
            }
            console.log(payload)
            API.get("community/message/info", JSON.stringify(payload)).then((response) => {
                console.log(response);
                $('.user-msgct-ct').html("");
                for (var key in response.data) {
                    var CommentTime = Utils.formatTime(parseInt(response.data[key].sendTime), 'Y/M/D h:m:s')
                    if (response.data[key].fromId == window.sessionStorage.getItem('userId')) {
                        var msgHtml = '<div class="umsg umsg-r">' + '<span class="img"><img src="./images/avatar.png"></span>' + '<div class="umsg-ct">' + response.data[key].content + '<span class="arrow"></span></div>' + '<span class="time">' + CommentTime + '</span>' + '</div>';
                    } else {
                        var msgHtml = '<div class="umsg">' + '<span class="img"><img src="./images/avatar.png"></span>' + '<div class="umsg-ct">' + response.data[key].content + '<span class="arrow"></span></div>' + '<span class="time">' + CommentTime + '</span>' + '</div>';
                    }
                    $('.user-msgct-ct').append(msgHtml).scrollTop(999999);
                }
            })
            // $("#masks").html(data);
            Utils.centerObj('.popup-letter .popup');
            letter();
        }
    });

    function letter() {
        // 判断回复框字数是否输入
        $('.user-msgct .text').bind('input propertychange', function () {
            var _this = $(this);
            if (_this.val().length > 0) {
                _this.parents('.user-msgct').find('.btn-sure').removeClass('dis');
            }
            else {
                _this.parents('.user-msgct').find('.btn-sure').addClass('dis');
            }
        });


        // 容器内滚动
        if ($('.user-msgct').length) {
            $('.user-msgct-ct').scrollUnique();
        };

        $('.user-msgct').off('click', '.btn-sure').on('click', '.btn-sure', function () {
            var _this = $('.user-msgct .btn-sure')
            if ($(_this).hasClass('dis')) {
                return false;
            };
            // 判断文本内容非空
            if (!$.trim($(_this).parents('.reply-form').find('.text').val())) {
                $.msgBox.Alert(null, Utils.get_lan('tip_replyNotEmpty'));
                return false;
            }

            var message = $.trim($(_this).parents('.reply-form').find('.text').val());
            var toMember = $(_this).parents(".user-msgct").find('.title').attr('lid');

            var url = "community/message/send";
            var payLoad = {
                userToken: window.sessionStorage.getItem("usertoken"),
                toMember: toMember,
                content: message
            };
            console.log(payLoad)
            API.get(url, JSON.stringify(payLoad)).then(function (response) {
                console.log(response);
                if ($("#touid").length) {
                    var msgHtml = '<div class="umsg umsg-r">' + '<span class="img"><img src="./images/avatar.png"></span>' + '<div class="umsg-ct">' + $('.user-msgct').find('.text').val() + '<span class="arrow"></span></div>' + '<span class="time">' + now + '</span>' + '</div>';
                    $('.user-msgct-ct').append(msgHtml).scrollTop(999999);
                }
                $('.user-msgct').find('.text').val('');
            });

        });
        // 监听input字数
        if ($('.popup-letter').length) {
            monitorVal('.popup-letter .text', 500, 'minus');
        };
    }


    //获取私信列表用户
    $('.user-msgct').off('click', '.uinfo').on('click', '.uinfo', function () {
        $(this).find('.uinfo-list').toggle();
        var url = "community/message/list";
        var payLoad = {
            userToken: window.sessionStorage.getItem("usertoken")
        };
        API.get(url, JSON.stringify(payLoad)).then(function (response) {
            console.log(response);
            $('.popup-letter .uinfo-list ul').html("");
            for (var key in response.data) {
                var listLi = `<li fid="${response.data[key].friend}">
                <div class="friend-content">
                    <div class="friend-info">
                        <div class="friend-avatar"><img src="./images/avatar.png" alt=""></div>
                        <div class="friend-item">
                            <div class="friend-name">${response.data[key].receiver_name}</div>
                            <div class="friend-message">
                                <p>${response.data[key].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`
                $('.popup-letter .uinfo-list ul li .friend-avatar img').attr('src', response.data[key].receiver_image)
                $('.popup-letter .uinfo-list ul').append(listLi);
            }
        })
    })




    // 删除评论（还需要限制是登陆者个人作品才可以删除）
    //删除作品一级评论
    $('body').off('click', '#all-comment .actdel_one').on('click', '#all-comment .actdel_one', function () {
        var _this = $(this);
        $.msgBox.Confirm(null, Utils.get_lan('tip_deleteComment'), function () {
            var commentId = _this.parents('li').attr('cid')
            var url = "community/removecomment";
            var payLoad = {
                userToken: window.sessionStorage.getItem("usertoken"),
                commentId: commentId
            };
            console.log(payLoad)
            API.get(url, JSON.stringify(payLoad)).then(function (response) {
                console.log(response);
                if (response.status == "true") {
                    $('.message_num').html(+$('.message_num').html() - 1);
                    _this.parents("li").remove();
                    if ($('#all-comment li').length == 0 || $("#all-comment:has(li)").length == 0) {
                        $('.uno-result').show();
                    }
                } else {
                    $.msgBox.Alert(null, Utils.get_lan('fail_deleteComment'));
                }
            })



        });
    });

    //删除作品页回复(二级评论)
    $('body').off('click', '#all-comment .actdel_two').on('click', '#all-comment .actdel_two', function () {
        var _this = $(this);
        $.msgBox.Confirm(null, Utils.get_lan('tip_deleteReply'), function () {
            var replyId = _this.parents('.com-box').attr('rpid')
            var url = "community/removereply";
            var payLoad = {
                userToken: window.sessionStorage.getItem("usertoken"),
                replyId: replyId
            };
            console.log(payLoad);
            API.get(url, JSON.stringify(payLoad)).then(function (response) {
                console.log(response);
                if (response.status == "true") {
                    var num = _this.parents(".reply-box").find('.com-box').length - 1;
                    if (num == 0) {
                        _this.parents(".reply-box").remove();
                    } else {
                        _this.parents(".com-box").remove();
                    }
                } else {
                    $.msgBox.Alert(null, Utils.get_lan('fail_deleteReply'));
                }
            })
        });
    });


    //点击用户详情界面项目作者的头像获取作者信息
    $(".myavator").off('click').click(function () {
        Community.renderOthers();
    })

    $('.edit-smallbtn').click(function () {
        $('.ezblock-box .list .ezblock-item .card-edit-block .filter-list-box').toggle();
    })

    // 举报按钮
    // $('.ct-comment').on('click', '#reportComments', function () {
    //     Community.report(event);
    // })

    // // //举报弹窗显示
    // $('.ct-comment').on('click', '.btn-report', function () {
    //     Community.report(event);
    //     // $('.popup-report').show();
    //     Utils.centerObj('.popup-report .popup');
    // });
    //举报提交和取消
    $('.popup-report').on('click', '#report_submit', function () {
        $.msgBox.Confirm(null, Utils.get_lan('tip_reportComment'), function () {
            $.msgBox.Alert(null, Utils.get_lan('suc_report'));
            $('.popup-report').hide();
            // if() {

            // } else {
            //      $.msgBox.Alert(null, '删除评论失败！');
            // }

        });
    })
    $('.popup-report').on('click', '.btn-gray', function () {
        $(this).parents('.popup').find('.popup-close').click();
    })


})


// 获取社区项目(发送请求)
Community.renderRecommend = function () {
    var payload = {
        projectName: "",
        type: "project",
        pageNo: 1,
    }
    API.get("community/project/searchBox", JSON.stringify(payload)).then((response) => {
        console.log(response);
        Community.project = [];
        for (var key in response.data) {
            Community.project.push(response.data[key].id + '?' + JSON.stringify(response.data[key]));
        }
        console.log(Community.project)
        if (Community.project.length > 0) {
            Community.pageLength = Community.project.length;//消息总条数
            if (Community.pageLength % Community.pageSize == 0) {
                Community.pageall = Community.pageLength / Community.pageSize;//消息总页数
            } else {
                Community.pageall = parseInt(Community.pageLength / Community.pageSize) + 1;
            }
            var page_num = $('.page .cur').html()
            if (page_num) {
                Community.changePageNo(page_num);
            } else {
                Community.changePageNo(1);
            }
        } else {
            $('.ezblock-content ul').html('No results found.')
        }
        // Community.renderProject(data.projectList);
    })
}

// 进行项目分页(20个/页)
Community.changePageNo = function (page) {
    if (page < 1) {
        page = 1;
    }
    if (page >= Community.pageall) {
        page = Community.pageall;
    }
    $('.ezblock-content ul').html('');//点击切换下一页时清空ul中的消息
    for (var i = 0; i < Community.pageSize; i++) {
        var pid = Community.project[(page - 1) * Community.pageSize + i].split('?')[0];
        var project = Community.project[(page - 1) * Community.pageSize + i].split('?')[1];
        var projectObject = JSON.parse(project);
        // console.log(projectObject);
        var time = Utils.formatTime(parseInt(projectObject.project_creattime), 'Y/M/D h:m:s')
        var newLi =
            `
            <li class="ezblock-item" onclick="Community.getProject(${pid});Community.getComment(${pid})">
                <a title="" target="_blank" href="./project_details.html?pid=${pid}">
                    <span class="img-box"><img class="previews" mysrc="" src="./images/E_banner.jpg" alt="" width="290" height="180" alt="fads"></span>
                </a>
                <h3><a target="_blank"><span class="icon-recommend yellow" href="./project_details.html?pid=${pid}"></span>&nbsp;&nbsp;${projectObject.project_name}</a></h3>
                <div class="info">
                    <em><span class="icon-view"></span>1372</em>
                    <em><span class="icon-praise"></span>20</em>
                    <em><span class="icon-comment"></span>4</em>
                </div>
                <div class="user">
                    <div class="fr"><span>${time}</span></div>
                    <div class="sjs-name">
                        <a href="./ziliao.html?id=${projectObject.id}" title="Circusmans" target="_blank">
                            <img class="previews" src="./images/avatar.png" mysrc="" height="120" width="120" alt="">${projectObject.name}
                        </a>
                    </div>
                </div>
            </li>
		`
        $('.ezblock-content ul').append(newLi);//重新添加新的消息内容

        if (Community.project[(page - 1) * Community.pageSize + i + 1] == null)
            break;//超出范围跳出
    }
    $('.page .cur').html(page)
    if (page == 1) {
        $('.prev').disable = true;
        $('.next').show();
    }
    if (page == Community.pageall) {
        $('.next').disable = true;
        $('.prev').show();
    }
    if (Community.pageall == 1 && page == Community.pageall) {
        $('.prev').disable = true;
        $('.next').disable = true;
    }
}


// 获取项目详情
Community.getProject = function () {
    var payload = {
        userToken: "",
        projectId: window.location.search.split("=")[1],
        distributor: 'sunfounder'
    }
    API.get("community/project/getproject", JSON.stringify(payload)).then((response) => {
        console.log(response);
        $(".content-tit .title h1").html(response.data.project_name);   //作品名字
        $(".content-tit .infos .pushTime").html(Utils.formatTime(parseInt(response.data.project_creattime), 'Y/M/D h:m:s'));   //作品发布时间
        $(".content-tit .infos .updateTime").html(Utils.formatTime(parseInt(response.data.project_creattime), 'Y/M/D h:m:s'));   //作品更新时间
        $(".ct-designer .name,.content-tit .name,.popup-letter .title .toLetter").html(response.data.name);   //作者名字
        $(".popup-letter .title,.content-tit .name,.ct-designer .name").attr('lid', response.data.id);//作者ID
        $(".content-tit .info .btn-gz").attr('uid', response.data.id);
        $(".praise-box .praise").attr('tid', response.data.id);
        $(".content-tit .info .btn-letter").attr('followid', response.data.id);

        // $(".content-tit .designer .myavator, .popup-letter .title img").attr('src',data.img);   //作者头像
        $('.content-tit .designer').find('.img').attr('href', "./ziliao.html?id=" + response.data.memberId)
        $(".work-info .description .detail p").html(response.data.project_description);   //作品介绍
        Community.accessID = response.data.id;   //项目ID    
        Community.userName = response.data.name;

        // 获取观看、点赞、收藏数
        $('.content-tit .infos .view_num').html(response.about.read);
        // $('.content-tit .infos .comment_num').html(response.about.collection.count);
        $('.content-tit .infos .praise_num,.praise-box .num').html(response.about.likeNum);

        if ($(".content-tit .info .btn-letter").attr('followid') == window.sessionStorage.getItem('userId')) {
            return false;
        } else {
            //判断作品是否被点赞
            if (response.about.aboutStatus == "1") {   //已点赞
                $('.content-box, .fix-topbar,.praise-box').find('.praise').addClass('praise-ok');
            }
            // //判断作品是否被收藏
            // if (response.about.collection.isCollection == "1") {   //已收藏

            // }
            //判断用户是否被关注
            if (response.subscribe == "1") {   //已关注
                $('.btn-gz').addClass('dis').html(Utils.get_lan('focused'));
            }
        }
    });
}



// 获取项目评论
Community.getComment = function () {
    var payload = {
        projectId: Number(window.location.search.split("=")[1]),
        pageNo: "1"
    }
    API.get("community/comments", JSON.stringify(payload)).then((response) => {
        console.log(response);
        var comment_data = response.data;
        // 获取留言数
        $('.ct-comment .message_num').html(comment_data.length);
        Community.contents = [];
        for (var key in comment_data) {
            Community.commentId.push(comment_data[key].id);
            var time = Utils.formatTime(parseInt(comment_data[key].date), 'Y/M/D h:m:s');
            var fromImg = comment_data[key].fromImg
            var newComment = `       
                <li cid="${comment_data[key].id}" class="${comment_data[key].id}">
                    <div class="com-box">
                        <a href="./ziliao.html?access=${comment_data[key].fromId}"  target="_blank" class="fll avatar">
                            <img src="${fromImg}" class="myavator" height="54" width="54">      
                        </a>
                        <div class="tt">
                            <a href="javascript:;" target="_blank" rid=${comment_data[key].fromId}><strong>${comment_data[key].fromName}</strong></a>
                            <span class="times">${time}</span>
                        </div>
                        <div class="info">
                            ${comment_data[key].content}
                            <div class="btn-box comment_one">
                                <a href="javascript:;" class="btn-reply">
                                <span class="icon-comment"></span>  <span class="btn-reply-txt">  `+ Utils.get_lan('btn_reply') + `</span></a>
                                <a href="javascript:;" class="btn-praise">
                                    <span class="icon-praise2"></span>  `+ Utils.get_lan('btn_zan') + `</em>
                                </a>
                                <a href="javascript:;" class="btn-del actdel_one hide"><span class="icon-shanchu"></span>`+ Utils.get_lan('btn_delete') + `</a>
                                <a href="javascript:;" class="btn-report report" type="comments" onclick="Community.report(event)">
                                    <span class="icon-jubao"></span>  `+ Utils.get_lan('btn_report') + `
                                </a>
                            </div>
                        </div>
                    </div>
                </li>`

            $('#allcomment ul').append(newComment);//重新添加新的消息内容
            if (window.sessionStorage.getItem("userId") == comment_data[key].fromId) {
                $('.' + comment_data[key].id).find('.comment_one .actdel_one').removeClass('hide');
            } else {
                $('.' + comment_data[key].id).find('.comment_one .actdel_one').addClass('hide');
            }
            Community.getReply(comment_data[key].id)
        }
    })
}
// 获取项目评论下的回复
Community.getReply = function (comment_id) {
    var payload = {
        commentId: comment_id
    }
    console.log(payload)
    API.get("community/replys", JSON.stringify(payload)).then((response) => {
        console.log(response);
        for (var a in response.data) {
            // 判断回复盒子是否存在，不存在创造追加
            var _this = document.getElementsByClassName(comment_id)
            if (!$(_this).find('.reply-box').length) {
                $(_this).append('<div class="reply-box"></div>');
            }
            var replybox = $(_this).find('.reply-box');

            // //获取输入内容
            var replyContent = response.data[a].content;
            var replyId = response.data[a].id;
            var replyFormname = response.data[a].fromName;
            var replyFormid = response.data[a].fromId;
            var replyFromimg = response.data[a].fromImg;
            var replyDate = response.data[a].date;
            var replytoId = response.data[a].toId;
            var replytoName = response.data[a].toName;

            var oAt = Utils.get_lan('btn_reply') + '<a href="#" class="atName">@' + replytoName + '</a> : ' + replyContent;

            var oHtml = '<div class="com-box ' + replyFormid + ' "rpid=' + replyId + ' cid = "' + replyFormid + '"><a href="" target="_blank" class="fll avatar"><img src=" ' + replyFromimg + ' " class="" height="54" width="54"></a><div class="tt"><a href="#" target="_blank"><strong class="username">' + replyFormname + '</strong>' + oAt + '</a><span class="times">' + replyDate + '</span></div><div class="info">' + replyContent + '<div class="btn-box comment_two"><a href="javascript:;" class="btn-reply"><span class="icon-comment"></span>  <span class="btn-reply-txt">' + Utils.get_lan('btn_reply') + '</span></a><a href="javascript:;" class="btn-praise"><span class="icon-praise2"></span>' + Utils.get_lan('btn_zan') + '</a><a href="javascript:;" class="btn-del actdel_two hide"><span class="icon-shanchu"></span>' + Utils.get_lan('btn_delete') + '</a><a href="javascript:;" class="btn-report report" type="reply"><span class="icon-jubao"></span>' + Utils.get_lan('btn_report') + '</a></div></div></div>'

            replybox.css('display', 'block').prepend(oHtml);

            if (window.sessionStorage.getItem("userId") == replyFormid) {
                $('.reply-box').find($('.' + replyFormid)).find('.comment_two .actdel_two').removeClass('hide');
            } else {
                $('.reply-box').find($('.reply-box .' + replyFormid)).find('.comment_two .actdel_two').addClass('hide');
            }
        }
    })
}


// 举报
Community.report = function (event) {
    if (Sign.isLogin) {
        $('.popup-report').show()
        var reportType = $(event.currentTarget).attr('type');
        console.log(reportType)
        //项目举报
        if (reportType == 'project') {
            var typeId = window.location.search.split("=")[1];
            //作者举报
        } else if (reportType == 'member') {
            var typeId = window.location.search.split("=")[1];
            //评论举报
        } else if (reportType == 'comments') {
            var typeId = $(event.currentTarget).parents('li').attr('cid');
            console.log(typeId)
            //回复举报
        } else if (reportType == 'reply') {
            var typeId = window.location.search.split("=")[1];
        }

        $('#report_submit').click(function () {
            var reportReson = $(this).parents('div').siblings('div').find('#report_message').val();
            var payload = {
                userToken: window.sessionStorage.getItem("usertoken"),
                reportType: reportType,
                typeId: typeId,
                reportReson: reportReson
            }
            console.log(payload)
            API.get("community/save/report", JSON.stringify(payload)).then((response) => {
                console.log(response);
            })
        })
    } else {
        alert('请先登录')
    }

}



//个人首页点击左侧菜单栏跳转至相应信息页面
Community.renderTab = function (classname, event) {
    // console.log(event)
    $(event.target).addClass('t-menu-on');
    $(event.target).parents('li').siblings('li').find('a').removeClass('t-menu-on');

    $('.personal-item').find('.' + classname).show();
    Community.collectionList();
    $('.personal-item').find('.' + classname).siblings('div').hide();
}

// 收藏夹的收藏项目
Community.collectionList = function () {
    $('.collection-item .list').html('');
    var url = "community/listcollection";
    var payLoad = {
        communityToken: window.sessionStorage.getItem("communityToken")
    };
    API.get(url, JSON.stringify(payLoad)).then(function (data) {
        console.log(data);
        if (data.collections.length == 0) {
            $('.personal-item .no-result').show();
        } else {
            for (var key in data.collections) {
                var collect_li = `
                <li class="ezblock-item">
                    <a title="" target="_blank" href="../community/project_details.html?pid=${data.collections[key].pid}">
                        <span class="img-box"><img class="previews" mysrc="" src="${data.collections[key].img}" alt=""
                                width="290" height="180" alt="fads"></span>
                                
                    </a>
                    <div class="card-edit-block">
                                <img src="./images/gengduo.png" class="edit-smallbtn">
                                <div class="filter-list-box">
                                    <ul>
                                        <li class="js-al-edit"><a href="javascript:;">`+ Utils.get_lan('editFavorite') + `</a></li>
                                        <li class="js-al-delete"><a href="javascript:;">`+ Utils.get_lan('btn_delete') + `</a></li>
                                    </ul>
                                </div>
                            </div>
                    <h3><a target="_blank"><span class="icon-recommend yellow"
                                href="#"></span>${data.collections[key].comm_title}</a>
                    </h3>
                    <div class="info">
                        <em><span class="icon-view"></span>1372</em>
                        <em><span class="icon-praise"></span>20</em>
                        <em><span class="icon-comment"></span>4</em>
                    </div>
                    <div class="user">
                        <div class="fr"><span>收藏该作品的时间</span></div>
                        <div class="sjs-name">
                            <a href="./ziliao.html?id=" title="" target="_blank">
                                <img class="previews" src="${data.collections[key].comm_img}" mysrc="" height="120" width="120"
                                    alt="">${data.collections[key].userName}
                            </a>
                        </div>
                    </div>
                </li>
                `
                $('.collection-item .list').append(collect_li);
            }
        }
    })
}

//分享到社区的项目
Community.shareProjects = function () {
    $('.share-item .list').html('');
    var url = "community/projects";
    var payLoad = {
        communityToken: window.sessionStorage.getItem("communityToken")
    };
    API.get(url, JSON.stringify(payLoad)).then(function (data) {
        console.log(data);
        if (data.projectList.length == 0) {
            $('.personal-item .no-result').show();
        } else {
            for (var key in data.projectList) {
                var shareTime = Utils.formatTime(parseInt(data.projectList[key].datetime), 'Y/M/D h:m:s')
                var collect_li = `
                <li class="ezblock-item" pid="${data.projectList[key].id}">
                    <a title="" target="_blank" href="${data.projectList[key].url}">
                        <span class="img-box">
                            <img class="previews" mysrc="" src="" alt="" width="290" height="180" alt="fads">
                        </span>
                    </a>
                    <div class="card-edit-block">
                    <img src="./images/gengduo.png" class="edit-smallbtn">
                    <div class="filter-list-box">
                        <ul>
                        <li class="js-al-edit"><a href="javascript:;">`+ Utils.get_lan('editFavorite') + `</a></li>
                        <li class="js-al-delete"><a href="javascript:;">`+ Utils.get_lan('btn_delete') + `</a></li>
                        </ul>
                    </div>
                </div>
                    <h3><a target="_blank"><span class="icon-recommend yellow" href="#"></span>${data.projectList[key].title}</a>
                    </h3>
                    <div class="info">
                        <em><span class="icon-view"></span>1372</em>
                        <em><span class="icon-praise"></span>20</em>
                        <em><span class="icon-comment"></span>4</em>
                    </div>
                    <div class="user">
                        <div class="fr"><span>${shareTime}</span></div>
                        <div class="sjs-name">
                            <a href="./ziliao.html?id=" title="" target="_blank">
                                <img class="previews" src="" mysrc="" height="120" width="120"
                                    alt="">作者
                            </a>
                        </div>
                    </div>
                </li>
                `
                $('.share-item .list').append(collect_li);
            }
        }
    })
}


//点击访问用户首页
Community.renderOthers = function () {
    var payload = {
        communityToken: window.sessionStorage.getItem('communityToken'),
        access: window.location.search.split("=")[1]
    }
    console.log(payload);
    API.get("community/memberportal", JSON.stringify(payload)).then((data) => {
        console.log(data);
        if (data.status == 'true') {
            $(".myavator").parents('a').attr('href', './ziliao.html' + '?access=' + Community.accessID);
            $('.wrap .user-infos .myavator').attr('src', data.member.img);
            $('.wrap .user-infos .name a').html(data.member.userName);
            $('.wrap .user-infos .name').attr('lid', data.member.id);
            $('.ranking .item:eq(2) span').html(data.subscribeabout.count);
            if (data.subscribeabout.state == '1') {
                $('.user-homepage .btn-gz').addClass('dis').html(Utils.get_lan('focused'));
            } else if (data.subscribeabout.state == '2') {   //自己不能关注自己
                $('.user-homepage .btn-gz').addClass('disabled');
            }
            $('.user-basedata .box-info .username .info span').html(data.member.userName);
            $('.user-basedata .box-info .intro .info span').html(data.member.intro);
            $('.user-basedata .box-info .sex .info span').html(data.member.sex);
            $('.user-basedata .box-info .country .info span').html(data.member.address);
            $('.user-basedata .box-info .age .info span').html(data.member.age);
            $('.user-basedata .box-info .job .info span').html(data.member.job);
        }
    })
}



//获取用户所有的项目列表(原创作品)
Community.getOwnProject = function () {
    $('.personal-item .myown-item .list').html('');
    var url = "project/serach";
    var payLoad = {
        communityToken: window.sessionStorage.getItem("communityToken"),
        keywords: ""
    };
    API.get(url, JSON.stringify(payLoad)).then(function (data) {
        console.log(data);
        if (data.projectList.length == 0) {
            // $('.personal-item .no-result').show();
        } else if (data.status == "true") {
            for (var key in data.projectList) {
                var datetime = Utils.formatTime(parseInt(data.projectList[key].datetime), 'Y/M/D h:m:s')
                var collect_li = `
                <li class="ezblock-item" pid="${data.projectList[key].id}">
                    <a title="" target="_blank">
                        <span class="img-box">
                            <img class="previews" mysrc="" src="" alt="" width="290" height="180" alt="fads">
                        </span>
                    </a>
                    <div class="card-edit-block">
                    <img src="./images/gengduo.png" class="edit-smallbtn">
                    <div class="filter-list-box">
                        <ul>
                        <li class="js-al-edit"><a href="javascript:;">`+ Utils.get_lan('editFavorite') + `</a></li>
                        <li class="js-al-delete"><a href="javascript:;">`+ Utils.get_lan('btn_delete') + `</a></li>
                        </ul>
                    </div>
                </div>
                    <h3><a target="_blank"><span class="icon-recommend yellow" href="#"></span>${data.projectList[key].name}</a>
                    </h3>
                    <div class="info">
                        <em><span class="icon-view"></span>1372</em>
                        <em><span class="icon-praise"></span>20</em>
                        <em><span class="icon-comment"></span>4</em>
                    </div>
                    <div class="user">
                        <div class="fr"><span>${datetime}</span></div>
                        <div class="sjs-name">
                            <a href="./ziliao.html?id=" title="" target="_blank">
                                <img class="previews" src="" mysrc="" height="120" width="120"
                                    alt="">${data.projectList[key].paltform}
                            </a>
                        </div>
                    </div>
                </li>
                `
                $('.share-item .list').append(collect_li);
            }
        }
    })
}
