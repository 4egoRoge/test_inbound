let cards = slider.querySelectorAll('.slide');

console.log(cards)

let n = 0;

slider.querySelector('.btnLeft').onclick = function() {
    if(n+3 != cards.length) {
        cards[n].classList.remove("block");
        cards[n+3].classList.add("block");
        n++
    } else if(n=3) {
        cards[3].classList.remove("block");
        cards[0].classList.add("block");
    }
  };