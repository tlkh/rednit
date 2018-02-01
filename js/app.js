$(document).ready(function () {

    // Define cards
    var cards = [
        new Tindercardsjs.card(0, 'Red Wine Cures Heart Disease', 'HEALTH', 'img/redwine.png'),
        new Tindercardsjs.card(1, 'Drink 8 Glasses of Water a Day', 'HEALTH', 'img/glasseswater.jpg'),
        new Tindercardsjs.card(2, 'Eggs Are Bad for Your Heart', 'HEALTH', 'img/eggs.jpg'),
        new Tindercardsjs.card(3, 'Antiperspirant Causes Breast Cancer', 'HEALTH', 'img/deo.jpg'),
        new Tindercardsjs.card(4, 'Being Cold Gives You a Cold', 'HEALTH', 'img/cold.jpg'),
        ];

    // Render cards
    Tindercardsjs.render(cards, $('#main'), function (event) {
        console.log('Swiped ' + event.direction + ', cardid is ' + event.cardid + ' and target is:');
        console.log(event.card);
    });
});