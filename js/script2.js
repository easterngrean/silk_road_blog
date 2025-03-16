// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector)
  if(element) return element;
  throw new Error(`Something went wrong! make sure that the ${selector} exists or is typed correctly.`);
      }


//Nav styles on scroll
const scrollHeader = () => { 
  const headerElement = selectElement('#header');
  if(this.scrollY >= 15) {
    headerElement.classList.add('activated');
  }
  else{
    headerElement.classList.remove('activated');
}

window.addEventListener('scroll', scrollHeader);

console.log(selectElement('.navbar'));
