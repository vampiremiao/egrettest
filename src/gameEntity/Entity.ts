abstract class Entity {
	public constructor(id:Long) {
		this._display = new egret.Sprite();
		this.uid = id.toString();
		this.realUid = id;
	}

	public abstract createComponents():void;

	public uid:string;
	public realUid:Long;
	public gameObject:GameObject;
	protected _display:egret.Sprite;

	public destory(){
		this.uid = null;
		this.realUid = null;
		if(this.gameObject)
			this.gameObject = null;
		if(this._display){
			if(this._display.parent){
				this._display.parent.removeChild(this._display);
			}
			this._display = null;
		}
	}
}