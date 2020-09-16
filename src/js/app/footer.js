(function() {
    'use strict';


    const imetriq = window.imetriq;

    const WHITE_SECTION_START_SELECTOR = '#solutions';
    const WHITE_SECTION_END_SELECTOR = '#how-it-works';
    const FOOTER_DARK_CLASS = 'Footer--dark';
    const ELEMENT_SELECTOR = '#footer';

    imetriq.footer = {

        element: document.querySelector(ELEMENT_SELECTOR),
        minScroll: null,
        maxScroll: null,

        init: function () {
            if(imetriq.utils.isMobile()) {
                return;
            }
            this.setLimits();

            imetriq.utils.toggleClassOnScrollRange(this.element, FOOTER_DARK_CLASS, [this.minScroll, this.maxScroll]);
            this.setScrollBehaviour();
        },

        setLimits: function() {
            const startWhite = document.querySelector(WHITE_SECTION_START_SELECTOR).getBoundingClientRect().top;
            const endWhite = document.querySelector(WHITE_SECTION_END_SELECTOR).getBoundingClientRect().bottom;
            this.minScroll = startWhite - this.element.getBoundingClientRect().bottom + (this.element.offsetHeight / 2);
            this.maxScroll = endWhite - this.element.getBoundingClientRect().top - (this.element.offsetHeight / 2);
        },
        
        setScrollBehaviour: function() {
            window.addEventListener('scroll', () => {
                imetriq.utils.toggleClassOnScrollRange(this.element, FOOTER_DARK_CLASS, [this.minScroll, this.maxScroll]);
            });
        },
    }
})();
