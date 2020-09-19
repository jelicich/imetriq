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
            'footer',
            'contact',
            'home',
            'about',
            'solutions',
            'howItWorks'
        ],

        timeline: new TimelineLite(),
        localize: null,

        init: function () {
            window.scrollTo(0,0);
            try {
                this.initComponents();
            } catch (e) {
                console.error(e);
            }
            this.setLinksAction();
            this.startLocalization();
        },

        initComponents: function() {
            gsap.registerPlugin(ScrollTrigger);

            this.components.map((component) => {
                if(!this[component].init) {
                    throw 'Component must have init fn.';
                }
                this[component].init();
            });
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
                    };
                    imetriq.timeline.to(window, scrollOpts);
                };
            });
            imetriq.timeline.progress(1).progress(0);
        },
        
        startLocalization: function() {
            i18next.use(i18nextHttpBackend)
                .init({
                    backend: {
                        // for all available options read the backend's repository readme file
                        loadPath: './locales/{{lng}}/{{ns}}.json',
                    }
                });
            
            i18next.init({
                lng: 'es',
                fallbackLng: ['en'],
                selectorAttr: 'data-i18n', // selector for translating elements
                useOptionsAttr: false,
                parseDefaultValueFromContent: true
                
            }, function (err, t) {

                imetriq.localize = locI18next.init(i18next);

                imetriq.localize('body');

                document.body.classList.add('loaded');
            });   
        }
    };


    window.onload = function() {
        imetriq.init();
    };
})();
