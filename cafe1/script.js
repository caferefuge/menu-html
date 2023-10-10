// 이미지 클릭 시 모달 열기
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalContainer = document.getElementById('modal-container');
const modalImage = document.getElementById('modal-image');

modalTriggers.forEach(modalTrigger => {
    modalTrigger.addEventListener('click', () => {
        const clickedImageSrc = modalTrigger.getAttribute('data-image');
        modalImage.src = clickedImageSrc;
        modalContainer.style.display = 'block';
    });
});

// 모달 닫기
function closeModal() {
    modalImage.src = '';
    modalContainer.style.display = 'none';
}

// 모달 영역 외부 클릭 시 모달 닫기
modalContainer.addEventListener('click', closeModal);