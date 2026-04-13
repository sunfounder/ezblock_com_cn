var downloadRas = {};

downloadRas.getdown = function(){
    // console.log('下载ras，判断国家');
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST','https://ezblock.cc:11000/api/web/v2/ezblock/member/country',true);
    httpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            var countryData = httpRequest.response
            var countryObj = JSON.parse(countryData);
            var countryItem = countryObj.data;
            console.log(countryObj);
            downloadRas.getApi(countryItem);
        }
    }
    httpRequest.send("");   
}

downloadRas.getApi = function(data){
    console.log(data);
    if(data == "China"){
        // window.location = "https://ezblock.com.cn/Raspberry/images/2020-05-27-raspios-buster-lite-armhf-ezblock-v2.0.8.zip";
        // window.location = "https://sunfounder.s3.amazonaws.com/sunfounder/2020-05-27raspios-buster-lite-armhf-ezblock-v2.0.8.zip";
        window.location = "http://ezblock.com.cn/ezblock_studio/index.html?lang=zh-han&distributor=mammoth"
        console.log('国内');
    }else{
        // window.location = "https://ezblock.cc/Raspberry/images/2020-05-27-raspios-buster-lite-armhf-ezblock-v2.0.8.zip";
        // window.location = "https://sunfounder.s3.amazonaws.com/sunfounder/2020-05-27raspios-buster-lite-armhf-ezblock-v2.0.8.zip";
        window.location = "http://ezblock.cc/ezblock_studio/index.html?lang=en"
        console.log('国外');
    }
}