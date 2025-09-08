// assets/js/menu.js
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobile-menu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.hidden = isOpen;
    });
  }

  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      const panel = btn.nextElementSibling;
      if (panel) panel.hidden = expanded;
    });
  });
});

/* i18n: language toggle */
function setLangToggleHref() {
  const t = document.getElementById("lang-toggle");
  if (!t) return;
  const p = location.pathname;
  let href, label;
  if (p === "/" || p === "/index.html") {
    href = "/en/";
    label = "EN";
  } else if (p.startsWith("/en/")) {
    href = p.slice(3) || "/";
    label = "UA";
  } else {
    href = "/en" + p;
    label = "EN";
  }
  t.href = href;
  t.textContent = label;
}

document.addEventListener("partials:loaded", setLangToggleHref);
document.addEventListener("DOMContentLoaded", setLangToggleHref); // лишаємо як fallback
setLangToggleHref();


// === i18n: robust init for language toggle ===
(function () {
  function _setLangToggleHref() {
    const t = document.getElementById('lang-toggle');
    if (!t) return;
    const p = location.pathname || '/';
    let href, label;
    if (p === '/' || p === '/index.html') { href = '/en/'; label = 'EN'; }
    else if (p.startsWith('/en/')) { href = p.slice(3) || '/'; label = 'UA'; }
    else { href = '/en' + p; label = 'EN'; }
    t.setAttribute('href', href);
    t.textContent = label;
    t.addEventListener('click', function (e) {
      const current = t.getAttribute('href') || '#';
      if (current === '#') { e.preventDefault(); return; }
      e.preventDefault();
      location.assign(current);
    });
  }
  function _init(){ _setLangToggleHref(); }
  document.addEventListener('partials:loaded', _init);
  document.addEventListener('DOMContentLoaded', _init);
  window.addEventListener('load', _init);
  const mo=new MutationObserver(()=>{
    if (document.getElementById('lang-toggle')) { _init(); mo.disconnect(); }
  });
  mo.observe(document.documentElement, {childList:true, subtree:true});
  _init();
})();
