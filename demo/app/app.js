// Live binding - setInterval, zones


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      {{catName}}
      <br />
      age: {{catAge}}
      <br />
      alive: {{isAlive()}}
    `
  })
  .Class({
    constructor: function() {
      this.catName = "Llama";
      this.catAge = 1;
      this.isAlive = function() {
        return this.catAge < 15;
      };
      setInterval(() => {this.catAge ++}, 1000)
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


// // setInterval(() => {
// //         this.catAge++;
// //       }, 10);
