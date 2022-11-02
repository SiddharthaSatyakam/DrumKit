for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", justClick);
    function justClick() {
        alert("Tou have just clicked something");}
}
