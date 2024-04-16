window.addEventListener('DOMContentLoaded', function (){
    const colorBox = document.getElementById('color-box')
    const btnColorBox = document.getElementById('change-color-btn');

    btnColorBox.onclick = function (){
        let rgb = getRandomColor();
        colorBox.style.backgroundColor = `rgb(${rgb[0]} , ${rgb[1]} , ${rgb[2]})` ;
    }
});

function getRandomColor(){
    let red = Math.floor((Math.random() * 255) + 1);
    let green = Math.floor((Math.random() * 255) + 1);
    let blue = Math.floor((Math.random() * 255) + 1);
    return [red , green, blue] ;
}