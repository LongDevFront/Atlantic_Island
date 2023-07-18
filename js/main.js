document.addEventListener("DOMContentLoaded", function(event) {
    var text = "Chào mừng đến với Atlantic Island";
    var charIndex = 0;
    var typingEffect = document.getElementById("typing-effect");
  
    function type() {
      if (charIndex < text.length) {
        typingEffect.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(resetText, 10000); // Gọi hàm resetText sau 10 giây
      }
    }
  
    function resetText() {
      typingEffect.textContent = ""; // Xóa nội dung
      charIndex = 0; // Reset lại chỉ số ký tự
      setTimeout(type, 100); // Gọi lại hàm type sau 100ms
    }
  
    type();
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // Hiển thị hiệu ứng loading khi trang web tải
    var loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.classList.add("active");
  
    // Ẩn hiệu ứng loading khi trang web tải xong
    window.addEventListener("load", function() {
      loadingOverlay.classList.remove("active");
    });
  });