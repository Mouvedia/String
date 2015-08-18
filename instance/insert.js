String.prototype.insert = function(index, str) {
  index = index < 0 ? this.length + ~~index  :  ~~index;
  return this.substring(0, index) + str + this.substring(index);
};
