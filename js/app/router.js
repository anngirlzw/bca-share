define([
  'backbone',
  'collections/navigation_collection',
  'views/hamburger_view',
  'views/sidebar_view',
  'views/main-nav_view',
  'pages/home_view',
  'pages/bca-campaign_view',
  'pages/bcastrength_view',
  'pages/learn-more_view',
  'pages/press_view',
  'pages/pink-ribbon-products_view',
  'pages/global-ambassadors_view',
  'pages/jeanette-story_view',
  'slider/views/slider-view'
], function (Backbone, NavigationCollection, HamburgerView, SideBarView, MainNavView, HomeView, BcaCampaignView, BcastrengthView, LearnMoreView, PressView, PinkRibbonProductsView, GlobalAmbassadorsView, JeanetteStoryView ){
  var Router   = Backbone.Router.extend({
    current_page:null,
    collection:null,
    page_views:null,
    main_nav_views:[],
    hamburger:null,
    initialize:function(){
      var _t = this;

      _t.collection   = new NavigationCollection();

      _t.hamburger    = new HamburgerView( {collection:_t.collection} );
      
      _t.page_views = [   
        new HomeView({collection:_t.collection}),
        new BcaCampaignView({collection:_t.collection}),
        new GlobalAmbassadorsView({collection:_t.collection}),
        new LearnMoreView({collection:_t.collection}),
        new PressView({collection:_t.collection}),
        new PinkRibbonProductsView({collection:_t.collection}),
        new BcastrengthView({collection:_t.collection}),
        new JeanetteStoryView({collection:_t.collection})
      ];

      //initiate main navs
      $(".main-nav").each(function(){
        if($(this).parent("#sidebar-inner")[0]){
          _t.main_nav_views.push( new SideBarView({el:this, collection:_t.collection}) );
        } else {
          _t.main_nav_views.push(new MainNavView({el:this, collection:_t.collection}) );
        }
      });

      this.start();
    },
    routes: {
      '*actions': 'onroute'
    },
    start:function(){
      var _t = this;
      /*---- listen for the selection event 
      ------ on the nav collection. change the 
      ------ page when called. -------*/
      _t.collection.on("change",function(_model){
        if(_model.attributes.active == true && _model.attributes.silent == false)
          _t.navigate(_model.id, {trigger:false});
      });

      Backbone.history.start({pushState: true, root:root_dir});
    },
    onroute:function(_route){
      !_route ? _route = "home" : null;

      this.collection.activateModelById( _route );
    }
  });

  return Router;
});
