'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('squareApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  it('should have a number that indicates the power', function () {
    expect(scope.power).toBeDefined();
  });
  
  it('should have a function that passing the power returns a function for calculating numbers to the n power', function () {
    expect(scope.createpower).toBeDefined();

    var powerOf2 = scope.createpower(2);
    expect(typeof(powerOf2)).toBe('function');
    expect(powerOf2(4)).toBe(4*4);

  });

  it('should calculate all the things ok', function () {
    var  fns = [];
    for(var i = 0; i < 10 ; i ++){
      fns.push (scope.createpower(i));
    }

    fns.forEach(function(item, index){
      ///expect(item(3)).toEqual(Math.pow(3, index));
      for(var i = 0; i< 10 ; i++){
        console.log('expect : ', item(i));
        console.log('tobe : ', Math.pow(i,index));
        expect(item(i)).toEqual(Math.pow(i,index));
      }
    });

  });

  it('should have a set power function and a calculus', function (){
    expect(typeof(scope.setPower)).toBe('function');
    expect(typeof(scope.calculus)).toBe('function');
  });

  it('should an array of values', function (){
    expect(scope.numbers).toBeDefined();
  });

  it('should change the main calculus function when i change the power', function (){
    scope.setPower(2);
    expect(scope.calculus(4)).toBe(4*4);
    scope.setPower(3);
    expect(scope.calculus(3)).toBe(3 * 3 * 3);

  });
});
