/*jslint browser: true*/
/*global console, Hammer, $*/

/**
 * Tindercards.js
 *
 * @author tlkh.design
 * @module tinderCards
 * License: MIT
 */
var tinderCards = tinderCards || {};

tinderCards = (function () {
    'use strict';

    var exports = {};

    /**
     * Represents one card
     *
     * @memberof module:tinderCards
     * @class
     */
    exports.card = function (card_id, name, desc, imgpath, truth) {

        var jqo;

        /**
         * Returns a jQuery representation of this card
         *
         * @method
         * @public
         * @return {object} A jQuery representation of this card
         */
        this.tojQuery = function () {
            if (!jqo) {
                jqo = $('<div class="tc-card">').attr('data-card_id', card_id).html('<div class="tc-card-img-cont"><img src="' + imgpath + '" class="tc-card-img"><div class="tc-card-body"><h2 class="tc-card-name">' + name + '</h2><span class="tc-card-desc">' + desc + '</span></div></div>');
            }
            jqo.attr('truth_value', truth);
            return jqo;
        };

    };

    /**
     * Initializes swipe
     *
     * @private
     * @function
     */
    function initSwipe(onSwiped) {
        var $topcard = $('.tc-card'),
            deltaX = 0;

        $topcard.each(function () {

            var $card = $(this);

            (new Hammer(this)).on("panleft panright panend panup pandown", function (ev) {
                var transform,
                    yfactor = ev.deltaX >= 0 ? -1 : 1,
                    resultEvent = {};

                if (ev.type === 'panend') {
                    if (deltaX > 100 || deltaX < -100) {
                        transform = 'translate3d(' + (5 * deltaX) + 'px, ' + (yfactor * 1.5 * deltaX) + 'px, 0)';
                        $card.css({
                            'transition': '-webkit-transform 0.5s',
                            '-webkit-transform': transform + ' rotate(' + ((-5 * deltaX) / 10) + 'deg)'
                        });
                        setTimeout(function () {
                            $card.css({
                                'display': 'none'
                            });
                            if (typeof onSwiped === 'function') {
                                resultEvent.card_id = $card.attr('data-card_id');
                                resultEvent.card_truth = $card.attr('truth_value');
                                resultEvent.card = $card;
                                if (deltaX > 100) {
                                    resultEvent.direction = 'right';
                                } else {
                                    resultEvent.direction = 'left';
                                }
                                onSwiped(resultEvent);
                            } else {
                                console.warn('onSwipe callback does not exist!');
                            }
                        }, 500);
                    } else {
                        transform = 'translate3d(0px, 0, 0)';
                        $card.css({
                            'transition': '-webkit-transform 0.3s',
                            '-webkit-transform': transform + ' rotate(0deg)'
                        });
                        setTimeout(function () {
                            $card.css({
                                'transition': '-webkit-transform 0s'
                            });
                        }, 300);
                    }
                } else if (ev.type === 'panup' || ev.type === 'pandown') {
                    // No vertical scroll
                    ev.preventDefault();
                } else {
                    deltaX = ev.deltaX;

                    transform = 'translate3d(' + deltaX + 'px, ' + (yfactor * 0.15 * deltaX) + 'px, 0)';

                    $card.css({
                        '-webkit-transform': transform + ' rotate(' + ((-1 * deltaX) / 10) + 'deg)'
                    });
                }


            });
        });
    }

    /**
     * Renders the given cards
     *
     * @param {array} cards The cards (must be instanceof tinderCards.card)
     * @param {jQuery} $target The container in which the cards should be rendered into
     * @param {function} onSwiped Callback when a card was swiped
     * @example tinderCards.render(cards, $('#main'));
     * @method
     * @public
     * @memberof module:tinderCards
     */
    exports.render = function (cards, $target, onSwiped) {
        var i,
            $card;

        if (cards) {
            for (i = 0; i < cards.length; i = i + 1) {
                $card = cards[i].tojQuery().appendTo($target).css({
                    'position': 'absolute',
                    'border': '1px solid #d1d1d1',
                    'border-radius': '10px',
                    'background-color': '#fcfcfc',
                    'height': '430px',
                    'left': '10px',
                    'top': '10px',
                    'right': '10px',
                    'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                });

                $card.find('.tc-card-img').css({
                    'width': '100%',
                    'border-radius': '10px 10px 0 0'
                });

                $card.find('.tc-card-name').css({
                    'margin-top': '5px',
                    'margin-bottom': '5px'
                });

                $card.find('.tc-card-body').css({
                    'position': 'relative',
                    'left': '10px',
                    'width': '280px'
                });

            }

            initSwipe(onSwiped);

        } else {
            console.warn('tindercards array empty, no cards will be displayed');
        }
    };

    return exports;

}());
