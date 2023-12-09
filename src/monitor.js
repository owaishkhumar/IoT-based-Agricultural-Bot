import {database, ref, set, update, onValue} from '../firebase.js';

// var temperature = document.getElementById('temperature').innerHTML;
// var humidity = document.getElementById('humidity').innerHTML;
// var soil = document.getElementById('soil-moisture').innerHTML;

onValue(ref(database, `monitor`),function(snapshot){
    console.log(snapshot.val());
    var data = snapshot.val();
    document.getElementById('temperature').innerHTML = data.temperature;
    document.getElementById('humidity').innerHTML = data.humidity;
    document.getElementById('soil-moisture').innerHTML = data.soil_moisture;
}); 