class CreateRoleUICtrl extends UIBase{
	public constructor() {
        super();
	}
    private _view:CreateRole.UI_CreateWin;
    
    
	protected createChildren():void{
		console.log("打开创建角色界面");

        CreateRole.CreateRoleBinder.bindAll();
        this._ui = this._view = CreateRole.UI_CreateWin.createInstance();
        
        this._view.m_loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.submit,this);
        this._view.m_usernameInput.addEventListener(egret.FocusEvent.FOCUS_IN,this.inputFocusInHandler,this);
         this._view.m_usernameInput.addEventListener(egret.FocusEvent.FOCUS_OUT,this.inputFocusOutHandler,this);

        this._view.m_usernameInput.text = PlayerData.Instance.randomName;
        this._view.m_usernameInput.text = "输入角色名";
        this._view.x = MtwGame.Instance.stage.stageWidth / 2 - this._view.width / 2;
        this._view.y = MtwGame.Instance.stage.stageHeight - this._view.height - 50;
	}

    private submit(e:egret.TouchEvent):void{
        NetManager.Instance.create(this._view.m_usernameInput.text,this._view.m_sexGroup.selectedIndex);
    }

    private inputFocusInHandler(e:egret.FocusEvent):void{
        if(this._view.m_usernameInput.text == "输入角色名"){
            this._view.m_usernameInput.text = "";
        }
    }

    private inputFocusOutHandler(e:egret.FocusEvent):void{
        if(this._view.m_usernameInput.text == ""){
            this._view.m_usernameInput.text = "输入角色名";
        }
    }


    public dispose():void{
        if(this._view){
            this._view.m_loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.submit,this);
            this._view.m_usernameInput.removeEventListener(egret.FocusEvent.FOCUS_IN,this.inputFocusInHandler,this);
            this._view.m_usernameInput.removeEventListener(egret.FocusEvent.FOCUS_OUT,this.inputFocusOutHandler,this);
            this._view = null;
        }
        super.dispose();
        fairygui.UIPackage.removePackage("CreateRole");
    }
    protected closeComplete():void{
        super.closeComplete();
        if(this._view){
            this._view.m_loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.submit,this);
        }
        this.dispose();
    }
  
}