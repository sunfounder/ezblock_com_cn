var Userinfo = {};


$(function () {
    // 进入页面,判断登录与否
    if (Sign.isLogin()) {
        $(".mask").hide();
        Personal.getUserInfo();
    } else {
        $(".mask").show();
    }

    // 关闭弹窗
    $('.closeIframe').click(function () {
        if (Sign.isLogin()) {
            $(".mask").hide();
            Personal.getUserInfo();
            Nav.loginCheck();
        } else {
            window.history.back(-1)
        }
    })
})


//个人首页点击左侧菜单栏跳转至相应信息页面
Userinfo.renderTab = function (classname, event) {
    // console.log(event)
    $(event.target).addClass('cur');
    $(event.target).siblings('li').removeClass('cur');

    $('.user-right').find('.' + classname).show();
    $('.user-right').find('.' + classname).siblings('div').hide();
}

Userinfo.renderLefttab = function (classname, event) {
    $(event.target).addClass('cur');
    $(event.target).parents('li').siblings('li').find('a').removeClass('cur');

    $('.user-right').find('.' + classname).show();
    $('.user-right').find('.' + classname).siblings('div').hide();
}

// 个人收藏夹
Userinfo.collection = function () {
    $('.collection-content .user-right .user-collection ul').html('');
    var url = "community/listcollection";
    var payLoad = {
        communityToken: window.sessionStorage.getItem("communityToken")
    };
    API.get(url, JSON.stringify(payLoad)).then(function (data) {
        console.log(data);
        if (data.collections.length == 0) {
            $('.personal-item .no-result').show();
        } else {
            $('.collection-content .user-right .myclollectionNum').html(data.collections.length)
            for (var key in data.collections) {
                var collect_li = `
                <li class="ezblock-item">
                <a title="" target="_blank" href="./project_details.html?${data.collections[key].comm_id}">
                    <img class="previews img-box" mysrc="" src="./images/E_banner.jpg" alt=""
                        height="150px" width="100%">
                </a>
                <div class="ezblock-item-info">
                    <h3><a target="_blank"><span class="icon-recommend yellow"
                                href="./project_details.html?comm_id=1"></span>&nbsp;&nbsp;${data.collections[key].comm_title}</a>
                    </h3>
                    <div class="info">
                        <em><span class="icon-view"></span>1372</em>
                        <em><span class="icon-praise"></span>20</em>
                        <em><span class="icon-comment"></span>4</em>
                    </div>
                    <div class="user">

                        <div class="sjs-name">
                            <a href="./ziliao.html?id=1" title="Circusmans" target="_blank">
                                <img class="previews" src="${data.collections[key].img}" mysrc="" alt="">
                                <span style="line-height: 38px;">${data.collections[key].userName}</span>
                                <span class="fr" style="margin-top: 9px">07/12</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
                `
                $('.collection-content .user-right .user-collection ul').append(collect_li);
            }
        }
    })
}

//个人点赞的项目
Userinfo.likeProject = function () {
    $('.focus-content .user-right .user-focusProject ul').html('');
    var url = "community/likes";
    var payLoad = {
        communityToken: window.sessionStorage.getItem("communityToken")
    };
    API.get(url, JSON.stringify(payLoad)).then(function (data) {
        console.log(data);
        if (data.list.length == 0) {
            $('.personal-item .no-result').show();
        } else {
            $('.focus-content .user-right .myclollectionNum').html(data.list.length)
            for (var key in data.list) {
                var likeProject_li = `
                <li class="ezblock-item">
                <a title="" target="_blank" href="./project_details.html?${data.list[key].comm_id}">
                    <img class="previews img-box" mysrc="" src="./images/E_banner.jpg" alt=""
                        height="150px" width="100%">
                </a>
                <div class="ezblock-item-info">
                    <h3><a target="_blank"><span class="icon-recommend yellow"
                                href="./project_details.html?comm_id=1"></span>&nbsp;&nbsp;${data.list[key].comm_title}</a>
                    </h3>
                    <div class="info">
                        <em><span class="icon-view"></span>1372</em>
                        <em><span class="icon-praise"></span>20</em>
                        <em><span class="icon-comment"></span>4</em>
                    </div>
                    <div class="user">

                        <div class="sjs-name">
                            <a href="./ziliao.html?id=1" title="Circusmans" target="_blank">
                                <img class="previews" src="${data.list[key].img}" mysrc="" alt="">
                                <span style="line-height: 38px;">${data.list[key].userName}</span>
                                <span class="fr" style="margin-top: 9px">07/12</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
                `
                $('.focus-content .user-right .user-focusProject ul').append(likeProject_li);
            }
        }
    })
}