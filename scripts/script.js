let element = document.getElementById('social-media-detox-challenge');
element.onclick = changeStyle;

function changeStyle(){
    if(element.style.height === "25rem"){
        element.style.height = '15rem';
        element.style.width = '12rem';
        element.style.position = "relative"
        element.style.transition = "0.5s ease"
        document.getElementById("description-social-media-detox").style.visibility = "hidden"
        element.style.margin = "0"
    }
    else{
        element.style.height = '25rem';
        element.style.width = '20rem';
        element.style.transition = "0.5s ease"
        element.style.margin = "0 25%"
        document.getElementById("description-social-media-detox").style.visibility = "visible"
    }
};

