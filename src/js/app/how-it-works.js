(function() {
    'use strict';

    const ELEMENT_SELECTOR = '#how-it-works';
    const TEXT_SELECTOR = 'h2, h3, p';
    const CHIPS_SELECTOR = '.HowItWorks-chip';
    const CHIP_NTH_SELECTOR = ['.nth1', '.nth2', '.nth3', '.nth4'];

    const imetriq = window.imetriq;

    imetriq.howItWorks = {
        
        element: document.querySelector(ELEMENT_SELECTOR),

        timeline: new TimelineLite(),

        animations: [
            {
                excludeMobile: false,
                fn: 'animateText'
            },{
                excludeMobile: true,
                fn: 'animateChips'
            },
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

        animateText: function() {
            const textElements = this.element.querySelectorAll(TEXT_SELECTOR);
            this.timeline.from(textElements, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: imetriq.utils.isMobile() ? "25% bottom" : "25% 50%",
                    end: "top top",
                },
                opacity: 0,
            }) 
        },
    
        animateChips: function() {
            this.timeline.from(CHIPS_SELECTOR+CHIP_NTH_SELECTOR[1], {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top bottom",
                    end: "20% 40%",
                },
                opacity: 0,
                x: '-25vw'
            }).from(CHIPS_SELECTOR+CHIP_NTH_SELECTOR[0], {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "50% bottom",
                    end: "20% 40%",
                },
                opacity: 0,
                x: '-25vw'
            })
            .from(CHIPS_SELECTOR+CHIP_NTH_SELECTOR[2], {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top bottom",
                    end: "20% 40%",
                },
                opacity: 0,
                x: '25vw'
            })
            .from(CHIPS_SELECTOR+CHIP_NTH_SELECTOR[3], {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "50% bottom",
                    end: "20% 40%",
                },
                opacity: 0,
                x: '25vw'
            })
        }
    }
})();
