
document.getElementById("toggleButton").addEventListener("click", function() {
    const soldOutItems = document.querySelectorAll(".MY_LI_CLASS");
    let isHidden = soldOutItems[0].style.display === "none";
    soldOutItems.forEach(item => {
        if (isHidden) {
            item.style.display = "block"; 
            fadeIn(item, 500);
            slideDown(item, 500);
            setTimeout(() => {
                item.style.backgroundColor = ""; 
            }, 500);
        } else {
            item.style.backgroundColor = "lightcoral"; 
            fadeOut(item, 500); 
            slideUp(item, 500); 
            setTimeout(() => {
                item.style.display = "none"; 
            }, 500);
        }
    });
    this.textContent = isHidden ? "Hide Sold Out" : "Show Sold Out";
});

function fadeIn(element, duration) {
    element.style.opacity = 0;
    let opacity = 0;
    const interval = 10;
    const increment = interval / duration;

    const fade = setInterval(function() {
        opacity += increment;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fade);
        }
    }, interval);
}

function fadeOut(element, duration) {
    let opacity = 1;
    const interval = 10;
    const decrement = interval / duration;

    const fade = setInterval(function() {
        opacity -= decrement;
        element.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fade);
        }
    }, interval);
}

function slideDown(element, duration) {
    element.style.height = "0px";
    element.style.overflow = "hidden";
    const targetHeight = element.scrollHeight + "px";
    const interval = 10;
    const increment = parseFloat(targetHeight) / (duration / interval);

    let height = 0;
    const slide = setInterval(function() {
        height += increment;
        element.style.height = height + "px";
        if (height >= parseFloat(targetHeight)) {
            clearInterval(slide);
            element.style.height = ""; 
        }
    }, interval);
}

function slideUp(element, duration) {
    const targetHeight = element.scrollHeight;
    element.style.overflow = "hidden";
    const interval = 10;
    const decrement = targetHeight / (duration / interval);

    let height = targetHeight;
    const slide = setInterval(function() {
        height -= decrement;
        element.style.height = height + "px";
        if (height <= 0) {
            clearInterval(slide);
            element.style.height = "0px"; 
        }
    }, interval);
}


const elements = document.querySelectorAll('.MY_DIV_CLASS'); 

function handleScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        } else {
            el.style.opacity = 0;
            el.style.transform = "translateY(20px)";
        }
    });
}
window.addEventListener('scroll', handleScroll);
elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
});
