
app.controller('vacancyController', function ($http, $scope, $window,$timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    Load();
    $timeout(function () {
      var data = {
          table: "vacancies",
          condition: " IsActive = 1 "
      };
      $http.post(GetApiUrl("get"),data).success(function (response, status) {
            Done();
             if (response.data !== undefined) {
                $scope.vacancies = response.data;
              }
          });
       }, 2000)

       $scope.ViewVacancy = function(vac){
            localStorage.setItem("Id", vac.Id);
            localStorage.setItem("Employer", vac.Employer);
            localStorage.setItem("ContactPerson", vac.ContactPerson);
            localStorage.setItem("Cell", vac.Cell);
            localStorage.setItem("CompanyEmail", vac.Email);
            localStorage.setItem("Position", vac.Position);
            localStorage.setItem("CompanyLocation", vac.Location);
            localStorage.setItem("CompanyIndustry", vac.Industry);
            localStorage.setItem("Experience", vac.Experience);
            localStorage.setItem("PostDate", vac.PostDate);
            localStorage.setItem("CloseDate", vac.CloseDate);
            localStorage.setItem("Requirements", vac.Requirements);
            localStorage.setItem("IsActive", vac.IsActive);
            $window.location.href = "#viewVacancy";
       }

});
app.controller('addVacanyController', function ($http, $scope, $window, $route) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }

    $scope.message = undefined;

    $scope.reset = function () {
        $scope.message = undefined
        $route.reload();
    };
    $scope.AddVacancy = function () {
        $scope.message = undefined;
        //declare
        var employer = $scope.employer;
        var contactperson = $scope.contactperson;
        var cell = $scope.cell;
        var email = $scope.email;
        var position = $scope.position;
        var location = $scope.location;
        var industry = $scope.industry;
        var experience = $scope.experience;
        var closedate = $scope.closingDate;
        var requirements = $scope.requirements;

        var data = {
            employer: employer,
            contactperson: contactperson,
            email: email,
            cell: cell,
            position: position,
            location: location,
            industry: industry,
            closedate: closedate,
            experience: experience,
            requirements: requirements
        }

        if (data.email === undefined) {
            $scope.message = "Email address not in correct format please check and resubmit"
        }
        else {
            if (data.employer !== undefined && data.contactperson !== undefined && data.email !== undefined && data.cell !== undefined && data.position !== undefined && data.location !== undefined && data.closedate !== undefined && data.industry !== undefined && data.requirements !== undefined && data.experience !== undefined) {
                $http.post(GetApiUrl("AddVacancy"), data)
                   .success(function (response, status) {
                       if (parseFloat(response) === 1) {
                           $window.location.href = "#vacancy";
                           $scope.message = undefined;
                       }
                       else {
                           $scope.message = "Something Went Wrong Please contact system administrator."
                       }
                   });
            }
            else {
                $scope.message = "All fields must be field in"
            }
        }

    }
});

app.controller('viewVacancyController', function ($http, $scope, $window,$timeout) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
      $window.location.href = "#login";
  }
    $scope.Employer = localStorage.getItem("Employer");
    $scope.ContactPerson = localStorage.getItem("ContactPerson");
    $scope.Cell = localStorage.getItem("Cell");
    $scope.CompanyEmail = localStorage.getItem("CompanyEmail");
    $scope.Position = localStorage.getItem("Position");
    $scope.CompanyLocation = localStorage.getItem("CompanyLocation");
    $scope.Experience = localStorage.getItem("Experience");
    $scope.PostDate = localStorage.getItem("PostDate");
    $scope.CloseDate = localStorage.getItem("CloseDate");
    $scope.Id = localStorage.getItem("Id");
    $scope.Requirements = localStorage.getItem("Requirements");
    $scope.IsActive = localStorage.getItem("IsActive");
    $scope.Location = localStorage.getItem("CompanyLocation");
    $scope.status = "";
    $scope.numApplicants = 0;
    if($scope.IsActive === '1'){
      $scope.status = "Active";
    }
    else{
      $scope.status = "Closed";
    }
    //Get Applicants for the vacancy
    Load();
    $timeout(function () {
      var data = {
          Id : $scope.Id
      };
      $http.post(GetApiUrl("GetApplicantsForVacancy"),data).success(function (response, status) {
            Done();
             if (response.data !== undefined) {
                $scope.applicants = response.data;
                $scope.numApplicants = $scope.applicants.length;
              }
          });
       }, 2000)

       //Deactivate Vacancy
      $scope.Deactivate = function () {
                  var data = {
                      VacancyId:$scope.Id
                  };
                  $http.post(GetApiUrl("DeactivateVacancy"), data)
                  .success(function (response, status) {
                      if (parseInt(response)=== 1) {
                          localStorage.setItem("success",   $scope.Position + " was  removed from Listing successfully! for "+   $scope.Employer)
                          $window.location.href = "#success";
                      }
                  });

    }

    //Deactivate Application
   $scope.DeactivateApplication = function (can) {
               var data = {
                   ApplicationId:can.id
               };
               $http.post(GetApiUrl("DeactivateApplication"), data)
               .success(function (response, status) {
                   if (parseInt(response)=== 1) {
                       localStorage.setItem("success",   "Application by "+can.email+" was  removed from Listing successfully! for "+   $scope.Position +" Position.")
                       $window.location.href = "#success";
                   }
               });

 }

});
app.controller('enquiryController', function ($http, $scope, $window,$timeout) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
      $window.location.href = "#login";
  }
});
