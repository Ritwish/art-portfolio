fetch('artworks')
.then(() => fetch('/artworks/index.json'))
.then(res => res.json())
.then(data => {
const gallery = document.getElementById('gallery');


data.forEach(item => {
const card = document.createElement('div');
card.className = 'card';


const media = document.createElement('div');
media.className = 'media';


if (item.type === 'video') {
media.innerHTML = `<video src="${item.media}" autoplay loop muted playsinline></video>`;
} else {
media.innerHTML = `<img src="${item.media}" />`;
}


card.innerHTML = `<h4>${item.title}</h4>`;
card.prepend(media);
gallery.appendChild(card);
  });
});