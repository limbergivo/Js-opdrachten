function SurfaceRectagle(){
    let lengte = document.getElementById('lengte').value;
    let breedte = document.getElementById('breedte').value;
    alert(lengte * breedte +'cm²');
}

function PerimeterRectangle(){
    let lengte = document.getElementById('lengteOmtrek').value;
    let breedte = document.getElementById('breedteOmtrek').value;
    alert((lengte + breedte)*2);
}
