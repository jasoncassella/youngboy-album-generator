const button = document.querySelector('button');
const input = document.querySelector('input');
const songList = document.querySelector('ol');

input.addEventListener('keyup', e => {
  if (e.key === 'Enter') apiRequest();
});

button.addEventListener('click', apiRequest);

async function apiRequest() {
  const album = input.value;
  try {
    const response = await fetch(`https://fathomless-mountain-42323.herokuapp.com/api/${album}`);
    const data = await response.json();
    removePreviousAlbum();
    displayAlbum(data);
  } catch (error) {
    console.error(error);
  }
}

function displayAlbum(data) {
  for (let i = 0; i < data.length; i++) {
    const song = document.createElement('li');
    song.textContent = data[i];
    songList.appendChild(song);
    console.log(data[i]);
  }
}

function removePreviousAlbum() {
  while (songList.firstChild) {
    songList.removeChild(songList.firstChild);
  }
}