const Client = require("ssh2").Client;
window.sshClient = Client;
// 这是个预加载的JS
window.cool.event.onAppReady(() => {
    console.log('应用加载完成！')
});
window.cool.event.onAppOpen(() => {
    console.log('应用被打开了！')
})