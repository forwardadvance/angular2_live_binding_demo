// bind an expression
// bind an attribute on the class
// vm variable
// Live binding - setInterval, zones

// bind to a function on the class
// functions should not have side effects

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      {{catName}}
      <br />
      age: {{catAge}}
      alive: {{isAlive()}}
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      this.catAge = 1;
      vm.isAlive = function isAlive() {
        return this.catAge < 15;
      };
      setInterval(function() {
        vm.catAge++;
        // console.log(this);
      }, 100);
    }
  });




document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});


