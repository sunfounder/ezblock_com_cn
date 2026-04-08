# ReadTheDoc 
建立一个强交互式在线教程，一站式解决看教程、连接树莓派以及运行代码

## 项目结构
> 服务器位置 /opt/web/ezblock.cc/readDocFile

├─keyword.xlsx                  //关键字表格
├─raspad.js                     //测试关键字
├─raspad.svg
├─raspadIcon.svg
├─README.md                     //项目文档介绍
├─readTheDoc.svg
├─SunFounder-Create-Agent-darwin-v1.0.0.dmg   // Agent mac
├─SunFounder-Create-Agent-darwin-v1.0.0.zip   // Agent window
├─SunFounder-Create-Agent-linux-v1.0.0.deb    // Agent Linux
├─SunFounderCreateAgent.exe
├─sunfounderIcon.png        //左上角 logo
├─sunFounderIcon.svg        //左上角logo svg 格式
├─test.html                 // 测试
├─topHead.css               //左上角logo 样式设置
├─topHead.js                //左上角logo 替换设置 以及关键字代码
├─topHead1.js
├─topHead2.js
├─xlsx.min.js
├─readTheDoc                //RTD+ 主要资源存放
|     ├─src
|     |  ├─js
|     |  | ├─ace.js         //生成在线编辑器插件源码
|     |  | ├─ext-language_tools.js  //编辑器语言插件
|     |  | ├─FitAddon.js            //xterm 自动填充terminal 插件
|     |  | ├─FitAddon3.js
|     |  | ├─mode-python.js         //编辑器 python语法
|     |  | ├─mode-sh.js             //编辑器 shell 语法
|     |  | ├─monokai.js             //编辑器主题
|     |  | ├─msg.js                 //前期语言编写，已废弃
|     |  | ├─readTheDocIndex.js         // Rtd+ 核心代码逻辑 里面包含 语言 websocket terminal 主要核心代码 已压缩版本
|     |  | ├─readTheDocIndex_origin     // Rtd+ 核心代码逻辑 里面包含 语言 websocket terminal 主要核心代码 源码
|     |  | ├─theme-chrome.js            //编辑器主题
|     |  | ├─unencrypted..js            //RTD+ 未压缩代码
|     |  | ├─xterm.js                   //xterm 插件源码
|     |  | ├─snippets                   //ace 必须支持的插件
|     |  ├─css
|     |  |  ├─index.css                //主要样式设置
|     |  |  ├─index22.css
|     |  |  └xterm.css                 //xterm 插件样式
|     ├─img

## 技术栈
* ES6 + ACE + Xterm + WebSocket

## js加密 步骤

> 加密的条件，需要把部分注释去除，语句结束需要添加“;”

<!-- 1. 先[压缩代码](http://www.metools.info/code/jscompress167.html)
2. 再 [加密代码](https://www.sojson.com/yasuojs.html) -->
1. [加密压缩代码](https://www.sojson.com/yasuojs.html) 将加密压缩后的代码复制到 `readTheDocIndex.js` 文件中并上传到服务器


## 遇到的问题

* 使用ace.js 的setValue()方法的时候，会增加一行不必要的一行 ，需要删除
```js
 element.setValue(data,1); // 设置编辑框的值
 element.focus(); // 聚焦增加的一行
 element.removeLines(); //删除选中行
```

*使用 ace.js 插件 出现光标跟实际位置不相符
>ace 插件只能使用单色字体，当你有多色字体的时候，会出现光标位置不准确问题

解决方案:
```css
/* 解决光标问题 */
.ace_editor, .ace_editor *{
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Droid Sans Mono", "Consolas", monospace !important;
    font-size: 16px !important;
}
```
[参考文献](https://stackoverflow.com/questions/15183031/ace-editor-cursor-behaves-incorrectly)

## [上线网址](https://docs.sunfounder.com/projects/davinci-kit/en/latest/)


