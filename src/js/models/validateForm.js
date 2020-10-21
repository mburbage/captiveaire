import 'inputmask';

export default class ValidateForm {
	constructor() {
		this.checkCardType = this.checkCardType.bind(this);
		this.clearCardType = this.clearCardType.bind(this);
	}
	validate() {
		const elements = {
			ccForm: document.querySelector('.cc-form'),
			firstName: document.querySelector('#first-name'),
			lastName: document.querySelector('#last-name'),
			cc: document.querySelector('#cc'),
			ccType: document.querySelector('#cc-cardtype'),
			exp: document.querySelector('#exp'),
			cvv: document.querySelector('#cvv'),
			errorMessage: document.querySelector('#cc-errors'),
			errorType: document.querySelector('#cc-type-errors')
		};

		let formIsValid = true;

		if(!Inputmask.isValid(elements.firstName.value, { inputFormat: {
			'mask': 'a',
			'repeat': '25'
		} }) || elements.firstName.value == ''){
			elements.firstName.classList.add('error');
			elements.errorMessage.innerHTML = 'An error has occured. Please check that your information is correct.';
			formIsValid = false;
		} else {
			elements.firstName.classList.remove('error');			
		}
		if(!Inputmask.isValid(elements.lastName.value, { inputFormat: {
			'mask': 'a',
			'repeat': '25'
		} }) || elements.lastName.value == ''){
			elements.lastName.classList.add('error');
			elements.errorMessage.innerHTML = 'An error has occured. Please check that your information is correct.';			
			formIsValid = false;
		} else {
			elements.lastName.classList.remove('error');
			elements.errorMessage.innerHTML = '';
		}
		if(elements.ccType.value == ''){
			elements.errorType.innerHTML = 'Select a card type.';
			formIsValid = false;
		} else {
			elements.errorType.innerHTML = '';
			
		}
		if(Inputmask.unmask(elements.cc.value, { alias: "9999-9999-9999-9999"}).length !== 16 || elements.cc.value == ''){
			elements.cc.classList.add('error');
			elements.errorMessage.innerHTML = 'An error has occured. Please check that your information is correct.';
			formIsValid = false;
		} else {
			elements.cc.classList.remove('error');
			elements.errorMessage.innerHTML = '';
		}
		if(!Inputmask.unmask(elements.exp.value, { alias: "99/99"}).length === 4 || elements.exp.value === ''){
			elements.exp.classList.add('error');
			elements.errorMessage.innerHTML = 'An error has occured. Please check that your information is correct.';
			formIsValid = false;
		} else {
			elements.exp.classList.remove('error');
			elements.errorMessage.innerHTML = '';
		}
		if(!Inputmask.unmask(elements.cvv.value, { alias: "999[9]"}) || elements.cvv.value === ''){
			elements.cvv.classList.add('error');
			elements.errorMessage.innerHTML = 'An error has occured. Please check that your information is correct.';
			formIsValid = false;
		} else {
			elements.cvv.classList.remove('error');
			elements.errorMessage.innerHTML = '';
		}

		return formIsValid;

		//console.log();
	}

	checkCardType(e){
				
		const code = Inputmask.unmask(e.target.value, { alias: "9999-9999-9999-9999"});
		switch(Math.floor(code.slice(0))){
			case 3:
				this.clearCardType();
				document.getElementById(`cc-amex`).style = 'color: #3852f1;';
				document.getElementById('cc-cardtype').value = 'amex';
				break;
			case 4:
				this.clearCardType();
				document.getElementById(`cc-visa`).style = 'color: #3852f1;';
				document.getElementById('cc-cardtype').value = 'visa';
				break;
			case 5:
				this.clearCardType();
				document.getElementById(`cc-mastercard`).style = 'color: #3852f1;';
				document.getElementById('cc-cardtype').value = 'mastercard';
				break;
			case 6:
				this.clearCardType();
				document.getElementById(`cc-discover`).style = 'color: #3852f1;';
				document.getElementById('cc-cardtype').value = 'discover';
				break;
			default:
		}
	}

	clearCardType(e){
		document.querySelectorAll('.cc-cardtype').forEach(item => {
			document.getElementById(item.id).style = 'color: #707070;';
			document.getElementById('cc-cardtype').value = '';
		});
	}

	showErrorMessage(){

	}

	
}