$(document).ready(function () {

    score = 0;
    var score_display = document.getElementById("score_display");
    console.log(score_display);
    score_display.innerHTML = score.toString();

    // Define cards
    var cards = [
        new tinderCards.card(0, 'Red Wine Cures Heart Disease', 'HEALTH', 'img/redwine.png', false),
        new tinderCards.card(1, 'Drink 8 Glasses of Water a Day', 'HEALTH', 'img/glasseswater.jpg', false),
        new tinderCards.card(2, 'Eggs Are Bad for Your Heart', 'HEALTH', 'img/eggs.jpg', false),
        new tinderCards.card(3, 'Antiperspirant Causes Breast Cancer', 'HEALTH', 'img/deo.jpg', false),
        new tinderCards.card(4, 'Being Cold Gives You a Cold', 'HEALTH', 'img/cold.jpg', false),
        ];

    // Render cards
    tinderCards.render(cards, $('#main'), function (event) {
        
        truth = event.card_truth.toString();
        
        if (event.direction == 'right') {
            console.log("swiped right");
            console.log("true: " + event.card_truth);
            
            if (truth == "true"){
                console.log("correct");
                score++;
            } else {
                console.log("wrong");
                window.alert("You got it wrong!");
            }
        } else {
            console.log("swiped left");
            console.log("true: " + event.card_truth);
            if (truth == "false") {
                console.log("correct");
                score++;
            } else {
                console.log("wrong");
                window.alert("You got it wrong!");
            }
        }

        console.log(score);
        score_display.innerHTML = score.toString();
        
    });
     
});
