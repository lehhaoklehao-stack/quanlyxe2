self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Lắng nghe sự kiện hiển thị thông báo
self.addEventListener('showNotification', (event) => {
    const title = "🔔 HẾT GIỜ RỒI!";
    const options = {
        body: `Xe ${event.data.name} đã hết thời gian thuê. Hãy thu xe!`,
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827347.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1827/1827347.png',
        vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40],
        tag: 'car-timer-' + event.data.id,
        renotify: true,
        requireInteraction: true // Thông báo giữ nguyên trên màn hình đến khi bạn tắt
    };
    self.registration.showNotification(title, options);
});
