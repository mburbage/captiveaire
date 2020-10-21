export default class CreateInputMask {
	constructor() {		
		
	}

	definePatterns(){
		
		// Create Input Masking
		this.createInputMask({
			'mask': '9999-9999-9999-9999'
		}, "cc");
		this.createInputMask("99/99", "exp");
		this.createInputMask("999[9]", "cvv");
		this.createInputMask({
			'mask': 'a',
			'repeat': '25'
		}, "first-name");
		this.createInputMask({
			'mask': 'a',
			'repeat': '25'
		}, "last-name");
	}

	// Create Input Mask Function

	createInputMask (type, elId){
		let selector = document.getElementById(elId);
		let im = new Inputmask(type);
		im.mask(selector);
	};
}