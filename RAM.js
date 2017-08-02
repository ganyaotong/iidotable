var ram = function ram(){
	return this;
}

ram.prototype.set = function(lable,styleClass) {
	sessionStorage.setItem(lable,JSON.stringify(styleClass));
	return this;
};

ram.prototype.get = function(lable) {
	var object = sessionStorage.getItem(lable);
	return JSON.parse(object);
};

function RAM(){
	return new ram();
}