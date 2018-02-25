app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
     .when('/', {
         templateUrl: 'pages/home/index.html',
         controller: 'homeController'
     })
	.when('/contact-us', {
	    templateUrl: 'pages/home/contact.html',
	    controller: 'contactController'
	})
    .when('/about-makhawini', {
        templateUrl: 'pages/home/about.html',
        controller: 'homeController'
    })
    .when('/candidates', {
        templateUrl: 'pages/home/candidates.html',
        controller: 'homeController'
    })
    .when('/services', {
        templateUrl: 'pages/home/services.html',
        controller: 'homeController'
    })
    .when('/vacancies', {
        templateUrl: 'pages/home/vacancies.html',
        controller: 'vacancyController'
    })
	 .when('/apply', {
	     templateUrl: 'pages/home/apply.html',
	     controller: 'applyController'
	 })
	 .when('/job-spec', {
	     templateUrl: 'pages/home/jobspec.html',
	     controller: 'jobspecController'
	 })
    .when('/enquire', {
        templateUrl: 'pages/home/enquire.html',
        controller: 'enquireController'
    })
	 .when('/Thanks-for-application', {
        templateUrl: 'pages/home/thanks.html',
        controller: 'homeController'
    })
    .when('/about-us', {
        templateUrl: 'pages/home/about.html',
        controller: 'homeController'
    })
});
