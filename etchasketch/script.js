const container = document.querySelector('.container')
function createDivs(col , rows) {
  for(let i = 0;i < (col * rows); i++) {
      const div = document.createElement('div') 
      container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
     
      div.setAttribute("id","newDiv");
      container.appendChild(div).classList.add('box');
  }
}


function change(){
  let person=prompt("How many grids would you like?");
  createDivs(person,person);
}

function reset(){
  const boxes=container.querySelectorAll('.box');
  boxes.forEach(box => {
    box.remove();
})
}

function blackColor(){
 
    const boxs = container.querySelectorAll('.box')
        boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'black'
        }))
}
blackColor();







 









