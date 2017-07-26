class EntityManager {
	private _entityDic:{[key:string]:Entity} = {};
	public static readonly Instance: EntityManager = new EntityManager();

	public constructor() {
		
	}

	public createEntity(type:EntityType,id:Long):Entity{
		let entity:Entity;
		switch(type){
			case EntityType.PLAYER:
			entity = new Player(id);
			entity.createComponents();
			break;
			case EntityType.MONSTER:
			entity = new Monster(id);
			entity.createComponents();
			break;
		}
		return entity;
	}

	public createModel(entity:Entity):void{

	}

	public getEntity(id:string):Entity{
		return this._entityDic[id];
	}

	/**
	 * 考虑换成对象池
	 */
	public destoryEntity(id:string):void{
		let entity:Entity = this._entityDic[id];
		entity.destory();
		delete this._entityDic[id];
	}
}

const enum EntityType{
	//回城点
	HOME = 1,
	//地图传送点
	TRANSFER,
	// 宝箱
	BOX,
	// 刷怪点
	MONSTER_BORN,
	// 怪物
	MONSTER,
	//玩家
	PLAYER,
	// 资源点（分多种）
	RESOURCE

}