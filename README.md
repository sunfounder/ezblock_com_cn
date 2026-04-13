

## b版本更新

1. 将zip文件拉取到 `ezblock.cc/fileUpload` 
2. 在 `version_test31.json` 文件中添加版本号  版本号和发过来的同名  记得提交
3. 通知已经放入
4. 右击刚放入的zip文件，点击Uplod 上传
5. 右击version_test31.json，点击Uplod 上传
6. 等通知测试通过  在  version31.json 添加版本号  记得提交

## 网站更新

1. 在语言中(msg)复制上一份，把内容更新，再把之前的 latest 改成版本号
2. 中英文都要提交
3. 在 download => release_notes_Beta.text 文件中添加更新信息，注意格式
4. 提交

## APK更新
1. 进入到`download/app`文件下，把打包好的APK复制进来并按照格式修改名称，旧的APK不删除
2. 进入到`download_app_v31.html`中，找到第52行修改对应的地址
3. 上传`download_app_v31.html` 和复制进来的APK
4. 测试显示404需要把apk先上传
5. 上传完成通知测试

## ezblock.cc 服务器

地址：47.251.17.137
用户名：root
密码：ezblock_20230417

## 课程文档界面修改

在 `ezblock.cc/readDocFile` 中，`custom_bak.js` 和 `custom_bak.css` 是页面的备份文件

## app_v2

`app_v2`文件是 mammoth-coding 和 sunfounder_controller APK下载地址
