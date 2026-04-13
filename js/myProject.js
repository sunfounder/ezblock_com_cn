// var MyProject = {};

// $(function () {
//     var payload = {
//         'accessToken': '123',
//         userToken: window.sessionStorage.getItem('usertoken'),
//     }
//     API.get('users/member', payload).then(function (getUserInfo) {
//         var info = getUserInfo.userInfo;
//         console.log(info)
//         var arr = ['name', 'sex', 'age', 'country', 'job', 'email', 'img'];
//         var obj = {};
//         for (var i = 0; i < arr.length; i++) {//个人信息页信息详情，判断用户填写的信息有哪些，如果是arr数组中的某一项就显示出来
//             for (var key in info) {
//                 if (arr[i] == key) {
//                     obj[key] = info[key];
//                 }
//             }
//         }
//         if (obj.name) {
//             $('.user-infos .name a').html(obj.name);
//         }
//         if (obj.img) {
//             $('.user-infos .myavator').attr('src', info.img);
//         }
//     });
// })

// /**
//  * Myproject加载项目func
//  * @param {Object} _this_ DOM对象
//  */
// MyProject.loadProject = function (_this_) {
//     if (MyProject.projectLoading) {
//         var self = this;
//         var itemName = $(_this_)
//             .find(".text-center")
//             .find(".myProject-main-item-name")
//             .html();
//         if (localStorage.projectList) {
//             var projectList = JSON.parse(localStorage.projectList);
//         }
//         if ($(_this_).attr("isLocal") == "true") {
//             self.load(projectList[itemName]);
//             self.projectLoading = false;
//             return false;
//         }
//         if (window.navigator.onLine && EzBlock.userToken != "") {
//             Utils.loading(true);
//             API.get("projects/getinfo", {
//                 accessToken: "123",
//                 name: itemName,
//                 userToken: EzBlock.userToken
//             }).then(
//                 function (data) {
//                     console.log(data);
//                     if (data.status == true) {
//                         self.load(data["project"]["project"]);
//                         self.projectLoading = false;
//                     }
//                 },
//                 function (err) {
//                     console.log(err);
//                 }
//             );
//         } else {
//             Utils.loading(false);
//             Utils.messageModal('please check you network');
//         }
//         $("body").off();
//     }
// };

// /**
//  * 渲染项目列表
//  * @param {string} search 搜索内容关键字
//  * style=\"background-image: url('./img/" + _this.list[key][i]["platform"] + ".png')\"
//  */
// MyProject.renderProject = function (search, projectKey) {
//     this.unRender();
//     this.list = {};
//     var _this = this;
//     async function _renderProject() {
//         _this.getLocalProject(search);
//         if (window.navigator.onLine && EzBlock.userToken != '') {
//             Utils.loading(true);
//             await _this.getRemoteProject(search);
//         }
//         _this.unRender();
//         var str = `<ul class="myProject-main-list">`;
//         for (var key in _this.list) {
//             $('.myProject-main').append(`<h2 class="myProject_cate">${MSG["project" + firstUpperCase(key)]}</h2>`);
//             for (var i in _this.list[key]) {
//                 var productObj = window[firstUpperCase(_this.list[key][i]['product'])];
//                 if (distributor.Category.Boards.indexOf(firstUpperCase(_this.list[key][i]['product'])) != -1) {
//                     var mainImg = `./packages/${productObj['id']}/img/${productObj['id']}`;
//                 } else {
//                     var mainImg = `./products/${productObj['id']}/img/${productObj['id']}`;
//                 }


              
//             //     <li class="ezblock-item">
//             //     <a title="" target="_blank" href="">
//             //         <span class="img-box"><img class="previews" mysrc="" src="./images/E_banner.jpg" alt="" width="290" height="180" alt="fads"></span>
//             //     </a>
//             //     <h3><a target="_blank"><span class="icon-recommend yellow"
//             //                 href="#"></span>&nbsp;&nbsp;的撒法法师的</a>
//             //     </h3>
//             //     <div class="info">
//             //         <em><span class="icon-view"></span>1372</em>
//             //         <em><span class="icon-praise"></span>20</em>
//             //         <em><span class="icon-comment"></span>4</em>
//             //     </div>
//             //     <div class="user">
//             //         <div class="fr"><span>安达市大所</span></div>
//             //         <div class="sjs-name">
//             //             <a href="./ziliao.html?id=${projectObject.id}" title="Circusmans" target="_blank">
//             //                 <img class="previews" src="./images/avatar.png" mysrc="" height="120" width="120"
//             //                     alt="">名字
//             //             </a>
//             //         </div>
//             //     </div>
//             // </li>
//                 str +=
//                     '<li class="ezblock-item"><img class="myProject-close" data-id="' +
//                     _this.list[key][i]["name"] +
//                     '" src="./img/delete_icon.png"><div class="myProject-main-item-img"><img style="width:80%" src=\'' +
//                     mainImg +
//                     '.png\'></div><div class="text-center"><span class="myProject-main-item-name">' +
//                     _this.list[key][i]["name"] +
//                     '</span><div class="myProject-main-item-icon"><img src=\'./img/' +
//                     _this.list[key][i]["platform"] +
//                     ".png'></div></div></li>";
//             }
//             str += '</ul>'
//             $('.myProject-main').append(str);
//             str = `<ul class="myProject-main-list">`;
//         }
//         _this.event(".myProject-main-item");
//         _this.resize();
//         _this.deleteProject();
//         _this.cancelDelete();
//     }
//     async function _renderProject_mobile() {
//         if (projectKey == 'local') {
//             _this.getLocalProject(search);
//         } else if (projectKey == 'remote') {
//             _this.getLocalProject(search);
//             if (window.navigator.onLine && EzBlock.userToken != '') {
//                 Utils.loading(true);
//                 await _this.getRemoteProject(search);
//             }
//         }
//         _this.unRender();
//         var str = `<ul class="myProject-main-list">`;
//         if (document.documentElement.clientWidth < document.documentElement.clientHeight) {
//             if (projectKey) {
//                 if (!isEmptyObject(_this.list[projectKey])) {
//                     for (var i in _this.list[projectKey]) {
//                         if (projectKey == 'local') {
//                             str += "<li class=\"myProject-main-item\" isLocal= " + true + "><img class=\"myProject-close\" data-id=\"" + _this.list[projectKey][i]["name"] + "\" src=\"./img/\delete_icon.png\"><div class=\"myProject-main-item-img\"><img src='./img/" + _this.list[projectKey][i]["platform"] + ".png'></div><div class=\"text-center\"><span class=\"myProject-main-item-name\">" + _this.list[projectKey][i]["name"] + "</span><div class=\"myProject-main-item-icon\"><img src='./img/" + _this.list[projectKey][i]["platform"] + ".png'></div></div></li>"
//                         } else {
//                             str += "<li class=\"myProject-main-item\"><img class=\"myProject-close\" data-id=\"" + _this.list[projectKey][i]["name"] + "\" src=\"./img/\delete_icon.png\"><div class=\"myProject-main-item-img\"><img src='./img/" + _this.list[projectKey][i]["platform"] + ".png'></div><div class=\"text-center\"><span class=\"myProject-main-item-name\">" + _this.list[projectKey][i]["name"] + "</span><div class=\"myProject-main-item-icon\"><img src='./img/" + _this.list[projectKey][i]["platform"] + ".png'></div></div></li>"
//                         }
//                     }
//                 } else {
//                     str += '';
//                 }
//             }
//             str += '</ul>'
//             $('.myProject-main').append(str);
//             _this.event(".myProject-main-item");
//             _this.resize();
//         }
//     }
//     if (projectKey != undefined) {
//         _renderProject_mobile();
//     } else {
//         _renderProject();
//     }
//     // MyProject.resize();
// };

// /**
//  * 加载需要打开的项目
//  * @param {JSON} project project数据
//  */
// MyProject.load = function (project) {
//     // old version name:
//     let oldBoardName = {
//         raspberrypi: "RaspberryPi",
//         leaf: "Leaf"
//     };
//     this.name = project.name;
//     device = project["device"];
//     if (device in oldBoardName) {
//         device = oldBoardName[device];
//     }
//     Choice.current.device = device;
//     if (project["product"] != undefined) {
//         Choice.current.product = project["product"];
//     }
//     if (project['device'] == "RobotHat") {
//         Choice.current.modules = ["ultrasonic", "2ch-line-follower"]
//     }
//     if (project["iot_token"] != undefined) {
//         iot_token = project["iot_token"];
//     }
//     EzBlock.changePlatform(project["platform"]);
//     Coding.changePlatform(project["platform"]);

//     Coding.load(project);
//     Routing.load(project["route"]);
//     Remote.load(project["remote"]);
//     InternetOfThings.load(project["iot"]);
//     EzBlock.renderPage("coding");
// };

// MyProject.getProject = function (search = "") {
//     var p = new Promise((resolve, reject) => {
//         this.getRemoteProject(search).then(resolve, reject);
//         this.getLocalProject(search);
//     });
//     return p;
// };


// MyProject.getRemoteProject = function (search = "") {
//     var _this = this;
//     // var data = JSON.parse(window.localStorage.getItem('projectList'));
//     return API.get("projects/search", {
//         accessToken: "123",
//         userToken: EzBlock.userToken,
//         keywords: search
//     }).then(
//         function (response) {
//             console.log(response);
//             if (response.status) {
//                 _this.list["remote"] = response.projectList;
//             } else {
//                 _this.list["remote"] = {};
//             }
//         },
//         function (response) {
//             console.log("network error");
//         }
//     );
// };

// MyProject.getLocalProject = function (search = "") {
//     var _this = this;
//     var data = JSON.parse(window.localStorage.getItem("projectList"));
//     this.list["local"] = {};
//     if (search == "") {
//         this.list["local"] = data;
//     } else {
//         if (data === null) {
//             this.list["local"] = {};
//             return false;
//         }
//         var arr = Object.keys(data);
//         for (i in arr) {
//             var name = arr[i];
//             if (name.indexOf(search) != -1) {
//                 this.list["local"][name] = data[arr[i]];
//             }
//         }
//     }
// };

// MyProject.unbindEvent = function () {
//     $(".searchFileInput").off();
// };

// MyProject.unRender = function () {
//     $(".myProject-main").html("");
//     $(".myProject-main-table").html("");
// };

// MyProject.deleteProjectMethod = function (id) {
//     var _this = this;
//     API.get("projects/info", {
//         accessToken: "123",
//         userToken: EzBlock.userToken,
//         name: id,
//         delete: true
//     }).then(
//         function (response) {
//             console.log(response);
//             _this.renderProject();
//         },
//         function (err) {
//             console.log(err);
//         }
//     );
// };

