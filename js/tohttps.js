var ishttps = window.location.protocol
console.log(ishttps);
console.log(window.location);
if (ishttps === "http:") {
    // 获取url
    var myUrl = window.location.href;
    var newUrl = myUrl.slice(4);
    var toURL = "https" + newUrl;
    //重定位
    window.location.href = toURL;

}