


  function toggleBorder(image) {
    if (image.classList.contains('selected')) {
      image.classList.remove('selected');
    } else {
      image.classList.add('selected');
    }
  }




  const dogButton = document.querySelector('.emoji');

  dogButton.addEventListener("click", function () {

    const num1 = document.querySelector('#perrito1').value
    const num2 = document.querySelector('#perrito2').value
    const num3 = document.querySelector('#perrito3').value
    const num4 = document.querySelector('#perrito4').value

    const total = +num1 + +num2 + +num3 + +num4;

    if (total <= 10) {
      document.querySelector('#resultsticker').innerHTML = 'Llevas ' + total;
    } else {
      document.querySelector('#resultsticker').innerHTML = 'Llevas demasiados stickers';
    }
  });





  function verificarPassword() {
    const select = document.getElementById('password-select');
    const selectedValue = select.options[select.selectedIndex].value;
    const resultadoPassword = document.getElementById('resultado-password');
    const inputPassword = prompt('Ingrese la contraseña:');

    if (inputPassword === selectedValue) {
      if (selectedValue === '911') {
        resultadoPassword.innerText = 'Password 1 correcto';
      } else if (selectedValue === '714') {
        resultadoPassword.innerText = 'Password 2 correcto';
      }
    } else {
      resultadoPassword.innerText = 'Password incorrecto';
    }
  }




