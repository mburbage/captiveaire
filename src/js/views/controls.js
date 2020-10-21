import validateForm from '../models/validateForm';

export default class Controls {
	
	constructor() {
		const validate = new validateForm();		
	}
	
	removeCardType() {
		document.querySelectorAll('.cc-cardtype').forEach(item => {
			document.getElementById(item.id).style = 'color: #707070;';
			document.getElementById('cc-cardtype').value = '';
		});
		
	}
	selectCardType (type) {
		document.getElementById(`cc-${type}`).style = 'color: #3852f1;';
		document.getElementById('cc-cardtype').value = type;
	}
}