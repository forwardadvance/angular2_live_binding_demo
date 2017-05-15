

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      {{hour}} : {{minute}} : {{second}}
    `
  })
  .Class({
    constructor: function() {

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


