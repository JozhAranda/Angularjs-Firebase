// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
    // connect to firebase 
    var ref = new Firebase("https://angular-firebase-joz.firebaseio.com/days");  
    var fb  = $firebase(ref);
    
    // sync as object 
    var syncObject = fb.$asObject();

    // three way data binding
    syncObject.$bindTo($scope, 'days');    
    
    // function to set the default data
    $scope.reset = function() {    

        fb.$set({
            monday: {
                name: 'Monday',
                slots: {
                    900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    },
                    100: {
                        time: '1:00pm',
                        booked: false
                    },
                    300: {
                        time: '3:00pm',
                        booked: false
                    },
                    500: {
                        time: '5:00pm',
                        booked: false
                    },
                    700: {
                        time: '7:00pm',
                        booked: false
                    }
                }
            },
            tuesday: {
                name: 'Tuesday',
                slots: {
                    900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    },
                    100: {
                        time: '1:00pm',
                        booked: false
                    },
                    300: {
                        time: '3:00pm',
                        booked: false
                    },
                    500: {
                        time: '5:00pm',
                        booked: false
                    },
                    700: {
                        time: '7:00pm',
                        booked: false
                    }
                }
            },
            wednesday: {
                name: 'Wednesday',
                slots: {
                    900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    },
                    100: {
                        time: '1:00pm',
                        booked: false
                    },
                    300: {
                        time: '3:00pm',
                        booked: false
                    },
                    500: {
                        time: '5:00pm',
                        booked: false
                    },
                    700: {
                        time: '7:00pm',
                        booked: false
                    }
                }
            },
            thursday: {
                name: 'Thursday',
                slots: {
                    900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    },
                    100: {
                        time: '1:00pm',
                        booked: false
                    },
                    300: {
                        time: '3:00pm',
                        booked: false
                    },
                    500: {
                        time: '5:00pm',
                        booked: false
                    },
                    700: {
                        time: '7:00pm',
                        booked: false
                    }
                }
            },
            friday: {
                name: 'Friday',
                slots: {
                    900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    },
                    100: {
                        time: '1:00pm',
                        booked: false
                    },
                    300: {
                        time: '3:00pm',
                        booked: false
                    },
                    500: {
                        time: '5:00pm',
                        booked: false
                    },
                    700: {
                        time: '7:00pm',
                        booked: false
                    }
                }
            }
        });    

    };
});