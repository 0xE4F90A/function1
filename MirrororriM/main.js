document.addEventListener('DOMContentLoaded', () => {
    const $header = document.querySelector('#header');
    const $nav = document.querySelector('nav');

    // 画像のパスを配列で
    const $images = ['img/title1.png', 'img/title2.png', 'img/title3.png'];
    let currentIndex = 0;

    // 画像を切り替え
    const changeBackground = () => {
        $header.style.backgroundImage = `url(${$images[currentIndex]})`;
        // $nav.style.backgroundImage = `url(${$images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % $images.length; // 次の画像インデックス
    };

    // 初期化
    changeBackground();

    // 一定時間ごとに画像を切り替え
    setInterval(changeBackground, 5000); // 5000ミリ秒 (5秒) ごとに変更
});


$(function () {
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
        // リンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う
        // 600はスクロール速度で単位はミリ秒
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });
})

// topスムーススクロール用ボタン表示
document.addEventListener('DOMContentLoaded', () => {
    const $burger = document.querySelector('.burger');
    const $nav = document.querySelector('.nav-links');
    const $navLinks = document.querySelectorAll('.nav-links li');
    const $topBtn = document.querySelector('#top-button');

    window.addEventListener('scroll', function () {
        const scroll = window.scrollY;
        if (scroll > 300) {
            $topBtn.style.display = 'block';
        } else {
            $topBtn.style.display = 'none';
        }
    });
});