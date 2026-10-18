function changeBackground() {
    const bgElement = document.getElementById('bgimg');
    if (!bgElement) return;

    // 加上时间戳参数，强制浏览器丢弃缓存，向 pic.re 请求一幅新图
    const timestamp = new Date().getTime();
    bgElement.style.backgroundImage = `url(https://pic.re/image?_=${timestamp})`;
}

// 页面加载后立即执行一次
changeBackground();

// 每 10 秒刷新一次背景
setInterval(changeBackground, 10000);