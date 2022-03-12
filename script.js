`use strict`

    function generate() {
        let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+=";
        let passwordLength = 12;
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length);
            password += characters.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("password").value = password;
    }


