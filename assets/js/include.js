// assets/js/include.js
// Simple HTML includes: <div data-include="/partials/header.html"></div>

// assets/js/include.js
document.addEventListener("DOMContentLoaded", async () => {
  const nodes = document.querySelectorAll("[data-include]");
  const tasks = [...nodes].map(async (el) => {
    const url = el.getAttribute("data-include");
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load " + url);
      el.innerHTML = await res.text();
    } catch (e) {
      console.error(e);
    }
  });

  // дочекатися ВСІХ інклюдів
  await Promise.all(tasks);

  // сповістити, що partials готові
  document.dispatchEvent(new Event("partials:loaded"));
});
