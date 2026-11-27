![](preview.png)

![status](https://github.com/eaglePB2/eaglepb2.github.io/actions/workflows/jekyll-gh-pages.yml/badge.svg)
<hr>

### Hosted by:
[![Powered By Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://eaglepb2.github.io)

# 🦅の網頁

欢迎来到鹰の红石指令部的网页 :D  
作为一个landing page、当然是要找自己最喜欢的样子，对吧 :D  
此网页**非**100%原创，并且是建立与某个网站的模板加以改造而成。

纯静态网站（没有构建步骤、没有 package.json）：`index.html` + `css/style.css` + `js/`，由 GitHub Pages 托管。
主页有五个导航链接，其中「工具箱」会打开「鹰の储藏室」，里面的卡片由 `js/projectsData.js` 渲染，可按 作品 / 工具 / 测试 筛选。

# 站内工具
| 工具 | 路径 | 说明 |
| --- | --- | --- |
| Weeb Image Search | [`/weeb_image_search/`](https://eaglepb2.github.io/weeb_image_search/) | Google CSE 二次元找图（[说明](weeb_image_search/README.md)） |
| YouTube Thumbnail Grabber | [`/youtube_thumbnail_grabber/`](https://eaglepb2.github.io/youtube_thumbnail_grabber/) | YouTube 缩略图提取器（[说明](youtube_thumbnail_grabber/readme.md)） |
| M3U8 Reader | [`/m3u8_reader/`](https://eaglepb2.github.io/m3u8_reader/) | 用 Hls.js 在线播放 .m3u8（[说明](m3u8_reader/README.md)） |
| Gartic Phone | `/gartic_phone/` | 已搬家，只是跳转到 [ForestWork](https://forestwork.vercel.app/games/garticphone) |

工具箱里的其他项目（Quotes、To Do List 等）是各自独立的仓库／站点，在 `js/projectsData.js` 里列出，不在这个仓库里。

# 網頁模板來源
- 原本來源：[E次元 - 请君心明眼亮](https://acg.xn--fiqs8s/) （最近他们改版了，所以原本的来源找不到了 QAQ）
- 但介於該網頁的優化程度讓我有點汗顔（還有很多資料過期的部分），所以就拿來改裝改裝一下，以上面的藍圖爲基礎，開始改造成自己想要的樣子 :D

# 所使用的各种插件：
### ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- [meyer-reset](https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css) —— 把html默认的配置全部归0，重0开始写起。（CDN 引入）

### ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white) 1.7.1（Google CDN）—— 核心JS，也是我目前最喜欢用的框架（或者说，最熟悉的）
- [canvas-nest.js](https://github.com/hustcc/canvas-nest.js) 1.0.1（cdnjs）—— 数字网格，具体效果点链接
- [Snowstorm](https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js) —— 下雪效果（cdnjs）
- norightclick.js —— 防止有人点右键或者inspect element拿源代码的系统
- 自制彩蛋：`js/glitchtext.js`（导航文字乱码）、`js/moonphases.js`（网址栏月相）、`js/timeout.js`（切换分页时的标题彩蛋）、`js/keyboardASCII.js`（console 里的键盘 ASCII）
- 各种自制彩蛋，等待你去探索！

### API
- [pic.re](https://pic.re) —— 生成随机背景的API系统
  - 原作者：[tusik](https://github.com/tusik)
- [eaglePB2/quotes](https://github.com/eaglePB2/quotes) 的 `csv/quotes.csv` —— footer 随机名言的来源（`js/quotes.js`）

# 目前改動：
### ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- \<head>\</head>裏面的style全部分開打包，能丟給cdn的都丟給cdn，不能丟的就打包成css導入
- footer 改成隨機名言，更新copyright年份（藏梗）
- 背景API替換 （從 https://ae01.alicdn.com 換成 http://imgapi.xl0408.top/index.php，現在是 https://pic.re/image，每 10 秒換一張，見 `js/backgroundAPI.js`）
- 新增「工具箱」單頁視圖（`js/toolbox.js` + `js/projectsData.js`）

# 效果預覽
https://eaglepb2.github.io/

# 本地運行
沒有構建步驟，直接用任何靜態伺服器開根目錄即可，例如 `python -m http.server`，然後打開 http://localhost:8000/ 。
（`js/toolbox.js` 是 ES module，直接雙擊打開 `index.html`（file://）會被瀏覽器擋掉。）

# 部署
推送到 `main` 會觸發 [`.github/workflows/jekyll-gh-pages.yml`](.github/workflows/jekyll-gh-pages.yml)：用 `actions/jekyll-build-pages` 打包整個根目錄，再用 `actions/deploy-pages` 發佈到 GitHub Pages。只改 `.md` 檔案不會觸發；也可在 Actions 頁手動運行。

# 目前BUG 🪱
- 鼠標閃爍問題

# 還有，修了一大堆有的沒的 030
