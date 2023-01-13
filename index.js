let danils = document.getElementById("danils");
        let start = document.getElementById("start");
        let stop = document.getElementById("stop");

        stop.onclick = stopDanils;
        start.onclick = startDanils;
        function stopDanils(){ danils.stop();}
        function startDanils(){ danils.start();}


    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            
                var x = document.getElementById("audio"); 
                x.play();
            
                // stop microphone stream acquired by getUserMedia
                stream.getTracks().forEach(function (track) { track.stop(); });
            });       


    const navLinks = document.getElementById("navLinks");
        function showMenu() {
        navLinks.style.right = "0";
            }
    function hideMenu() {
              navLinks.style.right = "-200px";
            }
