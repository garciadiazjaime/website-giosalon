'use strict';

var convict = require('convict');

var config = convict({
    email: {
      doc: 'default contact email',
      format: String,
      default: 'hola@giosalon.com'
    },
    ipaddress: {
        doc: 'IP the application runs on',
        format: 'ipaddress',
        default: '127.0.0.1',
        env: ''
    },
    port: {
        doc: 'Port the application listens on',
        format: 'port',
        default: '3000',
        env: ''
    },
    sendgrid: {
        doc: 'Sendrid API KEY',
        format: String,
        default: '',
        env: ''
    }
});

config.validate();

module.exports = config;
