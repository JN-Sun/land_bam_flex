(function(){

	var openFormButton = document.querySelector('.arrow-down');
	var form = document.querySelector('.form');
	var nav = document.querySelector('.nav');
	var not_valid_all = document.querySelector('.not_valid_all');
	var val_ok = document.querySelector('.val_ok');

		if(openFormButton){
			openFormButton.addEventListener('click', function(){
				LEND.form.open();
			});
		}

		if(form){
			form.addEventListener('submit', function(e){
				e.preventDefault();
				if(LEND.form.isValid()){
					val_ok.style.display = "block";
					not_valid_all.style.display = "none";
					console.log("Resul is OK!");
				}else{
					not_valid_all.style.display = "block";
					val_ok.style.display = "none";
					console.log("Not valid!");
				}
			});
		}

		if(nav){
			nav.addEventListener('click', function(e){
				e.preventDefault();
				var target = e.target;

				if(target.tagName.toLowerCase() !== 'a'){
					return;
				}
				LEND.navigation.toggleToActiveLink(target);
			});
		}
}());