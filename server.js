'use strict';

require('node-env-file')('.env');
console.log('Running Development!');

var Gpio = require('onoff').Gpio;
var left = new Gpio(17, 'out')
  , right = new Gpio(4, 'out')
  , backward = new Gpio(27, 'out')
  , forward = new Gpio(22, 'out')
  , io;

function resetTurn() {
  left.writeSync( 0 );
  right.writeSync( 0 );
}
function resetDirection() {
  backward.writeSync( 0 );
  forward.writeSync( 0 );
}
resetTurn(); resetDirection();

require('mahrio').runServer( process.env, __dirname ).then( function(server){

  io = require('socket.io').listen( server.listener );

  io.on('connection', function( socket ){
    console.log('socket listening...' + socket.id); // Record the connection

    socket.emit( 'event:hello' ); // Send message exclusively to new connection

    socket.on('client:set:forward', function(val){ resetDirection(); forward.writeSync( !!val ? 1 : 0 ); });
    socket.on('client:set:backward', function(val){ resetDirection(); backward.writeSync( !!val ? 1 : 0 ); });
    socket.on('client:set:left', function(val){ resetTurn(); left.writeSync( !!val ? 1 : 0 ); });

    socket.on('client:set:right', function(val){ resetTurn(); right.writeSync( !!val ? 1 : 0 ); });

    socket.on( 'disconnect', function(){
      console.log('goodbye socket...' + socket.id ); // Record the disconnection
    });
  });

  // ASSETS
  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: ['../public/assets/']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function( request, reply ){
      reply.view('index');
    }
  });
});

process.on('SIGINT', function(){
  forward.unexport();
  backward.unexport();
  left.unexport();
  right.unexport();
  process.exit();
});
