(() => {
  const storageKey = "resume-language";
  const descriptions = {
    zh: "田辰煜，中国地质大学（武汉）机械工程博士研究生、博洛尼亚大学访问博士。我的研究兴趣集中在空间人工智能与三维计算机视觉，尤其关注前馈式三维重建及基于学习的三维场景表示。",
    en: "Chenyu Tian, PhD student at China University of Geosciences (Wuhan) and visiting PhD at the University of Bologna. My research interests lie in spatial AI and 3D computer vision, with a particular focus on feed-forward 3D reconstruction and learning-based 3D scene representations.",
  };
  // Keep the language controls outside the about layout's floated portrait.
  const controls = document.querySelector(".language-switch");
  const header = document.querySelector(".post-header");
  if (controls && header) header.prepend(controls);
  function setLanguage(language) {
    const lang = language === "en" ? "en" : "zh";
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
      element.textContent = element.dataset[lang];
    });
    document.querySelectorAll("[data-aria-zh]").forEach((element) => {
      element.setAttribute("aria-label", element.getAttribute(`data-aria-${lang}`));
    });
    document.querySelectorAll("[data-alt-zh]").forEach((element) => {
      element.alt = element.getAttribute(`data-alt-${lang}`);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === lang));
    });
    const labels = { "/": ["关于", "About"], "/publications/": ["论文成果", "Publications"], "/projects/": ["科研项目", "Projects"] };
    document.querySelectorAll("#navbar a.nav-link").forEach((a) => {
      const label = labels[new URL(a.href).pathname];
      if (label) a.textContent = label[lang === "en" ? 1 : 0];
    });
    const heading = document.querySelector(".post-title");
    const label = labels[location.pathname];
    if (heading && label) heading.textContent = location.pathname === "/" ? (lang === "en" ? "Chenyu Tian" : "田辰煜") : label[lang === "en" ? 1 : 0];
    const translatedPage = document.getElementById("translated-page-title");
    if (heading && translatedPage) heading.textContent = translatedPage.dataset[lang === "en" ? "titleEn" : "titleZh"];
    const description = document.querySelector(".post-description");
    if (description && translatedPage) description.textContent = translatedPage.dataset[lang === "en" ? "descriptionEn" : "descriptionZh"];
    const profilePhoto = document.querySelector(".profile img");
    if (profilePhoto) profilePhoto.alt = lang === "en" ? "Portrait of Chenyu Tian" : "田辰煜的个人照片";
    document.title = `${heading ? heading.textContent : "Chenyu Tian"} | Chenyu Tian`;

    document.querySelector('meta[name="description"]').content = descriptions[lang];
    try {
      localStorage.setItem(storageKey, lang);
    } catch {
      /* Language switching also works without storage. */
    }
  }
  let language = "zh";
  try {
    language = localStorage.getItem(storageKey) || language;
  } catch {
    /* Default to Chinese. */
  }
  setLanguage(language);
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  document.getElementById("print-resume")?.addEventListener("click", () => window.print());
})();
