export class Recipe {

	private id: number;
	private name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	public getId() {
		return this.id;
	}

	public setId(id: number) {
		this.id = id;
	}

	public getName() {
		return this.name;
	}

	public setName(name: string) {
		this.name = name;
	}


}