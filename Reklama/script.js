document.getElementsByClassName('consult-but')[0].onclick = () => {
    document.getElementsByClassName('overlay')[0].style.display = 'flex';
  }
  document.getElementsByClassName('popup-close')[0].onclick = () => {
    document.getElementsByClassName('overlay')[0].style.display = 'none';
  }

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }