const observer1 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('square-animation');
      }
    });
  });

  const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('project-animation1');
      }
    });
  });

  const observer3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('project-animation2');
      }
    });
  });
  const observer4 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('project-animation3');
      }
    });
  });
  
  observer1.observe(document.querySelector('.wrapper1'));
  observer1.observe(document.querySelector('.wrapper2'));
  observer1.observe(document.querySelector('.wrapper3'));
  observer1.observe(document.querySelector('.wrapper4'));
  
  observer2.observe(document.querySelector('.proj1'));
 
  observer3.observe(document.querySelector('.proj2'));

  observer4.observe(document.querySelector('.proj3'));