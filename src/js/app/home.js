(function() {
    'use strict';

    const ELEMENT_SELECTOR = '#home';
    const BACKGROUND_LEFT_SELECTOR = '.Home-backgroundLeft';
    const BACKGROUND_RIGHT_SELECTOR = '.Home-backgroundRight';
    const MAIN_TEXT_SELECTOR = '.Home-mainText';

    const imetriq = window.imetriq;

    imetriq.home = {
        
        element: document.querySelector(ELEMENT_SELECTOR),

        timeline: new TimelineLite(),

        animations: [
            {
                excludeMobile: false,
                fn: 'startParallax'
            }
        ],

        init: function () {
            
            this.animations.map((animation) => {
                if(imetriq.utils.isMobile() && animation.excludeMobile) {
                    return;
                }
                this[animation.fn]();
            })
        },

        startParallax: function() {
            this.timeline.to(BACKGROUND_RIGHT_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top top",
                    end: "bottom top",
                },
                backgroundPositionY: imetriq.utils.isMobile() ? '-100%' : 0,
                y: imetriq.utils.isMobile() ? 0 : '50vh'
            })
            .to(BACKGROUND_LEFT_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top top",
                    end: "bottom top"
                },
                y: '-75%'
            })
            .to(MAIN_TEXT_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "bottom bottom",
                    end: "bottom top"
                },
                opacity: .05,
                y: '-75%'
            })

            this.timeline.progress(1).progress(0);
        }
    }
})();
