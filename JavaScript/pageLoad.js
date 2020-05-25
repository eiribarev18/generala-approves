function load()
{
    var cards = document.getElementsByClassName("card");

    for (var card of cards){
        card.style.transition = "0.5s";
    }
}