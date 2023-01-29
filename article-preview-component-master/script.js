let sharing = document.getElementById("sharing");
let btn = document.getElementById("btn");

function bouh(){
    if(getComputedStyle(sharing).display != "none"){
        sharing.style.display = "none";
    }else{
        sharing.style.display = "block";
    }
};

btn.onclick = bouh;