let slideIndex = 0;
function addClass(elements, className) {
  // if there are no elements, we're done
  if (!elements) {
    return;
  }

  // if we have a selector, get the chosen elements
  if (typeof elements === 'string') {
    elements = document.querySelectorAll(elements);
  }

  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) {
    elements = [elements];
  }

  // add class to all chosen elements
  for (var i = 0; i < elements.length; i++) {
    if (elements.length < 2) return;
    if (slideIndex !== elements.length - 1) {
      setTimeout(() => (slideIndex = slideIndex + 1), 6000);
      if (
        (' ' + elements[i].className + ' ').indexOf(' ' + className + ' ') < 0
      ) {
        // add class
        elements[i].className += ' ' + myClass;
      }
      return;
    } else {
      return setTimeout(() => setSlideIndex(0), 6000);
    }
  }
}
