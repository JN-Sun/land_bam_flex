(function(){

var me = {};

me.isEmail = function(email){
	var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
};

me.isNumber = function(number){
	var reg = /^\d+$/;
	return reg.test(number);
};

me.isNotEmpty = function(str){
	return Boolean(str);
};

LEND.validation = me;

}());