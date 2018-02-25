app.controller('candidateController', function ($http, $scope, $window,$timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    Load();
    $timeout(function () {
      var data = {
          table: "candidate",
          condition: " IsActive = 1 "
      };
      $http.post(GetApiUrl("get"),data).success(function (response, status) {
            Done();
             if (response.data !== undefined) {
                $scope.candidates = response.data;
              }
          });
       }, 2000)
    //Gets the candidate
  $scope.ViewCandidate = function(can){
      localStorage.setItem("CandidateId", can.Id);
      localStorage.setItem("CandidatePosition", can.Position);
      localStorage.setItem("CandidateEmail", can.email);
      localStorage.setItem("CandidateLocation", can.Location);
      localStorage.setItem("CandidateIndustry", can.Industry);
      localStorage.setItem("CandidateAvailability", can.Availability);
      localStorage.setItem("VacancyId", can.VacancyId);
      localStorage.setItem("candidateCv", can.Cv);
      localStorage.setItem("candidateIsActive", can.IsActive);
      $window.location.href = "#viewCandidate";
    }

});
app.controller('addCandidateController', function ($http, $scope, $window, $route) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.message = undefined;

    $scope.reset = function () {
        $scope.message = undefined
        $route.reload();
    };
	// uplaod
	  $scope.filesChanged = function (eml) {
        $scope.files = eml.files;
        $scope.filename = $scope.files[0].name;
       // alert($scope.filename);
        $scope.$apply();
    };
	//save file
	    $scope.AddAgent = function () {
        if ($scope.filename !== undefined) {
            var doc = "";
            var formData = new FormData();
            angular.forEach($scope.files, function (file) {
                formData.append('file', file);
                formData.append('name', file.name)
            });

            $http.post(GetApiUrl("upload"), formData, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            })
            .success(function (resp) {
                doc = GetHost(resp);
               // now push to db
				//declare
				var position = $scope.position;
				var location = $scope.location;
				var industry = $scope.industry;
				var availability = $scope.availability;
				var email = $scope.email;

        var data = {
            position: position,
            location: location,
            industry: industry,
            availability: availability,
            email: email,
			cv: doc
        }
        if (data.position !== undefined && data.location !== undefined &&  data.industry !== undefined && data.availability !== undefined) {
            $http.post(GetApiUrl("AddCandidate"), data)
               .success(function (response, status) {
                   if (parseFloat(response) === 1) {
                       $window.location.href = "#candidates";
                       $scope.message = undefined;
                   }
                   else {
                       $scope.message = "Something Went Wrong Please contact system administrator."
                   }
               }).success(function () {

                   var surname = "Makhawini Portal Administration";
                   var msg = "We are glad to inform you that Makhawini Recruitment has on boarded you on our Database. <br/> We look forward to a healthy relationship.";
                   var email = $scope.email;
                   var cell = "+27313015001";
                   var data2 = {
                       msg: msg,
                       surname: surname,
                       email: email,
                       cell: cell
                   };
                   //send email
                   $http.post("https://ndu-systems.net/api/emailmakhawiniportal.php", data2)
                     .success(function (response, status) {
                         if (parseFloat(response) === 1) {
                             $scope.successmsg = "Thank you for contacting us we will get back to you soon"
                         }
                         else {
                             $scope.successmsg = "Something Went Wrong Please contact system administrator."
                         }
                     });

               });
        }
        else {
            $scope.message = "All fields must be field in"
        }


            })
        }
        else {
            $scope.message = "Please select the files!";
        }
    };
	// end uplaod

    $scope.AddAgent1 = function () {

        $scope.message = undefined;

        //declare

        var position = $scope.position;
        var location = $scope.location;
        var industry = $scope.industry;
        var availability = $scope.availability;

        var data = {
            position: position,
            location: location,
            industry: industry,
            availability: availability
        }
        if (data.position !== undefined && data.location !== undefined &&  data.industry !== undefined && data.availability !== undefined) {
            $http.post(GetApiUrl("AddCandidate"), data)
               .success(function (response, status) {
                   if (parseFloat(response) === 1) {
                       $window.location.href = "#candidates";
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

});

app.controller('viewCandidateController', function ($http, $scope, $window,$timeout) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
      $window.location.href = "#login";
  }
  $scope.CandidateId = localStorage.getItem("CandidateId");
  $scope.CandidatePosition = localStorage.getItem("CandidatePosition");
  $scope.CandidateEmail = localStorage.getItem("CandidateEmail");
  $scope.CandidateLocation = localStorage.getItem("CandidateLocation");
  $scope.CandidateIndustry = localStorage.getItem("CandidateIndustry");
  $scope.CandidateAvailability = localStorage.getItem("CandidateAvailability");
  $scope.VacancyId = localStorage.getItem("VacancyId");
  $scope.candidateCv = localStorage.getItem("candidateCv");
  $scope.candidateIsActive = localStorage.getItem("candidateIsActive");

  $scope.status = "";
  if($scope.candidateIsActive === '1'){
    $scope.status = "Active";
  }
  else{
    $scope.status = "Closed";
  }
  Load();
  $timeout(function () {
    var data = {
        table: "vacancies",
        condition: " Id not in (select VacancyId from candidate where Id = '"+$scope.CandidateId+"') "
    };

    $http.post(GetApiUrl("get"),data).success(function (response, status) {
          Done();
           if (response.data !== undefined) {
              $scope.vacancies = response.data;
            }
        });
     }, 2000)
     $scope.offerredCount = 0;
     Load();
     $timeout(function () {
       var data = {
           table: "vacancies",
           condition: " Id in (select VacancyId from candidate where Id = '"+$scope.CandidateId+"') "
       };

       $http.post(GetApiUrl("get"),data).success(function (response, status) {
             Done();
              if (response.data !== undefined) {
                 $scope.offeredVacancies = response.data;
                 $scope.offerredCount = $scope.offeredVacancies.length;
               }
           });
        }, 2000)

        //Deactivate Candidate
        $scope.Deactivate = function () {
                    var data = {
                        CandidateId: $scope.CandidateId
                    };
                    $http.post(GetApiUrl("DeactivateCandidate"), data)
                    .success(function (response, status) {
                        if (parseInt(response)=== 1) {
                            localStorage.setItem("success",   "Application by "+  $scope.CandidateEmail+" was  removed from Listing successfully!")
                            $window.location.href = "#success";
                        }
                    });

      }


});
