class EntityFreeFsm implements EntityFSM{
	public constructor() {
	}

	canNotStateChange:boolean;
	public getState():FsmState{
		return FsmState.FSM_STATE_FREE;
	}

	public enter( entity:Entity , stateLast:number):void{
		
	}

	public stateChange(entity:Entity , state:FsmState):boolean{
		return true;
	}
	public execute(entity:Entity):void{
		
	}
	public exit(entity:Entity):void{

	}
}