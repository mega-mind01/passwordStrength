let btn = document.getElementById("TogglePassword");

        btn.addEventListener("click", toggle);
        function toggle() {
            if (inputedPassword.type === "password") {
                inputedPassword.type = "text";
            } else {
                inputedPassword.type = "password";
            }
        }
        let inputedPassword = document.getElementById("inputedPassword");
        let displayRes = document.getElementById("displayRes");
        let CheckPassword = document.getElementById("CheckPassword");
        CheckPassword.addEventListener("click", checker);

        function checker() {
            let patternMain = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
            let pattern1 = /[A-Z]+/;
            let pattern2 = /[a-z]+/;
            let pattern3 = /[0-9]+/;
            let pattern4 = /\w+/;
            let pattern5 = /\W+/;
            let pattern6 = /\w+\W+/;

            let passwordExtract = inputedPassword.value;

            if (passwordExtract.length < 8) {
                displayRes.innerHTML = "Enter a password that is 8 characters long at least";
            } else if (!patternMain.test(passwordExtract)) {
                if (pattern1.test(passwordExtract)) {
                    displayRes.innerHTML = "A strong password needs more than just uppercase characters.";
                } else if (pattern2.test(passwordExtract)) {
                    displayRes.innerHTML = "A strong password needs more than just lowercase characters.";
                } else if (pattern3.test(passwordExtract)) {
                    displayRes.innerHTML = "A strong password needs more than just numeric characters.";
                } else if (pattern4.test(passwordExtract)) {
                    displayRes.innerHTML = "A strong password needs special characters.";
                } else if (pattern5.test(passwordExtract)) {
                    displayRes.innerHTML = "A strong password needs more than just special characters.";
                } else if (pattern6.test(passwordExtract)) {
                    displayRes.innerHTML = "Not strong enough.";
                }
            } else {
                displayRes.innerHTML = `You have inputted a very strong password of <b>${passwordExtract.length}</b> characters long`;
            }
        }