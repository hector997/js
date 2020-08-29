
(async function load() {
  // await
  // action
  // terror
  // animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }

  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)
  function videoItemTemplate(movie) {
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
  // console.log(videoItemTemplate('src/images/covers/bitcoinjpg', 'bitcoin'));
  const $actionContainer = document.querySelector('#action');
  actionList.data.movies.forEach((movie) => {
    // debugger
    const HTMLString = videoItemTemplate(movie);
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    // debugger
    $actionContainer.append(html.body.children[0]);
    console.log(HTMLString);
  })

  const $dramaContainer = document.getElementById('#drama');
  const $animationContainer = document.getElementById('#animation');


  const $featuringContainer = document.getElementById('#featuring');
  const $form = document.getElementById('#form');
  const $home = document.getElementById('#home');


  // const $home = $('.home .list #item');
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');




})()