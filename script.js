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
    let passwordExtract = inputedPassword.value;
    let strength = 0;
    let pattern = /[A-Z]/;
    let pattern1 = /[a-z]/;
    let pattern2 = /\d/;
    let pattern3 = /\W/;

    if (passwordExtract.length < 8) {
        displayRes.innerHTML = "Enter at least 8 characters boss, no dey whine me";
        return;
    }

    if (pattern.test(passwordExtract)) {
        strength++;
    }
    if (pattern1.test(passwordExtract)) {
        strength++;
    }
    if (pattern2.test(passwordExtract)) {
        strength++;
    }
    if (pattern3.test(passwordExtract)) {
        strength++;
    }

    // Determine the password strength based on the strength counter
    switch (strength) {
        case 1:
            displayRes.innerHTML = "25% Na password be this? Dey play.";
            break;
        case 2:
            displayRes.innerHTML = "50% My Grandma can do better";
            break;
        case 3:
            displayRes.innerHTML = "75% Not Bad, you try well well";
            break;
        case 4:
            displayRes.innerHTML = "100% Senior man, you sure say you go fit remember this password so?";
            break;
        default:
            displayRes.innerHTML = "Shey you dey whine me";
    }
}
