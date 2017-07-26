class LoadingUICtrl  implements IUIBase{
	 /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;
	public constructor() {
		
	}
	show():void{
		console.log("打开loading界面");
		if(this.loadingView == null)
		 	this.loadingView = new LoadingUI();
        MtwGame.Instance.stage.addChild(this.loadingView);
	}

	hide():void{
		if(this.loadingView )
 	 		MtwGame.Instance.stage.removeChild(this.loadingView);
	}

	public setProgress(itemsLoaded:number,itemsTotal:number):void{
		
	}

	public setText(value:string):void{
		this.loadingView.setStateWord(value);
	}
}