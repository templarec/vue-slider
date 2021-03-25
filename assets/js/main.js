console.log('--- Script loading ---');
//start app vue
var app = new Vue (
  {
    el: "#root",
    data: {
      titolo: "Show room felino",
      index: 0,
      images : [
        "./assets/img/bengal.png",
        "./assets/img/mainecoon.png",
        "./assets/img/scottish.png",
        "./assets/img/sphynx.jpg"
      ],
      overlay: ""
    },
    methods: {
      next: function (event) {
        if (event && event.type === "click") {
          clearInterval(timer);
          this.overlay = "show";
          setTimeout(()=>{
            this.overlay ="";
          },2000);
          console.log("Autoplay stopped...");
        }
        if (this.index < this.images.length -1) {
          this.index++;
        } else {
          this.index = 0;
        }
      },
      prev: function () {
        if (this.index > 0) {
          this.index--;
        } else {
          this.index = this.images.length -1;
        }
      },
      dotSel: function(index) {
        this.index = index;
      }
    }
  }
);
var timer = setInterval(function() {
  app.next();
}, 3000);
