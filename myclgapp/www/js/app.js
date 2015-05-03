var validation = angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('eventmenu.form', {
      url: "/form",
      views: {
        'menuContent' :{
          templateUrl: "templates/form.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugregularpart1', {
      url: "/ugregularpart1",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugregularpart1.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugregularpart2', {
      url: "/ugregularpart2",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugregularpart2.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugregularpart3', {
      url: "/ugregularpart3",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugregularpart3.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugregularpart4', {
      url: "/ugregularpart4",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugregularpart4.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugregularpart5', {
      url: "/ugregularpart5",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugregularpart5.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	
	.state('eventmenu.ugregularpart6', {
      url: "/ugregularpart6",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugregularpart6.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	/* UG Self Finance*/
	.state('eventmenu.ugselfpart1', {
      url: "/ugselfpart1",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugselfpart1.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugselfpart2', {
      url: "/ugselfpart2",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugselfpart2.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugselfpart3', {
      url: "/ugselfpart3",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugselfpart3.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugselfpart4', {
      url: "/ugselfpart4",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugselfpart4.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.ugselfpart5', {
      url: "/ugselfpart5",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugselfpart5.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	
	.state('eventmenu.ugselfpart6', {
      url: "/ugselfpart6",
      views: {
        'menuContent' :{
          templateUrl: "templates/ugselfpart6.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	/*PG Regular Part */

	.state('eventmenu.pgregularpart1', {
      url: "/pgregularpart1",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgregularpart1.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.pgregularpart2', {
      url: "/pgregularpart2",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgregularpart2.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.pgregularpart3', {
      url: "/pgregularpart3",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgregularpart3.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.pgregularpart4', {
      url: "/pgregularpart4",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgregularpart4.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.pgregularpart5', {
      url: "/pgregularpart5",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgregularpart5.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	
	.state('eventmenu.pgregularpart6', {
      url: "/pgregularpart6",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgregularpart6.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	
	/*PG Regular Part */

	.state('eventmenu.pgselfpart1', {
      url: "/pgselfpart1",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgselfpart1.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.pgselfpart2', {
      url: "/pgselfpart2",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgselfpart2.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.pgselfpart3', {
      url: "/pgselfpart3",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgselfpart3.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.pgselfpart4', {
      url: "/pgselfpart4",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgselfpart4.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	.state('eventmenu.pgselfpart5', {
      url: "/pgselfpart5",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgselfpart5.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	
	.state('eventmenu.pgselfpart6', {
      url: "/pgselfpart6",
      views: {
        'menuContent' :{
          templateUrl: "templates/pgselfpart6.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	
	.state('eventmenu.SuccessPage', {
      url: "/SuccessPage",
      views: {
        'menuContent' :{
          templateUrl: "templates/SuccessPage.html",
          controller: "CheckinCtrl"
        }
      }
    })
	
	
	

	
	
	
	
	
	
	
	
	
    .state('eventmenu.attendees', {
      url: "/attendees",
      views: {
        'menuContent' :{
          templateUrl: "templates/attendees.html",
          //controller: "AttendeesCtrl"
        }
      }
    })
  
  $urlRouterProvider.otherwise("/event/about");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('CheckinCtrl', function($scope, $ionicPopup) {
  $scope.showForm = true;
  
  
  
 $scope.showAlert = function() {

     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = true;
    $scope.attendees.push($scope.attendee);
    //$scope.showAlert();
     var alertPopup = $ionicPopup.alert({
       title: 'Confirmation',
       template: 'Record Sumbitted successfully'
     });
    //alert('Record submitted successfully');
    $scope.attendee = {};

  };
  
})


	


