app.controller('loginController', function ($http, $scope, $route, $window) {
    var me = this;
    //if (localStorage.getItem("isLoggedIn") === "true") {
    //    $window.location.href = "#my-dashboard";
    //}
    $scope.reset = function () {
        $scope.message = undefined
        $route.reload();
    };
    $scope.Login = function () {
        var email = $scope.email;
        var password = $scope.password;

        var data = {
            email: email,
            password: password
        };
        if (data.email !== undefined && data.password !== undefined) {

                    $http.post(GetApiUrl("Login"), data)
                    .success(function (response, status) {
                        if (response.length !== 0) {
                            var user = response.user[0];
                            localStorage.setItem("username", user.Username);
                            localStorage.setItem("email", user.Email);
                            localStorage.setItem("role", user.Role);
                            localStorage.setItem("isactive", user.IsActive);
                            localStorage.setItem("id", user.Id);
                            if (user.Password !== "123456")
                            {
                                localStorage.setItem("isLoggedIn", true);
                                me.message = undefined;
                                if (user.Role === "admin") {
                                    $window.location.href = "#admin-dashboard";
                                }
                                if (user.Role === "agent") {
                                    $window.location.href = "#agent-dashboard";
                                }
                            }
                            else
                            {
                                $window.location.href = "#updatepassword"
                            }
                        }
                        else {
                            $scope.message = "Oops! Your username or password is incorrect please CHECK and try again.";
                        }

                    });
        }
        else {
            $scope.message = "Please make sure that all required fields are NOT empty"
        }
    };
});

app.controller('registerController', function ($http, $scope, $window, $route) {
    $scope.message = undefined
    $scope.Request = function () {

        var name = $scope.name;
        var surname = $scope.surname;
        var email = $scope.email;
        var username = name + "." + surname;

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
            role : "admin",
            isactive: "1"
        };

        $http.post(GetApiUrl("AddUser"), data)
            .success(function (response, status) {
                if (response === "1") {
                    //
                    localStorage.setItem("email", $scope.email);
                    localStorage.setItem("name", $scope.name);
                    localStorage.setItem("surname", $scope.surname);
                    //send email for request
                    var emailObj = {
                        email: "freedom.khanyile1@gmail.com",//admin email here
                        from: localStorage.getItem("email"),
                        name: localStorage.getItem("name"),
                        surname: localStorage.getItem("surname"),
                        subject: "Access Request for User :" + localStorage.getItem("name") + "." + localStorage.getItem("surname")
                    };
                    $http.post("http://ndu-systems.net/Api/email_request.php", emailObj)
                    .success(function (response) {
                        console.log(response);
                        alert(response);
                    })
                    .error(function (error) {
                        console.error(error);
                    });
                }
            });

    };
    $scope.reset = function () {
        $scope.message = undefined
        $route.reload();
    };
});
app.controller('forgotController', function ($http, $scope, $window, $route) {
    $scope.message = undefined;
    $scope.Submit = function () {

        var email = $scope.email;
        if (email === undefined) {
            $scope.message = "Please provide email address Or "
        }

        $scope.Reset = function () {
            $scope.message = undefined
            $route.reload();
        };
    };
});
app.controller('updatepasswordController', function ($http, $scope, $window, $route) {
    $scope.message = undefined
    $scope.Submit = function () {

        var password = $scope.password;
        var confirmpassword = $scope.passwordconfirm;
        var email = localStorage.getItem("email");
        var isactive = localStorage.getItem("isactive");
        var id = localStorage.getItem("id");
        var username = localStorage.getItem("username");
        var role = localStorage.getItem("role");

        if (password === undefined) {
            $scope.message = "Please provide password"
        }
        if (confirmpassword === undefined) {
            $scope.message = "Please confirm your password"
        }
        if (password === confirmpassword) {
            var data = {
                id: id,
                username: username,
                password: password,
                isactive: isactive,
                email: email,
                role: role
            };
            $http.post(GetApiUrl("UpdateUser"), data).success(function (data, status) {
                if (parseFloat(data) === 1) {
                    $window.location.href = "#/";
                    $scope.message = undefined;
                }
                else {
                    $scope.message = "Something Went Wrong, Please Try Again";
                }
            })
        }
        else {
            $scope.message ="Password does not Match please retry"
        }

        $scope.reset = function () {
            $scope.message = undefined
            $route.reload();
        };
    };
});
app.controller('logoutController', function ($http, $scope, $window) {
    localStorage.clear();
    $window.location.href = "#/";
});
