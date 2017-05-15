

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      {{hour}} : {{minute}} : {{second}}
    `
  })
  .Class({
    constructor: function() {
      this.getTime = () => {
        this.time = new Date();
        this.hour = this.time.getHours();
        this.minute = this.time.getMinutes();
        this.second = this.time.getSeconds();
      };
      setInterval(this.getTime, 100);
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
  });


/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
