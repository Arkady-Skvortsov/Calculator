let schet = document.querySelector('.schet');
let result = document.querySelector('.result');
let writes = document.querySelectorAll('.write');
let del = document.querySelector('.del');
let equel = document.querySelector('.equel');
let backspace = document.querySelector('.backspace');

writes.forEach(item => {
   item.addEventListener('click', () => {
      schet.value = schet.value + item.textContent;  
   });
});

equel.addEventListener('click', () => {
   if(eval(schet.value)  === undefined) {
   	  result.value = "Ой-ой, что-то пошло не так))";
   	  schet.value = "";
   } else {
      result.value = eval(schet.value); //Все работает)
      // schet.value = eval(schet.value);
   }
});

del.addEventListener('click', () => {
   result.value = "";
   schet.value = "";
});

backspace.addEventListener('click', () => {
    schet.value = schet.value.substring(0, schet.value.length-1); 
    result.value = result.value.substring(0, result.value.length-1);
});

// backspace.addEventListener('mousepressed', () => {
//    let interval = setInterval(() => {
//      schet.value = schet.value.substring(0, schet.value.length-1); 
//      result.value = result.value.substring(0, result.value.length-1);

//      if(schet.value == "" || result.value == "") clearInterval(interval);
//    }, 10);
// });


