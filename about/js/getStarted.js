var GetStarted = {};


$(function () {
    GetStarted.show();
})

GetStarted.id = "getStarted"

GetStarted.show = function () {
    var parser = new HyperDown();
    var getStarted = API.getMarkdown('./ezblock2.0-gettingstart.md/ezblock2.0-gettingstart.md');
    var getStarted_html = parser.makeHtml(getStarted);
    $('.getStartedMd').html(getStarted_html);
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
        $(".getStartedHead").hide();
    } else {
        $(".getStartedHead").show();
    }
}

