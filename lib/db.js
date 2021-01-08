var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'demo.cyqzhwckwzan.us-east-1.rds.amazonaws.com',
	user     : 'admin',
	password : 'anand123',
	database : 'demo'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;