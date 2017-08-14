app.controller('monitorController', ['$scope', function ($scope) {
  $scope.date = 'Hola!';
  $scope.trainIsComing = false;
  $scope.warrningMsg = '';
  //listening on the data coming from udp//
  var socket = io.connect();
  socket.on('field', function (data) {
    console.log(data);
    if (data.includes('2') || data.includes('3') || data.includes('4') || data.includes('5') || data.includes('6') ||
      data.includes('7') || data.includes('8') || data.includes('9') || data.includes('a') || data.includes('b')) {
      $scope.$apply(function () {
        $scope.trainIsComing = true;
        $scope.warrningMsg = '火車正在進入平交道';
      });
    }else{
      $scope.$apply(function () {
        $scope.trainIsComing = false;
        $scope.warrningMsg = '';
      });
    }
    /* Show dots*/  
    if (data.includes("2"))
      $("#signal2").css("color", "green");
    else
      $("#signal2").css("color", "grey");

    if (data.includes("3"))
      $("#signal3").css("color", "green");
    else
      $("#signal3").css("color", "grey");

    if (data.includes("4"))
      $("#signal4").css("color", "green");
    else
      $("#signal4").css("color", "grey");

    if (data.includes("5"))
      $("#signal5").css("color", "green")
    else
      $("#signal5").css("color", "grey");

    if (data.includes("6"))
      $("#signal6").css("color", "green")
    else
      $("#signal6").css("color", "grey");

    if (data.includes("7"))
      $("#signal7").css("color", "green");
    else
      $("#signal7").css("color", "grey");

    if (data.includes("8"))
      $("#signal8").css("color", "green")
    else
      $("#signal8").css("color", "grey");

    if (data.includes("9"))
      $("#signal9").css("color", "green");
    else
      $("#signal9").css("color", "grey");

    if (data.includes("a"))
      $("#signalA").css("color", "green");
    else
      $("#signalA").css("color", "grey");

    if (data.includes("b"))
      $("#signalB").css("color", "green");
    else
      $("#signalB").css("color", "grey");

    /* Show lines*/  
    if (data.includes("2") && data.includes("3"))
      $("#signal23Line").css("color", "green");
    else
      $("#signal23Line").css("color", "grey");

    if (data.includes("3") && data.includes("4"))
      $("#signal34Line").css("color", "green");
    else
      $("#signal34Line").css("color", "grey");

    if (data.includes("4") && data.includes("5"))
      $("#signal45Line").css("color", "green");
    else
      $("#signal45Line").css("color", "grey");

    if (data.includes("5") && data.includes("6"))
      $("#signal56Line").css("color", "green");
    else
      $("#signal56Line").css("color", "grey");

    if (data.includes("6") && data.includes("7"))
      $("#signal67Line").css("color", "green");
    else
      $("#signal67Line").css("color", "grey");

    if (data.includes("7") && data.includes("8"))
      $("#signal78Line").css("color", "green");
    else
      $("#signal78Line").css("color", "grey");

    if (data.includes("8") && data.includes("9"))
      $("#signal89Line").css("color", "green");
    else
      $("#signal89Line").css("color", "grey");

    if (data.includes("9") && data.includes("a"))
      $("#signal9ALine").css("color", "green");
    else
      $("#signal9ALine").css("color", "grey");

    if (data.includes("a") && data.includes("b"))
      $("#signalABLine").css("color", "green");
    else
      $("#signalABLine").css("color", "grey");
  });

}]);

