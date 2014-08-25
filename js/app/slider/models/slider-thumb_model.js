define([
  'backbone',
], function (Backbone) {
  var SliderThumbModel = Backbone.Model.extend({
    defaults: {
      "active": false,
      "image": null,
      "source": null,
      "imageready": false
    },
    initialize:function(){
        var _t = this; 

        var img = new Image();
        img.onload = function(){
            _t.imageready();
        };

        _t.set( "image", img );
    },
    load:function(_src){
      this.set("source", _src);
      this.get("image").src = _src;
    },
    imageready:function(_t){
        this.set("imageready",true);
    }
  });
  return SliderThumbModel;
});