document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".next-button");
  const prevButtons = document.querySelectorAll(".prev-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const currentPage = this.closest(".page");
      const nextPageId = this.getAttribute("data-next");
      const nextPage = document.getElementById(nextPageId);

      if (currentPage && nextPage) {
        currentPage.classList.remove("active");
        nextPage.classList.add("active");
      }
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const currentPage = this.closest(".page");
      const prevPageId = this.getAttribute("data-prev");
      const prevPage = document.getElementById(prevPageId);

      if (currentPage && prevPage) {
        currentPage.classList.remove("active");
        prevPage.classList.add("active");
      }
    });
  });
});
