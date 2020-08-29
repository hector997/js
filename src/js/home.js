
  async function load(){
    //await
    async function getData(url,header ){
      const response = await fetch(url);
      const data = await response.json()
      console.log("response: " + response)
      console.log("data: " + data)
      return data; //devuelve la respuesta del fetch (obj)
    }
    const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
    const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
    const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
    console.log(actionList,dramaList,animationList);
    
    function videoItemTemplate(movie){
      return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
      )
    }

    const $actionContainer = document.querySelector('#action');
    const $dramaContainer = document.querySelector('#drama');
    const $animationContainer = document.getElementById('#animation');
    const $featuringContainer = document.getElementById('#featuring');

    const $form = document.getElementById('#form');
    const $home = document.getElementById('#home');

    //const $home = $('.home')  ||    (jquery)la variable empieza con $ para saber que se esta trabajando con un selector del dom
    const $modal = document.getElementById('modal');
    const $overlay = document.getElementById('overlay');
    const $hideModal = document.getElementById('hide-modal');
    
    const $modalImage = $modal.querySelector('img');
    const $modalTitle = $modal.querySelector('h1');
    const $modalDescription = $modal.querySelector('p');

    function createTemplate(HTMLString){
      const html = document.implementation.createHTMLDocument();
      html.body.innerHTML = HTMLString;
      return html.body.children[0];
    }
    function renderMovieList(list,$container){
      $container.children[0].remove();
        list.forEach((movie) => {
        const HTMLString = videoItemTemplate(movie);
        const movieElement = createTemplate(HTMLString);
        $container.append(movieElement);
      })
    }

    renderMovieList(actionList.data.movies, $actionContainer);
    renderMovieList(dramaList.data.movies, $dramaContainer);
    renderMovieList(animationList.data.movies, $animationContainer)

    

  }(1000);
