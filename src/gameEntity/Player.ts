class Player extends Entity{
	public constructor(id:Long) {
		super(id);
		
	}
	private _playerObject:GameObject;

	public createComponents():void{
		this.gameObject = this._playerObject = new GameObject();
	}
}