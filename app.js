let string = " ";
let buttons = document.querySelectorAll('.btn');
console.log(buttons);
Array.from(buttons).forEach((buttons) => {
   buttons.addEventListener('click', (f) => {
      if (f.target.innerHTML == '=') {
         string = eval(string)
         document.querySelector('input').value = string;
      }
      else if (f.target.innerHTML == 'C') {
         string = ''
         document.querySelector('input').value = string;
      }

      else {

         console.log(f.target);
         string = string + f.target.innerHTML;
         document.querySelector('input').value = string;
      }
   })
})




