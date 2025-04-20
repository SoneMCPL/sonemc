function openImageModal() {
    document.getElementById('imageModal').style.display = 'block';
}
function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}
function insertImage() {
    const imageUrl = document.getElementById('image-url').value;
    if (imageUrl) {
        insertBBCode('[IMG]' + imageUrl + '[/IMG]', '');
    }
    closeImageModal();
}