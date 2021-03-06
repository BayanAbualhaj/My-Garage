'use strict';

//////////////////////////////
///////Global Variable////////
//////////////////////////////

var table = document.getElementById('table');
var form = document.getElementById('form');

var arrayOfcars=[];

var arrayOfheders=['Logo','Details'];


//////////////////////////////////
///Functions && event listener////
//////////////////////////////////

function Cars(name,category,year) {
    this.img=`img/${category}.png`
    console.log(this.img);
    this.name=name;
    this.category=category;
    this.year=year;
    

    arrayOfcars.push(this);
    
}

Cars.prototype.renderCar =function() {
    var tableRow=document.createElement('tr');

    var carDataimg=document.createElement('td');
    var carLogo=document.createElement('img');
    carLogo.setAttribute('src',this.img);
    carDataimg.appendChild(carLogo);
    tableRow.appendChild(carDataimg);

    var carData= document.createElement('td');
    carData.textContent=`Car Name: ${this.name} 
    Car Model Year: ${this.year}`;
    tableRow.appendChild(carData);

    var deleteX =document.createElement('button');
    deleteX.textContent=' X ';
    tableRow.appendChild(deleteX);
    deleteX.addEventListener('click',deleteRow);


    table.appendChild(tableRow);
    
}

function deleteRow(event) {
    // event.target.parentElement.remove();
    event.target.parentElement.remove();
    var car=event.target.parentElement.innerHTML.split('<td>',2);
    car=car[1].replace('</td>','');
    for (let index = 0; index < arrayOfcars.length; index++) {
        if(car===arrayOfcars[index].img);
        var j=arrayOfcars.indexOf(arrayOfcars[index]);
        arrayOfcars.splice(j,1);
    }   
}

function carsData(event) {
    event.preventDefault();

    var name = event.target.name.value;
    var category = event.target.category.value;
    var year = event.target.year.value;

    var newCar= new Cars(name,category,year);

    newCar.renderCar();

    localStorage.setItem('carList',JSON.stringify(arrayOfcars));
    
}

function checkLS() {
    if (localStorage.getItem('carList')) {
        arrayOfcars=JSON.parse(localStorage.getItem('carList'));
        for (let index = 0; index < arrayOfcars.length; index++) {

            var tableRow=document.createElement('tr');

            var carDataimg=document.createElement('td');
            var carLogo=document.createElement('img');
            carLogo.setAttribute('src',arrayOfcars[index].img);
            carDataimg.appendChild(carLogo);
            tableRow.appendChild(carDataimg);

            var carData= document.createElement('td');
            carData.textContent=`Car Name: ${arrayOfcars[index].name} 
            Car Model Year: ${arrayOfcars[index].year}`;
            tableRow.appendChild(carData);

            var deleteX =document.createElement('button');
            deleteX.textContent=' X ';
            tableRow.appendChild(deleteX);
            deleteX.addEventListener('click',deleteRow);


            table.appendChild(tableRow);
            
        }
        
    }
    
}

 function header() {
     var tableRow=document.createElement('tr');
     for (let index = 0; index < arrayOfheders.length; index++) {
         var tableheader=document.createElement('th');
         tableheader.textContent=arrayOfheders[index];
         tableRow.appendChild(tableheader);
     }
     table.appendChild(tableRow);
     
 }

form.addEventListener('submit',carsData);
header();
checkLS();
console.log(arrayOfcars);