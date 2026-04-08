var MSG = {
    zh: {
        tutorialUrl: "",
        webSocketErrorTitle: "Websocket 连接错误",
        rasPadErrorTitle: "树莓派连接失败",
        rasPadErrorDesc: "树莓派连接超时",
        hostNameError: "Host name 错误，请检查或尝试使用IP连接",
        userNameError: "用户名/密码错误",
        noValid: "请检查IP/hostname是否正确，确认树莓派是否开启并连上网络",
        hostDown: "",
        error: "未知错误",
        disConnectTitle: "断开连接",
        disConnectDesc: "已断开连接",
        disConnectErrorTitle: "断开连接失败",
        disConnectErrorDesc: "断开失败",
        reset: "重置",
        copy: "复制",
        run: "运行",
        stop: "停止",
        runCodeTitle: "运行代码",
        clearCode: "清空",
        login_title: "连接树莓派",
        login_IP: "树莓派IP/用户名",
        login_name: "用户名",
        login_password: "密码",
        login_submit: "连接",

        creatSuccess_title: "连接树莓派",
        creatSuccess_desc: "连接成功！",
        creatSuccess_confirm: "完成",

        Agent_fail_title: "Agent失败",
        Agent_fail_desc: "Agent链接失败，原因可能是没有内置安装Agent应用，或者网络链接失败。如已安装，请检查网络后重试！ 如未安装，请点击下载Agent应用。",
        Agent_fail_retry: "重试",
        Agent_fail_download: "下载",

        Agent: "Agent",
        disconnect_IP: "未连接",
        close_terminal: "关闭",
        leadPage_title: "SunFounder Create Agent",
        leadPage_LearnMore_desc: `SunFounder Create Agent是一个小应用程序，它允许你直接从我们的在线教程中运行命令。学习编程会变得简单和有趣!\n 
        <p>在使用它之前，请查看 <a href="https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/" target="_blank">详细的教程</a>.</p>\n
        要使用它，你只需要下载SunFounder Create Agent并运行该应用程序，然后点击断开连接按钮并输入你的设备信息。之后，你可以直接在网页上运行和编辑代码。\n
        注意：Agent目前支持macOS Big Sur 11.5，Raspberry Pi OS Buster及以上版本。`,
        leadPage_btn_openAgent: "已有Agent",
        leadPage_btn_downAgent: "下载Agent",
        got_a_problem: "遇到问题?",
        messageConnectRasp: "Agent已经准备好了，现在连接到你的Raspberry Pi。",
        messageConnectRasp_title: "Agent 成功",


        isSaFar: "请使用Chrome/FireFox浏览器",
        createTutorialsTitle: "温馨提示",
        createTutorialsDesc_download: "正在下载... ",
        createTutorialsDesc_download_win: `<span>下载完成后，安装并运行SunFounderCreateAgent (<a target="_blank">详细教程</a>)。</span>
        `,
        createTutorialsFAQ: "如果你遇到了问题，请参考 ",
        createTutorialsDesc_download_linux: ``,
        createTutorialsDesc_download_ios: ``,
        createTutorialsTitleBtn: "更多教程",
        createTutorialsTitleFAQ: "FAQ",
        createReLoad: "重新下载",
        createOpen: "已打开",
        connectInNull: "不能为空",
        supportVersion: "温馨提示：目前Agent支持macOS Big Sur 11.15，Raspberry Pi OS Stretch及以上系统版本。"

    },
    en: {
        tutorialUrl: "",
        webSocketErrorTitle: "Websocket connection error.",
        rasPadErrorTitle: `
            Connection failed
        `,
        rasPadErrorDesc: `
            Connection timed out
        `,
        hostNameError: "Host name error, please try again or use IP to connect.",
        userNameError: "Incorrect hostname/password",
        noValid: "Please check whether the IP/hostname is correct, and make sure that the Raspberry Pi is turned on and connected to the network.",
        hostDown: "",
        error: "Unknown errors",
        disConnectTitle: "Disconnect",

        disConnectDesc: "Disconnected",
        disConnectErrorTitle: "Disconnect failed",
        disConnectErrorDesc: "Disconnect failed",
        reset: "Reset",
        copy: "Copy",
        run: "Run",
        stop: "Stop",
        runCodeTitle: "Run the code",

        clearCode: "Clear",

        login_title: "Connect to Raspberry Pi",
        login_IP: "IP/Hostname",
        login_name: "User Name",
        login_password: "Password",
        login_submit: "Connect",

        creatSuccess_title: "Connect to Raspberry Pi",
        creatSuccess_desc: "Connection successful",
        creatSuccess_confirm: "OK",

        Agent_fail_title: "Agent connection failed",
        Agent_fail_desc: "The Agent cannot be detected, please make sure you have downloaded and opened it.",
        Agent_fail_retry: "Try Again",
        Agent_fail_download: "Download",

        Agent: "Agent",

        disconnect_IP: "Disconnected",
        close_terminal: "Close",
        leadPage_title: "SunFounder Create Agent",
        leadPage_LearnMore_desc: `SunFounder Create Agent is a small application that allows you to run commands directly from our online tutorials. Learning to program has never been easier and more fun!\n 
        <p>Before using it, check out the <a href="https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/" target="_blank">detailed tutorials</a>.</p>\n
        To use it, all you need to do is download SunFounder Create Agent and run the application, then click the Disconnect button and enter your device information. After that, you can run and edit the code directly from the web.\n
        Note: Agent currently supports macOS Big Sur 11.5, Raspberry Pi OS Buster and above.`,
        leadPage_btn_openAgent: "I have opened the Agent",
        leadPage_btn_downAgent: "Download the Agent",
        got_a_problem: "Got a problem?",
        messageConnectRasp: "The Agent is ready, now connect to your Raspberry Pi.",
        messageConnectRasp_title: "Agent Successful",
        isSaFar: "Please use Chrome/FireFox browser.",

        createTutorialsTitle: "Warm Tips",
        createTutorialsDesc_download: "Downloading... ",
        createTutorialsDesc_download_win: `<span>Once the download is complete, install and run SunFounderCreateAgent </span>
        `,
        createTutorialsFAQ: "If you encounter problems, please refer to the ",
        createTutorialsDesc_download_linux: ``,
        createTutorialsDesc_download_ios: ``,
        createTutorialsTitleBtn: "more tutorials.",
        createTutorialsTitleFAQ: "FAQ",
        createReLoad: "Redownload",
        createOpen: "Already opened",
        connectInNull: "Cannot be empty",
        supportVersion: "Note: Currently Agent supports macOS Big Sur 11.5, Raspberry Pi OS Buster and above."

    },
    de: {
        tutorialUrl: "",
        webSocketErrorTitle: "Fehler bei der Websocket-Verbindung.",
        rasPadErrorTitle: `
            Verbindung fehlgeschlagen
        `,
        rasPadErrorDesc: `
            Zeitüberschreitung der Verbindung
        `,
        hostNameError: "Fehler beim Hostnamen, bitte versuchen Sie es erneut oder verwenden Sie die IP, um eine Verbindung herzustellen.",
        userNameError: "Falscher Hostname/Passwort",
        noValid: "Bitte überprüfen Sie, ob die IP/der Hostname korrekt ist und stellen Sie sicher, dass der Raspberry Pi eingeschaltet und mit dem Netzwerk verbunden ist.",
        hostDown: "",
        error: "Unbekannte Fehler",
        disConnectTitle: "Trennen",

        disConnectDesc: "Getrennt",
        disConnectErrorTitle: "Trennen fehlgeschlagen",
        disConnectErrorDesc: "Trennen fehlgeschlagen",
        reset: "Zurücksetzen",
        copy: "Kopieren",
        run: "Laufen",
        stop: "Stoppen",
        runCodeTitle: "Führen Sie den Code aus",

        clearCode: "Klar",

        login_title: "Mit Raspberry Pi verbinden",
        login_IP: "IP/Hostname",
        login_name: "Nutzername",
        login_password: "Passwort",
        login_submit: "Verbinden",

        creatSuccess_title: "Mit Raspberry Pi verbinden",
        creatSuccess_desc: "Verbindung erfolgreich",
        creatSuccess_confirm: "OK",

        Agent_fail_title: "Agentenverbindung fehlgeschlagen",
        Agent_fail_desc: "Der Agent kann nicht erkannt werden. Bitte stellen Sie sicher, dass Sie ihn heruntergeladen und geöffnet haben.",
        Agent_fail_retry: "Versuch es noch einmal",
        Agent_fail_download: "Herunterladen",

        Agent: "Agent",

        disconnect_IP: "Getrennt",
        close_terminal: "Schließen",
        leadPage_title: "SunFounder Create Agent",
        leadPage_LearnMore_desc: `SunFounder Create Agent ist eine kleine Anwendung, mit der Sie Befehle direkt in unseren Online-Tutorials ausführen können. Programmieren lernen war noch nie so einfach und macht Spaß!\n
        <p><a href="https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/" target="_blank">Weitere Informationen >></a></p>\ n
        Um es zu verwenden, müssen Sie nur den SunFounder Create Agent herunterladen und die Anwendung ausführen. Dann genießen Sie die Reise des Lernens.`,
        leadPage_btn_openAgent: "Ich habe den Agenten geöffnet",
        leadPage_btn_downAgent: "Laden Sie den Agenten herunter",
        got_a_problem: "Hab ein Problem?",
        messageConnectRasp: "Der Agent ist bereit, jetzt verbinden Sie sich mit Ihrem Raspberry Pi.",
        messageConnectRasp_title: "Agent erfolgreich",
        isSaFar: "Bitte verwenden Sie den Chrome/FireFox-Browser.",

        createTutorialsTitle: "Warme Tipps",
        createTutorialsDesc_download: "Wird heruntergeladen...",
        createTutorialsDesc_download_win: `<span>Sobald der Download abgeschlossen ist, installieren und führen Sie SunFounderCreateAgent aus. </span>
        `,
        createTutorialsFAQ: "Bei Problemen wenden Sie sich bitte an die ",
        createTutorialsDesc_download_linux: ``,
        createTutorialsDesc_download_ios: ``,
        createTutorialsTitleBtn: "mehr Tutorials.",
        createTutorialsTitleFAQ: "FAQ",
        createReLoad: "Erneut herunterladen",
        createOpen: "Bereits geöffnet",
        connectInNull: "Kann nicht leer sein",
        supportVersion: "Hinweis: Derzeit unterstützt Agent macOS Big Sur 11.5, Raspberry Pi OS Buster und höher."


    },
    ja: {
        tutorialUrl: "",
        webSocketErrorTitle: "Websocket接続エラー。",
        rasPadErrorTitle: `
        接続に失敗しました
        `,
        rasPadErrorDesc: `
        接続がタイムアウトしました
        `,
        hostNameError: "ホスト名エラーです。再試行するか、IPを使用して接続してください。",
        userNameError: "ホスト名/パスワードが正しくありません",
        noValid: "IP /ホスト名が正しいかどうかを確認し、Raspberry Piがオンになっていて、ネットワークに接続されていることを確認してください。",
        hostDown: "",
        error: "不明なエラー",
        disConnectTitle: "切断する",

        disConnectDesc: "切断されました",
        disConnectErrorTitle: "切断に失敗しました",
        disConnectErrorDesc: "切断に失敗しました",
        reset: "リセット",
        copy: "コピー",
        run: "実行する",
        stop: "ストップ",
        runCodeTitle: "コードを実行する",

        clearCode: "削除",

        login_title: "RaspberryPiに接続します",
        login_IP: "IP /ホスト名",
        login_name: "ユーザー名",
        login_password: "パスワード",
        login_submit: "接続",

        creatSuccess_title: "RaspberryPiに接続します",
        creatSuccess_desc: "接続に成功しました",
        creatSuccess_confirm: "OK",

        Agent_fail_title: "エージェント接続に失敗しました",
        Agent_fail_desc: "エージェントを検出できません。既にダウンロードをし、エージェントが開いたことを確認してください。",
        Agent_fail_retry: "再試行する",
        Agent_fail_download: "ダウンロード",

        Agent: "エージェント",

        disconnect_IP: "切断されました",
        close_terminal: "閉じる",
        leadPage_title: "SunFounder Create Agent",
        leadPage_LearnMore_desc: `SunFounder Create Agentは小さなアプリケーションであり、オンラインチュートリアルでコマンドを実行できます。プログラミングの学習はこれほど簡単で楽しいものではありませんでした！\n 
        <p><a href="https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/" target="_blank">Learn more >></a></p>\n
        これを使用するには、SunFounder Create Agentをダウンロードして、アプリケーションを実行するだけです。その後、学習の旅をお楽しみください。`,
        leadPage_btn_openAgent: "エージェントを開きました",
        leadPage_btn_downAgent: "エージェントをダウンロードする",
        got_a_problem: "問題がある？",
        messageConnectRasp: "エージェントの準備ができました。これからは、RaspberryPiに接続します。",
        messageConnectRasp_title: "エージェントが成功しました",
        isSaFar: "Chrome / FireFoxブラウザを使用してください。",

        createTutorialsTitle: "ヒント",
        createTutorialsDesc_download: "ダウンロード中...",
        createTutorialsDesc_download_win: `<span>ダウンロードが完了したら、SunFounderCreateAgentをインストールして実行します</span>
        `,
        createTutorialsFAQ: "問題が発生した場合は、を参照してください。 ",
        createTutorialsDesc_download_linux: ``,
        createTutorialsDesc_download_ios: ``,
        createTutorialsTitleBtn: "より多くの説明",
        createTutorialsTitleFAQ: "FAQ",
        createReLoad: "再ダウンロード",
        createOpen: "既に開いています",
        connectInNull: "空にすることはできません",
        supportVersion: "注：現在Agentは、macOS Big Sur 11.5、Raspberry Pi OS Buster以上に対応しています。"


    },
};
var sunFounder = {
    _$(element) {
        return document.querySelector(element);
    },
    _$$(element) {
        return Array.prototype.slice.call(document.querySelectorAll(element));
    },
    _className(element) {
        return document.getElementsByClassName(element);
    },
    _id(element) {
        return document.getElementById(element);
    },
    iosUrl: "https://sunfounder.s3.us-east-1.amazonaws.com/Agent/SunFounder-Create-Agent-darwin.dmg",
    linuxUrl: "https://sunfounder.s3.us-east-1.amazonaws.com/Agent/SunFounder-Create-Agent-linux.deb",
    winUrl: "https://sunfounder.s3.us-east-1.amazonaws.com/Agent/SunFounder-Create-Agent-win32.exe",
    tutorialUrlWin: "https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/download_and_install.html#windows",
    tutorialUrlIos: " https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/download_and_install.html#mac-os",
    tutorialUrlLinux: "https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/download_and_install.html#raspberry-pi-os",
    tutorialUrl: "",


};
var agentCreate = {
    tutorialsMain: "",

    createTutorials() {
        let self = this;
        let str = `
            <div id="createTutorials">
                <div class="tutorials_content">
                    <div class="tutorials_top">
                        <div class="tutorials_title">${Msg.createTutorialsTitle}</div>
                    </div>
                    <div class="tutorials_main">
                        <div class="tutorials_main_desc">
                            <p>${Msg.createTutorialsDesc_download}</p>
                            ${self.tutorialsMain}(<a href="${Msg.tutorialUrl}" target="_blank">Detailed tutorial</a>).
                           <span style="display:inline-block;">${Msg.createTutorialsFAQ}<a href="https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/faq.html" target="_blank" > ${Msg.createTutorialsTitleFAQ}.</a></span>
                        </div>
                        <div class="tutorials_main_button">
                            <button class="tutorials_button_intro" onclick="agentCreate.openEvent();">${Msg.createOpen}</button>

                            <button class="tutorials_button_faq" onclick="agentCreate.downloadEvent();">
                                <a href="${readTheDoc.downloadUrl}" class="download" download="SunFounderCreateAgent">${Msg.createReLoad}</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return str;
    },

    downloadEvent() {
        readTheDoc.displayNone("#learnMore", "#loginFail");
        readTheDoc.displayBlock("#createTutorials");
    },
    openEvent() {
        readTheDoc.displayNone("#learnMore", "#loginFail", "#createTutorials");
        readTheDoc.learnMoreBlock(myWebsocket.url, false, false);
    },

};
var Msg = null;
var readTheDoc = {
    downloadUrl: "",
    _myWebsocketFlag: "",
    retryFlag: "",
    reConnectCheckTime: "",
    connectFlagTimer: "",
    createLogin() {
        let str = `
        <div id="login">
        <div  class="loginBox">
            <form class="loginBox_form">
                <label for="title" class="loginBox_title">${Msg.login_title}</label>
                <input type="text" class="login_IP inputSize" placeholder="${Msg.login_IP}" autocomplete="on" onkeyup="readTheDoc.psKeyUp(event);"  />
                <input type="text" class="login_name inputSize" placeholder="${Msg.login_name}" autocomplete="on" onkeyUp = "readTheDoc.psKeyUp(event);" />
                <input type="password" class="login_password inputSize" placeholder="${Msg.login_password}" autocomplete="on" onkeyup="readTheDoc.psKeyUp(event);" />
                <label class="error"></label>
                <div class="login_submit" onclick="readTheDoc.connectRasPad();" >${Msg.login_submit}</div>
            </form>
            
            </div>
        </div>`;
        return str;
    },
    createSuccess() {
        let str = `
        <div id="loginSuccess">
            <div class="successContent">
                <div class="contentTitle">
                    <span class="title">${Msg.creatSuccess_title}</span>
                </div>
                <div class="contentDesc">
                    <span class="desc">${Msg.creatSuccess_desc}</span>
                </div>
                <div class="contentConfirm" onclick="readTheDoc.successBtn();">
                    <span class="confirm">${Msg.creatSuccess_confirm}</span>
                </div>
            </div>
        </div>`;
        return str;
    },
    createFailure() {
        let self = this;
        let lang = null;
        if (window.location.href.includes("/de/")) {
            lang = "de";
        } else {
            lang = "en";
        };
        let str = `
        <div id="loginFail">
            <div class="failContent">
                <div class="failBox ${lang}">
                    <span class="fail_title">${Msg.Agent_fail_title}</span>
                    <span class="fail_desc">${Msg.Agent_fail_desc}</span>
                    <div class="fail_button">
                        <button class="btn retry ${lang}" onclick="readTheDoc.retry();">${Msg.Agent_fail_retry}</button>
                        <button class="btn download ${lang}" onclick="agentCreate.downloadEvent();">
                            <a href="${self.downloadUrl}" class="download" download="SunFounderCreateAgent">${Msg.Agent_fail_download}</a>
                        </button>
                    </div>
                </div>
                <div class="gotProblem"><a href="https://docs.sunfounder.com/projects/sunfounder-create-agent/en/latest/faq.html" target="_blank">${Msg.got_a_problem}</a></div>
            </div>
        </div>
        `;
        return str;
    },
    createLoading() {
        let str = `
        <div id="myLoading">
            <div class="loadingContent">
                <div class="loadingBox">
                    <span class="loading_title">${Msg.Agent}</span>
                    <svg class="spinner" width="150px" height="150px" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="75" cy="75" r="65"></circle> 
                    </svg>
                </div>
            </div>
        </div>
        `;
        return str;
    },
    createError() {
        let str = `
            <div id="errorAlert">
                <div class="errorContent">
                    <div class="errorMain">
                        <div class="errorTitle">
                            <span class="titleDesc"></span>
                        </div>
                        <div class="errorDesc">
                            <span class="descContent"></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return str;
    },
    createLearnMore() {
        let self = this;
        let lang = null;
        if (window.location.href.includes("/de/")) {
            lang = "de";
        }
        let str = `
            <div id="learnMore">
                <div class="learn">
                    <div class="learnMore_content ${lang}" >
                        <div class="learnMore_title">
                            <span>${Msg.leadPage_title}</span>
                        </div>
                        <div class="learnMore_desc">
                            <span>${Msg.leadPage_LearnMore_desc}</span>
                            <br>
                            <span>${Msg.supportVersion}</span>
                        </div>
                        <div class="learnMore_btn">
                            <span class="openAgent" onclick="readTheDoc.learnMoreBlock('${myWebsocket.url}',false,false)">${Msg.leadPage_btn_openAgent}</span>
                            <span class="downAgent" onclick="agentCreate.downloadEvent();">
                            <a href="${self.downloadUrl}" download="SunFounderCreateAgent"> ${Msg.leadPage_btn_downAgent}</a></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return str;
    },
    createMessage(desc, confirm) {
        let str = `
            <div id="myMessage">
                <div class="message_content">
                    <div class="message_title">
                        <span>${Msg.messageConnectRasp_title}</span>
                    </div>
                    <div class="message_desc">
                        <span>${desc}</span>
                    </div>
                    <div class="message_confirm">
                            <span onclick="readTheDoc.enterRasp();">${confirm}</span>    
                    </div>
                </div>
            </div>
        `;
        return str;
    },
    setConnect() {
        let editGithub = sunFounder._className("wy-breadcrumbs-aside")[0];
        let str = `
        <div id="connectAgent">
            <span class="connect_IP connect" onclick="readTheDoc.isConnect();">192.168.18.142</span>
            <span class="disconnect_IP connect" onclick="readTheDoc.learnMoreBlock('${myWebsocket.url}');" onmouseover="readTheDoc.connectOver();" onmouseout="readTheDoc.connectOut();">${Msg.disconnect_IP}</span>
            <span class="closeConnect" onclick = readTheDoc.disConnect();>${Msg.disConnectTitle}</span>
    
        </div>
        `;
        editGithub.style.opacity = 1;
        editGithub.innerHTML = str;
    },
    connectOver() {
        sunFounder._className("disconnect_IP")[0].innerText = `${Msg.login_submit}`;
    },
    connectOut() {
        sunFounder._className("disconnect_IP")[0].innerText = `${Msg.disconnect_IP}`;
    },
    wrapDisplay(arr) {
        const type = arr[0];
        const len = arr.length;
        for (let i = 1; i < len; i++) {
            if (sunFounder._$(arr[i])) {
                sunFounder._$(arr[i]).style.display = type;
            };
        };
    },
    displayBlock() {
        let arr = Array.from(arguments);
        arr.unshift("block");
        this.wrapDisplay(arr);
    },
    displayInLineBlock() {
        let arr = Array.from(arguments);
        arr.unshift("inline-block");
        this.wrapDisplay(arr);
    },
    displayNone() {
        let arr = Array.from(arguments);
        arr.unshift("none");
        this.wrapDisplay(arr);
    },
    stopEvent() {
        let len = arguments.length;
        for (let i = 0; i < len; i++) {
            if (sunFounder._$(arguments[i])) {
                sunFounder._$(arguments[i]).onclick = function (event) {
                    event.stopPropagation();
                };
            }
        };
    },
    bodyEvent() {
        let len = arguments.length;
        for (let i = 0; i < len; i++) {
            if (sunFounder._$(arguments[i])) {
                sunFounder._$(arguments[i]).onclick = function (event) {

                    if (sunFounder._$(".login_IP") == document.activeElement
                        || sunFounder._$(".login_name") == document.activeElement
                        || sunFounder._$(".login_password") == document.activeElement) {
                    } else {
                        this.style.display = "none";
                        event.stopPropagation();
                    }
                };
            };
        }
    },
    isSaFarEvent() {
        let self = this;
        // let len = arguments.length;
        // for (let i = 0; i < len; i++) {
        //     if (sunFounder._$(arguments[i])) {
        //         sunFounder._$(arguments[i]).addEventListener('click',function(){
        // if(self.inBrowser()){/
        self.errorMessage(Msg.isSaFar, "", false, 3000);
        // };
        //         });
        //     };
        // };
    },
    learnMoreBlock(url, connectFlag = true, learnMore = true) {
        readTheDoc.isSaFarEvent();
        let self = this;
        self._myWebsocketFlag = connectFlag;
        if (learnMore == false) {
            readTheDoc.displayNone("#learnMore");
        };
        if (myWebsocket.readyState != 1) {
            myWebsocket.autoConnect = false;
            readTheDoc.displayBlock("#myLoading");
            if (readTheDoc.isOs().isOs || readTheDoc.isOs().isLinux) {
                const timer = setTimeout(function () {
                    myWebsocket.init(url);
                }, 1000)
            } else {
                myWebsocket.init(url);
            }
        } else {
            self.connectClick();
        };
    },
    connectClick() {
        readTheDoc._myWebsocketFlag = false;
        readTheDoc.displayNone("#learnMore");
        myWebsocket.autoConnect = false;
        readTheDoc.enterRasp();
    },
    enterRasp() {
        readTheDoc.displayNone("#myMessage");
        readTheDoc.displayBlock("#login");
        if (localStorage.host) {
            sunFounder._className("login_IP")[0].value = localStorage.host;
            sunFounder._className("login_name")[0].value = localStorage.user;
            sunFounder._className("login_password")[0].value = localStorage.password;
        }
    },
    retry() {
        let self = this;
        self.retryFlag = true;

        self.displayNone("#loginFail");
        self.displayBlock("#myLoading");
        self.learnMoreBlock(myWebsocket.url, false);
    },
    successBtn: async function () {
        readTheDoc.displayNone("#loginSuccess");
        sunFounder._$("#terminal").style.zIndex = "999";
        sunFounder._$("#terminal").style.opacity = "1";

    },
    connectRasPad: async function () {
        try {
            if (!sunFounder._className("login_IP")[0].value || !sunFounder._className("login_name ")[0].value || !sunFounder._className("login_password ")[0].value) {
                const loginError = sunFounder._className("error")[0];
                readTheDoc.displayBlock(".error");
                loginError.innerText = `${Msg.connectInNull}`;
                return false;
            };
            readTheDoc.displayBlock("#myLoading");
            let data = {
                type: "connect",
                command: "connect",
                data: {
                    host: sunFounder._className("login_IP")[0].value,
                    user: sunFounder._className("login_name ")[0].value,
                    password: sunFounder._className("login_password ")[0].value
                }

            };
            let res = await myWebsocket.send(data);
            readTheDoc.connectRasPadSuccess(res);
        } catch (err) {
            readTheDoc.displayNone("#myLoading");
            readTheDoc.errorMessage(Msg.rasPadErrorTitle, Msg.noValid);
            console.log("connect");
        }

    },
    connectRasPadSuccess: async function (data) {
        let { status, error } = data;
        readTheDoc.displayNone("#myLoading");
        if (status == true || error == "ALREADY_CONNECTED") {
            readTheDoc.connectFlagTimer = true;
            // readTheDoc._myWebsocketFlag = true;
            readTheDoc._myWebsocketFlag = false;
            readTheDoc.displayNone("#login", ".disconnect_IP");
            await codeEdit.connectEvent();
            readTheDoc.errorMessage(Msg.creatSuccess_desc, "", false);
            sunFounder._className("connect_IP")[0].innerText = sunFounder._className("login_IP")[0].value;
            readTheDoc.displayInLineBlock(".connect_IP");
            readTheDoc.cleanLogin();
        } else {
            myWebsocket.connectErrorEvent(data);
        };
    },
    errorMessage(title, desc, flag = true, time = 3000) {
        readTheDoc.titleDesc = sunFounder._className("titleDesc")[0];
        readTheDoc.descContent = sunFounder._className("descContent")[0];
        readTheDoc.titleDesc.innerHTML = title;
        readTheDoc.descContent.innerHTML = desc;
        if (flag == false) {
            readTheDoc.descContent.style.display = "none";
        } else {
            readTheDoc.descContent.style.display = "block";

        }
        readTheDoc.displayBlock("#errorAlert");
        let timer = setTimeout(function () {
            readTheDoc.displayNone("#errorAlert");
        }, time);
    },
    autoConnectRasPad() {
        myWebsocket.autoConnect = true;
        myWebsocket.init(myWebsocket.url);
    },
    cleanLogin() {
        localStorage.setItem("host", sunFounder._className("login_IP")[0].value);
        localStorage.setItem("user", sunFounder._className("login_name ")[0].value);
        localStorage.setItem("password", sunFounder._className("login_password ")[0].value);
        readTheDoc.displayNone(".error");
        sunFounder._className("login_IP")[0].value = "";
        sunFounder._className("login_name ")[0].value = "";
        sunFounder._className("login_password ")[0].value = "";
    },
    isConnect() {
        // const isConnect = sunFounder._className("connect_IP ")[0];
        const closeConnect = sunFounder._className("closeConnect")[0];
        // closeConnect.style.width = isConnect.clientWidth + 'px';
        if (closeConnect.style.display == "block") {
            readTheDoc.displayNone(".closeConnect");
        } else {
            readTheDoc.displayBlock(".closeConnect");
        }


    },
    disConnect: async function () {
        const disConnectBtn = sunFounder._className("closeConnect")[0];
        if (myWebsocket.readyState == 1) {
            codeEdit.closeTerminal();
            let data = {
                type: "connect",
                command: "disconnect"
            };
            let res = await myWebsocket.send(data);
            readTheDoc.displayBlock("#myLoading");
            readTheDoc.displayNone(".closeConnect");
            myWebsocket.disConnectEvent(res);
        }

    },
    inBrowser() {
        const UA = window.navigator.userAgent.toLowerCase();
        const isIE = UA && /msie|trident/.test(UA);
        const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        const isEdge = UA && UA.indexOf("edg/") > 0;
        const isSaFar = /safari/.test(UA) && !/chrome/.test(UA);
        return isSaFar || isIE || isIE9;
    },
    isOs() {
        let ua = navigator.userAgent;
        let ios = ua.indexOf("Mac OS X") >= 0;
        let isLinux = navigator.platform.indexOf("Linux") >= 0;

        // console.log(ios,isLinux);
        return { ios: ios, isLinux: isLinux };
    },
    fontChange() {
        let self = this;
        if (self.isOs().isLinux) {
            try {
                sunFounder._$("body").setAttribute("data-font", "linux");
                sunFounder._$("#terminal_Box").setAttribute("data-font", "linux");
                sunFounder._$(".xterm-dom-renderer-owner-1 .xterm-rows span").setAttribute("data-font", "linux");
            } catch (err) { console.log(err); };
        }
    },
    psKeyUp(event) {
        // console.log(event.target.className)
        let classList = event.target.className;
        let self = this;
        let e = event || window.event;
        let key = e.which || e.keyCode || e.charCode;
        if (key == 13) {
            if (classList.indexOf("login_IP") >= 0) {
                sunFounder._$(".login_name").focus();
                return false;
            };
            if (classList.indexOf("login_name") >= 0) {
                sunFounder._$(".login_password").focus();
                return false;
            }
            self.connectRasPad();
        }
    },
    init() {
        let self = readTheDoc;
        self.body = document.getElementsByTagName("body")[0];
        if (readTheDoc.isOs().ios) {
            Msg.tutorialUrl = sunFounder.tutorialUrlIos;
            readTheDoc.downloadUrl = sunFounder.iosUrl;
        } else if (readTheDoc.isOs().isLinux) {
            Msg.tutorialUrl = sunFounder.tutorialUrlLinux;
            readTheDoc.downloadUrl = sunFounder.linuxUrl;
        }
        else {
            Msg.tutorialUrl = sunFounder.tutorialUrlWin;
            readTheDoc.downloadUrl = sunFounder.winUrl;
        }
        agentCreate.tutorialsMain = Msg.createTutorialsDesc_download_win;
        self.body.innerHTML =
            self.body.innerHTML + self.createLogin() + self.createSuccess() +
            self.createFailure() + self.createLoading() + self.createError() + self.createLearnMore() + self.createMessage(Msg.messageConnectRasp, Msg.creatSuccess_confirm) + agentCreate.createTutorials();
        self.setConnect();
        const disconnectIP = sunFounder._className("disconnect_IP")[0];
        disconnectIP.onclick = self.connectClick;

    }
};

var myWebsocket = {
    socket: null,
    readyState: null,

    autoConnect: null,
    rasPadIsConnect: null,
    terminalSuccess: null,
    hasTerminal: null,
    sendData: null,
    url: "127.0.0.1:9588",
    socketMessageBuffer: {
        "connect": {
            "connect": [],
            "check": [],
            "disconnect": []
        },
        "terminal": {
            "new": [],
            "close": [],
            "send": [],
            "recv": [],
            "get": [],
            "resize": []
        }
        ,
        "sftp": [],
    },
    sendCodeReplace: "",
    onopen(event) {
        readTheDoc.displayNone("#myLoading");
        let self = this;
        myWebsocket.readyState = self.readyState;
        if (myWebsocket.autoConnect) {
            const checkConnect = {
                type: "connect",
                command: "check"
            };
            myWebsocket.send(checkConnect);
        } else {
            if (localStorage.host) {
                sunFounder._className("login_IP")[0].value = localStorage.host;
                sunFounder._className("login_name")[0].value = localStorage.user;
                sunFounder._className("login_password")[0].value = localStorage.password;
            };
            if (readTheDoc.retryFlag) {
                readTheDoc.displayBlock("#myMessage");
                readTheDoc.retryFlag = false;
                return false;
            };
            readTheDoc.retryFlag = false;
            readTheDoc.enterRasp();
            readTheDoc._myWebsocketFlag = false;
        }
    },
    onmessage(event) {
        let self = myWebsocket;
        let socketData = (new Function("return " + event.data))();
        // JSON.parse();
        // console.log("onmessage :",socketData);
        let { status, command, type } = socketData;
        self.checkConnectEvent(socketData);
        myWebsocket.socketMessageBuffer[type][command].push(socketData);
        if (type == "terminal") {
            myWebsocket.terminalEvent(socketData);
        };
    },
    onerror(event) {
        let self = myWebsocket;
        if (self.webSocketConnect == false) {
            return false;
        };
        console.log("error:", event);
    },
    onclose(event) {
        let self = this;
        readTheDoc.connectFlagTimer = false;
        readTheDoc.displayNone("#myLoading");
        myWebsocket.readyState = self.readyState;
        myWebsocket.cleanFlag();
        term.closeTerminal();
        readTheDoc.displayNone(".connect_IP", "#login", "#loginSuccess", "#learnMore", ".closeConnect");
        readTheDoc.displayInLineBlock(".disconnect_IP");
        console.log(event.code);
        if (event.code == "1000") {
        } else {
            if (readTheDoc._myWebsocketFlag) {
                readTheDoc.displayBlock("#learnMore");
                return false;
            };
            if (!myWebsocket.autoConnect) {
                readTheDoc.displayBlock("#loginFail");
                readTheDoc.displayNone("#myLoading", "#learnMore");
            };

        };
    },
    request(codeData) {
        let self = this;
        self.readyState = self.socket.readyState;
        if (self.readyState == 1) {
            self.socket.send(JSON.stringify(codeData));
        };
    },
    send: async function (sendData) {
        let { type, command, data } = sendData;
        let self = myWebsocket;
        try {
            self.readyState = self.socket.readyState;

        } catch (err) {
            console.log("send: " + err);
        };
        let p = new Promise(function (resolve, reject) {
            if (self.readyState == 1) {
                self.socket.send(JSON.stringify(sendData));
                var timer = setInterval(function () {
                    if (command == "send") {
                        command = "recv"
                    };
                    if (myWebsocket.socketMessageBuffer[type][command].length != 0) {
                        resolve(myWebsocket.socketMessageBuffer[type][command][0]);
                        myWebsocket.socketMessageBuffer[type][command] = [];
                        clearInterval(timer);
                    };

                }, 10);
                setTimeout(function () {
                    clearInterval(timer);
                    reject(myWebsocket.socketMessageBuffer[type][command][0]);
                    myWebsocket.socketMessageBuffer[type][command] = [];
                }, 8000)

            }
        });
        return p;
    },
    checkConnectEvent(socketData) {
        let { status, data, error, command } = socketData;
        if (command == "check" && status == true && data.host) {
            codeEdit.connectEvent();
            sunFounder._className("connect_IP")[0].innerText = data.host || localStorage.host;
            readTheDoc.displayInLineBlock(".connect_IP");
            readTheDoc.displayNone(".disconnect_IP ");
            readTheDoc.connectFlagTimer = true;
        } else {
            myWebsocket.readyState = myWebsocket.socket.readyState;

        };
    },
    connectErrorEvent(params) {
        let { error } = params;
        const loginError = sunFounder._className("error")[0];
        myWebsocket.cleanFlag();
        if (error == "TIMEOUT") {
            readTheDoc.errorMessage(Msg.rasPadErrorTitle, Msg.rasPadErrorDesc);
        } else if (error == "HOST_ERROR") {
            readTheDoc.displayBlock(".error");
            loginError.innerText = `${Msg.hostNameError}`;
        } else if (error == "AUTH_ERROR") {
            readTheDoc.displayBlock(".error");
            loginError.innerText = `${Msg.userNameError}`;
        } else if (error == "NO_VALID" || error == "SOCKET_TIMEOUT" || error.indexOf(" Host is down")) {
            readTheDoc.errorMessage(Msg.rasPadErrorTitle, Msg.noValid);
        } else {
            readTheDoc.errorMessage(Msg.error, error);
        }
    },
    disConnectEvent(socketData) {
        myWebsocket.readyState = "";
        let { status, error } = socketData;
        readTheDoc.displayNone("#myLoading");
        if (status == true) {
            readTheDoc.displayNone(".connect_IP");
            readTheDoc.displayInLineBlock(".disconnect_IP");
            readTheDoc.errorMessage(Msg.disConnectDesc, Msg.disConnectDesc, false);
        } else {
            readTheDoc.errorMessage(Msg.disConnectErrorTitle, Msg.disConnectErrorDesc, false);
        };

    },
    terminalEvent: async function (socketData) {
        let { command, status, error, data } = socketData;
        if (command == "recv") {
            if (status == true) {
                // if (codeEdit.returnFlag == true) {
                //  await term.isInit()
                sunFounder._$("#terminal").style.zIndex = "999";
                sunFounder._$("#terminal").style.opacity = "1";

                term.element.write(data.stdout + data.stderr);
            } else {
                readTheDoc.errorMessage(Msg.runCodeTitle, Msg.runCodeError);
            };
        };
        if (command == "send") {
            if (status == false) {
                // console.log("send fail");
                // if(error == "Socket is closed"){
                //     myWebsocket.socket.close();
                // };
            } else {
                console.log("send success");
            }
        };
    },
    cleanFlag() {
        myWebsocket.terminalSuccess = false;
        myWebsocket.hasTerminal = false;
    },
    init: function (url) {
        let self = this;
        self.socket = new WebSocket("ws://" + url);
        if (!self.autoConnect && self.readyState != 1) {
            readTheDoc.displayBlock("#myLoading");
        }
        self.readyState = self.socket.readyState;
        self.socket.onopen = self.onopen;
        self.socket.onmessage = self.onmessage;
        self.socket.onerror = self.onerror;
        self.socket.onclose = self.onclose;
    },

};

var codeEdit = {
    runData: null,
    returnFlag: null,
    timeOut: 1000,
    timer: null,
    codeAce: [],

    creatAce(data, element, lang) {
        let _rows = data.split("\n").length - 1;
        if (_rows <= 3) {
            sunFounder._id(element).classList.add("codeLittle");
        };
        if (_rows <= 7 && _rows > 3) {
            sunFounder._id(element).classList.add("codeMiddle");
        };
        const aceEditor = element;
        element = ace.edit(aceEditor);
        ace.require("ace/ext/language_tools");
        element.setTheme("ace/theme/chrome");

        codeEdit.codeAce.push(codeEdit[`${element}`]);
        if (lang == "Python") {
            element.session.setMode("ace/mode/python");
        };
        if (lang == "Shell") {
            element.session.setMode("ace/mode/sh");
        };
        element.setHighlightActiveLine(false);
        element.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
            selectionStyle: "line",
            highlightSelectedWord: true,
            cursorStyle: "wide",
            useSoftTabs: true,
            enableMultiselect: true,
        });

        element.setValue(data, 1);
        element.focus();
        element.removeLines();

        sunFounder._id(aceEditor).style.fontSize = '16px';
        element.session.setTabSize(4);
        return element;
    },
    aceMouseOver(i) {
        codeEdit.codeAce[i].setReadOnly(false);
        codeEdit.codeAce[i].focus();
    },
    aceMouseOut(i) {
        codeEdit.codeAce[i].setReadOnly(true);

        codeEdit.codeAce[i].blur();
    },
    runCode: async function (event, dom, i, lang) {
        let self = event.target;
        let _this = codeEdit;
        let res = null;
        const checkConnect = {
            type: "connect",
            command: "check"
        };
        if (myWebsocket.readyState == 1) {
            res = await myWebsocket.send(checkConnect);
        };
        if (myWebsocket.readyState == 1 && res.status == true && res.data.host) {

            if (self.innerText == `${Msg.run}`) {
                window.localStorage.setItem("runEditId", i);
                _this.runData = _this[dom].getValue(); // 获取编辑框的数值
                _this.codeSendRules(lang);
                _this.returnOut();

            } else {
                clearTimeout(_this.timer);
                _this.returnFlag = false;
                _this.sendCode(3);
            };
        } else {
            readTheDoc.learnMoreBlock(myWebsocket.url);
        };
    },
    connectEvent: async function () {
        let _this = codeEdit;
        if (myWebsocket.readyState == 1) {

            let getTerminalStatus = await _this.getTerminal();
            if (getTerminalStatus == true) {
                sunFounder._$("#terminal").style.zIndex = "999";
                sunFounder._$("#terminal").style.opacity = "1";
                return true;
            } else {
                let createTerminalStatus = await _this.createTerminal();
                if (createTerminalStatus == true) {
                    sunFounder._$("#terminal").style.zIndex = "999";
                    sunFounder._$("#terminal").style.opacity = "1";
                };
                return false;
            };
        } else {
            return false;
        };

    },
    codeSendRules(lang) {
        let self = codeEdit;
        if (lang == "Python") {
            self.sendCode("python3 << EOF\n" + self.runData + "\n" + "EOF");
        };
        if (lang == "Shell") {
            self.sendCode(self.runData);
        };
    },
    returnOut() {
        let self = codeEdit;
        self.timer = setTimeout(function () {
            self.returnFlag = true;
            self.sendCode("\r");

        }, self.timeOut);
    },
    createTerminal: async function () {
        // 发送创建 terminal
        let createTerminal = {
            type: "terminal",
            command: "new",
            data: {
                term: "xterm-256color",
                width: term.cols,
                height: term.rows
                // term: "VT220"

            }
        };
        let res = await myWebsocket.send(createTerminal);
        let { status } = res;
        if (status == true) {
            return true;
        } else {
            return false;
        };
    },
    sendCode(paramsData) {
        let sendData = {
            type: "terminal",
            command: "send",
            data: {
                id: 1,
                stdin: paramsData
            }
        };
        myWebsocket.sendCodeReplace = "";
        window.sessionStorage.setItem("saveSendData", paramsData);
        myWebsocket.request(sendData);
    },
    sendEnter: async function (enter) {
        let sendData = {
            type: "terminal",
            command: "send",
            data: {
                id: 1,
                stdin: enter
            }
        };
        let res = await myWebsocket.send(sendData);
        let { status, data } = res;
        if (status == true) {
            return data;
        } else {
            return false;
        }
    },
    getTerminal: async function () {
        let getTerminalData = {
            type: "terminal",
            command: "get"
        };
        let res = await myWebsocket.send(getTerminalData);
        let { status, data } = res;
        if (status == true && data.ids.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    copyCode(event, dom, i) {
        window.localStorage.setItem("runEditId", i);
        let copyData = codeEdit[dom].getValue();// 获取编辑框的数值
        let copyTextarea = sunFounder._$(`#copyText${i}`);
        copyTextarea.value = copyData;
        copyTextarea.select();
        document.execCommand('copy');
        // Reset textarea
        copyTextarea.value = "";
        codeEdit[dom].selectAll();
    },
    resetCode(event, dom, i) {
        let data = window.sessionStorage.getItem(dom);
        window.localStorage.setItem("runEditId", i);
        codeEdit[dom].setValue(data);
    },

    closeTerminal: async function () {
        let data = {
            type: "terminal",
            command: "close",
            data: {
                id: 1
            }
        };

        let res = await myWebsocket.send(data);
        term.closeTerminal();
        let { status } = res;
        if (status == true) {

            return true;
        }
    },
    contextmenu(event, num) {
        sunFounder._id(`outPut${num}`).innerText = "";
        sunFounder._id(`outPut${num}`).style.display = "none";
        event.stopPropagation();
    },

    creatEditBox(param, i, lang) {
        let dom = `
            <div class="codeEditContent codeEdit${i}">
                <div class="codeBar">
                    <div class="language">
                        <span>${lang}</span>
                    </div>
                    <div class="codeBtn">
                        <button class="reSet functionBtn" onclick="codeEdit.resetCode(event,'${param}','${i}')">${Msg.reset}</button>
                        <button class="copy functionBtn" onclick="codeEdit.copyCode(event,'${param}','${i}')">${Msg.copy}</button>
                        <button class="runCode functionBtn" onclick="codeEdit.runCode(event,'${param}','${i}','${lang}')">${Msg.run}</button>
                        <button class="stopCode functionBtn" onclick="codeEdit.runCode(event,'${param}','${i}','${lang}')">${Msg.stop}</button>

                    </div>
                </div>
                <div id="codeEdit${i}" class="codeEdit"></div>
            </div>
            <!-- <div id="outPut${i}" class="outPut" ></div> -->
            <textarea id="copyText${i}" class="copyText"></textarea>
        `;
        return dom;
    },
    creatClear(outPutDom, i) {
        outPutDom.addEventListener("contextmenu", e => {
            let _offsetX = e.clientX;
            let _offsetY = e.clientY;
            if (!sunFounder._$(`#outPut${i}`).querySelector(".contextClear")) {
                let str = `
                <div class="contextClear" onclick="codeEdit.contextmenu(event,${i})"
                    >${Msg.clearCode}</div>
            `;
                outPutDom.innerHTML = outPutDom.innerHTML + str;
            };
            const contextClear = outPutDom.getElementsByClassName("contextClear")[0];
            contextClear.style.left = `${_offsetX}px`;
            contextClear.style.top = `${_offsetY}px`;
            contextClear.style.display = "block";
            e.preventDefault();
        });
        outPutDom.onclick = function (e) {
            e.stopPropagation();
            if (outPutDom.getElementsByClassName("contextClear")[0]) {
                outPutDom.getElementsByClassName("contextClear")[0].style.display = "none";
            };

        };
    },
    termResize() {
        let resizeData = {
            type: "terminal",
            command: "resize",
            data: {
                id: 1,
                width: fitAddon.proposeDimensions().cols,
                height: fitAddon.proposeDimensions().rows,
                width_pixels: 0,
                height_pixels: 0
            }
        };
        myWebsocket.send(resizeData);
    },
    init() {
        let highlight = sunFounder._className("highlight");
        let highlightLength = highlight.length;
        let arr = [];
        for (let j = 0; j < highlightLength; j++) {
            if (highlight[j].parentNode.previousElementSibling.tagName == "RUN") {
                arr.push(highlight[j].parentNode);
            };
        };
        for (let i = 0; i < arr.length; i++) {
            try {
                let parentNodeClass = arr[i].classList[0];
                if (parentNodeClass.indexOf("python") > 0 || parentNodeClass.indexOf("default") > 0 || parentNodeClass.indexOf("shell") > 0) {
                    let data = arr[i].innerText;
                    let codeDom = `codeEdit${i}`;
                    let dom = null;
                    let lang = null;
                    if (parentNodeClass.indexOf("python") > 0) {
                        lang = "Python";
                        dom = codeEdit.creatEditBox(codeDom, i, lang);
                    } else if (parentNodeClass.indexOf("default") > 0 || parentNodeClass.indexOf("shell") > 0) {
                        lang = "Shell";
                        dom = codeEdit.creatEditBox(codeDom, i, lang);
                    };
                    arr[i].innerHTML = dom;
                    codeEdit[codeDom] = codeEdit.creatAce(data, codeDom, lang);
                    window.sessionStorage.setItem(codeDom, data);
                };

            } catch (err) {
                console.log("create : init", err);
            };

        };

    }
};
var fitAddon = null;
var term = {
    element: null,
    cols: null,
    rows: null,
    letterSpacing: null,
    createTerminal() {
        let str = `
            <div id="terminal">
                <div class="terminal_left" onclick="term.teleScoping(event)">
                    <span class="Telescoping">>></span>
                </div>
                <div class="terminal_right">
                   <!-- <div class="topBar" onclick="term.stopEvent(event)">
                        <span onclick="term.closeTerminal(event)">${Msg.close_terminal}</span>
                    </div> --!>
                    <div id="terminal_Box"></div>
                </div>
            </div>
        `;
        return str;

    },
    init: async function () {
        let self = this;
        await self.appendTerminal();
        console.log("init", readTheDoc.isOs().isLinux, readTheDoc.isOs().ios);
        if (readTheDoc.isOs().isLinux) {
            self.letterSpacing = -7;
        };
        if (readTheDoc.isOs().ios) {
            self.letterSpacing = -7;
        };
        if (!readTheDoc.isOs().isLinux && !readTheDoc.isOs().ios) {
            self.letterSpacing = -8;

        };

        self.element = new Terminal({
            cursorStyle: "bar",
            cursorBlink: true,
            fontSize: 18,
            letterSpacing: self.letterSpacing,
            convertEol: true,
            rendererType: "dom",
            fontFamily: "Consolas",
        });
        fitAddon = new FitAddon();
        self.element.loadAddon(fitAddon);
        self.element.open(sunFounder._id('terminal_Box'), true);
        fitAddon.fit();
        self.cols = fitAddon.proposeDimensions().cols;
        self.rows = fitAddon.proposeDimensions().rows;
        self.element.onData((val) => {
            codeEdit.sendCode(val);
        });

    },
    closeTerminal(event) {
        let self = this;
        if (event) {
            event.stopPropagation();
        };
        self.element.clear();
        sunFounder._$("#terminal").style.zIndex = "-1";
        sunFounder._$("#terminal").style.opacity = "0";
    },
    stopEvent(event) {
        event.stopPropagation();
    },
    teleScoping(event, flag = true) {
        try {
            event.stopPropagation();
        } catch (err) { };
        let style = window.getComputedStyle(sunFounder._id("terminal"));
        let dom = sunFounder._$("#terminal");
        let width = window.innerWidth;
        let height = sunFounder._id("terminal").clientHeight;
        let _teleScoping = sunFounder._$(".Telescoping");
        if (width < 1500) {
            if (style.bottom == "0px" && flag == true) {
                dom.style.bottom = "-" + (height - 30) + "px";
                _teleScoping.style.transform = "translate(-50%,-50%) rotateZ(270deg) rotateY(0deg)";
            } else {
                dom.style.bottom = "0px";
                _teleScoping.style.transform = "translate(-50%,-50%) rotateZ(90deg) rotateY(0deg)";

            };
        } else {
            if (style.right.indexOf("-") >= 0 && flag == true) {
                dom.style.right = 0;
                _teleScoping.style.transform = "translate(-50%,-50%) rotateZ(0deg) rotateY(0deg)";

                return false;
            } else {
                let _width = dom.offsetWidth * 0.95;
                dom.style.right = "-" + _width + "px";
                _teleScoping.style.transform = "translate(-50%,-50%) rotateZ(0deg) rotateY(180deg) ";

                return false;
            };

        };

    },

    appendTerminal: async function () {
        let self = this;
        let windowWidth = window.innerWidth;

        const terminalBox = self.createTerminal();
        readTheDoc.body.innerHTML = readTheDoc.body.innerHTML + terminalBox;
        if (windowWidth < 1500) {
            sunFounder._$("#terminal_Box").style.height = sunFounder._$("#terminal").innerHeight * 0.35 - 30 + "px";
        } else {
            self.resize();
        };

    },
    isTerminal: async function (param) {
        if (!(sunFounder._$$("#terminal").length > 0)) {
            await term.init();
        };
    },
    resize(flag) {
        let self = this;
        let _teleScoping = sunFounder._$(".Telescoping");

        if (sunFounder._$$("#terminal").length > 0) {

            if (window.getComputedStyle(sunFounder._$("#terminal")).right.indexOf("-") >= 0 && window.innerWidth > 1500 && flag == true) {
                sunFounder._$("#terminal").style.right = "-" + Math.ceil(sunFounder._$("#terminal").offsetWidth * 0.95) + "px";
                _teleScoping.style.transform = "translate(-50%,-50%) rotateZ(0deg) rotateY(180deg)";
            };
            if (window.getComputedStyle(sunFounder._$("#terminal")).right.indexOf("-") < 0 && window.innerWidth > 1500 && flag == true) {
                _teleScoping.style.transform = "translate(-50%,-50%) rotateZ(0deg) rotateY(0deg)";
            };
            let wyNavContentWrap = sunFounder._$$(".wy-nav-content-wrap")[0];
            const contentWrapWidth = wyNavContentWrap.offsetWidth;
            const wyNavContent = wyNavContentWrap.querySelector(".wy-nav-content").offsetWidth;
            sunFounder._$("#terminal").style.width = contentWrapWidth - wyNavContent + "px";
            sunFounder._$("#terminal").style.height = window.innerHeight + "px";
            sunFounder._$("#terminal_Box").style.height = window.innerHeight + "px";
        }
    },


};
// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {

    if (window.location.href.indexOf("/en/") > 0) {
        Msg = MSG.en;
    } else if (window.location.href.includes("/de/")) {
        Msg = MSG.de;
    } else if (window.location.href.includes("/ja/")) {
        Msg = MSG.ja;
    }
    else {
        Msg = MSG.en;
    };
    readTheDoc.autoConnectRasPad();

    readTheDoc.init();
    term.init();
    codeEdit.init();
    readTheDoc.bodyEvent("#login", "#loginSuccess", "#loginFail", "#myLoading", "#errorAlert", "#learnMore", "#createTutorials");
    readTheDoc.stopEvent(".loginBox", ".successContent", ".failContent", ".loadingContent", ".errorContent", ".learn", ".tutorials_content");
    // if (readTheDoc.inBrowser()) {
    //     readTheDoc.isSaFarEvent();
    // };
    readTheDoc.fontChange();
    // reConnectCheckTime = setInterval( async function(){
    //     if(myWebsocket.readyState == 1 && readTheDoc.connectFlagTimer ){
    //         const checkConnect = {
    //             type: "connect",
    //             command: "check"
    //         };
    //         const res = await myWebsocket.send(checkConnect);
    //         if(!res){
    //             myWebsocket.socket.close();
    //         }
    //     }
    // },1000)
});


window.addEventListener("resize", async function () {
    let flag = true;
    let _width = sunFounder._$("body").clientWidth;
    let dom = sunFounder._$("#terminal");
    let _height = window.innerHeight;
    let windowWidth = window.innerWidth;
    let _teleScoping = sunFounder._$(".Telescoping");
    if (windowWidth < 1500) {
        dom.style.width = _width + 'px';
        dom.style.height = (_height * 0.35) + "px";
        sunFounder._$("#terminal_Box").style.height = (_height * 0.35) - 30 + "px";
        _teleScoping.style.transform = "translate(-50%,-50%) rotateZ(90deg) rotateY(0deg)";

    } else {
        term.resize(flag);
    };
    try {
        fitAddon.fit();
        let style = window.getComputedStyle(sunFounder._id("terminal"), null);
        let connectEvent = await codeEdit.connectEvent();
        if (style.opacity == "1" && connectEvent == true) {
            codeEdit.termResize();
        };
    } catch (err) {
        console.log(err);
    };

})

