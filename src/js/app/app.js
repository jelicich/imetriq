(function() {
    'use strict';

    const LINKS_SELECTOR = 'a.scroll-to';

    /**
     * imetriq namespace
     * @namespace
     */

    const imetriq = window.imetriq = {

        components: [
            'header',
            'footer'
        ],

        init: function () {
            console.log('init!')
            window.scrollTo(0,0);
            try {
                this.initComponents()
            } catch (e) {
                console.error(e);
            }
            this.setLinksAction();
        },

        initComponents: function() {
            this.components.map((component) => {
                if(!this[component].init) {
                    throw 'Component must have init fn.'
                }
                this[component].init();
            })
        },

        setLinksAction: function() {
            const links = document.querySelectorAll(LINKS_SELECTOR);
            links.forEach((link) => {
                link.onclick = function(e) {
                    e.preventDefault();
                    const target = this.getAttribute('href');
                    const scrollTo = document.querySelector(target).offsetTop;
                    
                    const scrollOpts = {
                        duration: 1, 
                        scrollTo: scrollTo, 
                        ease: "power2.inOut"
                    }
                    gsap.to(window, scrollOpts);
                }
            });
        }   
    }


    window.onload = function() {
        // change this to increase/decrease difficulty
        
        imetriq.init();
    }
})();
