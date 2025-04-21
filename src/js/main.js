// Atur halaman default
document.addEventListener('DOMContentLoaded', () => {
    switchPage('makanan'); // Halaman default adalah 'makanan'
});

function showService(serviceId, clickedElement) {
    // Ganti konten
    document.querySelectorAll('.service').forEach(s => s.classList.add('hidden'));
    document.getElementById(serviceId).classList.remove('hidden');

    // Atur highlight menu
    document.querySelectorAll('.service-tab').forEach(tab => {
        tab.classList.remove('bg-blue-100', 'border-blue-500');
        tab.classList.add('border-l-transparent', 'hover:bg-gray-100');
    });

    clickedElement.classList.remove('border-l-transparent', 'hover:bg-gray-100');
    clickedElement.classList.add('bg-blue-100', 'border-blue-500');
}