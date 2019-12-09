document.getElementsByClassName('fa-bars')[0].onclick = () => {
    document.getElementsByClassName('side-nav')[0].style.right = '0px';
  }
  
  document.getElementsByClassName('close-side-nav')[0].onclick = () => {
    document.getElementsByClassName('side-nav')[0].style.right = '-300px';
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