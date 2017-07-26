class CSVReader {
	public constructor() {
	}
	static read(content:string,noUseLine:number = 0):{header:string[],content:string[][]}{
		let contents:string[][] = [];
		let columns:string[];
		var inUse:string[] = [];
		var lines:string[] = content.split("\n");
		while(noUseLine > 0){
			noUseLine--;
			lines.shift();
		}
		var line0:String = lines[0];
		var line1:String = lines[1];
		columns = line1.trim().split(",");line1
		inUse = line0.trim().split(",");
		var columnsCount:number = columns.length;
		var row:string[] = null;
		for(let i:number=2;i<lines.length;i++){
			let line:String = lines[i];
			if(line){
				row = line.trim().split(',');
				contents.push(row);
			}
		}
		return {header:columns,content:contents};
	}
}