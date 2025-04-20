function toggleDropdown() {
    const dropdown = document.getElementById('color-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block' ? 'none' : 'block');
}

function initFontDropdown() {
    const fonts = [
        'Arial', 'Book Antiqua', 'Courier New', 'Georgia', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana'
    ];

    let optionsHtml = '';
    fonts.forEach(font => {
        optionsHtml += `<option value="${font}" style="font-family: ${font};">${font}</option>`;
    });
    document.getElementById('font-dropdown').innerHTML = optionsHtml;
}

function toggleColorDropdown() {
    const dropdown = document.getElementById('color-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}