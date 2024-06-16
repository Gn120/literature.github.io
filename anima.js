// document.addEventListener("DOMContentLoaded", function () {
//   gsap.fromTo(
//     ".img1-2",
//     { rotation: 0, x: -300 },
//     { rotation: 360, x: 200, duration: 3 }
//   );
//   gsap.fromTo(
//     ".img1-1",
//     {
//       x: -500,
//       opacity: 0,
//     },
//     {
//       duration: 3,
//       x: 100,
//       opacity: 1,
//       ease: "power2.out",
//     }
//   );
// });
// ---------------------------------------
// function animatePageTransition(page) {
//   const image1 = page.querySelector(".img1-1");
//   const image2 = page.querySelector(".img1-2");

//   gsap.fromTo(
//     image2,
//     { rotation: 0, x: -300 },
//     { rotation: 360, x: 200, duration: 3 }
//   );

//   gsap.fromTo(
//     image1,
//     {
//       x: -500,
//       opacity: 0,
//     },
//     {
//       duration: 3,
//       x: 100,
//       opacity: 1,
//       ease: "power2.out",
//     }
//   );
// }

// document.addEventListener("DOMContentLoaded", function () {
//   animatePageTransition(document.getElementById("page1"));
// });
