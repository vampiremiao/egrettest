class MainUICtrl extends UIBase{
	 private _view:MainUI.UI_MainUI;

	public constructor() {
		super();
	}
	protected createChildren():void{
		MainUI.MainUIBinder.bindAll();
		this._ui = this._view = MainUI.UI_MainUI.createInstance();
		this._ui.width = MtwGame.Instance.stage.stageWidth;
		this._ui.height = MtwGame.Instance.stage.stageHeight;
	}

	
}