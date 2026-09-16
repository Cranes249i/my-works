// 页面底部显示当前年份
document.addEventListener("DOMContentLoaded", function () {
  var footer = document.querySelector("footer p");
  if (footer) {
    footer.textContent += "　·　" + new Date().getFullYear();
  }
});
