app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
         .when('/', {
             templateUrl: 'pages/account/login.html',
             controller: 'loginController'
         })
        .when('/login', {
            templateUrl: 'pages/account/login.html',
            controller: 'loginController'
        })
        .when('/request', {
            templateUrl: 'pages/account/request.html',
            controller: 'registerController'
        })
        .when('/forgotpassword', {
            templateUrl: 'pages/account/forgotpassword.html',
            controller: 'forgotController'
        })
         .when('/updatepassword', {
             templateUrl: 'pages/account/updatepassword.html',
             controller: 'updatepasswordController'
         })
    .when('/admin-dashboard', {
        templateUrl: 'pages/admin/admin-dashboard.html',
        controller: 'adminController'
    })
    .when('/agent-dashboard', {
        templateUrl: 'pages/agent/agent-dashboard.html',
        controller: 'adminController'
    })
    .when('/logout', {
        templateUrl: 'pages/account/logout.html',
        controller: 'logoutController'
    })
    .when('/candidates', {
        templateUrl: 'pages/admin/candidate.html',
        controller: 'candidateController'
    })
        .when('/addCandidate', {
            templateUrl: 'pages/admin/addCandidate.html',
            controller: 'addCandidateController'
        })
        .when('/viewCandidate', {
            templateUrl: 'pages/candidate/viewCandidate.html',
            controller: 'viewCandidateController'
        })
    .when('/vacancies', {
        templateUrl: 'pages/admin/vacancy.html',
        controller: 'vacancyController'
    })
    .when('/viewVacancy', {
        templateUrl: 'pages/vacancy/viewVacancy.html',
        controller: 'viewVacancyController'
    })
        .when('/addVacancy', {
            templateUrl: 'pages/admin/addVacancy.html',
            controller: 'addVacanyController'
        })
    .when('/agents', {
        templateUrl: 'pages/admin/agent.html',
        controller: 'agentController'
    })
    .when('/addAgent', {
        templateUrl: 'pages/admin/addAgent.html',
        controller: 'addAgentController'
    })
    .when('/enquiries', {
        templateUrl: 'pages/admin/enquiries.html',
        controller: 'enquiriesController'
    })
	 .when('/applications', {
        templateUrl: 'pages/admin/applications.html',
        controller: 'applicationController'
    })
    .when('/success', {
         templateUrl: 'pages/admin/success.html',
         controller: 'successController'
     });
});
