# M3U8 串流線上播放器

一個輕量、零構建依賴的 HLS (.m3u8) 串流測試播放工具。用於快速預覽、調試 HTTP Live Streaming 視頻串流，無需安裝 VLC 或本機播放器。

- **線上使用**：[https://eaglepb2.github.io/m3u8_reader/](https://eaglepb2.github.io/m3u8_reader/)
- **架構特點**：純原生單文件實現，適配深色主題與自適應 16:9 視訊容器，無任何打包編譯流程。

### 解碼架構
本工具透過雙軌機制相容全平台串流播放：
1. **現代瀏覽器 (Chrome / Edge / Firefox)**：基於輕量解碼庫 [Hls.js](https://github.com/video-dev/hls.js/)，透過 MSE (Media Source Extensions) 將 TS/FMP4 切片即時轉碼傳輸至原生 Video 標籤。
2. **Apple 設備 (Safari / iOS)**：直接調用瀏覽器底層的原生 HLS 解碼引擎 (`application/vnd.apple.mpegurl`)。

### 支援特性
- 支援 Enter 鍵快速載入播放。
- 內建 HLS 網路與媒體錯誤自動復原機制 (Auto-recovery)。
- 預設提供 Sintel 開源測試串流，開箱即用。
