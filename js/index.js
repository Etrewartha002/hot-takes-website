function loadContent(callback){
    //Load Twelve hot takes
    callback();
}
document.querySelector("button").addEventListener("click", ()=>{
    console.log("working");
    document.querySelector("button").setAttribute("id", "go-button");
    setTimeout(()=>{
        console.log("working")
        document.querySelector("button").removeAttribute("id");
    }, 100);
    document.querySelector("#load-screen").removeAttribute("class");
    document.querySelector("button").setAttribute("class", "hide");
    loadContent()
})