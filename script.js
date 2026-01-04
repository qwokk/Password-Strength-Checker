const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strenthText = document.getElementById("strenthText");
const toggleBtn = document.getElementById("toggleBtn");

password.addEventListener("input", () => {
    let val = password.ariaValueMax;
    let strength = 0;

    if (val.match(/[a-z]/)) strength++;
    if (val.match(/[A-Z]/)) strength++;
    if (val.match(/[0-9]/)) strength++;
    if (val.match(/[$@#&!]/)) strength++;
    if (val.length >= 8) strength++;

        if (val == ""){
            strengthBar.style.width = "0%";
            strengthBar.style.background = "transparent";
            strengthBar.innerText = "Start typing...";
        };


});