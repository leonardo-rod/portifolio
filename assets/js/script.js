// AOS Library load
AOS.init();
var scroll = document.getElementById('scrollDown');
scroll.addEventListener('click', function(){
  // console.log('teste');
  window.scrollTo({
    top: 650,
    behavior: 'smooth'
  });
});


// Menu animation
function headerAnimation(x) {
    x.classList.toggle("change");
    if (!document.getElementsByClassName('change').length){
        // class name does not exist in the document
        document.querySelector('ul.nav.navbar-nav').style.display = "none";
        document.querySelector('main').style.filter = "blur(0)";
        // document.querySelector('#title-tag').classList.add('smooth');
    }else {
        // class exists in the document
        document.querySelector('ul.nav.navbar-nav').style.display = "block";
        document.querySelector('main').style.filter = "blur(5px)";
    }
}
// MAILER
var btn = document.getElementById('form-btn');
var mailer = btn.addEventListener('click', function(e){
    var r = new XMLHttpRequest();
    r.open("POST", "https://formspree.io/leoabreu14@gmail.com", true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200){
            console.log('error');
        }else{
            console.log("Success: " + r.responseText);
        }
    };
    r.send();
    e.preventDefault();
    btn.setAttribute('disabled','disabled');
});
