const observer = new IntersectionObserver(entries => {
    // Создать наблюдателя
    entries.forEach(entry => {
        // перебор записей
      const square = entry.target.querySelector('.skills');
      if (entry.isIntersecting) {
             // если элемент появился
             // надо добавить CSS-класс для анимации
        square.classList.add('progress');
        return; // если класс добавлен, продолжать уже не надо
      }
      square.classList.remove('progress'); // завершено, теперь удалить класс
    });
  });
  observer.observe(document.querySelector('.skill_Bgr')); 
  // Сообщить наблюдателю, какие элементы следует отслеживать