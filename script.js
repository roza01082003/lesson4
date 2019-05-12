function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var deleat = document.getElementById('deleat');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    function deleatMessage(dell) {
        var val = input.value;
        if (val != "") {
            socket.emit("deleat message", val);
        }
    }
    deleat.onclick = deleatMessage;
    function deleatMessage(del) {
        // var p = document.createElement('p');
        // p.innerText = del;
        // chatDiv.appendChild(p);
        // input.value = "";
        socket.deleatMessage('testComplete');
    }
    socket.on('display message', handleMessage);
    socket.on('this message deleat', deleatMessage);
} // main closing bracket

window.onload = main;  