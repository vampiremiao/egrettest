class LoginUICtrl extends UIBase{
	public constructor() {
        super();
	}
    private _view:Login.UI_LoginWin;
    
	protected createChildren():void{
		console.log("打开登录界面");
        Login.LoginBinder.bindAll();
        this._ui = this._view = Login.UI_LoginWin.createInstance();
        this._view.m_usernameInput.text = "请输入账号";
        this._view.x = MtwGame.Instance.stage.stageWidth / 2 - this._view.width / 2;
        this._view.y = MtwGame.Instance.stage.stageHeight - this._view.height - 50;
        
	}

    protected openRefresh():void{
         this._view.m_loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.submitHandler,this);
         this._view.m_usernameInput.addEventListener(egret.FocusEvent.FOCUS_IN,this.inputFocusInHandler,this);
         this._view.m_usernameInput.addEventListener(egret.FocusEvent.FOCUS_OUT,this.inputFocusOutHandler,this);
         this._view.m_usernameInput.requestFocus();
    }

    private inputFocusInHandler(e:egret.FocusEvent):void{
        if(this._view.m_usernameInput.text == "请输入账号"){
            this._view.m_usernameInput.text = "";
        }
    }

    private inputFocusOutHandler(e:egret.FocusEvent):void{
        if(this._view.m_usernameInput.text == ""){
            this._view.m_usernameInput.text = "请输入账号";
        }
    }

    private submitHandler(e:egret.TouchEvent):void{
        console.log("登录游戏");
        NetManager.Instance.login(this._view.m_usernameInput.text);
    }
	
    protected closeComplete():void{
        super.closeComplete();
        if(this._view){
            this._view.m_loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.submitHandler,this);
            this._view.m_usernameInput.removeEventListener(egret.FocusEvent.FOCUS_IN,this.inputFocusInHandler,this);
            this._view.m_usernameInput.removeEventListener(egret.FocusEvent.FOCUS_OUT,this.inputFocusOutHandler,this);
        }
        this.dispose();
    }

    public dispose():void{
        if(this._view){
            this._view.m_loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.submitHandler,this);
            this._view = null;
        }
        super.dispose();
        fairygui.UIPackage.removePackage("Login");
    }

}
