function toggleTab(tabId) {
    // Ukryj wszystkie sekcje poza zakresem przycisków
    var contentDivs = document.querySelectorAll('#main_panel > div:not(#tabs)');
    contentDivs.forEach(function(tab) {
        if (tab.id === tabId) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}

function changeBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
}