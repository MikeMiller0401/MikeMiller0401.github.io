(() => {
  const storageKey = 'resume-language';
  const descriptions = {
    zh: '田辰煜，中国地质大学（武汉）机械工程博士研究生、博洛尼亚大学访问博士。研究方向包括三维重建、神经辐射场、3D Gaussian Splatting 与计算机视觉。',
    en: 'Chenyu Tian, PhD student at China University of Geosciences (Wuhan) and visiting PhD at the University of Bologna. Research in 3D reconstruction, neural radiance fields, 3D Gaussian splatting, and computer vision.'
  };
  function setLanguage(language) {
    const lang = language === 'en' ? 'en' : 'zh';
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
      element.textContent = element.dataset[lang];
    });
    document.querySelectorAll('[data-aria-zh]').forEach(element => {
      element.setAttribute('aria-label', element.getAttribute(`data-aria-${lang}`));
    });
    document.querySelectorAll('[data-alt-zh]').forEach(element => {
      element.alt = element.getAttribute(`data-alt-${lang}`);
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === lang));
    });
    document.title = lang === 'en' ? 'Chenyu Tian · 3D Reconstruction & Computer Vision' : '田辰煜 · 三维重建与计算机视觉';
    document.querySelector('meta[name="description"]').content = descriptions[lang];
    try { localStorage.setItem(storageKey, lang); } catch { /* Language switching also works without storage. */ }
  }
  let language = 'zh';
  try { language = localStorage.getItem(storageKey) || language; } catch { /* Default to Chinese. */ }
  setLanguage(language);
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('print-resume').addEventListener('click', () => window.print());
})();
