function evenHello(num){
	if(num < 0){
		return 'ワールド';
	}
	if(num % 2){
		return num;
	}
	return 'ハロー';
}
module.exports = evenHello;