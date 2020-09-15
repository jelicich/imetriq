(function() {
    'use strict';

    const ELEMENT_SELECTOR = '#home';

    const imetriq = window.imetriq;

    imetriq.home = {
        
        element: document.querySelector(ELEMENT_SELECTOR),

        animations: [
            {
                includeMobile: true,
                fn: 'animateArrow'
            }
        ],

        init: function () {
            
            this.animations.map((animation) => {

            })
        },

        animateArrow: function() {
            this.element
        }
    }
})();
