

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

      this.getTime = () => {
        this.time = new Date();
        this.hour = this.time.getHours();
        this.minute = this.time.getMinutes();
        this.second = this.time.getSeconds();
      };
      setInterval(this.getTime, 100);
    }
  });




document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});


