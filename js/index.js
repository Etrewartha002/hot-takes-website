
document.querySelector(".go-button").addEventListener("click", ()=>{
    console.log("working1");
    document.querySelector("button").setAttribute("id", "go-button");
    setTimeout(()=>{
        console.log("working2")
        document.querySelector("button").removeAttribute("id");
    }, 100);
    console.log('working3');
    document.querySelector("#load-screen").removeAttribute("class");
    document.querySelector("button").setAttribute("class", "hide");
});
