
// JS CODE
let string = " ";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "%") {
            string = eval(string) / 100; // Calculate percentage
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "SQRT") {
            const value = +document.querySelector("input").value;
            string = Math.sqrt(value); // Calculate square root
            document.querySelector("input").value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
