
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"polyfill/promise.js",
	"libs/fairygui/fairygui.js",
	"libs/rawinflate/rawinflate.min.js",
	"bin-debug/gameEntity/Entity.js",
	"bin-debug/net/Connection.js",
	"bin-debug/net/MessageHandler.js",
	"bin-debug/ui/UIBase.js",
	"bin-debug/Main.js",
	"bin-debug/gameConfig/MapConfig.js",
	"bin-debug/gameData/GameTime.js",
	"bin-debug/gameData/PlayerData.js",
	"bin-debug/gameEntity/animation/AnimationControl.js",
	"bin-debug/gameEntity/data/GameObject.js",
	"bin-debug/fsm/EntityFreeFsm.js",
	"bin-debug/gameEntity/EntityManager.js",
	"bin-debug/gameEntity/Monster.js",
	"bin-debug/gameEntity/Player.js",
	"bin-debug/gameState/CreateRoleState.js",
	"bin-debug/gameState/GameStateManager.js",
	"bin-debug/gameState/HomeState.js",
	"bin-debug/gameState/LoadingState.js",
	"bin-debug/gameState/LoginState.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/uiresource/Login/LoginBinder.js",
	"bin-debug/fsm/EntityFsm.js",
	"bin-debug/MtwGame.js",
	"bin-debug/fsm/EntityIdleFsm.js",
	"bin-debug/fsm/EntityMoveFsm.js",
	"bin-debug/net/NetManager.js",
	"bin-debug/ui/create/CreateRoleUICtrl.js",
	"bin-debug/ui/loading/LoadingUICtrl.js",
	"bin-debug/ui/login/LoginUICtrl.js",
	"bin-debug/ui/mainui/MainUICtrl.js",
	"bin-debug/gameConfig/ConfigManager.js",
	"bin-debug/ui/UIManager.js",
	"bin-debug/uiresource/Common/CommonBinder.js",
	"bin-debug/uiresource/Common/UI_circle.js",
	"bin-debug/uiresource/Common/UI_JoystickView.js",
	"bin-debug/uiresource/Common/UI_WindowFrame.js",
	"bin-debug/uiresource/CreateRole/CreateRoleBinder.js",
	"bin-debug/uiresource/CreateRole/UI_CreateWin.js",
	"bin-debug/uiresource/Login/UI_LoginWin.js",
	"bin-debug/uiresource/MainUI/MainUIBinder.js",
	"bin-debug/uiresource/MainUI/UI_MainUI.js",
	"bin-debug/util/CSVReader.js",
	"bin-debug/util/Long.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};