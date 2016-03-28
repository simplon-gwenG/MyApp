angular.module('app.controllers', ['ionic','ngCordova'])

.controller('CameraCtrl', function($scope, $cordovaCamera) {
   $scope.pictureUrl = "http://placehold.it/300x300";//emplacement de l'image
   $scope.takePicture = function(){
     var options ={
       destinationType:Camera.DestinationType.DATA_URL,
       sourceType: Camera.PictureSourceType.CAMERA,
       allowEdit:true,
       encodingType: Camera.EncodingType.JPEG,
     }
     $cordovaCamera.getPicture(options)
      .then(function(data){
        console.log("camera data:" + angular.toJson(data));
        $scope.pictureUrl = "data:image/jpeg;base64,"+ data;
      },function(error){
        console.log("camera error:" + angular.toJson(data));
      });
   };
});
