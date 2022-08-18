// Создать наблюдателя
const observer = new IntersectionObserver(entries => {  
  // перебор записей
  entries.forEach(entry => {    
    // если элемент появился    
    if (entry.isIntersecting) {            
      let skill_value = document.getElementsByClassName("skill_value");      
      for (var i = 0; i < skill_value.length; i++) {      
        skill_value.item(i).classList.add('animate_bar');
      }      
    }    
  });
});
// Сообщить наблюдателю, какие элементы следует отслеживать
observer.observe(document.querySelector('.skill_bar')); 


