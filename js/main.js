(() => {
  const body = document.querySelector('body');
  setTimeout(() => {
    body.style.display = 'block';
    setTimeout(() => (body.style.opacity = 1), 50);
  }, 100);
})();
