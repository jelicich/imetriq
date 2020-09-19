(function() {
    'use strict';

    const ELEMENT_SELECTOR = '#solutions';
    const TITLE_SELECTOR = '.Solutions-title';
    const TITLE_ICON_SELECTOR = '.Solutions-titleIcon';
    const CONTENT_CONTAINER_SELECTOR = '.Solutions-contentContainer';

    const imetriq = window.imetriq;

    imetriq.solutions = {
        
        element: document.querySelector(ELEMENT_SELECTOR),

        timeline: new TimelineLite(),

        animations: [
            {
                excludeMobile: false,
                fn: 'animateTitle'
            },
            {
                excludeMobile: true,
                fn: 'animateBg'
            },
            {
                excludeMobile: true,
                fn: 'animateContent'
            }
        ],

        init: function () {
            
            this.animations.map((animation) => {
                if(imetriq.utils.isMobile() && animation.excludeMobile) {
                    return;
                }
                this[animation.fn]();
            })
            this.timeline.progress(1).progress(0);
        },

        animateTitle: function() {
            this.timeline.from(TITLE_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: imetriq.utils.isMobile() ? "top 90%" : "top bottom",
                    end: "top top",
                },
                opacity: 0,
                x: imetriq.utils.isMobile() ? 0 : '-50vw'
            })
            .from(TITLE_ICON_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: imetriq.utils.isMobile() ? "top 25%" : "center 75%",
                    end: "top top",
                },
                opacity: 0,
                x: '10vw'
            })
        },

        animateBg: function() {
            this.timeline.from(this.element, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top center",
                    end: "bottom bottom",
                },
                backgroundPositionY: '100vh'
            });
        },

        animateContent: function() {
            this.timeline.from(CONTENT_CONTAINER_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "25% bottom",
                    end: "bottom bottom",
                },
                opacity: 0
            })
        }
    }
})();
