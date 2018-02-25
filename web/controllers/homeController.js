app.controller('homeController', function ($http, $scope, $window) {
    //GetCandidates
    var data = {
        table: "candidate",
        condition: " IsActive = 1 "
    };
    $http.post(GetApiUrl("get"), data)
    .success(function (response, status) {
        if (response.data !== undefined) {
            $scope.candidates = response.data;
        }
    });
    //view candidate
    $scope.ViewCandidate = function (can) {
        localStorage.setItem("Id", can.Id);
        localStorage.setItem("Position", can.Position);
        localStorage.setItem("Location", can.Location);
        localStorage.setItem("Industry", can.Industry);
        localStorage.setItem("Availability", can.Availability);
        localStorage.setItem("Cv", can.Cv);
        $window.location.href = "#enquire";
    }
    $scope.selectedLocation = "";
    $scope.selectedPosition = "";
    $scope.Search = function () {
        localStorage.setItem("selectedLocation", $scope.selectedLocation);
        localStorage.setItem("selectedPosition", $scope.selectedPosition);
        $window.location.href = "#vacancies";
    }

});

app.controller('enquireController', function ($http, $scope, $window) {
    $scope.Position = localStorage.getItem("Position");
    $scope.Location = localStorage.getItem("Location");
    $scope.Industry = localStorage.getItem("Industry");
    $scope.Availability = localStorage.getItem("Availability");
    $scope.Id = localStorage.getItem("Id");
    $scope.Cv = localStorage.getItem("Cv");

    $scope.message = undefined;

    $scope.Enquire = function () {

        var Company = $scope.Company;
        var ContactPerson = $scope.ContactPerson;
        var EmailAddress = $scope.EmailAddress;
        var ContactNumber = $scope.ContactNumber;
        var CandidateId = $scope.Id;

        var data = {
            Company: Company,
            ContactNumber: ContactNumber,
            EmailAddress: EmailAddress,
            ContactPerson: ContactPerson,
            CandidateId: CandidateId,
            IsActive : 1
        };
        if (data.EmailAddress !== undefined) {
                $http.post(GetApiUrl("enquire"), data)
            .success(function (response, status) {
                if (response === "1") {
                    $window.location.href = "#enquire";
                    $scope.message = "Enquiry Has Been Delivered!!!";
                }
            });
        }
        else {
            $scope.message = "Email Address Required";
        }

    };

});

app.controller('vacancyController', function ($http, $scope, $window) {

    var searchedLocation = localStorage.getItem("selectedLocation");
    var searchedPosition = localStorage.getItem("selectedPosition");

    // get  jobs
    var data = {
        table: "vacancies",
        condition: "Position like '%"+searchedPosition+"%' AND Location like '%"+searchedLocation+"%' AND IsActive = 1"
    };
    if (searchedLocation !== "" || searchedPosition !== "")
    {
        var data = {
            table: "vacancies",
            condition: " Position like '%" + searchedPosition + "%' AND Location like '%" + searchedLocation + "%' AND IsActive = 1"
        };
    }
    else {
        var data = {
            table: "vacancies",
            condition: " IsActive = 1"
        };

    }
    $http.post(GetApiUrl("get"), data)
    .success(function (response, status) {
        if (response.data !== undefined && response.data !== []) {
            $scope.openJobs = response.data;
            $scope.JobsCount = $scope.openJobs.length;
        } else {
            localStorage.setItem("", $scope.selectedLocation);
            localStorage.setItem("", $scope.selectedPosition);
            $window.location.href = "#/";
            $scope.JobsCount = 0;
        }
    });

	$scope.ViewJob = function(job){
		localStorage.setItem("Position", job.Position);
		localStorage.setItem("Location", job.Location);
		localStorage.setItem("Industry", job.Industry);
		localStorage.setItem("jobId", job.Id);
		localStorage.setItem("Requirements", job.Requirements);
		$window.location.href = "#apply";
	}
});

app.controller('jobspecController', function ($http, $scope, $window) {
$scope.Position = localStorage.getItem("Position");
$scope.Location = localStorage.getItem("Location");
$scope.Industry = localStorage.getItem("Industry");
$scope.Requirements = localStorage.getItem("Requirements");
$scope.Id = localStorage.getItem("jobId");
$scope.Apply = function(){
$window.location.href = "#apply";
}

});

app.controller('applyController', function ($http, $scope, $window) {

    $scope.Position = localStorage.getItem("Position");
    $scope.Location = localStorage.getItem("Location");
    $scope.Industry = localStorage.getItem("Industry");
    $scope.Requirements = localStorage.getItem("Requirements");
    $scope.Id = localStorage.getItem("jobId");

    // uplaod
	  $scope.filesChanged = function (eml) {
        $scope.files = eml.files;
        $scope.filename = $scope.files[0].name;
      //  alert($scope.filename);
        $scope.$apply();
    };
	//save file
	    $scope.Submit = function () {
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
			//	alert(doc);
               // now push to db
				//declare


				var	idnumber= $scope.idnumber;
				var	name	= $scope.name  ;
				var	surname = $scope.surname;
				var	email	= $scope.email;
				var	cv 	    = doc;
				var	jobId   = localStorage.getItem("jobId");
				var	tel	= $scope.tel;

	        var data = {
            name: name,
			surname:surname,
			idnumber: idnumber,
			email:email,
			cv:cv,
			tel:tel,
			jobId:jobId

        }
        if (data.name !== undefined || data.email !== undefined ||  data.idnumber !== undefined || data.tel !== undefined) {
            $http.post(GetApiUrl("apply"), data)
               .success(function (response, status) {
                   if (parseFloat(response) === 1) {
                       $window.location.href = "#Thanks-for-application";
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

			   // end push to db


            })
        }
        else {
            $scope.message = "Please select the files!";
        }
    };
	// end uplaod
});

app.controller('contactController', function ($http, $scope, $window) {

    $scope.Submit = function () {
        var name = $scope.name;
        var surname = $scope.surname;
        var email = $scope.email;
        var cell = $scope.cell;
        var msg = $scope.msg;
        var data = {
            name: name,
            surname: surname,
            email: email,
            cell: cell,
            msg: msg
        };
        //send
        $http.post("https://ndu-systems.net/api/emailmakhawini.php", data)
              .success(function (response, status) {
                  if (parseFloat(response) === 1) {
                      $scope.message = "Thank you for contacting us we will get back to you soon"
                  }
                  else {
                      $scope.message = "Something Went Wrong Please contact system administrator."
                  }
              });
    };
    // end uplaod
});
