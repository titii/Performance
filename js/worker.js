// // UIスレッド側からメッセージを受け取る
// addEventListener('message', function(event) {
//   console.log(event.data);

// // UIスレッド側にメッセージを投げる
//   postMessage({command: 'result', data: {

//   }})
// })

self.addEventListener('message', function(e) {
  if(e.data === 'ready') {
    console.log(1);
    postMessage('ready');
  } else {
    console.log(3)
    postMessage(e.data)
  }
})