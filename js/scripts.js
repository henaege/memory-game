
$(document).ready(function() {
    
    // console.log(cards.length)
    // let cards2 = [];
    // cards.map(()=> {
    //     for (i = 0; i < cards.length; i ++) {
    //     let rand = Math.floor(Math.random() * cards.length);
    //     cards2.push(cards[rand]);
        
    //     }
    // });

    
    let cards = [
    '<img src="./default/luke.jpg">',
    '<img src="./default/jabba.jpg">',
    '<img src="./default/han.jpg">',
    '<img src="./default/vader.jpeg">',
    '<img src="./default/Leia.jpg">',
    '<img src="./default/boba-fett.jpeg">',
    '<img src="./default/obi-wan.jpeg">',
    '<img src="./default/palpatine.jpg">',
    '<img src="./default/luke.jpg">',
    '<img src="./default/jabba.jpg">',
    '<img src="./default/han.jpg">',
    '<img src="./default/vader.jpeg">',
    '<img src="./default/Leia.jpg">',
    '<img src="./default/boba-fett.jpeg">',
    '<img src="./default/obi-wan.jpeg">',
    '<img src="./default/palpatine.jpg">'
    ];
let cards2 = [];
    let gridSize = 16;
    let memoryGameHTML = '';
    for (let i = 0; i < gridSize; i++) {
        let rand = Math.floor(Math.random() * cards.length);
        cards2.push(cards.splice(rand, 1));
        card = cards2[i];
    

    

        memoryGameHTML += '<div class="card col-sm-4">';
        memoryGameHTML += '<div class="card-holder">';
        memoryGameHTML += `<div class="card-front">${card}</div>`;
        memoryGameHTML += `<div class="card-back"></div>`
        memoryGameHTML+= '</div>';
        memoryGameHTML+= '</div>';

    }
    
    
    // console.log(cards2);
    // console.log(cards)
    $('.mg-contents').html(memoryGameHTML);

    $('.card-holder').click(function() {
        $(this).toggleClass('flip flip-temp')

        let cardsUp = $('.flip');
        if (cardsUp.length == 2) {
            let card1 = cardsUp[0].children[0].children[0].src;
            let card2 = cardsUp[1].children[0].children[0].src;
            console.dir(card1);
            console.dir(card2);
            if (card1 == card2) {
                // Match!
                cardsUp.removeClass('flip');
                cardsUp.addClass('matched');
                let matchedCards = $('.matched');
                if (matchedCards.length == gridSize) {
                    // Modal appearance!
                    // $('#messageWindow').on('show.bs.modal')
                    // };
                    $('#modalWindow').modal('show');
                    
                }
            } else {
                // No Match! flip back over
                cardsUp.removeClass('flip');
                
                setTimeout(()=>{
                    cardsUp.removeClass('flip-temp');
                }, 2000);
                
            }
            // cardsUpImages = cardsUp.find('.card-front img');
        }

    })


    
})