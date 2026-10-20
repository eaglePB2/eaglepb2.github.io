![](https://raw.githubusercontent.com/eaglePB2/youtube_thumbnail_grabber/refs/heads/main/preview.png)

# YouTube 影片縮略圖提取器

一個純前端的 YouTube 封面截取工具。輸入影片網址或 ID，自動提取所有官方尺寸的縮略圖規格（MaxRes、HQ、SD、MQ、Default 及時間軸幀截圖）。

- **線上使用**：[https://eaglepb2.github.io/youtube_thumbnail_grabber/](https://eaglepb2.github.io/youtube_thumbnail_grabber/)
- **技術實現**：純原生 HTML5 / ES6 JavaScript，零外部依賴。

### 解析原理
YouTube 官方根據 11 位 `video_id` 靜態分發封面圖片，本工具透過正則解析輸入字串並映射到以下 CDN 規則：
- `https://img.youtube.com/vi/{video_id}/maxresdefault.jpg` (1280×720)
- `https://img.youtube.com/vi/{video_id}/sddefault.jpg` (640×480)
- `https://img.youtube.com/vi/{video_id}/hqdefault.jpg` (480×360)
- `https://img.youtube.com/vi/{video_id}/mqdefault.jpg` (320×180)
- `https://img.youtube.com/vi/{video_id}/default.jpg` (120×90)
