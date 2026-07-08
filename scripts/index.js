const write_popup=document.querySelector('.write_popup');
const popup_bg=document.querySelector('.popup_bg');
console.log(write_popup, popup_bg); //오류검사
write_popup.style.display='none'; //초기 숨기기
popup_bg.style.display='none'; //초기 숨기기
function popupShow(){
    /* 보이는 작업 처리 시, 원래 객체가 가지던 CSS display 속성으로 되돌린다. */
    /* 후보군 : flex, block, inline, inline-block */
    write_popup.style.display='flex';
    popup_bg.style.display='block';
}
function popupHide(){
    write_popup.style.display='none';
    popup_bg.style.display='none';
}