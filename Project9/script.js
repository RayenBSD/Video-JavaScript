onload = () => {

    var video = document.querySelector("video");
    var btn = document.getElementById("button");

    var play = document.getElementById("play");
    var pause = document.getElementById("pause");

    play.addEventListener ("click", () => {
        video.play();

        play.style.display = "none";
        pause.style.display = "block";
    });

    pause.addEventListener ("click", () => {
        video.pause();

        play.style.display = "block";
        pause.style.display = "none";
    });
}