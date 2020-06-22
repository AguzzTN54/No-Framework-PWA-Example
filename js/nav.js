document.addEventListener('DOMContentLoaded', function () {
  // Activate sidebar nav
  const elems = document.querySelectorAll('.sidenav')
  M.Sidenav.init(elems)
  loadNav()

  function loadNav() {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status != 200) return

        // Muat daftar tautan menu
        document.querySelectorAll('.topnav, .sidenav').forEach(function (elm) {
          elm.innerHTML = xhttp.responseText
        })
        document.querySelector(
          'footer ul'
        ).innerHTML = xhttp.responseText.replace(
          /black-text/g,
          'link grey-text text-lighten-3'
        )

        // Daftarkan event listener untuk setiap tautan menu
        links()
      }
    }
    xhttp.open('GET', 'nav.html', true)
    xhttp.send()
  }
})

// Listerner untuk tautan
function links() {
  document
    .querySelectorAll('.sidenav a, .topnav a, .link')
    .forEach(function (elm) {
      elm.addEventListener('click', function (event) {
        // Tutup sidenav
        const sidenav = document.querySelector('.sidenav'),
          preload = document.querySelector('.progress')
        preload.style.display = ''

        M.Sidenav.getInstance(sidenav).close()

        // Muat konten halaman yang dipanggil
        page = this.getAttribute('href').substr(1)
        loadPage(page)
      })
    })
}
// Load page content
let page = window.location.hash.substr(1)
if (page == '') page = 'home'
loadPage(page)

function loadPage(page) {
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const content = document.querySelector('#body-content'),
        preload = document.querySelector('.progress')

      if (this.status == 200) {
        content.innerHTML = xhttp.responseText
        loadScript(page)
        links()
        preload.style.display = 'none'
      } else if (this.status == 404) {
        document.title = 'Not Found - Minggat Vacation'
        content.innerHTML = `<section class="errorPage center-align">
          <div class="container">
            <h1>404</h1>
            <p>
              Penerbangan ke halaman yang anda tuju tidak tersedia, Pastikan alamat sudah
              benar :)
            </p>
          </div>
        </section>`
        preload.style.display = 'none'
        links()
      } else {
        document.title = 'Terjadi Kesalahan - Minggat Vacation'
        content.innerHTML = `<section class="errorPage center-align">
          <div class="container">
            <h1>Bad Request</h1>
            <p>
              Lalu lintas sedang bermasalah, halaman tujuan tidak dapat diakses
            </p>
          </div>
        </section>`
        preload.style.display = 'none'
        links()
      }
    }
  }
  xhttp.open('GET', 'pages/' + page + '.html', true)
  xhttp.send()
}

function loadScript(page) {
  switch (page) {
    case 'home':
      return home()
      break

    case 'tips':
      return tips()
      break

    case 'story':
      return story()
      break

    case 'about':
      return about()
      break

    default:
      return null
      break
  }
}
