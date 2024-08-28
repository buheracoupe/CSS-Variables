const inputs = document.querySelectorAll("input");
const root = document.documentElement

const handleInput = (event) => {

    const currentInput = event.target;
   const suffix = currentInput.getAttribute("data-sizing") || "";
   const styleName = currentInput.getAttribute("name");
   root.style.setProperty(`--${styleName}`, `${currentInput.value}${suffix}`);
    };


inputs.forEach((input) =>{
input.addEventListener("change", handleInput)
})


