export var arr1 = [];

export function add_Tag() {
    let tagArea = document.getElementById('view');
    let new_pTag = document.createElement('div');
    let arrArea = document.getElementById('view2');
    let new_arr = document.createElement('div');

    new_arr.setAttribute('class', 'arr_div');
    new_pTag.setAttribute('class', 'div');
    new_pTag.innerHTML = document.getElementById('prompt').value;
    arr1.push(document.getElementById('prompt').value);

    new_arr.innerHTML = arr1;

    if (arrArea.childElementCount > 0) {
        arrArea.removeChild(arrArea.childNodes[0]);
        arrArea.appendChild(new_arr);
    } else {
        arrArea.appendChild(new_arr);
    }

    tagArea.appendChild(new_pTag);
    console.log(arr1);
}

export function sendTxt() {
    console.log("Hello")
}
