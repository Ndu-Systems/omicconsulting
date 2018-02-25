app.controller('applicationController', function ($http, $scope, $window,$timeout) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
      $window.location.href = "#login";
  }
   Load();
   $timeout(function () {
     var data = {
         table: "applications",
         condition: " status = 'Active'"
     };
     $http.post(GetApiUrl("applications")).success(function (response, status) {
           Done();
            if (response.data !== undefined) {
               $scope.applications = response.data;
             }
         });
      }, 2000)
});
