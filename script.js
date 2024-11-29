document.querySelector('.flyer').addEventListener('mousemove', (e) => {
    const flyer = e.currentTarget;
    const rect = flyer.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
  
    flyer.style.transform = `rotateY(${x / 50}deg) rotateX(${y / -50}deg)`;
  });
  
  document.querySelector('.flyer').addEventListener('mouseleave', (e) => {
    e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
  