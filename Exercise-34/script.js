

let lists = document.querySelector('.lists')
// console.log(lists);


function addItem(){
    let newLists = document.createElement('li')

    newLists.textContent = "list item"
    lists.appendChild(newLists)
}
function removeItem(){
   if(lists.lastChild){
    lists.removeChild(lists.lastChild)
   } else{
    alert('lists data are 0')
   }
}