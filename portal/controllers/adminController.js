app.controller('adminController', function ($http, $scope, $window, $route,$timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    //Gets the Candidates
    $scope.candidateCount = 0;
    //Load();
  //  $timeout(function () {
      $http.get(GetApiUrl("GetCandidates")).success(function (data, status) {
        //    Done();
                $scope.candidates = data.candidates;
                $scope.candidateCount = $scope.candidates.length;
            });
    //}, 2000)
    //Gets the Vacancies
    $scope.vacancyCount = 0;

        $http.get(GetApiUrl("GetVacancies")).success(function (data, status) {
            $scope.vacancies = data.vacancies;
             $scope.vacancyCount = $scope.vacancies.length;
        });


    //Gets Enquiries
    $scope.enquiriesCount = 0;

    $http.get(GetApiUrl("enquiries")).success(function (response, status) {
                $scope.enquiries = response.data;
                $scope.enquiriesCount = $scope.enquiries.length;
    });


    //Get Applications
    $scope.applicationsCount = 0;
    $http.post(GetApiUrl("applications")).success(function (response, status) {
        $scope.applications = response.data;
        $scope.applicationsCount = $scope.applications.length;
    });


});
app.controller('resetPasswordController', function ($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

});
app.controller('successController', function ($http, $scope, $window) {
    $scope.success = localStorage.getItem("success");
    $scope.Ok = function () {
        $window.location.href = "#admin-dashboard";
    };
});
