(function(){
	var me = {};
	var form = document.querySelector('.form-container');
	var closeButton = null;

		function onClose(){
			me.close();
			closeButton.removeEventListener('click', onClose);
		}

		function offEscape(e){

			if(e.keyCode == 27){
				me.close();
			}

			removeEventListener('keydown', offEscape);
		}

	me.open = function(){
		form.classList.remove('is-hidden');

		closeButton = document.querySelector('.form__close-button');
		closeButton.addEventListener('click', onClose);

		addEventListener('keydown', offEscape);


	};

	me.close = function(){
		form.classList.add('is-hidden');
	};

	me.isValid = function(){

		var requireFields = document.querySelectorAll('[data-valid="required"]');
		var emailValue = document.querySelector('[data-email]').value;
		var numberValue = document.querySelector('[data-number]').value;
		var fill_all_fields = document.querySelector('.fill_all_fields');
		var email_valid = document.querySelector('.email_valid');
		var phone_number_valid = document.querySelector('.phone_number_valid');

		if(!me.isAllCompleted(requireFields)){

				fill_all_fields.style.display = "block";
				//console.log("Fill all fields!");
				return false;

		}else if(!LEND.validation.isEmail(emailValue)){

				email_valid.style.display = "block";
				fill_all_fields.style.display = "none";
				phone_number_valid.style.display = "none";
				//console.log("Incorrect email form!");
				return false;

		}else if(!LEND.validation.isNumber(numberValue)){

				phone_number_valid.style.display = "block";
				email_valid.style.display = "none";
				fill_all_fields.style.display = "none";
				//console.log("Incorrect number form!");
				return false;
		}else{
			fill_all_fields.style.display = "none";
			phone_number_valid.style.display = "none";
			email_valid.style.display = "none";
			return true;
		}


	};

	me.isAllCompleted = function(data){
		var result = true;
		for (var i = 0; i < data.length; i++) {
			if(!LEND.validation.isNotEmpty(data[i].value)){
				result = false;
				break;
			}
		}
		return result;
	};

	LEND.form = me;
}());