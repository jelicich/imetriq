(function() {
    'use strict';

    const imetriq = window.imetriq;

    const SOLUTIONS_ORDER = 2;
    const CONTACT_ORDER = 4;
    const HEADER_DARK_CLASS = 'SiteHeader--dark';
    const ELEMENT_SELECTOR = '#site-header';
    const MIN_SCROLL = window.innerHeight * SOLUTIONS_ORDER;
    const MAX_SCROLL = window.innerHeight * CONTACT_ORDER;

    imetriq.header = {

        element: document.querySelector(ELEMENT_SELECTOR),

        init: function () {
            console.log('init header!')
            imetriq.utils.toggleClassOnScrollRange(this.element, HEADER_DARK_CLASS, [MIN_SCROLL, MAX_SCROLL]);
            this.setScrollBehaviour();
        },

        setScrollBehaviour: function() {
            window.addEventListener('scroll', () => {
                imetriq.utils.toggleClassOnScrollRange(this.element, HEADER_DARK_CLASS, [MIN_SCROLL, MAX_SCROLL]);
            });
        },
    }
})();
