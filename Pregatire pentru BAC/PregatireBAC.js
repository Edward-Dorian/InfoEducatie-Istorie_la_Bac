document.addEventListener('DOMContentLoaded', function() {
    // Select all <a> elements that should open in the iframe
    var links = document.querySelectorAll('a[target="deschis pagini"]');
    var iframe = document.getElementById('iframeDeschisPagini');
  var closeButton = document.getElementById('inchisIframe');
    // Function to handle link clicks
    function handleLinkClick(event) {
        event.preventDefault();
        iframe.style.display = 'block';
        iframe.src = this.href;
        closeButton.style.display = 'block';
    }
    function closeIframe() {
        iframe.style.display = 'none';
    
        // Hide the close button
        closeButton.style.display = 'none';
      }
    // Attach the click event listener to each link
    links.forEach(function(link) {
        link.addEventListener('click', handleLinkClick);
      });
      closeButton.addEventListener('click', closeIframe);
});
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[target="deschis pagini"]');
    var iframe = document.getElementById('iframeDeschisPagini');
    var closeButton = document.getElementById('inchisIframe');

    function handleLinkClick(event) {
        event.preventDefault();
        iframe.style.display = 'block';
        iframe.src = this.href;
        closeButton.style.display = 'block';
    }

    function closeIframe() {
        iframe.style.display = 'none';
        closeButton.style.display = 'none';
    }

    links.forEach(function(link) {
        link.addEventListener('click', handleLinkClick);
    });

    closeButton.addEventListener('click', closeIframe);

    // Function to hide all elements and then show the ones related to the clicked button
    // Function to hide all elements or toggle the visibility of the related elements
function toggleDisplay(buttonId, className) {
    var elements = document.querySelectorAll('.' + className);
    var isAlreadyVisible = elements[0] && elements[0].style.display === 'block';

    // Hide all elements first
    ['but1', 'but2', 'but3'].forEach(function(classToHide) {
        document.querySelectorAll('.' + classToHide).forEach(function(element) {
            element.style.display = 'none';
        });
    });

    // If the elements were already visible, this effectively hides them.
    // If they were not, this block will show them.
    if (!isAlreadyVisible) {
        elements.forEach(function(element) {
            element.style.display = 'block';
        });
    }
}

// Attach event listeners to buttons
['bt1', 'bt2', 'bt3'].forEach(function(buttonId) {
    var button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', function() {
            toggleDisplay(buttonId, 'but' + buttonId.charAt(buttonId.length - 1));
        });
    }
});
});