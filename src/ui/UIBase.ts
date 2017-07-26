interface IUIBase{
	show():void;
	hide():void;
}

class UIBase implements IUIBase{
	public constructor() {
	}
	protected _ui:fairygui.GComponent;
	protected _inited:boolean = false;
	public show():void{
		if(!this._inited){
			this.createChildren();
			this._inited = true;
		}
		if(this._ui){
			fairygui.GRoot.inst.addChild(this._ui);
			this.openRefresh();
		}
		
	}

	protected createChildren():void{}

	protected openRefresh():void{

	}

	protected closeComplete():void{

	}

	hide():void{
        if(this._ui){
            if(this._ui.parent){
                this._ui.parent.removeChild(this._ui);
            }
        }
		this.closeComplete();
	}

	dispose():void{
		if(this._ui){
			this._ui.dispose();
			this._ui = null;
		}
	}
}