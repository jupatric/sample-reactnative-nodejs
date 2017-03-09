const Hapi = require('hapi');
const routes = require('./routes/AppRoutes');
const constants = require('./configs/Constants');


const appHost = constants.application['host'];
const appPort = constants.application['port'];

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: appHost, 
    port: appPort 
});

server.route(routes);

const options = {
    ops: {
        interval: 1000
    },
    reporters: {
        myConsoleReporter: [ {
            module: 'good-console'
        }, 'stdout']
    }
};

// Start the server
server.register({
    register: require('good'),
    options,
}, (err) => {

    if (err) {
        return console.error(err);
    }
    server.start(() => {
        console.info(`Server started at ${ server.info.uri }`);
    });

});

module.exports = server;