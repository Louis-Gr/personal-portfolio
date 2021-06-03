/*let element = document.getElementById('social-media-detox-challenge');
element.onclick = changeStyle;
element.onmouseover = function(){element.style.backgroundColor = "var(--col-green-4)"};
element.onmouseleave = function(){element.style.backgroundColor = "var(--col-green-5)"}
*/
function changeStyle(element){
    if(element.style.height === "25rem"){
        element.style.height = '15rem';
        element.style.width = '12rem';
        element.style.position = "relative"
        element.style.transition = "0.5s ease"
        if(element.id == "social-media-detox-challenge"){
            document.getElementById("description-social-media-detox").style.visibility = "hidden"
        }
        else if (element.id == "meditation-challenge"){
            document.getElementById("description-meditation").style.visibility = "hidden"
        }
        else if (element.id == "cold-shower-challenge"){
            document.getElementById("description-cold-showers").style.visibility = "hidden"
        }
        else if (element.id == "ollie-challenge"){
            document.getElementById("description-ollie").style.visibility = "hidden"
        }
        element.style.margin = "0"
    }
    else{
        element.style.height = '25rem';
        element.style.width = '20rem';
        element.style.transition = "0.5s ease"
        element.style.margin = "0 25%"
        if(element.id == "social-media-detox-challenge"){
            document.getElementById("description-social-media-detox").style.visibility = "visible"
        }
        else if (element.id == "meditation-challenge"){
            document.getElementById("description-meditation").style.visibility = "visible"
        }
        else if (element.id == "cold-shower-challenge"){
            document.getElementById("description-cold-showers").style.visibility = "visible"
        }
        else if (element.id == "ollie-challenge"){
            document.getElementById("description-ollie").style.visibility = "visible"
        }
    }
};

function hoverMouse(challenge){
    challenge.style.backgroundColor = "var(--col-green-4)"
}

function mouseLeave(challenge){
    challenge.style.backgroundColor = "var(--col-green-5)"};

