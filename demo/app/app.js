// vm variable
// Live binding - setInterval, zones


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
      this.catAge = 1;
      this.isAlive = function() {
        return this.catAge < 15;
      };
      setInterval(() => {
        this.catAge++;
        console.log(this);
      }, 100);
    }
  });


/**
  * The App Module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  })

/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);


