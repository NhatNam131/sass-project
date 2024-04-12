// Sign Up
Validator({
    form: '#form-signup',
    formGroupSelector: '.form__group',
    errorSelector: '.form__message--error',
    rules: [
        Validator.isRequired('#email'),
        Validator.isMail('#email'),
        Validator.isRequired('#password'),
        Validator.maxLength('#password', 20),
        Validator.minLength('#password', 6),
        Validator.isRequired('#password_confirmation'),
        Validator.isConfirmed(
            '#password_confirmation',
            function () {
                return document.querySelector('#form-signup #password').value;
            },
            'Re-entered password is incorrect',
        ),
    ],
    onSubmit: function () {
        window.location.replace('sign-in.html');
    },
});

// Sign In
Validator({
    form: '#form-signin',
    formGroupSelector: '.form__group',
    errorSelector: '.form__message--error',
    rules: [
        Validator.isRequired('#email'),
        Validator.isMail('#email'),
        Validator.isRequired('#password'),
        Validator.maxLength('#password', 20),
        Validator.minLength('#password', 6),
    ],
    onSubmit: function () {
        window.location.replace('index-logined.html');
    },
});

// Forgot
Validator({
    form: '#form-forgot',
    formGroupSelector: '.form__group',
    errorSelector: '.form__message--error',
    rules: [Validator.isRequired('#email'), Validator.isMail('#email')],
    onSubmit: function () {
        window.location.replace('send-to-mail.html');
    },
});

// Create new password
Validator({
    form: '#form-new-password',
    formGroupSelector: '.form__group',
    errorSelector: '.form__message--error',
    rules: [
        Validator.isRequired('#password'),
        Validator.maxLength('#password', 20),
        Validator.minLength('#password', 6),
        Validator.isRequired('#password_confirmation'),
        Validator.isConfirmed(
            '#password_confirmation',
            function () {
                return document.querySelector('#form-new-password #password').value;
            },
            'Re-entered password is incorrect',
        ),
    ],
    onSubmit: function () {
        window.location.replace('sign-in.html');
    },
});

// Forgot
Validator({
    form: '#form-add-address',
    formGroupSelector: '.form__group',
    errorSelector: '.form__message--error',
    rules: [
        Validator.isRequired('#name'),
        Validator.minLength('#name', 2, 'Please enter your full name'),
        Validator.isRequired('#phone'),
        Validator.isPhone('#phone'),
        Validator.isRequired('#address'),
    ],
    onSubmit: function () {},
});
