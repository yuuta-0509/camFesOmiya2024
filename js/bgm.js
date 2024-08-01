let isPlaying = false;
const bgm = document.getElementById('bgm');
const speakerIcon = document.getElementById('speaker-icon');

function toggleBGM() {
    if (isPlaying) {
        bgm.pause();
        speakerIcon.classList.remove('fa-volume-up');
        speakerIcon.classList.add('fa-volume-mute');
    } else {
        bgm.play();
        speakerIcon.classList.remove('fa-volume-mute');
        speakerIcon.classList.add('fa-volume-up');
    }
    isPlaying = !isPlaying;
}

// ページ読み込み時にBGMを再生しない
window.addEventListener('load', () => {
    bgm.pause();
    speakerIcon.classList.remove('fa-volume-up');
    speakerIcon.classList.add('fa-volume-mute');
});
