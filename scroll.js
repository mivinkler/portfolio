const observer = new IntersectionObserver(entries => {  
  entries.forEach(entry => {       
    if (entry.isIntersecting) {            
      let skill_value = document.getElementsByClassName("skill_value");      
      for (var i = 0; i < skill_value.length; i++) {      
        skill_value.item(i).classList.add('animate_bar');
      }      
    }    
  });
});
observer.observe(document.querySelector('.skill_bar')); 


