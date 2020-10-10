(function() {
    'use strict';

    const WHITE_SECTION_START_SELECTOR = '#solutions';
    const WHITE_SECTION_END_SELECTOR = '#how-it-works';
    const HEADER_DARK_CLASS = 'SiteHeader--dark';
    const HEADER_OPAQUE_CLASS = 'SiteHeader--opaque';
    const ELEMENT_SELECTOR = '#site-header';
    const LINKS_SELECTOR = '.SiteHeader-nav a, .SiteHeader-logoContainer a';
    const HAMBURGUER_SELECTOR = '.SiteHeader-hamburger';
    const MOBILE_MENU_SELECTOR = '.SiteHeader-mobileMenu';
    const MOBILE_LINKS_SELECTOR = '.SiteHeader-mobileNav a, .SiteHeader-logoContainer a';

    const imetriq = window.imetriq;

    imetriq.header = {

        element: document.querySelector(ELEMENT_SELECTOR),

        init: function () {
            this.setLimits();
            
            imetriq.utils.toggleClassOnScrollRange(this.element, HEADER_DARK_CLASS, [this.minScroll, this.maxScroll]);
            this.setScrollBehaviour();
            
            if(imetriq.utils.isMobile()) {
                this.setHamburgerButton();
                this.setMobileLinks();
                this.startSectionMobileListener();
            } else {
                this.startIntersectionObserver();
            }
        },

        setScrollBehaviour: function() {
            window.addEventListener('scroll', () => {
                imetriq.utils.toggleClassOnScrollRange(this.element, HEADER_DARK_CLASS, [this.minScroll, this.maxScroll]);
                this.element.classList.toggle(HEADER_OPAQUE_CLASS, window.scrollY > 50);
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
                    this.toggleMobileMenuClasses(false);
                })
            });
        },

        toggleMobileMenuClasses: function(force) {
            this.element.querySelector(HAMBURGUER_SELECTOR).classList.toggle('isActive', force);
            this.element.querySelector(MOBILE_MENU_SELECTOR).classList.toggle('isActive', force);
            document.body.classList.toggle('isBlocked', force);
            document.documentElement.classList.toggle('isBlocked', force);
        },

        startIntersectionObserver: function () {
            const links = this.element.querySelectorAll(LINKS_SELECTOR);
            links.forEach((link) => {
                function callback(entries) {
                    if(entries[0].isIntersecting) {
                        const target = '#' + entries[0].target.getAttribute('id');
                        imetriq.header.setActiveLink(target);
                    }
                }
                const myIntersectionObserver = new IntersectionObserver(callback, {
                    root: document.querySelector('main'),
                    threshold: 0.65
                });
                myIntersectionObserver.observe(document.querySelector(link.getAttribute('href')));
            })
        },

        startSectionMobileListener: function() {
            
            window.addEventListener('scroll', () => {
                const links = this.element.querySelectorAll(LINKS_SELECTOR);
                links.forEach((link) => {
                    const offsetTop = window.innerHeight * 0.25;
                    const href = link.getAttribute('href');
                    const section = document.querySelector(href);
                    const distanceToTop = section.getBoundingClientRect().top;
                    if(distanceToTop < offsetTop) {
                        imetriq.header.setActiveLink(href)
                    }
                });
            })
        },

        setActiveLink: function(targetActive) {
            const links = this.element.querySelectorAll(`${LINKS_SELECTOR}, ${MOBILE_LINKS_SELECTOR}`);
            links.forEach((link) => {
                const currentHref = link.getAttribute('href');
                currentHref === targetActive ? link.classList.toggle('isActive', true) : link.classList.toggle('isActive', false);
            })
        },

        translate: function(el) {
            const lang = el.dataset.translateTo;
            
            i18next.changeLanguage(lang).then(() => {
                imetriq.localize('body'); 
            })

            el.dataset.translateTo = lang === 'en' ? 'es' : 'en';
            const newText = lang === 'en' ? 'ESP' : 'ENG';

            new TimelineLite().to(el.firstElementChild, 0.2, {
                text: '',
                ease: Linear.easeNone,
            }).to(el.firstElementChild, 0.2, {
                text: newText,
                ease: Linear.easeNone,
            });
        }
    }
})();
