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
