//定义常见问题对象
var Faq = {};

//定义常见问题id
Faq.id = "faq";

//当前页号
Faq.pageno = 1;

//每页消息条数
Faq.pagesize = 8;



$(function () {
    Faq.getMessage(Faq.getAllMsgUrl, '');

    $('#query').keydown(function (e) {
        console.log(e)
        if (e.keyCode == 13) {
            console.log("asdad");
            Faq.getMessage(Faq.getAllMsgUrl, $('#query').val())
        }
    });
    $('#query').change(function () {
        if (this.value == '') {
            Faq.getMessage(Faq.getAllMsgUrl, '')
        };
    })

})

/**
 * ajax获取常见问题内容
 * @参数1{string} url 获取faq信息接口地址
 *  参数2{string} keyword 搜索关键字，若为空则默认显示所有信息
 */
Faq.getMessage = function (url, keyword) {
    var url = "faqs/list";          //新接口
    var payload = {
        keyword: "",
        distributor: "sunfounder"
    }

    // var url = "faqs/info";
    // var payload = {
    //     'accessToken': '123',
    //     'keyword': keyword
    // }
    // API.get(url, payload).then(function (data) {

    API.get(url, JSON.stringify(payload)).then(function (data) {
        console.log(data);
        Faq.message = [];
        $('.article-list').html('');
        for (var key in data.faqList) {
            Faq.message.push(key + ',' + data.faqList[key])
        }
        if (Faq.message.length > 0) {
            Faq.pageLength = Faq.message.length;//消息总条数
            if (Faq.pageLength % Faq.pagesize == 0) {
                Faq.pageall = Faq.pageLength / Faq.pagesize;//消息总页数
            } else {
                Faq.pageall = parseInt(Faq.pageLength / Faq.pagesize) + 1;
            }
            var page_num = $('.pageNum').html()
            if (page_num) {
                Faq.changePageNo(page_num);
            } else {
                Faq.changePageNo(1);
            }
            // $('.faqCont .faqPage').show();
            // $('.faqPage .pager').show();
            // $('.faqAnswer').hide();
        } else {
            $('.article-list').html('No results found.')
        }
    });
    return Faq.message;
}

/**
 * faq详细信息内容，点击列表进入查看
 * @参数{string} id 
 */
Faq.answer = function (id) {
    Faq.answerUrl = 'faqs/Info';
    Faq.answerPayload = {
        faqId: window.location.search.split("=")[1]
    }

    // Faq.answerUrl = 'faqs/con';
    // Faq.answerPayload = {
    //     'accessToken': '123',
    //     'id': window.location.search.split("=")[1]
    // }
    // API.get(Faq.answerUrl, Faq.answerPayload).then(function (data) {

    API.get(Faq.answerUrl, JSON.stringify(Faq.answerPayload)).then(function (data) {
        console.log(data)
        // $('.faqContent').css('backgroundColor', '#f4f4f4')
        $('.article-info').html(
            `
            <div class="question">
                <span>Q:</span><li>${data.context.question}</li>
            </div>
            <div class="answer">
                <span>A:</span><li>${data.context.answer}</li>
            </div>
           
			`
        )
    })
}

/**
 * faq选择页号进入相应页面内容
 * @参数{string} page页号 
 */
Faq.changePageNo = function (page) {
    if (page < 1) {
        page = 1;
    }
    if (page > Faq.pageall) {
        page = Faq.pageall;
    }
    $('.article-list').html('');//点击切换下一页时清空ul中的消息
    for (var i = 0; i < Faq.pagesize; i++) {
        var id = Faq.message[(page - 1) * Faq.pagesize + i].split(',')[0];
        var question = Faq.message[(page - 1) * Faq.pagesize + i].split(',')[1];

        var newLi =
            `
            <li class="article-list-item  article-promoted" onclick="javascript:this.firstElementChild.style.color='rgb(178,178,178)';Faq.answer(${id})">
                <a href="./FAQ-detail.html?id=${id}" class="article-list-link" onclick="javascript:this.style.color='rgb(178,178,178)';">${question}</a>
                <img src="./images/right_arrow_icon.png"></img>
            </li>
		`
        $('.article-list').append(newLi);//重新添加新的消息内容
        if (Faq.message[(page - 1) * Faq.pagesize + i + 1] == null)
            break;//超出范围跳出
    }
    $('.pageNum').html(page)
    if (page == 1) {
        $('.prevMsg').disable = true;
        $('.nextMsg').show();
    }
    if (page == Faq.pageall) {
        $('.nextMsg').disable = true;
        $('.prevMsg').show();
    }
    if (Faq.pageall == 1 && page == Faq.pageall) {
        $('.prevMsg').disable = true;
        $('.nextMsg').disable = true;
    }
}

window.onload = function () {
    Faq.answer();
}






