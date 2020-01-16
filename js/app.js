

var tabEntrees = {
                  "Choisir": {"prix":" " , "image": "images/default.png"},
                  "Escargot":{"prix": 9.95, "image": "images/escargot.jpg"},
                  "Salade":  {"prix": 12.95, "image": "images/salade.jpg"}
};
var list = document.getElementById('entrees');
var image = document.getElementById('image');
var prix = document.getElementById('prix');

function fillList(){
var index;
    for(index in tabEntrees) {
        list.options[list.length] = new Option(index);

    }
}

function displayVal(){
    var selected = list.options[list.selectedIndex].value;
    if(selected){
        image.src = tabEntrees[selected].image;  
        prix.innerHTML = tabEntrees[selected].prix;
    }
}

window.onload=fillList();



