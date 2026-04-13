//定义api接口对象
var API = {};

// API.url = "http://120.76.250.158:8080/S9510/5845/advanced/api/web/v1/";
// api地址
// API.url = "https://www.ezblock.sunfounder.com/api/web/v1/";  //原服务器
// API.url = "https://www.os.raspad.com/api/web/v1/"

API.url = "https://test2.ezblock.com.cn:11000/api/web/v2/"  //新后台

// API.url = "http://47.56.185.113:8081/api/web/v2/"  //香港服务器
API.githubUrl = "./addPackageSim/";

API.timeout = 5000;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} url api接口地址
 * @param {string} payload 需要传入的参数
 * @return {string} 返回promise对象
 */
API.get = function(url, payload) {
    var p = new Promise(function(reslove, reject) {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: API.url + url, 
            headers: {                                 //新接口需要
                accessToken: 'ezblockStudio'           
            },
            contentType: "application/json; charset=utf-8",
            data: payload,
            tryCount: 0,
            retryLimit: 5,
            timeout: API.timeout,
            success: function(data) {
                reslove(data);
            },
            error: function(xhr,textStatus, error) {
                console.log(xhr,textStatus, error);
                if (xhr.status == 500) {
                    console.log('500')
                    reject(error);
                }
                if(textStatus == 'error'){
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        $.ajax(this);
                    }else {
                        reject(error);
                    }

                }else if (textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        $.ajax(this);
                    }else {
                        reject(error);
                    }

                }else{reject(error);}
            }
        });
    });
    return p;
};

API.getLibs = function(path, name) {
    var p = new Promise(function(resolve, reject) {
        var url = `${path}/${name}`;
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.timeout = API.timeout;
        xmlhttp.onreadystatechange = function(e) {
            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200) {
                    resolve(xmlhttp.response);
                } else {
                    reject(xmlhttp.status);
                }
            }
        };
        xmlhttp.ontimeout = function() {
            reject("timeout");
        };
        xmlhttp.open("get", url, true);
        xmlhttp.send();
    });
    return p;
};

API.getFiles = function(path) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", path, false);
    xmlhttp.send();
    var file = xmlhttp.responseText;
    return file;
};

API.getMarkdown = API.getFiles;

// API.getPackage = function (user, package, name) {
//     path = `${API.githubUrl}/${user}/${package}/master/${name}`;
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open('GET', path, false);
//     xmlhttp.send();
//     var file = xmlhttp.responseText;
//     return file
// }
