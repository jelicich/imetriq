(function() {
    'use strict';

    const ELEMENT_SELECTOR = '#contact';
    const INPUT_EMAIL_SELECTOR = 'input[type="email"]';
    const INPUT_NAME_SELECTOR = 'input[type="text"]';
    const TITLE_SELECTOR = 'h1';
    const SUBMIT_SELECTOR = 'button[type="submit"]';
    const SNACKBAR_SELECTOR = '.Contact-snackBar';
    const SNACKBAR_SUCCESS_CLASS = 'Contact-snackBar--success';
    const SNACKBAR_ERROR_CLASS = 'Contact-snackBar--error';
    const URL_SERVICE = 'services/sendEmail.php';
    const SUBMIT_IMAGE_SELECTOR = SUBMIT_SELECTOR + ' img';
    
    const imetriq = window.imetriq;

    imetriq.contact = {
        
        element: document.querySelector(ELEMENT_SELECTOR),

        timeline: new TimelineLite(),

        animations: [
            {
                excludeMobile: false,
                fn: 'animateForm'
            },
            {
                excludeMobile: false,
                fn: 'animateTitle'
            },
            {
                excludeMobile: true,
                fn: 'animateSubmit'
            }
        ],

        init: function () {
            this.setForm();

            this.animations.map((animation) => {
                if(imetriq.utils.isMobile() && animation.excludeMobile) {
                    return;
                }
                this[animation.fn]();
            })
            this.timeline.progress(1).progress(0);
        },

        setForm: function() {
            const form = this.element.querySelector('form');
            const fullName = this.element.querySelector(INPUT_NAME_SELECTOR);
            const email = this.element.querySelector(INPUT_EMAIL_SELECTOR);
            const button = this.element.querySelector(SUBMIT_SELECTOR);
            const snackBar = this.element.querySelector(SNACKBAR_SELECTOR);
            let timeout;

            form.onsubmit = (e) => {
                e.preventDefault();
                const data = {
                    name: fullName.value,
                    email: email.value
                }
                button.setAttribute('disabled', true);
                button.classList.add('isLoading');
                clearTimeout(timeout);

                imetriq.utils.post(URL_SERVICE, data)
                    .finally(() => {
                        button.removeAttribute('disabled');
                        button.classList.remove('isLoading');
                        snackBar.classList.add('isVisible')

                        timeout = setTimeout(() => {
                            snackBar.classList.remove('isVisible');
                            snackBar.classList.remove(SNACKBAR_ERROR_CLASS);
                            snackBar.classList.remove(SNACKBAR_SUCCESS_CLASS);
                            snackBar.innerHTML = '';
                        },5000)
                    })
                    .then((result) => {
                        fullName.value = '';
                        email.value = '';
                        snackBar.classList.add(SNACKBAR_SUCCESS_CLASS);
                        snackBar.innerHTML = result;
                    }, (error) => {
                        snackBar.innerHTML = error;
                        snackBar.classList.add(SNACKBAR_ERROR_CLASS);
                    })
            }
        },
        
        animateForm: function() {
            this.timeline.from(INPUT_EMAIL_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom bottom"
                },

                x: '-50vw'
            })
            .from(INPUT_NAME_SELECTOR, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom bottom"
                },
                x: imetriq.utils.isMobile() ? '50vw' : 0 
            })
        },

        animateTitle: function() {
            const title = this.element.querySelector(TITLE_SELECTOR);
            this.timeline.from(title, {
                scrollTrigger: {
                    trigger: this.element,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom bottom"
                },
                y: '-25vw',
                opacity: 0
            })
        },

        animateSubmit: function() {
            const button = this.element.querySelector(SUBMIT_SELECTOR);
            const image = this.element.querySelector(SUBMIT_IMAGE_SELECTOR);

            button.addEventListener('mouseenter', () => {
                gsap.to(image, {
                    x: '15px',
                    ease: 'power2.inOut'
                })
            }) 
            
            button.addEventListener('mouseleave', () => {
                gsap.to(image, {
                    x: '0px',
                    ease: 'power2.inOut'
                })
            }) 
        }
    }
})();
