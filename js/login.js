// 로티 파일 경로
const animationPath = './src/login.json';

// 애니메이션 DIV ID
const ani = document.getElementById('lottie-animation');

// 로티파일 설정 옵션 
const aniOp = {
    container: ani, // 렌더링 요소
    randerer: 'svg', // 렌더링 방식
    loop: true, // 반복
    autoplay: true, // 자동재생
    path: animationPath // 로티파일 경로 
};