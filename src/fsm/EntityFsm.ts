interface EntityFSM
{
	canNotStateChange:boolean;
	getState():FsmState;
	enter( entity:Entity , stateLast:number):void;
	stateChange(entity:Entity , state:FsmState):boolean;
	execute(entity:Entity):void;
	exit(entity:Entity):void;
}

const enum FsmState 
{
	//空闲
	FSM_STATE_FREE,
	//移动
	FSM_STATE_RUN,
	//施法
	FSM_STATE_SING,
	//施放
	FSM_STATE_RELEASE,
	//死亡
	FSM_STATE_DEAD,
	//强制移动
	FSM_STATE_FORCEMOVE,
	//复活
	FSM_STATE_RELIVE,
	//站立
	FSM_STATE_IDLE,
}