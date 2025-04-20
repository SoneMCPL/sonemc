document.getElementById('bbcode-input').addEventListener('input', function() {
    const bbcode = this.value;
    const output = document.getElementById('bbcode-output');
    
    output.innerHTML = bbcodeToHTML(bbcode); 
});

function insertBBCode(tagStart, tagEnd) {
    const textarea = document.getElementById('bbcode-input');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const selectedText = textarea.value.substring(startPos, endPos);

    const newText = tagStart + selectedText + tagEnd;
    textarea.setRangeText(newText);

    textarea.focus();
    textarea.setSelectionRange(endPos + tagStart.length + tagEnd.length, endPos + tagStart.length + tagEnd.length);
}

function bbcodeToHTML(bbcode) {
    let html = bbcode;
    html = html.replace(/\[B\](.*?)\[\/B\]/gi, '<strong>$1</strong>');
    html = html.replace(/\[I\](.*?)\[\/I\]/gi, '<em>$1</em>');
    html = html.replace(/\[U\](.*?)\[\/U\]/gi, '<u>$1</u>');
    html = html.replace(/\[COLOR=#(.*?)\](.*?)\[\/COLOR\]/gi, '<span style="color:#$1">$2</span>');
    html = html.replace(/\[SIZE=(\d+)\](.*?)\[\/SIZE\]/gi, '<span style="font-size:$1px">$2</span>');
    html = html.replace(/\[FONT=(.*?)\](.*?)\[\/FONT\]/gi, '<span style="font-family:$1">$2</span>');
    html = html.replace(/\[URL=(.*?)\](.*?)\[\/URL\]/gi, '<a href="$1" target="_blank">$2</a>');
    html = html.replace(/\[IMG\](.*?)\[\/IMG\]/gi, '<img src="$1" alt="Image" />');
    html = html.replace(/\[CODE\](.*?)\[\/CODE\]/gi, '<pre><code>$1</code></pre>');
    html = html.replace(/\[QUOTE\](.*?)\[\/QUOTE\]/gi, '<blockquote>$1</blockquote>');
    html = html.replace(/\[SPOILER="(.*?)"\](.*?)\[\/SPOILER\]/gi, '<details><summary>$1</summary>$2</details>');
    html = html.replace(/\[S\](.*?)\[\/S\]/gi, '<strike>$1</strike>');

    return html;
}

function insertFont() {
    document.getElementById('content-area').style.fontFamily = font;
    const font = document.getElementById('font-dropdown').value;
    if (font) {
        insertBBCode('[FONT=' + font + ']', '[/FONT]');
    }
}

function insertSize(size) {
    const textarea = document.getElementById("bbcode-input");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    
    if (!selectedText) return;

    let newText = `[SIZE=${size}]${selectedText}[/SIZE]`;
    range.deleteContents();
    range.insertNode(document.createTextNode(newText));
}


window.onload = function() {
    initColorDropdown();
    initFontDropdown();
};

function insertSpoiler() {
    const title = prompt("Enter the title for the spoiler:");
    const textarea = document.getElementById("bbcode-input");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    
    if (!selectedText) return;
    const spoilerText = `[SPOILER="${title}"]${selectedText}[/SPOILER]`;
    range.deleteContents();
    range.insertNode(document.createTextNode(spoilerText));
}

function insertAlignment(alignment) {
    const textarea = document.getElementById("bbcode-input");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    
    if (!selectedText) return;

    let newText = `[ALIGN=${alignment}]${selectedText}[/ALIGN]`;
    range.deleteContents();
    range.insertNode(document.createTextNode(newText));
}

function insertList(ordered = false) {
    const textarea = document.getElementById("bbcode-input");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (!selectedText) return;

    let listType = ordered ? "[LIST=1]" : "[LIST]";
    let newText = `${listType}\n${selectedText.split("\n").map(item => `[*]${item}`).join("\n")}\n[/LIST]`;

    range.deleteContents();
    range.insertNode(document.createTextNode(newText));
}

function insertLink() {
    const url = prompt("Enter the link URL:");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (!selectedText || !url) return;

    let newText = `[URL=${url}]${selectedText}[/URL]`;
    range.deleteContents();
    range.insertNode(document.createTextNode(newText));
}

function removeLink() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();

    if (!selectedText) return;

    const newText = selectedText.replace(/\[URL=(.*?)\](.*?)\[\/URL\]/g, '$2');
    range.deleteContents();
    range.insertNode(document.createTextNode(newText));
}
