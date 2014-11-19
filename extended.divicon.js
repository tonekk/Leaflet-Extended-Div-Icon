(function(L) {
  
  /*
   * by tonekk. 2014, MIT License
   */
  
  L.ExtendedDivIcon = L.DivIcon.extend({
    createIcon: function(oldIcon) {
      var div = L.DivIcon.prototype.createIcon.call(this, oldIcon);
  
      if(this.options.id) {
        div.id = this.options.id;
      }
  
      if(this.options.style) {
        for(var key in this.options.style) {
          div.style[key] = this.options.style[key];
        }
      }
  
      return div;
    }
  });

  L.extendedDivIcon = function(options) {
    return new L.ExtendedDivIcon(options);
  }
})(window.L);
