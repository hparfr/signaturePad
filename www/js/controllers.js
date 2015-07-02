angular.module('pad')
.controller('ctrl', ['$scope', '$cordovaFile', function($scope, $cordovaFile) {
  $scope.saveDone = false;
  var canvas = document.querySelector('canvas');
  var signaturePad = new SignaturePad(canvas);

  $scope.save = function () {
    lockPad();

    if (!window.cordova) //cordova is not defined in the browser
      return $scope.reset();

    $cordovaFile.writeFile(cordova.file.externalDataDirectory,'signaturePad.png_dataURL', signaturePad.toDataURL(), { 'append':false } ).then(function (x) {
      console.log('Save successful', x);
    }, function (y) {
      console.log('Error during save', y);
    }).then($scope.reset);
  };


  $scope.reset = function() {
    signaturePad.clear();
    unlockPad();
  };

  function lockPad() {
    $scope.saveDone = true;
    signaturePad.off();
  }

  function unlockPad() {
    $scope.saveDone = false;
    //because there is no signaturePad.on()
    signaturePad._handleMouseEvents();
    signaturePad._handleTouchEvents();
  }

  function resize() {
    //useful
     var ratio =  Math.max(window.devicePixelRatio || 1, 1);
     canvas.width = canvas.offsetWidth * ratio;
     canvas.height = canvas.offsetHeight * ratio;
     canvas.getContext("2d").scale(ratio, ratio);
  }
  resize();
}]);
