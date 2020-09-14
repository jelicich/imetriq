/*! imetriq v1.0.0 | (c) 2020  | ISC License | git+https://github.com/jelicich/imetriq.git */
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

(function() {
    'use strict';

    const imetriq = window.imetriq;

    // const SOLUTIONS_ORDER = 2;
    // const CONTACT_ORDER = 4;
    // const MIN_SCROLL = window.innerHeight * SOLUTIONS_ORDER;
    // const MAX_SCROLL = window.innerHeight * CONTACT_ORDER;
    const WHITE_SECTION_START_SELECTOR = '#solutions';
    const WHITE_SECTION_END_SELECTOR = '#how-it-works';
    const HEADER_DARK_CLASS = 'SiteHeader--dark';
    const ELEMENT_SELECTOR = '#site-header';
    const LINKS_SELECTOR = '.SiteHeader-nav a, .SiteHeader-logoContainer a';
    const HAMBURGUER_SELECTOR = '.SiteHeader-hamburger';
    const MOBILE_MENU_SELECTOR = '.SiteHeader-mobileMenu';
    const MOBILE_LINKS_SELECTOR = '.SiteHeader-mobileNav a, .SiteHeader-logoContainer a';

    imetriq.header = {

        element: document.querySelector(ELEMENT_SELECTOR),

        init: function () {
            console.log('init header!')
            this.setLimits();
            
            imetriq.utils.toggleClassOnScrollRange(this.element, HEADER_DARK_CLASS, [this.minScroll, this.maxScroll]);
            this.setScrollBehaviour();
            this.setHamburgerButton();
            this.setMobileLinks();
            this.startIntersectionObserver();
        },

        setScrollBehaviour: function() {
            window.addEventListener('scroll', () => {
                imetriq.utils.toggleClassOnScrollRange(this.element, HEADER_DARK_CLASS, [this.minScroll, this.maxScroll]);
            });
        },

        setLimits: function() {
            const startWhite = document.querySelector(WHITE_SECTION_START_SELECTOR).getBoundingClientRect().top;
            const endWhite = document.querySelector(WHITE_SECTION_END_SELECTOR).getBoundingClientRect().bottom;
            this.minScroll = startWhite - this.element.getBoundingClientRect().bottom + (this.element.offsetHeight / 2);
            this.maxScroll = endWhite - this.element.getBoundingClientRect().top - (this.element.offsetHeight / 2);
        },

        setHamburgerButton: function() {
            var button = this.element.querySelector(HAMBURGUER_SELECTOR);
            const t = this;
            button.onclick = () => {
                this.toggleMobileMenuClasses()
            }
        },

        setMobileLinks: function() {
            const links = this.element.querySelectorAll(MOBILE_LINKS_SELECTOR);
            links.forEach( (link) => {
                link.addEventListener('click', () => {
                    this.toggleMobileMenuClasses();
                })
            });
        },

        toggleMobileMenuClasses: function() {
            this.element.querySelector(HAMBURGUER_SELECTOR).classList.toggle('isActive');
            this.element.querySelector(MOBILE_MENU_SELECTOR).classList.toggle('isActive');
            document.body.classList.toggle('isBlocked');
            document.documentElement.classList.toggle('isBlocked');
        },

        startIntersectionObserver: function () {
            const links = this.element.querySelectorAll(LINKS_SELECTOR);
            links.forEach((link) => {
                function callback(entries) {
                    if(entries[0].isIntersecting) {
                        const target = '#' + entries[0].target.getAttribute('id');
                        imetriq.header.setActiveLink(target);
                    }
                    
                    for (const entry of entries) {
                        console.log(
                            // entry.target,
                            entry.isIntersecting,
                            entry.intersectionRatio
                        );
                    }
                }
                const myIntersectionObserver = new IntersectionObserver(callback, {
                    root: document.querySelector('main'),
                    threshold: 0.65
                });
                myIntersectionObserver.observe(document.querySelector(link.getAttribute('href')));
            })
        },

        setActiveLink: function(targetActive) {
            const links = this.element.querySelectorAll(`${LINKS_SELECTOR}, ${MOBILE_LINKS_SELECTOR}`);
            links.forEach((link) => {
                const currentHref = link.getAttribute('href');
                currentHref === targetActive ? link.classList.toggle('isActive', true) : link.classList.toggle('isActive', false);
            })
        }
    }
})();

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
