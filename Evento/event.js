/* //EX1
const img = window
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback()); // undefined
img.addEventListener('click', callback); // 🚀

//EX2 - ARROW FUNCTION
img.addEventListener('click', function() {
  console.log('Clicou');
})
img.addEventListener('click', () => {
  console.log('Clicou');
})
 */