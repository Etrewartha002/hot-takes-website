document.querySelector("button").addEventListener("click", ()=>{
    console.log("working")
    document.querySelector("button").setAttribute("id", "go-button");
    setTimeout(()=>{
        console.log("working")
        document.querySelector("button").removeAttribute("id");
    }, 100);
})