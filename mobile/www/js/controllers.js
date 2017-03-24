angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.buttonOn = function( dir ) {
    console.log( 'ON', dir);
    if( dir == 'FWD' ){ 
      socket.emit('client:set:forward', 1);
    } else if( dir == 'BWD'){ 
      socket.emit('client:set:backward', 1);
    } else if( dir == 'LEFT'){ 
      socket.emit('client:set:left', 1);
    } else if( dir == 'RIGHT'){ 
      socket.emit('client:set:right', 1);
    }
  };
  $scope.buttonOff = function(dir){
    console.log( 'OFF', dir );
    if( dir == 'FWD' ){
      socket.emit('client:set:forward', 0);
    } else if( dir == 'BWD'){
      socket.emit('client:set:backward', 0);
    } else if( dir == 'LEFT'){
      socket.emit('client:set:left', 0);
    } else if( dir == 'RIGHT'){
      socket.emit('client:set:right', 0);
    }
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
