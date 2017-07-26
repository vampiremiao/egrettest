class UIManager {
	public static readonly Instance:UIManager = new UIManager();
	public constructor() {
	}
	private _views:{[uitype:number]:IUIBase} = {};
	public init():void{
		let ui:IUIBase = new LoadingUICtrl();
		this._views[UIType.Loading] = ui;

		ui = new LoginUICtrl();
		this._views[UIType.Login] = ui;

		ui = new MainUICtrl();
		this._views[UIType.MainUI] = ui;

		ui = new CreateRoleUICtrl();
		this._views[UIType.CreateRole] = ui;
	}

	public addPackages(){
		let stage:egret.Stage = MtwGame.Instance.stage;
		fairygui.UIPackage.addPackage("Common");
        fairygui.UIPackage.addPackage("Login");
		fairygui.UIPackage.addPackage("CreateRole");
		fairygui.UIPackage.addPackage("MainUI");
        fairygui.UIConfig.defaultFont = "宋体";
        stage.addChild(fairygui.GRoot.inst.displayObject);
	}

	public show(type:UIType):void{
		if(this._views[type]){
			this._views[type].show();
		}
	}

	public hide(type:UIType):void{
		if(this._views[type]){
			this._views[type].hide();
		}
	}

	public getUI(type:UIType):IUIBase{
		return this._views[type];
	}
	
}

const enum UIType{
	Loading,
	Login,
	MainUI,
	CreateRole,
}


