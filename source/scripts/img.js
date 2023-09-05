// Adicione um evento de clique para aumentar a imagem quando clicada
const images = document.querySelectorAll('.image-container img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        image.style.transform = 'scale(5.2)'; // Aumente o tamanho da imagem ao clicar
    });

    // Reverta o tamanho ao clicar novamente (opcional)
    image.addEventListener('dblclick', () => {
        image.style.transform = 'scale(1)';
    });
});
