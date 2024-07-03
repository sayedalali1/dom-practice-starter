// empty file, no JS needed.
// querySelector(selectors)
const [sun, moon] = document.querySelectorAll("i");
moon.addEventListener("click", ()=>{
    document.querySelector("body").className="dark"
})
sun.addEventListener("click", ()=>{
    document.querySelector("body").className=""
})

moon.addEventListener("mouseenter", ()=>{
    moon.style.borderBottom = "3px solid"
})
moon.addEventListener("mouseout", ()=>{
    moon.style.borderBottom = ""
})
sun.addEventListener("mouseenter", ()=>{
    sun.style.borderBottom = "3px solid"
})
sun.addEventListener("mouseout", ()=>{
    sun.style.borderBottom = ""
})


// addEventListener("mouseover", (event) => {});

// onmouseover = (event) => {};