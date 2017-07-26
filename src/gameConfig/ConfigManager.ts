// TypeScript file
class ConfigManager{
    constructor(){

    }
    public static readonly Instance: ConfigManager = new ConfigManager();

    public map:{[key:number]:MapConfig} = {};
   
    public initConfigs(){
        this.addMapConfig(RES.getRes("map_csv"));
        
    }

    private addMapConfig(content:string){
        console.log(content);
        let data:{header:string[],content:string[][]} = CSVReader.read(content);
        for(let i:number = 0;i < data.content.length; i++){
            let line:string[] = data.content[i];
            let config:MapConfig = new MapConfig();
            for(let j:number = 0;j < data.header.length; j++){
                 let key:string = data.header[j];
                 config[key] = line[j];
            }
            this.map[config.id] = config;
        }
    }

}

