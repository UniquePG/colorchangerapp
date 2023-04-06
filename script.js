let btn = document.querySelector("#button");

const RandomColor = () => {
    let var1 = "0123456789ABCDEF";
    let var2 = "#";

    for(let i = 0; i < 6; i++){

        // Math.random()-> give random number(b/w 0 to 0.99)
        // Math.floor() -> round-of the number

        var2 = var2 + var1[Math.floor(Math.random() * 16)];

    }

    return var2;
}

function ChangeColorFunction() {
    document.body.style.backgroundColor = RandomColor();

   console.log(RandomColor());

}

btn.addEventListener("click", ChangeColorFunction);

