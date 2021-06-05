
function changeStyle(element){
    if(element.style.height === "48rem"){
        element.style.height = '25rem';
        element.style.width = '22rem';
        element.style.position = "relative"
        element.style.transition = "0.5s ease"
        document.getElementById("challenges").scrollIntoView({behavior: 'smooth'});
        element.style.margin = "0"
        if(element.id == "social-media-detox-challenge"){
            document.getElementById("description-social-media-detox").style.visibility = "hidden"
            document.getElementById("meditation-challenge").style.display = "block"
            document.getElementById("cold-shower-challenge").style.display = "block"
            document.getElementById("ollie-challenge").style.display = "block"
        }
        else if (element.id == "meditation-challenge"){
            document.getElementById("description-meditation").style.visibility = "hidden"
            document.getElementById("social-media-detox-challenge").style.display = "block"
            document.getElementById("cold-shower-challenge").style.display = "block"
            document.getElementById("ollie-challenge").style.display = "block"
        }
        else if (element.id == "cold-shower-challenge"){
            document.getElementById("description-cold-showers").style.visibility = "hidden"
            document.getElementById("social-media-detox-challenge").style.display = "block"
            document.getElementById("meditation-challenge").style.display = "block"
            document.getElementById("ollie-challenge").style.display = "block"
        }
        else if (element.id == "ollie-challenge"){
            document.getElementById("description-ollie").style.visibility = "hidden"
            document.getElementById("social-media-detox-challenge").style.display = "block"
            document.getElementById("meditation-challenge").style.display = "block"
            document.getElementById("cold-shower-challenge").style.display = "block"
        }
    }
    else{
        element.style.height = '48rem';
        element.style.width = '100%';
        element.style.transition = "0.5s ease"
        element.style.margin = "0 auto"
        if(element.id == "social-media-detox-challenge"){
            document.getElementById("social-media-detox-challenge").scrollIntoView({behavior: 'smooth'});
            document.getElementById("description-social-media-detox").style.visibility = "visible"
            document.getElementById("meditation-challenge").style.display = "none"
            document.getElementById("cold-shower-challenge").style.display = "none"
            document.getElementById("ollie-challenge").style.display = "none"
        }
        else if (element.id == "meditation-challenge"){
            document.getElementById("social-media-detox-challenge").scrollIntoView({behavior: 'smooth'});
            document.getElementById("description-meditation").style.visibility = "visible"
            document.getElementById("social-media-detox-challenge").style.display = "none"
            document.getElementById("cold-shower-challenge").style.display = "none"
            document.getElementById("ollie-challenge").style.display = "none"
        }
        else if (element.id == "cold-shower-challenge"){
            document.getElementById("social-media-detox-challenge").scrollIntoView({behavior: 'smooth'});
            document.getElementById("description-cold-showers").style.visibility = "visible"
            document.getElementById("social-media-detox-challenge").style.display = "none"
            document.getElementById("meditation-challenge").style.display = "none"
            document.getElementById("ollie-challenge").style.display = "none"
        }
        else if (element.id == "ollie-challenge"){
            document.getElementById("social-media-detox-challenge").scrollIntoView({behavior: 'smooth'});
            document.getElementById("description-ollie").style.visibility = "visible"
            document.getElementById("social-media-detox-challenge").style.display = "none"
            document.getElementById("meditation-challenge").style.display = "none"
            document.getElementById("cold-shower-challenge").style.display = "none"
        }
    }
};
function hoverMouse(challenge){
    challenge.style.backgroundColor = "var(--col-green-4)"
}

function mouseLeave(challenge){
    challenge.style.backgroundColor = "var(--col-green-5)"};


function notProgrammed(){
    alert("This button is still in progress ;)")
};