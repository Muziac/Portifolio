      var tooglebtn=document.querySelector(".togglebtn");
      var nav=document.querySelector(".navlinks");
      var links=document.querySelector(".navlinks li");

      togglebtn.addEventList("click", function(){
        this.classList.toggle("click");
        nav.classList.toggle("open");
    })



