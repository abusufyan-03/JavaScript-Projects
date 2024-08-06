let randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  /* Method 01 by me  */
  let valId
  document.querySelector('#start').addEventListener('click', function(){
    if(!valId){
      valId = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
      }, 1000)
    }
  })
  
  document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(valId)
    valId = null;
  })
  
  