class Monster extends Entity {
	public constructor(id:Long) {
		super(id);
	}
	private _monsterObject:GameObject;

	public createComponents():void{
		this.gameObject = this._monsterObject = new GameObject();
	}
}