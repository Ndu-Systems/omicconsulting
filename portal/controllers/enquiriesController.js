
app.controller('enquiriesController', function ($http, $scope, $window,$timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    Load();
    $timeout(function () {
      var data = {
          table: "enquiry",
          condition: " IsActive = 1 "
      };
      $http.post(GetApiUrl("enquiries"),data).success(function (response, status) {
            Done();
             if (response.data !== undefined) {
                $scope.enquiries = response.data;
                angular.forEach($scope.enquiries, function (item) {
                     $scope.status = "Active"
                });
              }
          });
       }, 2000)
});
