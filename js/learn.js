document.addEventListener('DOMContentLoaded', function () {  /* Đảm bảo rằng mã JS chạy sau khi toàn bộ HTML đã được tải xong.*/
  // Xử lý Hiện/Ẩn menu người dùng (Đăng ký / Đăng nhập)
  const userIcon = document.getElementById('userIcon');
  const userMenu = document.getElementById('userMenu');
  const userDropdown = document.querySelector('.user-dropdown');

  userIcon.addEventListener('click', function () {
    userMenu.style.display = (userMenu.style.display === 'block') ? 'none' : 'block';
  });

  document.addEventListener('click', function (event) {
    if (userDropdown && !userDropdown.contains(event.target)) {
      userMenu.style.display = 'none';
    }
  });

  // Xử lý menu hamburger
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav"); 

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); 
    mainNav.classList.toggle("active");
  });

  // Ẩn menu hamburger nếu click bên ngoài
  document.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});


// Hiện dropdown đăng nhập/xuất
function confirmLogout() {
    const confirmResult = confirm("Bạn chắc chắn muốn đăng xuất không?");
    if (confirmResult) {
        window.location.href = "index.html";
    }
}

// Email Footer
const emailInput = document.getElementById("emailInput");
const errorMsg = document.getElementById("errorMsg");

function checkEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Vui lòng nhập Email";
  } else if (!emailRegex.test(email)) {
    errorMsg.textContent = "Email không đúng định dạng";
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    alert("Email đã được gửi: " + email);
    emailInput.value = "";
  }
}

// Khi người dùng bắt đầu nhập, ẩn thông báo lỗi
  emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() !== "") {
      errorMsg.style.display = "none";
    }
  });

  emailInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkEmail();      
    }
  });

// Back to top
  const backToTopBtn = document.getElementById("backToTopBtn");
  const zaloBtn = document.getElementById("zaloBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
      zaloBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
      zaloBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });





