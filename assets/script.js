document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').replace('.html', '');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  