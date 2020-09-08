(function() {
    'use strict';

    /**
     * imetriq namespace
     * @namespace
     */

    const imetriq = window.imetriq = {


        init: function () {
            console.log('init!')
        }
    }


    window.onload = function() {
        // change this to increase/decrease difficulty
        
        imetriq.init();
    }
})();
