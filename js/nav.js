Nav = {};


$(function () {
  Nav.loadHeader();
  window.onload = function () {
    Nav.loginCheck();
  }
  // 登陆后头像下拉
  $('.logined').hover(function () {
    $('.logined .menu-list').removeClass('hide')
  }, function () {
    $('.logined .menu-list').addClass('hide')
  })
  //当指针穿过元素时
  $('.logined .menu-list').mouseenter(function () {
    $('.logined .menu-list').removeClass('hide')
  });

  //头部导航栏
  $(window).scroll(function () {
    if ($(document).scrollTop() >= 200) {
      $('.nav-wrap').addClass('active').slideDown(500);
    } else {
      $('.nav-wrap').removeClass('active');
    }
  });
  $('nav.mobile-nav .nav-control').click(function () {
    // $(this).find('.open').toggle(); $(this).find('.close').toggle();
    $('.mobile-nav').toggleClass('active');
    $('.mobile-nav li').toggleClass('active');
    $('.mobile-nav .nav-content-wrap').toggle();
  })

  // // 鼠标移入移出头像显示下拉列表
  // $('.loginhead').mouseover(function () {
  //     $(this).addClass('hover').find('.avatar-info').show();
  // })
  //     .mouseout(function () {
  //         $(this).removeClass('hover').find('.avatar-info').hide();
  //     });
  // $('.avatar-info').mouseover(function () {
  //     $(this).show();
  // })
  //     .mouseout(function () {
  //         $(this).hide();
  //     });



});

//小屏导航栏
(function ($) {
  $(document).ready(function () {
    $(window).load(function () {
      if (($(".header.fixed").length > 0)) {
        if (($(this).scrollTop() > 0) && ($(window).width() > 767)) {
          $("body").addClass("fixed-header-on");
        } else {
          $("body").removeClass("fixed-header-on");
        }
      };
    });
    //Scroll Spy
    //-----------------------------------------------
    if ($(".scrollspy").length > 0) {
      $("body").addClass("scroll-spy");
      $('body').scrollspy({
        target: '.scrollspy',
        offset: 152
      });
    }

    //Smooth Scroll
    //-----------------------------------------------
    if ($(".smooth-scroll").length > 0) {
      $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 151
            }, 1000);
            return false;
          }
        }
      });
    }

    // Animations
    //-----------------------------------------------
    if (($("[data-animation-effect]").length > 0) && !Modernizr.touch) {
      $("[data-animation-effect]").each(function () {
        var $this = $(this),
          animationEffect = $this.attr("data-animation-effect");
        if (Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
          $this.appear(function () {
            setTimeout(function () {
              $this.addClass('animated object-visible ' + animationEffect);
            }, 10);
          }, { accX: 0, accY: -130 });
        } else {
          $this.addClass('object-visible');
        }
      });
    };

    // Isotope filters
    //-----------------------------------------------
    if ($('.isotope-container').length > 0) {
      $(window).load(function () {
        $('.isotope-container').fadeIn();
        var $container = $('.isotope-container').isotope({
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          transitionDuration: '0.01s',
          filter: "*"
        });
        // filter items on button click
        $('.filters').on('click', 'ul.nav li a', function () {
          var filterValue = $(this).attr('data-filter');
          $(".filters").find("li.active").removeClass("active");
          $(this).parent().addClass("active");
          $container.isotope({ filter: filterValue });
          return false;
        });
      });
    };



  }); // End document ready
})(this.jQuery);


Nav.loadHeader = function () {
  var headerContent = `<div class="nav-wrap row" style="margin: 0">
    <div class="container">
        <nav class="pc-nav">
            <div class="logo white">
                <a href="../index.html"><img src="../images/logo_w.png" alt=""></a></div>
            <div class="nav-content-wrap">
                <ul>
                    <li><a href="../../index.html" set-lan="html:home"></a></li>
                    <li><a href="../../download/v31.html" set-lan="html:download_app"> </a></li>
                    <li class="shop"><a href="https://www.sunfounder.com" set-lan="html:shop"></a></li>
                    <li><a href="../../about/about_us.html"><span set-lan="html:aboutus"></span></a></li>
                    <li><a href="../../about/helpLink.html"><span set-lan="html:help"></span></a></li>
                    <!--<li><a href="../../community/community.html" set-lan="html:community"></a></li>-->
                    <li class="dropdown language" onclick="$('.sub-menu').toggle()"><a href="#"><span
                                set-lan="html:language"></span><i class="fa fa-angle-down"></i></a>
                        <ul role="menu" class="sub-menu">
                            <li class="chinese" onclick="setCookie('lan','cn');location.reload()"><a lang="zh"
                                    set-lan="html:chinese"></a></li>
                            <li class="english" onclick="setCookie('lan','en');location.reload()"><a lang="en"
                                    set-lan="html:english"></a></li>
                        </ul>
                    </li>

                </ul>
                <!--<div class="unlogin">
                    <a href="javascript:;" target="_self">
                        <button class="btn btn-login">登录</button>
                    </a>
                </div>
                <div class="logined hide">
                    <div class="login-avatar">
                        <a href="./userinfo/index.html" class="user-list">
                        <img src="./images/avatar.png" alt="" width="40px">
                        </a>
                    </div>
                    <div class="menu-list user-box hide">
                    <section>
                        <a href="">名字</a>
                    </section>
                    <div class="user-box-list">
                        <div class="user-box-list-area">
                        <p class="user-box-list-item"><a href="">我的关注</a></p>
                        <p class="user-box-list-item"><a href="">我的收藏</a></p>
                        <p class="user-box-list-item"><a href="">我的粉丝</a></p>
                        </div>
                        <div class="user-box-list-area">
                        <p class="user-box-list-item"><a href="javascript:;" onclick="Personal.deleteUsertoken()">退出登录</a></p>
                        </div>
                    </div>-->
                    </div>
            </div>
        </nav>

        <nav class="mobile-nav">
            <div class="logo white">
                <a href="index.html"><img src="./images/logo_w.png" alt=""></a>
                <div class="nav-control">
                    <i class="fa fa-bars open"></i>
                    <i class="fa fa-close close"></i>
                </div>
            </div>
            <div class="nav-content-wrap">
                <ul>
                    <li style="animation-delay: 0ms;"><a href="../../index.html" set-lan="html:home"></a></li>
                    <li style="animation-delay: 30ms;"><a href="../../download/v31.html" set-lan="html:download_app">
                        </a></li>
                    <li style="animation-delay: 60ms;"><a href="https://www.sunfounder.com"
                            set-lan="html:shop"></a></li>
                    <li style="animation-delay: 90ms;"><a href="../../about/about_us.html"><span
                                set-lan="html:aboutus"></span></a></li>
                    <li style="animation-delay: 120ms;" class="dropdown language"
                        onclick="$('.sub-menu').toggle()"><a href="#"><span set-lan="html:language"></span><i
                                class="fa fa-angle-right" style="float: right"></i></a>
                        <ul role="menu" class="sub-menu">
                            <li class="chinese" style="animation-delay: 150ms;"
                                onclick="setCookie('lan','cn');location.reload()"><a lang="zh"
                                    set-lan="html:chinese"></a></li>
                            <li class="english" style="animation-delay: 150ms;"
                                onclick="setCookie('lan','en');location.reload()"><a lang="en"
                                    set-lan="html:english"></a></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </nav>
    </div>
</div>
    `

  var footerContent = ` <div class="container">
    <div class="row">
        <div class="col-sm-12 text-center bottom-separator">
            <img src="../images/underline.png" class="img-responsive inline" alt="">
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="testimonial bottom">
                <h2 set-lan="html:footer_company"></h2>
                <address>
                    <a href="../../about/about_us.html" target="_blank" set-lan="html:footer_about_us"></a> <br>
                    <a href="#" target="_blank" set-lan="html:footer_sitemap"></a> <br>
                </address>
                <h2 set-lan="html:footer_term_of_use"></h2>
                <address>
                    <a href="../../about/property.html" target="_blank" set-lan="html:footer_property"></a> <br>
                    <a href="../../about/privacy.html" target="_blank" set-lan="html:footer_privacy"></a> <br>
                    <a href="../../about/serviceterms.html" set-lan="html:footer_serviceterms"></a> <br>
                </address>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="contact-info bottom">
                <h2 set-lan="html:footer_contact"></h2>
                <address>
                    <span set-lan="html:footer_email"></span>: <a href="mailto:someone@example.com">support@sunfounder.com</a> <br>
                    <span set-lan="html:footer_phone"></span>: +86 0755 23713058<br>
                </address>

                <h2 set-lan="html:footer_address">Address</h2>
                <address set-lan="html:footer_address_road" style="word-break: break-word;"></address>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="contact-form bottom">
                <h2 set-lan="html:footer_message"></h2>
                <div class="form-group">
                        <input type="email" name="email" class="form-control email" required="required"
                            placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="text" name="subject" class="form-control subject" required="required"
                            placeholder="Your subject here">
                    </div>
                    <div class="form-group">
                        <textarea name="message" id="message" required="required" class="form-control" rows="8"
                            placeholder="Your text here"></textarea>
                    </div>
                    <div class="form-group" onclick="Ezblock.sendEmail()">
                        <input type="submit" name="submit" class="btn btn-submit" value="Submit">
                    </div>
            </div>
        </div>
        <div class="col-sm-12">
            <div class="copyright-text text-center">
                <p>&copy; 2012-2019 Sunfounder.com</p>
                <p>All Rights Reserved.</p>
            </div>
        </div>
    </div>
</div>`
  $('#header').html(headerContent);
  $('#footer').html(footerContent);
}



//判断用户登录与否，切换导航
Nav.loginCheck = function () {
  if (Sign.isLogin()) {
    $(".mask").addClass('hide');
    $('.unlogin').addClass('hide');
    $('.logined').removeClass('hide');
    Personal.getUserInfo();
  } else {
    $(".mask").removeClass('hide');
    $('.unlogin').removeClass('hide');
    $('.logined').addClass('hide')
  }

} 
