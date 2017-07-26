class GameObject {
	public constructor() {
	}
	public x:number;
	public y:number;
}

class PlayerObject extends GameObject{
	public constructor() {
		super();
	}
	public level:number;
	public uid:string;

}