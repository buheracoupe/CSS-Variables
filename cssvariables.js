const inputs = document.querySelectorAll("input");

const handleInput = (event) => {
    //console.log(input)
    const currentInput = event.target;
   const suffix = currentInput.getAttribute("data-sizing") || "";
   const styleName = currentInput.getAttribute("name");
   currentInput.style.setProperty(`--${styleName}`, `${currentInput.value}${suffix}`)
   //console.log(event.target.getAttribute("data-sizing") || "")
    };


inputs.forEach((input) =>{
input.addEventListener("change", handleInput)
})




