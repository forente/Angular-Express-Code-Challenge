angular.module('studentApp',[]);

angular.module('studentApp').controller('studentController', function($scope,$http){

  var config_Ob = {
    method:'GET',
    url: '/students'
  };

  function successHandle(responce){
    $scope.students = responce.data;
    console.log("success",responce);
  }
  function failureHandle(responce){
    console.log('failure', responce);
  }
  function getStudents(){
    $http(config_Ob).then(successHandle,failureHandle);
  }


  getStudents();
});
