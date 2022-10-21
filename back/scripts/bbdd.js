const mysql = require('mysql');
const { filesFromPath } = require('web3.storage');

// Configuración de la base de datos
const config = {
	host: '127.0.0.1',
	user: 'admin',
	password: 'admin',
	database: 'hack4good',
	port: '3306'
};

// Conexión a la base de datos
const conexion = mysql.createConnection(config);

// Función que devuelve una promesa que se resuelve cuando se conecta a la base de datos
conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});



//create a user in database
/* conexion.query("INSERT INTO user_files VALUES (12345, 'Lucia', './scripts/file.txt')", function (error, result) {
    if (error)
        throw error;
    console.log("se ha creado",result);

});	 */

conexion.query('SELECT * FROM user_files', function (error, result) {
    if (error)
        throw error;
    console.log("Esta este usuario",result);

});


conexion.end();

// Funcion para ejecutar consulta a la base de datos

// Funcion para ejecutar una transacción a la base de datos 
/* function transaction() {
	return new Promise((resolve, reject) => {
		connection.beginTransaction((err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});

		function query(sql, params) {
			return new Promise((resolve, reject) => {
				connection.query(sql, params, (err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
				});
			});
		} */
