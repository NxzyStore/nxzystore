
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Menampilkan atau menyembunyikan menu
}

function openModal(title, image, price, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-description').innerText = description; // Menampilkan deskripsi
    const modal = document.getElementById('modal');
    
    // Menetapkan gaya awal untuk modal
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.opacity = '0'; // Set opacity awal
    modalContent.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Set transform awal
    
    modal.classList.add('show');
    document.body.classList.add('no-scroll');

    // Animasi muncul
    setTimeout(() => {
        modalContent.style.opacity = '1'; // Mengubah opacity menjadi 1
        modalContent.style.transform = 'translate(-50%, -50%) scale(1)'; // Mengembalikan transformasi
    }, 10);
}

function closeModal() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.opacity = '0'; // Set opacity menjadi 0 saat menutup
    modalContent.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Set transform saat menutup

    setTimeout(() => {
        const modal = document.getElementById('modal');
        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');

        // Reset gaya setelah modal ditutup
        modalContent.style.transform = 'translate(-50%, -50%) scale(1)';
        modalContent.style.opacity = '1';
    }, 300); // Menunggu sampai animasi keluar selesai
}

function openWhatsApp() {
    const message = "Bang mau order sesuatu"; // Ganti dengan pesan yang diinginkan
    const phoneNumber = "6283846904769"; // Ganti dengan nomor WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function inviteToWhatsApp() {
    // Ganti URL ini dengan tautan invite grup WhatsApp kamu
    const whatsappGroupLink = "https://chat.whatsapp.com/GIeY7w1GDZ0ClRGenCfCmz";
    
    // Membuka tautan WhatsApp grup
    window.open(whatsappGroupLink, "_blank");
}
