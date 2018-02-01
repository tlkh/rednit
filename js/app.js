$(document).ready(function () {

    // Define cards
    var cards = [
          new Tindercardsjs.card(0, 'Red Wine Cures Heart Disease', 'I like big butts', 'img/redwine.png'),
        ];

    // Render cards
    Tindercardsjs.render(cards, $('#main'), function (event) {
        console.log('Swiped ' + event.direction + ', cardid is ' + event.cardid + ' and target is:');
        console.log(event.card);
    });
});
