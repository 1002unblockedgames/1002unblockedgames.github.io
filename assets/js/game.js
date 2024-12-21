window.addEventListener("load", (event) => {
    const gameFrame= document.getElementById("gameFrame");
    const gameName= gameFrame?.name ?? "";
    if (gameName!= "") {
        console.log("LoadGame", gameName);
        gameFrame.src= `https://1002unblockedgames.github.io/${gameName}/`;
    }    
});