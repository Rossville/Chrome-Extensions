
const AddFont = document.createElement('link');
AddFont.href = 'https://fonts.googleapis.com/css2?family=Italianno&display=swap';
AddFont.rel = 'stylesheet';

document.head.appendChild(AddFont);

AddFont.onload = () => {
    document.body.style.fontFamily = "'Italianno', cursive";
    document.body.style.fontSize = '30px';
}

AddFont.onerror = () => {
    console.error("Failed to load the font");
}