HTMLElement.prototype.hasDataAttribute = function (attribute) {
  return typeof this.dataset[attribute] != 'undefined'
}

HTMLElement.prototype.setDataAttribute = function (attribute, value = '') {
  this.setAttribute(`data-${attribute}`, value);
}

HTMLElement.prototype.removeDataAttribute = function (attribute) {
  this.removeAttribute(`data-${attribute}`);
}