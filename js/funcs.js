// For notification popup
function notif(_id) {
  var x = document.getElementById(_id);
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// Simple sleep
function sleep(milisec) {
    return new Promise(resolve => setTimeout(resolve, milisec));
}


// Get IP
function getip() {
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        return data.ip
})
}
