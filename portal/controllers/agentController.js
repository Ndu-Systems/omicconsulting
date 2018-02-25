app.controller('agentController', function ($http, $scope, $window,$timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    Load();
    $timeout(function () {
      var data = {
          table: "users",
          condition: " IsActive = 1 "
      };
      $http.post(GetApiUrl("get"),data).success(function (response, status) {
            Done();
             if (response.data !== undefined) {
                $scope.users = response.data;
              }
          });
       }, 2000)
       $scope.successmsg ="";
       //Reset Password
       $scope.ResetPassword = function (age) {
                     $scope.successmsg = undefined;
                     $scope.email = age.Email;
                     $scope.username = age.Username;
                     $scope.role = age.Role;
                     $scope.id = age.Id;
                     $scope.IsActive = age.IsActive;
                     var data = {
                         email: $scope.email,
                         username: $scope.username,
                         password: "123456",
                         role: $scope.role,
                         id: $scope.id,
                         isactive: $scope.IsActive
                     };
                     if (data.email !== undefined && data.username !== undefined && data.password !== undefined && data.role !== undefined) {
                         $http.post(GetApiUrl("UpdateUser"), data)
                            .success(function (response, status) {
                                if (parseFloat(response) === 1) {
                                    $window.location.href = "#agents";
                                    $scope.message = undefined;
                                }
                                else {
                                    $scope.message = "Something Went Wrong Please contact system administrator."
                                }
                            }).success(function () {
                                var surname = "Makhawini Portal Administration";
                                var msg = "Please Note the following:<br/><br/> Your request for password reset has been processed <br/><br/>.";
                                msg += "Please use the (Default) password and your username: " + $scope.email;
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
                                          $scope.successmsg = "Password Successfully Reset and Email Notification sent to: " + email;
                                      }
                                      else {
                                          $scope.successmsg = "Something Went Wrong Please contact system administrator."
                                      }
                                  });
                                //success
                                localStorage.setItem("success", age.Username + "'s password was successfully reset!")
                                $window.location.href = "#success";
                            });
                     }
       }

       //Deactivate Customer
      $scope.Deactivate = function () {
         Confirm("Confirm Deactivation", "Are you sure you want to deactivation " + $scope.FirstName, function (result) {
             if (result) {
                  // Deactivate
                  var data = {
                      CustomerId:$scope.CustomerId,
                      ModifyUserId: userId
                  };
                  $http.post(GetApiUrl("Deactivate"), data)
                  .success(function (response, status) {
                      if (parseInt(response)=== 1) {
                          $window.location.href = "#success";
                          localStorage.setItem("success", $scope.FirstName + " was  deactivated successfully!")
                      }
                  });
              }
          });
    }

});

app.controller('addAgentController', function ($http, $scope, $window, $route) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "#login";
    }
    $scope.message = undefined
    $scope.AddAgent = function () {

        var name = $scope.name;
        var surname = $scope.surname;
        var email = $scope.email;
        var username = name + "." + surname;
        var role = "admin";

        if (name === undefined) {
            $scope.message = "Please complete all fields"
        }
        if (surname === undefined) {
            $scope.message = "Please complete all fields"
        }
        if (email === undefined) {
            $scope.message = "Please complete all fields"
        }

        var data = {
            name: name,
            surname: surname,
            email: email,
            username: username,
            password: "123456",
            role: role,
            isactive: "1"
        };

        $http.post(GetApiUrl("AddUser"), data)
            .success(function (response, status) {
                if (response === "1") {
                    var surname = "Makhawini Portal Administration";
                    var msg = "We are glad that you have taken the step to join our team. <br/> We look forward to a healthy relationship. <br/></br><u>Account Information:</u><br/><br>";
                    msg += "UserName: " + $scope.email + "<br/> Password: (Default)";
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

                    $window.location.href = "#agents";
                    $scope.message = undefined;
                }
            });

    };





});
