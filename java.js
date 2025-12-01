 // Select the H1
  const lazyH1 = document.querySelector('.lazy-h1');

  // Intersection Observer to detect when in viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lazyH1.textContent = lazyH1.dataset.text; // Load the text
        observer.unobserve(lazyH1); // Stop observing
      }
    });
  });

  observer.observe(lazyH1);