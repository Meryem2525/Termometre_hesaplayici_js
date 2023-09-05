let cel= document.getElementById("cel");
let fahren = document.getElementById("fahr");



function cellTofar(){
    let output = (parseFloat(cel.value)*9/5)+32;
    fahren.value = parseFloat(output.toFixed(2));
}


function fahrTotCel(){
    let output = (parseFloat(fahren.value)-32)*5/9;

    cel.value =parseFloat(output.toFixed(2));
}