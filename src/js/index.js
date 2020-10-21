import '../css/styles.css';
import '@fortawesome/fontawesome-pro/js/all';
import 'inputmask';

import ValidateForm from './models/validateForm';
import createInputMask from './views/createInputMask';
import controls from './views/controls';

const validate = new ValidateForm();
const assignInputMask = new createInputMask();
const controlElements = new controls();

assignInputMask.definePatterns();

document.getElementById("cc-wrapper").style.visibility = "visible";

// Event listener for input fields and then validate

document.querySelector('.cc-form').addEventListener('submit', e => {	
	if(!validate.validate()){
		e.preventDefault();
	} else {
		e.preventDefault();
		document.querySelector('#cc-wrapper').innerHTML = '<div class="cc-thankyou fadein">Thank you. Your order has been processed.</div>';
	}
});

document.querySelectorAll('.cc-field').forEach( item => {
	item.addEventListener('focus', function() {
		document.getElementById(this.id).classList.remove('error');
	})
});

document.querySelectorAll('.cc-cardtype').forEach( item => {			
	item.addEventListener('click', function (e) {
		let iconId = document.getElementById(this.id);
		controlElements.removeCardType();
		controlElements.selectCardType(iconId.dataset.card);

	})
});

document.querySelector('#cc').oninput = validate.checkCardType;
