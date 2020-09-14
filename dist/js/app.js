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
            'footer',
            'contact'
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

    const ELEMENT_SELECTOR = '#contact';

    const imetriq = window.imetriq;

    imetriq.contact = {
        
        element: document.querySelector(ELEMENT_SELECTOR),

        init: function () {
            this.setForm();
        },

        setForm: function() {
            const form = this.element.querySelector('form');
            form.onsubmit = (e) => {
                e.preventDefault();
                console.log('loading!');
                const data = {
                    name: this.element.querySelector('input[name="full-name"]').value,
                    email: this.element.querySelector('input[name="email"]').value
                }
                imetriq.utils.post('services/sendEmail.php', data)
                    .finally(() => {
                        console.log('stop loading!')
                    })
                    .then((result) => {
                        console.log('success', result)
                    }, (error) => {
                        console.log('error', error)
                    })
            }
        }
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

        isMobile: function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },

        post: function(url, data) {
            return new Promise((resolve, reject) => {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if(this.status == 200) {
                            resolve(JSON.parse(this.responseText));
                        } else {
                            reject(this.status);
                        }
                    }
                };

                xhttp.open('POST', './'+url, true);
                //xhttp.setRequestHeader('Content-Type', 'application/json');
                xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                const query = Object.keys(data).map(key => key + '=' + data[key]).join('&');
                xhttp.send(query);
            })
        }
    }
})();
