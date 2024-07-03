document.addEventListener('scroll', function() {
    const imagenCielo = document.querySelector('.imagenCielo');
    const imagenMontania = document.querySelector('.imagenMontania');
  
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
  
    if (scrollPosition < windowHeight) {
      imagenCielo.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    
      if (scrollPosition >= windowHeight) {
        imagenMontania.style.position = 'fixed';
        imagenMontania.style.top = '-4px';
      } else {
        imagenMontania.style.position = 'absolute';
        imagenMontania.style.top = '-4px';
      }
    }
  
  });