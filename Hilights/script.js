document.getElementsByClassName('fa-bars')[0].onclick = () => {
    document.getElementsByClassName('side-nav')[0].style.right = '0px';
  }
  
  document.getElementsByClassName('close-side-nav')[0].onclick = () => {
    document.getElementsByClassName('side-nav')[0].style.right = '-300px';
  }