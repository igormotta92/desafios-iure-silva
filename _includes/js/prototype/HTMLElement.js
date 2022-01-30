HTMLElement.prototype.hasDataAttribute = function (attribute) {
  return this.hasAttribute(`data-${attribute}`);
  //return typeof this.dataset[attribute] != 'undefined'
}

HTMLElement.prototype.setDataAttribute = function (attribute, value = '') {
  this.setAttribute(`data-${attribute}`, value);
}

HTMLElement.prototype.removeDataAttribute = function (attribute) {
  this.removeAttribute(`data-${attribute}`);
}