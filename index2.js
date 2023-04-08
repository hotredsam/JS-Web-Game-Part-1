function newImage(elementName, src, left, bottom) {
    let newElement = document.createElement('img');
    newElement.src = src;
    newElement.style.position = 'fixed';
    newElement.style.left = left;
    newElement.style.bottom = bottom;
    document.body.append(newElement);
    return newElement;
}

function newItem(elementName, src, left, bottom) {
    let newElement = document.createElement('img');
    newElement.src = src;
    newElement.style.position = 'fixed';
    newElement.style.left = left;
    newElement.style.bottom = bottom;
    document.body.append(newElement);

    // Add the event listener to the new element
    newElement.addEventListener('dblclick', function () {
        newElement.remove();
    });

    return newElement;
}


let greenCharacter = newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px');
let pineTree = newImage('pineTree', 'assets/pine-tree.png', '450px', '200px');
let tree = newImage('tree', 'assets/tree.png', '200px', '300px');
let pillar = newImage('pillar', 'assets/pillar.png', '350px', '100px');
let crate = newImage('crate', 'assets/crate.png', '150px', '200px');
let well = newImage('well', 'assets/well.png', '500px', '425px');

let sword = newItem('sword', 'assets/sword.png', '500px', '405px');
let sheild = newItem('sheild', 'assets/sheild.png', '165px', '185px');
let staff = newItem('staff', 'assets/staff.png', '600px', '100px');