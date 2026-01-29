window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const empleosTable = document.getElementById('empleosTable');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const rows = empleosTable.getElementsByTagName('tr');

        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].innerText.toLowerCase();
            if (rowData.includes(searchTerm)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    });
});
