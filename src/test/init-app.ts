interface IProject{
	name:string;
	version:string;
	description:string;
}

export class InitApp{
	private project:IProject = {name:"", version:"", description:""}
	private refresh:Function;
	private attached(){
		fetch("package.json")
		.then(res => res.json())
		.then(({name, version, description}) => {
			this.refresh({project:{name, version, description}});
		});
	}
}