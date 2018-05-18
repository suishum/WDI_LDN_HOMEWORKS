var $ = function(selector) { // eslint-disable-line no-unused-vars
  var elements = [];
  let tagsSelector = null;
  let classSelector = null;
  let idSelector = null;
  let tagsArray = [];
  let classIndex = 0;
  let idIndex = 0;

  //dealing with selectors that only have tags
  if (selector.indexOf('.') === -1 && selector.indexOf('#') === -1) {
    tagsSelector = document.getElementsByTagName(selector);
    elements = Array.prototype.slice.call(tagsSelector);
  } else if (selector.charAt(0) === '#') {
    idSelector = document.getElementById(selector.slice(1));
    elements.push(idSelector);
  } else if (selector.charAt(0) === '.') {
    classSelector = document.getElementsByClassName(selector.slice(1));
    elements = Array.prototype.slice.call(classSelector);
  } else if (selector.includes('.') || selector.includes('#')) {
    //find class name by finding index of '.' & '#'
    classIndex = selector.indexOf('.');
    idIndex = selector.indexOf('#');
    if (classIndex === -1) {
      //run tag & id
      tagsSelector = document.getElementsByTagName(selector.slice(0, idIndex));
      tagsArray = Array.prototype.slice.call(tagsSelector);
      elements = tagsArray.filter(element => {
        return element.classList.contains(selector.slice(idIndex + 1));
      });
    } else if (idIndex === -1) {
      //run tag & class
      tagsSelector = document.getElementsByTagName(selector.slice(0, classIndex));
      tagsArray = Array.prototype.slice.call(tagsSelector);
      elements = tagsArray.filter(element => {
        return element.classList.contains(selector.slice(classIndex + 1));
      });
    } else if (idIndex < classIndex) {
      //if idIndex comes before classIndex, and class exists
      idSelector = document.getElementById(selector.slice(idIndex + 1, classIndex));
      elements.push(idSelector);
    } else if (classIndex < idIndex) {
      idSelector = document.getElementById(selector.slice(idIndex + 1));
      elements.push(idSelector);
    }
  }
  return elements;
};
