
const addEventListenerImgFavorite = () => {
  const imgs_favorite_heart = document.querySelectorAll('.img-favorite');

  [...imgs_favorite_heart].map((img) => {
    img.addEventListener('click', function () {
      if (img.hasDataAttribute('acvited')) {
        this.src = 'images/favorite-heart.svg';
        this.removeDataAttribute('acvited');
      } else {
        this.setDataAttribute('acvited');
        this.src = 'images/favorite-heart-fill.svg';
        //delete this.dataset.acvited; //não funciona no safari
      }
    })
  });
}

addEventListenerImgFavorite();


