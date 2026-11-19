# Chenyu Tian · 田辰煜

基于 [al-folio](https://github.com/alshedivat/al-folio) v1.x 的中英文学术主页。保留原主页的个人介绍、4 段教育经历、7 篇已发表论文、4 项科研项目、ORCID、原版简历和最新个人照片。

## 本地开发

需要 Ruby 3.3.5、Bundler 4.0.6 和 Node.js 22（JavaScript 压缩／模板资源处理）。

```sh
gem install bundler -v 4.0.6
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

构建验证：`JEKYLL_ENV=production bundle exec jekyll build --trace`。

## 更新内容

- `_pages/about.md`：个人介绍、研究方向、教育经历与代表论文。
- `_bibliography/papers.bib`：全部 7 篇论文。标记 `selected = {true}` 的论文显示在首页；保留原有 DOI，不补写未知信息。
- `_projects/*.md`：科研项目详情。
- `_pages/projects.md`：项目列表。
- `_data/socials.yml`：邮箱、ORCID 与简历下载。
- `assets/img/chenyu-tian.jpg`：当前主页照片。
- `assets/Chenyu-Tian-Resume.pdf`：原版简历，保留原下载地址。
- `_config.yml`：站点信息及 al-folio 功能配置。GitHub 用户主页使用空 `baseurl`。
- `_includes/site-tools.liquid`、`assets/js/profile.js`、`assets/css/profile.css`：站点语言切换、打印与少量内容样式。正文通过 `data-zh` / `data-en` 保留双语；默认中文，记住用户选择。论文标题沿用正式英文。

al-folio 布局、主题、搜索、深色模式和论文排版由固定版本的上游 gems 提供，未复制覆盖其布局文件。原站点可从 Git 历史恢复；原照片及附件仍保留。

## GitHub Pages

工作流 `.github/workflows/deploy.yml` 在推送 `main` 后构建并发布，PR 只构建不部署。首次使用需在 GitHub 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。这与 Codex 云环境的发布无关。

模板来源和版本记录见 `docs/template-source.md`；模板 MIT 许可证保留在 `LICENSE`。

浏览器回归检查：`npm ci` 后运行 `npm run test:site`（先构建 `_site`，需 Python 3 和 Chromium；可用 `CHROMIUM_PATH` 指定浏览器路径）。覆盖双语及记忆、照片、简历、打印、全部论文／DOI、论文筛选、深色模式及手机布局。

图标字体与返回顶部脚本保存在 `assets/vendor/`，附来源和许可说明，以免关键界面依赖外部 CDN。
