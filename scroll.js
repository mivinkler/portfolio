// Create Observer
const observer = new IntersectionObserver(entries => {  
  // enumerate records
  entries.forEach(entry => {    
    //if the element is present    
    if (entry.isIntersecting) {            
      let skill_value = document.getElementsByClassName("skill_value");      
      for (var i = 0; i < skill_value.length; i++) {      
        skill_value.item(i).classList.add('animate_bar');
      }      
    }    
  });
});
// Tell the observer which elements to watch
observer.observe(document.querySelector('.skill_bar')); 


