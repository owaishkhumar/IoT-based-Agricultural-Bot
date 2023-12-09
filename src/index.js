import {database, ref, set, update, onValue} from '../firebase.js'

//Forward
document.getElementById("btn-forward").addEventListener("mousedown", forward);
document.getElementById("btn-forward").addEventListener("mouseup", stop);

//Reverse
document.getElementById("btn-reverse").addEventListener("mousedown", reverse);
document.getElementById("btn-reverse").addEventListener("mouseup", stop);

//rigth
document.getElementById("btn-rigth").addEventListener("mousedown", rigth);
document.getElementById("btn-rigth").addEventListener("mouseup", stop);

//left
document.getElementById("btn-left").addEventListener("mousedown", left);
document.getElementById("btn-left").addEventListener("mouseup", stop);

//stop
document.getElementById("btn-stop").addEventListener("click", stop);

function forward() {
    console.log("Forward");
    update(ref(database, `Control`),
        {
            forward: 1,
        });
}

function reverse() {
    console.log("Reverse");
    update(ref(database, `Control`),
        {
            reverse: 1,
        });
}

function rigth() {
    console.log("Reverse");
    update(ref(database, `Control`),
        {
            rigth: 1,
        });
}

function left() {
    console.log("Reverse");
    update(ref(database, `Control`),
        {
            left: 1,
        });
}

function stop() {
    console.log("Stop");
    update(ref(database, `Control`),
        {
            forward:0,
            reverse:0,
            rigth:0,
            left:0
        });
}

//Silders
var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");


slider1.oninput = function () {
    console.log(`Slider 1 value is ${this.value}`);
    update(ref(database, `Control`),
        {
            slider1:this.value
        });

}

slider2.oninput = function () {
    console.log(`Slider 2 value is ${this.value}`);
    update(ref(database, `Control`),
        {
            slider2:this.value
        });
}


//Button
document.getElementById("soil-on").addEventListener("click", soilOn);
document.getElementById("soil-off").addEventListener("click", soilOff);

document.getElementById("seeding-on").addEventListener("click", seedingOn);
document.getElementById("seeding-off").addEventListener("click", seedingOff);

document.getElementById("ploughing-on").addEventListener("click", ploughingOn);
document.getElementById("ploughing-off").addEventListener("click", ploughingOff);

function soilOn(){
    document.getElementById("soil-on").style.backgroundColor = '#9d1027';
    document.getElementById("soil-off").style.backgroundColor = 'transparent';
    update(ref(database, `Control`),
        {
            soil_servo:1
        });
}

function soilOff(){
    document.getElementById("soil-off").style.backgroundColor = '#9d1027';
    document.getElementById("soil-on").style.backgroundColor = 'transparent';
    update(ref(database, `Control`),
        {
            soil_servo:0
        });
}

function seedingOn(){
    document.getElementById("seeding-on").style.backgroundColor = '#9d1027';
    document.getElementById("seeding-off").style.backgroundColor = 'transparent';
    update(ref(database, `Control`),
        {
            seeding:1
        });
}

function seedingOff(){
    document.getElementById("seeding-off").style.backgroundColor = '#9d1027';
    document.getElementById("seeding-on").style.backgroundColor = 'transparent';
    update(ref(database, `Control`),
        {
            seeding:0
        });
}

function ploughingOn(){
    document.getElementById("ploughing-on").style.backgroundColor = '#9d1027';
    document.getElementById("ploughing-off").style.backgroundColor = 'transparent';
    update(ref(database, `Control`),
        {
            ploughing:1
        });
}

function ploughingOff(){
    document.getElementById("ploughing-off").style.backgroundColor = '#9d1027';
    document.getElementById("ploughing-on").style.backgroundColor = 'transparent';
    update(ref(database, `Control`),
        {
            ploughing:0
        });
}

// document.getElementById('button-checked').addEventListener('click', checkedButton);

// function checkedButton(){
//     let check = document.getElementsByClassName('checkbox').checked;
//     console.log(check);
// }



