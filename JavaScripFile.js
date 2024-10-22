// Function triggered on page load
function initializeGallery() {
    console.log('Page loaded and gallery initialized');
    let images = document.querySelectorAll('#gallery figure');
    
    images.forEach(function(figure) {
        figure.addEventListener('focus', onFocus);
        figure.addEventListener('blur', onBlur);
        figure.addEventListener('mouseover', onMouseOver);
        figure.addEventListener('mouseleave', onMouseLeave);
        figure.setAttribute('tabindex', '0');  // Add tabindex for keyboard focus
    });
}

function onFocus(event) {
    console.log('Focus event triggered on', event.target);
    event.target.style.border = '2px solid blue';  // Example focus style
}

function onBlur(event) {
    console.log('Blur event triggered on', event.target);
    event.target.style.border = 'none';  // Reset style on blur
}

function onMouseOver(event) {
    console.log('Mouse over event triggered');
    event.target.style.opacity = '0.8';  // Example effect
}

function onMouseLeave(event) {
    console.log('Mouse leave event triggered');
    event.target.style.opacity = '1';  // Reset effect
}
