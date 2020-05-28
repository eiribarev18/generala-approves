function load()
{
    var gridItems = document.querySelectorAll(".grid > *");

    for (var item of gridItems){
        item.style.transition = "0.5s";
    }
}