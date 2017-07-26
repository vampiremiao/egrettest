class MtwGame {
	public static readonly Instance: MtwGame = new MtwGame();
	public eventCenter:egret.EventDispatcher;
	public constructor() {
	}
	public stage:egret.Stage;
	private _heartTime:number = 0;
	public init(stage:egret.Stage):void{
		this.stage = stage;
		GameStateManager.Instance.init();
		UIManager.Instance.init();
		GameStateManager.Instance.changeGameState(GameStateType.Loading);
		
	}

	public updateTime(gameTime:GameTime):void{
		GameStateManager.Instance.updateTime(gameTime);
		if(gameTime.totalGameTime > this._heartTime){
			NetManager.Instance.heart();
			this._heartTime = gameTime.totalGameTime + 15000;
		}
	}

	public addBg():void{
		let stage:egret.Stage = MtwGame.Instance.stage;
        let sky = this.createBitmapByName("bg_jpg");
        stage.addChildAt(sky,0);
        let stageW = stage.stageWidth;
        let stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
	}

	private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}