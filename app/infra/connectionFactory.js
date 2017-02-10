var mysql = require('mysql');

function createDBConnections() {
	return connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'node'
		});
}

module.exports = function(){
	return createDBConnections;
}