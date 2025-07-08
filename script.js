// Comment System
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("commentName").value.trim();
  const comment = document.getElementById("commentText").value.trim();

  if (name && comment) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `<strong>${name}:</strong><p>${comment}</p>`;
    document.getElementById("commentList").prepend(commentDiv);
    this.reset();
  }
});

// Scroll Animation
const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeSections.forEach(section => observer.observe(section));

// Header Fade on Scroll
const header = document.querySelector("header");
const main = document.querySelector(".snap-container");

main.addEventListener("scroll", () => {
  if (main.scrollTop > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
