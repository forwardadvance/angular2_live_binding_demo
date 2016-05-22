

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      {{hour}} : {{minute}} : {{second}}
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      this.catAge = 1;

    }
  });




document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});


