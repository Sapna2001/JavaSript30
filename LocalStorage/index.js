const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem('items')) || []; //works on reload also

function addItem(e){
    e.preventDefault();
    //stop default reloading of the form
    // console.log(e);
    const text = this.querySelector('[name=item]').value;
    //this is the form
    const item = {
        text,
        done: false //not checked
    };
    // console.log(text);
    items.push(item);
    //put item in items array
    // console.log(items);
    populateList(items,itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    //local storage can only handle strings
    this.reset();
    //remove text from input box
}

//plates ->items
//platesList to put html ->itemsList
function populateList(plates, platesList){
    platesList.innerHTML = plates.map((plate,index) =>{
        return `
            <li>
            <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''}/>
            <label for = "item${index}">${plate.text}</label>
            </li>
        `
    }).join("");
}

//onreload check
const toggleDone = (e) =>{
    if(!e.target.matches('input'))
    return;
    // console.log(e.target);
    const element = e.target;
    const elementIndex = element.dataset.index
    // console.log(elementIndex);
    items[elementIndex].done = !items[elementIndex].done;
    if(items[elementIndex].done === false){
        items.splice(elementIndex,1);
    }
    //update 
    populateList(items,itemsList);
    localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener("submit",addItem);
itemsList.addEventListener("click",toggleDone);
//preserve log so that the console doesn't vanish;
populateList(items,itemsList);



