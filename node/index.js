var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();

(async function() {
  await converter
    .setInputFile("http://localhost:8081/sejie.m3u8")
    .setOutputFile("dummy.mp4")
    .start();

  console.log("File converted");
})();
