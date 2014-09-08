L.ExtendedDivIcon = L.DivIcon.extend({
  createIcon: function(oldIcon) {
    var div = L.DivIcon.prototype.createIcon.call(this, oldIcon);

    if(this.options.id) {
      div.id = this.options.id;
    }

    return div;
  }
});

L.extendedDivIcon = function(options) {
  return new L.ExtendedDivIcon(options);
}
