/**
 * Created by admin on 2018/8/30.
 */
var cpmBox = $('#cpmboxctn .cpmbox');
var getImgs = {}, allImages = $('.zoom');
//allImages.wrap("<div class='cpimgbox'></div>");

findImg = function(src){
    if(getImgs[src]){
        return getImgs[src];
    }
    for (var i = allImages.length - 1; i >= 0; i--) {
        if(src.indexOf($(allImages[i]).attr('data-path')) > -1){
            getImgs[src] = allImages[i];
            return allImages[i];
        }
    }
    return false;
}

var addPost = function(post, cmt, img, count){
    if(img.width() < 2){
        if(count < 100){
            return setTimeout(function(){
                addPost(cmt, img, count+1);
            }, 500);
        }else{
            console.warn("[cpic] Cannot found image.");
        }
    }
    var corpImg = $('<img>')
        .attr('src', cmt.img)
        .css('top', (-cmt.y) + 'px')
        .css('left', (-cmt.x) + 'px');
    var corpCnt = $('<div class="cpshowimg">')
        .width(cmt.w).height(cmt.h)
        .append(corpImg);
    post.append(corpCnt);
}

var addBox = function(cmt){
    var img = findImg(cmt.img);
    // alert(cmt.img);
    // console.log(cmt.img.width())
    if(!img){
        console.warn("[cpic] Cannot find comment image " + cmt.img);
        return false;
    }
    img = $(img);
    //插入点评
    var box = cpmBox.clone();
    box.find('.ava').css('background-image', 'url("' + cmt.avator + '")');
    var cmtText = $('<span>').text(cmt.message);
    var cmtAuthor = $('<a class="author">').text(cmt.author);
    if(cmt.authorid > 0){
        cmtAuthor.attr('href', '/space-uid-' + cmt.authorid+".html")
        cmtAuthor.attr('target', '_blank');
    }
    box.find('.cmt').append(cmtAuthor).append(cmtText);
    box.find('.rpl a').click(function(){
        $('#pid'+cmt.pid).find('.com-box').find('.info').find('.btn-box').find('.btn-replay').click();
        console.log(cmt);
        $('#rpsubmit').attr('tid',cmt.tid);
        $('#rpsubmit').attr('pid',cmt.pid);
        $('#rpsubmit').attr('tusername',cmt.author);
        $('#rpsubmit').attr('tuid',cmt.authorid);
        $('#rpsubmit').attr('fid',fid);
       // showWindow('reply', 'forum.php?mod=post&action=reply&fid=' + fid + '&tid=' + tid + '&repquote=' + cmt.pid);
    });
    box.width(cmt.w);
    box.height(cmt.h);
    box.css('top', (parseInt(cmt.y)/* + img.position().top*/) + 'px');
    box.css('left', (parseInt(cmt.x)/* + img.position().left*/) + 'px');
    box.find('.fold').css('top', cmt.h + 'px');
    box.attr('data-src', findImg(cmt.img).src);
    //box.hide();
    box.hover(function(){
        isInBox = true;
        $(this).find('.fold').show();
    }, function(){
        isInBox = false;
        $(this).find('.fold').hide();
    });
    img.parent().append(box);
    //$(".cpmbox").show();
    //寻找对应帖子
    var post = $('#pid' + cmt.pid).find(".com-box").eq(0).find(".info");
    if(post.length < 1){
        console.warn("[cpic] Cannot find post message dom.");
    }else{
        addPost(post, cmt, img, 0);
    }
}