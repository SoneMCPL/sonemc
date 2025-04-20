function initColorDropdown() {
    const colorData = [
        { code: '#ffffff', name: 'White' },
        { code: '#bfbfbf', name: 'Very light gray' },
        { code: '#808080', name: 'Light Gray' },
        { code: '#404040', name: 'Dark Gray' },
        { code: '#000000', name: 'Black' },
        { code: '#ff9999', name: 'Very light red' },
        { code: '#ff4d4d', name: 'Light red' },
        { code: '#ff0000', name: 'Red' },
        { code: '#b30000', name: 'Dark Red' },
        { code: '#660000', name: 'Very dark red' },
        { code: '#ffcc99', name: 'Very light orange' },
        { code: '#ffa64d', name: 'Light orange' },
        { code: '#ff8000', name: 'Orange' },
        { code: '#b35900', name: 'Dark orange (Brown)' },
        { code: '#663300', name: 'Brown' },
        { code: '#ffff99', name: 'Very light yellow' },
        { code: '#ffff4d', name: 'Light Yellow' },
        { code: '#ffff00', name: 'Yellow' },
        { code: '#b3b300', name: 'Dark yellow' },
        { code: '#666600', name: 'Very dark yellow' },
        { code: '#ccff99', name: 'Very light green' },
        { code: '#a6ff4d', name: 'Light green' },
        { code: '#00ff00', name: 'Green' },
        { code: '#00b300', name: 'Dark green' },
        { code: '#336600', name: 'Very dark green' },
        { code: '#99ffff', name: 'Very light cyan' },
        { code: '#4dffff', name: 'Light cyan' },
        { code: '#00ffff', name: 'Cyan' },
        { code: '#00b3b3', name: 'Dark cyan' },
        { code: '#006666', name: 'Very dark cyan' },
        { code: '#99ccff', name: 'Very light blue' },
        { code: '#4da6ff', name: 'Light blue' },
        { code: '#0080ff', name: 'Blue' },
        { code: '#0059b3', name: 'Dark blue' },
        { code: '#003366', name: 'Very dark blue' },
        { code: '#9999ff', name: 'Very light purple + blue' },
        { code: '#4d4dff', name: 'Light purple + blue' },
        { code: '#0000ff', name: 'Purple+blue+blue' },
        { code: '#0000b3', name: 'Dark purple+blue' },
        { code: '#000066', name: 'Very dark purple+blue' },
        { code: '#ff99ff', name: 'Very light pink' },
        { code: '#ff4dff', name: 'Light pink' },
        { code: '#ff00ff', name: 'Pink' },
        { code: '#b300b3', name: 'Dark pink' },
        { code: '#660066', name: 'Very dark pink' },
        { code: '#cc99ff', name: 'Very light purple' },
        { code: '#a64dff', name: 'Light purple' },
        { code: '#8000ff', name: 'Purple' },
        { code: '#5900b3', name: 'Dark purple' },
        { code: '#330066', name: 'Very dark purple' },
        { code: '#ff99cc', name: 'Maybe magenta (very light)' },
        { code: '#ff4da6', name: 'Maybe magenta (Light)' },
        { code: '#ff0080', name: 'Magenta' },
        { code: '#b30059', name: 'Maybe magenta (dark)' },
        { code: '#660033', name: 'Maybe magenta (very dark)' }
    ];

    let html = `<button class="dropdown-btn" onclick="toggleDropdown()">Select Color</button><div class="dropdown-content" id="color-dropdown">`;
    for (let i = 0; i < colorData.length; i += 5) {
        html += '<div class="color-row">';
        for (let j = i; j < i + 5 && j < colorData.length; j++) {
            html += `
                <div class="color" style="background-color: ${colorData[j].code};" onclick="insertColor('${colorData[j].code}', '[COLOR=${colorData[j].code}]${colorData[j].name}[/COLOR]')"></div>
            `;
        }
        html += '</div>';
    }
    html += '</div>';
    document.getElementById('color-dropdown-container').innerHTML = html;
}

function insertColor(color, colorName) {
    const textarea = document.getElementById('bbcode-input');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;

    const selectedText = textarea.value.substring(startPos, endPos);

    const newText = `[COLOR=${color}]${colorName}[/COLOR]`;
    textarea.setRangeText(newText);

    textarea.focus();
    textarea.setSelectionRange(endPos + newText.length, endPos + newText.length);
    document.getElementById('bbcode-input').value += `[COLOR=${colorCode}]${colorName}[/COLOR]`;
}