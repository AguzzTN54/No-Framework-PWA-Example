function home() {
  document.title = 'Minggat Vacation'
  const slider = document.querySelector('.slider')
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  })
}

function story() {
  document.title = 'Trip Stories'
  M.Parallax.init(document.querySelector('.parallax'))

  const stories = [
    { pic: 'banyuwangithumb', name: 'Red Island' },
    { pic: 'covid19_banner_web', name: 'Kelimutu Lake' },
    { pic: 'errorpage', name: 'Mount Bromo' },
    { pic: 'nature1', name: 'Belitung' },
    { pic: 'rajaampatthumb', name: 'Raja Ampat' },
    { pic: 'ugc1', name: 'Sumba' },
    { pic: 'ugc2', name: 'Bandung' },
    { pic: 'ugc4', name: 'Komodo Island' },
    { pic: 'ugc6', name: 'Borobudur Temple' },
    { pic: 'ugc8', name: 'Gili Trawangan' },
    { pic: 'ugc9', name: 'Derawan Island' },
    { pic: 'yogyakartathumb', name: 'Prambanan Temple' },
  ]

  let storyItem = ''
  stories.forEach(function (story) {
    storyItem += `<div class="col s6 l3 m4">
    <div class="card z-depth-0">
      <div class="card-image">
        <img loading="lazy" src="../images/${story.pic}.webp" alt="${story.name}">
        <span class="card-title">${story.name}</span>
      </div>
    </div>
  </div>`
  })
  document.querySelector('.stories').innerHTML = storyItem
}

function tips() {
  document.title = 'Beberapa Tips Liburan Untukmu'
  M.Parallax.init(document.querySelectorAll('.parallax'))
}

function about() {
  document.title = 'About Author'
  M.Tabs.init(document.querySelector('.tabs'))
}
