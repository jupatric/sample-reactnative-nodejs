
module.exports = function() {

	const appConfig = () => {
		return {
			'development' : {
				'url' : `http://${this.host}:${this.port}`,
				'host' : 'localhost',
				'port' : '3008'
			}
		};
	}

	const env = process.env.NODE_ENV || 'development';
	const appConstants = appConfig();

	const configuration = {
		application : {
			url : appConstants[env]['url'],
			host : appConstants[env]['host'],
			port : appConstants[env]['port'],
		},
		server : {
			defaultHost : 'http://localhost:3008'
		}
	};

	if (!configuration.application['host']) {
		throw new Error('Missing constant application.host. ' +
			'Check your enviroment variables NODE_HOST.');
	} else if (!configuration.application['port']) {
		throw new Error('Missing constant application.port. ' +
			'Check your enviroment variable NODE_PORT.');
	}

	return configuration;

}();