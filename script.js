let radius = document.getElementById("radius");
let volume = document.getElementById("volume");


function myfunction(){
    const radius1 = radius.value;
    let volume2 = (1.33*3.14*radius1*radius1*radius1);
    volume.value = volume2;
    console.log(volume2);
    console.log(radius1);


}