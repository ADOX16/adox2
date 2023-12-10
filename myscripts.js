var text = ["waiting", "we will take him out", "why??", "tell me youself","are you just gonna stand there","because we want to","a way of entertaitment",".............................","?????????????","keyword is winddings","and image editing"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}