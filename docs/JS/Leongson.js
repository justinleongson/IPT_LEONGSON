
function highlightIcon(iconId) {
    
    document.querySelectorAll('.icon').forEach(icon => {
        icon.classList.remove('active');
    });

    document.getElementById(iconId).classList.add('active');
}
document.getElementById('icon1').addEventListener('click', function() {
    highlightIcon('icon1');
    alert("Icon 1 clicked!");
});

document.getElementById('icon2').addEventListener('click', function() {
    highlightIcon('icon2');
    alert("Icon 2 clicked!");
});

document.getElementById('icon3').addEventListener('click', function() {
    highlightIcon('icon3');
    alert("Icon 3 clicked!");
});

document.getElementById('icon4').addEventListener('click', function() {
    highlightIcon('icon4');
    alert("Icon 4 clicked!");
});

document.getElementById('largeBox').addEventListener('click', function() {
    alert("Large box clicked!");
});

document.getElementById('smallBox').addEventListener('click', function() {
    const smallBox = document.getElementById('smallBox');
    smallBox.innerHTML = `
        <p>New Dynamic Content</p>
        <ul>
            <li>Updated Item 1</li>
            <li>Updated Item 2</li>
            <li>New Item 3</li>
        </ul>
    `;
});