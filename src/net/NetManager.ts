class NetManager {
	public static readonly Instance: NetManager = new NetManager();
	private _connect:Connection = new Connection();
	private _handler:MessageHandler = new MessageHandler();
	

	public constructor() {
	}

	public connect(host:string,port:number):void{
		this._connect.setHandler(this._handler);
		this._connect.connect(host,port);
	}	

	public login(loginname:string):void{
		let output:egret.ByteArray = new egret.ByteArray();
		let loginName:string = loginname;
		let sid = 1;
		let pid = 1;
		let client = 1;
		let IDNumber:string = "123";
		let ip:string = "0.0.0.0"
		output.writeUTF(loginName);
		output.writeInt(sid);
		output.writeInt(pid);
		output.writeInt(client);
		output.writeUTF(IDNumber);
		output.writeUTF(ip);
		this._connect.sendData(E_MESSAGE_CMD.ReqLoginMessage,output);
	}

	public create(roleName:string,sex:number):void{
		let output:egret.ByteArray = new egret.ByteArray();
		output.writeUTF(roleName);
		output.writeInt(sex);
		this._connect.sendData(E_MESSAGE_CMD.ReqCreateRoleMessage,output);
	}
	
	public heart():void{
		if(this._connect && this._connect.connected())
			this._connect.sendData(E_MESSAGE_CMD.ReqHeartMessage);
	}
}


const enum E_MESSAGE_CMD{
	ReqLoginMessage = 1001,
	ResCreateRoleMessage = 1002,
	ReqCreateRoleMessage = 1003,
	ResEnterGameMessage = 1006,
	ReqHeartMessage = 1009,
	ResHeartMessage = 1010,

}