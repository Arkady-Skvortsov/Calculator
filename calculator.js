let schet = document.querySelector('.schet');
let result = document.querySelector('.result');
let del = document.querySelector('.del');
let backspace = document.querySelector('.backspace');
let writes = document.querySelectorAll(".write");

writes.forEach((item) => {
   item.addEventListener('click', () => {
      schet.value = schet.value + item.textContent;

      // switch(schet.value) {
      //   case ~schet.value.indexOf("П"): console.log(Math.PI);
      //   break;
      //   case schet.value.includes("e"): schet.value = schet.value + Math.E; 
      //   break;
      //   // case 'sin(`${schet.value}`)':
      //   //       if(equel()) {
      //   //          result.value = Math.sin((schet.value));
      //   //       }
      //   // break;
      // }
   });
});

let equel = function() {
  switch(eval(schet.value)) {
     case undefined: 
          result.value = "Ой-ой, что-то пошло не так))";
          schet.value = "";
     break;
     case Infinity: 
          result.value = "Бесконечность))";
          schet.value = "";
     break;
     default: result.value = eval(schet.value);
  }
}

del.addEventListener('click', () => {
   result.value = "";
   schet.value = "";
});

backspace.addEventListener('click', () => {
    schet.value = schet.value.substring(0, schet.value.length-1); 
    // result.value = result.value.substring(0, result.value.length-1);
});

// backspace.addEventListener('mousepressed', () => {
//    let interval = setInterval(() => {
//      schet.value = schet.value.substring(0, schet.value.length-1); 
//      result.value = result.value.substring(0, result.value.length-1);

//      if(schet.value == "" || result.value == "") clearInterval(interval);
//    }, 10);
// });


