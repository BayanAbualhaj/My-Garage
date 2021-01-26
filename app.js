'use strict';

//////////////////////////////
///////Global Variable////////
//////////////////////////////

var table = document.getElementById('table');
var form = document.getElementById('form');

var arrayOfcars=[];


//////////////////////////////////
///Functions && event listener////
//////////////////////////////////

function Cars(name,category,year) {
    this.img=`img/${category.toLowerCase()}.png`
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
    carLogo.src=this.img;
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
    event.target.parentElement.remove();
    var car=event.target.parentElement.innerHTML.splice('<td>',2);
    car=car[1].replace('</td>','');
    for (let index = 0; index < array.length; index++) {
        if(car==arrayOfcars[index].img);
        var j=arrayOfcars.indexOf(arrayOfcars[index]);
        arrayOfcars.splice(j,1);
    }   
}

function carsData(event) {
    event.preventDefault();

    var name = event.target.name.value;
    var category = event.target.category.value;
    var year = event.target.year.value;

    var newCar= new Cars (name,category,year);

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
            carLogo.src=arrayOfcars[index].img;
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



form.addEventListener('submit', carsData);
checkLS();