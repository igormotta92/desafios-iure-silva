
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
    });
  });
}

const addEventListenerFilterTextArticles = () => {
  const filterTextArticles = (filter) => {

    const cleaMark = (txt) => {
      let regex = new RegExp(`<span style=\'background-color: #efd13d;\'>(.*?)</span>`, 'gi');
      txt.innerHTML = txt.innerText.replace(regex, '$1')
    };

    [...document.querySelectorAll('article')].map((article) => {

      let visible = false;
      [...article.querySelectorAll('.txt')].map((txt) => {
        let regex = new RegExp(`(${filter})`, 'gi');

        cleaMark(txt);
        if (regex.test(txt.innerText)) {
          txt.innerHTML = txt.innerText.replace(regex, '<span style=\'background-color: #efd13d;\'>$1</span>')
          visible = true;
        }

      })

      if (visible) {
        article.style.display = 'block'
      } else {
        article.style.display = 'none'
      }

    });
  }

  //--

  const inpSearch = document.querySelector('#inp-search');

  inpSearch.addEventListener('keyup', function (txt) {
    let filter = txt.target.value;
    filterTextArticles(filter);
  });
}

/**
 * Adição dos eventos
 */

addEventListenerImgFavorite();
addEventListenerFilterTextArticles();