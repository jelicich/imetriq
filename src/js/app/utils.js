(function() {
    'use strict';

    /**
     * imetriq namespace
     * @namespace
     */

    const imetriq = window.imetriq;

    imetriq.utils = {

        toggleClassOnScrollRange: function(element, className, range) {
            // const minScrollHeight = window.innerHeight * SOLUTIONS_ORDER;
            // const maxScrollHeight = window.innerHeight * CONTACT_ORDER;

            if(window.scrollY >= range[0] && window.scrollY < range[1]) {
                element.classList.toggle(className, true);
            } else {
                element.classList.toggle(className, false);
            }
        },

    }
})();
