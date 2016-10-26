
angular
  .module('app', [
    'lbServices',
    'ui.router',
    'ngMaterial',
     'ngMessages',
     'angularMoment'
     // "material.svgAssetsCache"
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider,
      $urlRouterProvider, $locationProvider) {

    // $momentProvider
    //   .asyncLoading(false)
    //   .scriptUrl('../static/js/moment.min.js');
    $stateProvider
      .state("login", {
        url: '/login',
        templateUrl: "views/login.html",
        controller: "UserLoginCtrl"
      })
      .state("regist", {
        url: "/regist",
        templateUrl: "views/regist.html",
        controller: 'UserRegistCtrl'
      })
      .state("logout", {
        url: "/logout",
        controller: "UserLogoutCtrl"
      })
      .state("sign-up-success", {
        url: "/sign-up/success",
        templateUrl: "views/sign-up-success.html"
      })
      .state("home", {
        url: "/home",
        views: {
          "": {
            templateUrl: "views/home.html"
          },
          /*"questions@home": {
            templateUrl: "views/questions.html",
            controller: "ShowUserPageCtrl"
          },*/
          "profile@home": {
            templateUrl: "views/profile.html",
            controller: "ProfileCtrl"
          }
        },
        authenticate: true
      })
      .state("create-page", {
        url: "/create",
        templateUrl: "views/create-page.html",
        controller: "CreatePageCtrl",
        authenticate: true
      })
      .state("questions", {
        url: '/questions',
        templateUrl: "views/questions.html",
        controller: "ShowUserPageCtrl"
      })
      .state("question", {
        url: '/question/q=:id',
        templateUrl: "views/show-question.html",
        controller: "PageCtrl"
      })
      .state("editQuestion", {
        url: "/edit-question",
        templateUrl: "views/editquestion.html",
        controller: "EditPageCtrl",
        authenticate: true
      })
      .state("editAnswer", {
        url: "/edit-answer",
        templateUrl: "views/editanswer.html",
        controller: "ShowUserPageCtrl",
        authenticate: true
      })
      .state("showQuestion", {
        url: "/show-question",
        templateUrl: "views/show-question.html",
        controller: "PageCtrl"
      })
      .state("questionByCategory", {
        url: "/category-questions",
        templateUrl: "views/show-question-by-category.html",
        controller: "CategoryCtrl"
      })
      .state("forbidden", {
        controller: 'ForbidCtrl',
        url: '/forbidden',
        templateUrl: "views/forbidden.html"
      })
      .state("edit-profile", {
        views: {
          "": {
            templateUrl: "views/edit-profile.html",
            controller: "EditProfileCtrl"
          }
        }
      })

      /*User mgt. Admin Panel*/
      .state("createUser", {
        url: "/create-user",
        templateUrl: "views/user/user-mgt.html",
        controller: 'AdminActivityCtrl',
        authenticate: true
      })
      .state("editUser", {
        url: '/edit-user?u=:id',
        templateUrl: "views/user/edit-user.html",
        controller: 'AdminActivityCtrl',
        authenticate: true
      })
      .state("adminScheduleMgt", {
        url: "/admin-schedule",
        templateUrl: "views/admin-schedule.html",
        controller: 'AdminScheduleCtrl',
        authenticate: true
      })
      .state("userProfile", {
        url: "/user-profile",
        templateUrl: "views/user-profile.html",
        controller: 'AdminActivityCtrl',
        authenticate: true
      })
      .state("category", {
        url: "/category",
        templateUrl: "views/category.html",
        controller: "AdminCategoryCtrl",
        authenticate: true
      })
      .state("editCategory", {
        url: "/edit-category",
        templateUrl: "views/edit-category.html",
        controller: "AdminCategoryCtrl",
        authenticate: true
      })
      .state("subCategory", {
        url: "/sub-category",
        templateUrl: "views/sub-category.html",
        controller: "AdminCategoryCtrl",
        authenticate: true
      })
      .state("editSubCategory", {
        url: "/edit-sub-category",
        templateUrl: "views/edit-sub-category.html",
        controller: "AdminCategoryCtrl",
        authenticate: true
      })
      

      /*Business mgt. Admin Panel*/
      .state("businessMgt", {
        url: "/business",
        templateUrl: "views/business/mgt.html",
        controller: 'AdminBusinessCtrl',
        authenticate: true
      })
      .state("businessEdit", {
        url: "/business-edit?h=:id",
        templateUrl: "views/business/edit.html",
        controller: 'AdminBusinessCtrl',
        authenticate: true
      })

      /*Schedule mgt. Admin Panel*/
      .state("scheduleMgt", {
        url: "/create-schedule",
        templateUrl: "views/expert/schedule-mgt.html",
        controller: 'AdminScheduleCtrl',
        authenticate: true
      })
      .state("editSchedule", {
        url: '/edit-schedule?s=:id',
        templateUrl: "views/expert/edit-schedule.html",
        controller: 'AdminScheduleCtrl',
        authenticate: true
      })

      /*Schedule mgt. Admin Panel*/
      .state("bookingMgt", {
        url: "/create-booking",
        templateUrl: "views/user/booking-mgt.html",
        controller: 'AdminBookingCtrl',
        authenticate: true
      })
      .state("myBookingMgt", {
        url: "/my-booking",
        templateUrl: "views/user/booking-mgt.html",
        controller: 'AdminBookingCtrl',
        authenticate: true
      })
      .state("editBooking", {
        url: '/edit-booking?b=:id',
        templateUrl: "views/user/edit-booking.html",
        controller: 'AdminBookingCtrl',
        authenticate: true
      })
      /* Frontend */
      .state("test", {
        url: '/test',
        templateUrl: "views/user/content.html"
      })
      .state("mainpage", {
        url: "/mainpage",
        templateUrl: "views/user/content.html",
        controller: 'FrontPageCtrl'
      })
      .state("searchResult", {
        url: "/search-result",
        templateUrl: "views/user/search_result.html",
        controller: 'FrontPageCtrl'
      })
      .state("bookingInfo", {
        url: "/booking",
        templateUrl: "views/user/booking_page.html",
        controller: 'FrontPageCtrl'
      })
      .state("bookingByDate", {
        url: "/booking",
        templateUrl: "views/user/booking_page.html",
        controller: 'FrontPageCtrl'
      })
      .state("verifyUser", {
        url: "/verify-user",
        templateUrl: "views/user/verify-user.html",
        controller: "FrontPageCtrl"
      })
      /*Owner panel*/
      .state("ownerUserMgt", {
        url: "/owner-user-mgt",
        templateUrl: "views/owner/owner-user-mgt.html",
        controller: 'OwnerActivityCtrl',
        authenticate: true
      })
      .state("ownerBusinessMgt", {
        url: "/owner-business-mgt",
        templateUrl: "views/owner/owner-business-mgt.html",
        controller: 'OwnerActivityCtrl',
        authenticate: true
      })
      .state("ownerScheduleMgt", {
        url: "/owner-schedule-mgt",
        templateUrl: "views/owner/owner-schedule-mgt.html",
        controller: 'OwnerActivityCtrl',
        authenticate: true
      })

      /*Dashboard Activity start*/
      .state("dashboardExpert", {
        url: "/dashboard-mgt",
        templateUrl: "views/expert/dashboard.html",
        controller: 'DashboardActivityCtrl',
        authenticate: true
      })

    /*$locationProvider.html5Mode(true);*//*beautify URL*/

    $urlRouterProvider.otherwise('mainpage');
  }])
  .run(['$rootScope', "$state", "$window", init])
  .config(function($mdThemingProvider, $httpProvider) {
    $mdThemingProvider.theme("default");
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        responseError: function(rejection) {
        if (rejection.status == 401) {
          //Now clearing the loopback values from client browser for safe logout...
          LoopBackAuth.clearUser();
          LoopBackAuth.clearStorage();
          $location.nextAfterLogin = $location.path();
          $location.path('/login');
        }
        return $q.reject(rejection);
        }
      };
});
  })
  function init($rootScope, $state, $window) { /*Handling reloading or refreshing page state*/
    
    // transfers sessionStorage from one tab to another
var sessionStorage_transfer = function(event) {
  if(!event) { event = window.event; } // ie suq
  if(!event.newValue) return;          // do nothing if no value to work with
  if (event.key == 'getSessionStorage') {
    // another tab asked for the sessionStorage -> send it
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
    // the other tab should now have it, so we're done with it.
    localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
  } 
  else if (event.key == 'sessionStorage' && !sessionStorage.length) {
    // another tab sent data <- get it
    var data = JSON.parse(event.newValue);
    for (var key in data) {
      sessionStorage.setItem(key, data[key]);
      if ($window.sessionStorage.getItem('tokenId') != undefined) {
        location.reload();
      }
    }
  }
};

// listen for changes to localStorage
if(window.addEventListener) {
  window.addEventListener("storage", sessionStorage_transfer, false);
} else {
  window.attachEvent("onstorage", sessionStorage_transfer);
};


// Ask other tabs for session storage (this is ONLY to trigger event)
if (!sessionStorage.length) {
  localStorage.setItem('getSessionStorage', 'foobar');
  localStorage.removeItem('getSessionStorage', 'foobar');
};
    //alert($window.sessionStorage.getItem('tokenId'));
    if($window.sessionStorage.getItem('tokenId') != undefined)
      $rootScope.islogin = true;
    else
      $rootScope.islogin = false;

    $rootScope.userRole = $window.sessionStorage.getItem('userRole');

    $rootScope.$on('$stateChangeStart', function(event, next) {
      //console.log($window.sessionStorage.getItem('tokenId'));
      if (next.authenticate && !$window.sessionStorage.getItem('tokenId')) {
          event.preventDefault(); //prevent current page from loading
          $state.go('forbidden');
      }
    })

  }
