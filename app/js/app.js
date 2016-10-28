;(function(){
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  document.getElementById('email').onkeydown = document.getElementById('email').onfocus =
    document.getElementById('subscribe').addEventListener('change', function() {
      document.getElementById('phoneNumber').disabled = !this.checked;
    });

    document.getElementById('phoneNumber').onkeydown =
      document.getElementById('phoneNumber').onfocus =
      document.getElementById('email').onkeydown =
      document.getElementById('email').onfocus =
      document.getElementById('subscribe').onchange = function() {
        console.log('123123');
      document.getElementsByClassName('invalidEmail')[0].style.display = 'none';
      document.getElementsByClassName('invalidPhone')[0].style.display = 'none';
        document.getElementsByClassName('invalidAll')[0].style.display = 'none';
  };

  document.getElementsByClassName('button')[0].addEventListener('click', function() {
    var email = document.getElementById('email'),
      subscribe = document.getElementById('subscribe'),
      phone = document.getElementById('phoneNumber');

    if (!subscribe.checked) {
      if (isEmail(email.value)) {
        alert('ok')
      } else {
        document.getElementsByClassName('invalidEmail')[0].style.display = 'inline';
        return
      }
    } else {
      if (!isEmail(email.value) && (phone.value.indexOf('_') !== -1 || phone.value === '')) {
        document.getElementsByClassName('invalidAll')[0].style.display = 'inline';
        return
      }
      if (!isEmail(email.value)) {
        document.getElementsByClassName('invalidEmail')[0].style.display = 'inline';
        return
      }
      if ((phone.value.indexOf('_') !== -1 || phone.value === '')) {
        document.getElementsByClassName('invalidPhone')[0].style.display = 'inline';
        return
      }
      alert('ok');
    }
  });

  jQuery(function($){
    $("#phone").mask("+7 (999) 999-9999");
  });

  jQuery(function($){
    $("#phoneNumber").mask("+380 (99) 999-99-99")
  });
})();