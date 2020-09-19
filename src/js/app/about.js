(function() {
    'use strict';

    const ELEMENT_SELECTOR = '#about';
    const TEXT_SELECTOR = '.About-title, .About-text';

    const imetriq = window.imetriq;

    imetriq.about = {
        
        element: document.querySelector(ELEMENT_SELECTOR),

        timeline: new TimelineLite(),

        animations: [
            {
                excludeMobile: false,
                fn: 'animateText'
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

        animateText: function() {
            this.timeline.from(TEXT_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom bottom",
                },
                opacity: 0,
                x: imetriq.utils.isMobile() ? 0 : '50vw'
            });

            this.timeline.progress(1).progress(0);
        }
    }
})();
