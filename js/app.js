$(document).ready(function () {

    // Define cards
    var cards = [
        new tinderCards.card(0, 'Red Wine Cures Heart Disease', 'HEALTH', 'img/redwine.png'),
        new tinderCards.card(1, 'Drink 8 Glasses of Water a Day', 'HEALTH', 'img/glasseswater.jpg'),
        new tinderCards.card(2, 'Eggs Are Bad for Your Heart', 'HEALTH', 'img/eggs.jpg'),
        new tinderCards.card(3, 'Antiperspirant Causes Breast Cancer', 'HEALTH', 'img/deo.jpg'),
        new tinderCards.card(4, 'Being Cold Gives You a Cold', 'HEALTH', 'img/cold.jpg'),
        ];

    // Render cards
    tinderCards.render(cards, $('#main'), function (event) {
        console.log('Swiped ' + event.direction + ', card_id is ' + event.cardid + ' and target is:');
        console.log(event.card);
    });
});