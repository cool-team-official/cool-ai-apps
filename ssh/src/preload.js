const Client = require("ssh2").Client;
window.sshClient = new Client();
// 这是个预加载的JS
window.cool.event.onAppReady(() => {
    console.log('应用加载完成！')
    

    // client.on("ready", function () {
    //     console.log('ssh已连接!');
    //     client.shell(function (err, stream) {
    //         if (err) throw err;
           
    //         process.stdin.setEncoding('utf8');
    //         let command = false;
    //         process.stdin.on('readable', () => {
    //             const chunk = process.stdin.read();
    //             if (chunk !== null) {
    //                 command = true;
    //                 stream.write(chunk);

    //             }
    //         });

    //         stream.on('close', function () {
    //             console.log('关闭shell');
    //             client.end();
    //         }).on('data', function (data) {
    //             if (!command) process.stdout.write(data);
    //             console.log(data.toString())
    //             command = false;
    //         }).on("error", function (data) {
    //             console.log('err: ' + data);
    //         }).stderr.on('data', function (data) {
    //             console.log('STDERR: ' + data);
    //         });
    //     });
    // }).connect({
    //     host: '123.57.135.188',
    //     port: 22,
    //     username: 'root',
    //     password: 'abc123456+'
    // });
});
window.cool.event.onAppOpen(() => {
    console.log('应用被打开了！')
})