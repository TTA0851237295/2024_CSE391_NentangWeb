function setActiveLink(activeLinkId) {
    // Lấy tất cả các liên kết nav-link
    var links = document.querySelectorAll('.nav-link');

    // Loại bỏ các lớp hiện tại từ tất cả các liên kết
    links.forEach(function(link) {
        link.classList.remove('active-link');
        link.classList.add('inactive-link');
    });

    // Thêm lớp active-link và loại bỏ lớp inactive-link cho liên kết được chọn
    var activeLink = document.getElementById(activeLinkId);
    activeLink.classList.add('active-link');
    activeLink.classList.remove('inactive-link');
}

// Đặt mặc định cho trang chủ khi tải trang
window.onload = function() {
    setActiveLink('trangChuLink');
};