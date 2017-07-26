class AnimationControl {
	private _animations:{[key:number]:egret.MovieClip}
	public constructor(public entity:Entity) {
	}

	public addAnimationLayer(type:AnimationType):void{
		if(!this._animations[type]){
			this._animations[type] = new egret.MovieClip();
		}
	}
}

const enum AnimationType{
	Body = 1,
	Weapon
}