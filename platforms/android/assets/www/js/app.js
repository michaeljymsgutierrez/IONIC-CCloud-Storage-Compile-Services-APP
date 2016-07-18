// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



app.controller('cloudCtrl',function($scope,$window,$cordovaInAppBrowser,$timeout,$ionicLoading){
  $ionicLoading.show({template: "Loading Services . . ."});
  
  $timeout(function(){
      
       $ionicLoading.hide();
  },10000);
  
    
  
  
  
  $scope.onedrive=function(){
    console.log("OneDrive is clicked!!!");
    $window.open('https://onedrive.live.com/','_self','location=no');
  };
  
  
  
    $scope.gdrive=function(){
    console.log("Google Drive is clicked!!!");
    $window.open('https://drive.google.com/drive/mobile/my-drive','_self','location=no');
  };
  
  
    $scope.dropbox=function(){
    console.log("Dropbox is clicked!!!");
    $window.open('https://www.dropbox.com/','_self','location=no');
  };
  
     $scope.fourshared=function(){
    console.log("4Shared is clicked!!!");
    $window.open('http://www.4shared.com/','_self','location=no');
  };
  
    $scope.mediafire=function(){
    console.log("Mediafire is clicked!!!");
    $window.open('https://www.mediafire.com/','_self','location=no');
  };
  
  
    $scope.spideroak=function(){
    console.log("Spideroak is clicked!!!");
    $window.open('https://spideroak.com/','_self','location=no');
  };
  
  
  

});
