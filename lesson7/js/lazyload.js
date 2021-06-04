//Create the target to be observed
let target = document.querySelector('#listItem');



//Create the intersection observer
let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }
  
  let observer = new IntersectionObserver(callback, options);

  //Activate the observer.
  observer.observe(target);

  //Evaluate the entries to determine the right step
  let callback = (entries, observer) => {
    entries.forEach(entry => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };


  intersectionCallback(entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
  
        if (entry.intersectionRatio >= 0.75) {
          intersectionCounter++;
        }
      }
    });
  }