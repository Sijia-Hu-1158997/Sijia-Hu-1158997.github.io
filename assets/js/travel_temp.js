document.addEventListener("DOMContentLoaded", () => {
  /* dynamic load */
  const travelSummary = document.querySelector(".main");

  // json variable for injecting html into DOM
  const travel_data = [
    {
      day: "Travel",
      description: "Travel fuels my love for planning journeys and embraces my curiosity for the unknown. My most impressive journey was my trip to Japan, where I discovered different ways of living and found my passion for traveling. I eagerly look forward to future exciting adventures around the world.",
      background_image: "assets/images/travel/trip1/travel.jpg"
    },
    {
      day: "Hiking",
      description: "Hiking is my favorite outdoor activity, allowing me to explore nature's beauty and challenge myself physically. I enjoy the serenity of the mountains, the fresh air, and the breathtaking views. I'm always ready for the next adventure!",
      background_image: "assets/images/travel/trip1/hike.jpg"
    },
    {
      day: "Cat",
      description: "Here is my cat Luna, a foodie who loves to eat and sleep. She is a playful and affectionate companion, always by my side. I love her dearly and enjoy spending time with her.",
      background_image: "assets/images/travel/trip1/cat.png"
    },
    {
      day: "Baking",
      description: "I love cooking and baking desserts, always excited to try new recipes. I find tons of joy in creating delicious treats and sharing them with friends and family. Making cream cakes is my favorite, and I enjoy experimenting with different decorations to create unique birthday cakes for my loved ones. I also enjoy making other desserts, like tiramisu.",
      background_image: "assets/images/travel/trip1/cake.png"
    },
    {
      day: "Leather work",
      description: "I'm deeply passionate about leatherwork, reveling in the creative process of designing and crafting each piece from scratch. I thrive on solving the challenges it presents, turning obstacles into opportunities for innovation. So far, I've crafted wallets, tissue boxes, watch straps, AirTag holders, and handbags. I'm also delving into the art of leather carving, steadily progressing towards mastering this intricate skill.",
      background_image: "assets/images/travel/trip1/leather.jpg"
    }
  ];

  // AOS.init();
  const fillData = () => {
    let output = "";
    travel_data.forEach(
      ({ day, description, background_image }, index) => {
        output += `
    <div class="el">
    <div class="el__overflow">
        <div class="el__inner">
            <div class="el__bg"></div>
            <div class="el__preview-cont">
                <h2 class="el__heading">${day}</h2>
            </div>
            <div class="el__content">
                <div class="el__text">${description}</div>
                <div class="el__close-btn"></div>
            </div>
        </div>
    </div>
</div>`

        /* adding style to stylesheet */

        document.styleSheets[0].addRule(`.el:nth-child(${index + 1}) .el__bg:before`, `
        background-image: url("${background_image}");
        background-size: cover;
        background-position: center center;
      `);
    });

    travelSummary.innerHTML = output;

  };

  fillData();

  // document.addEventListener("DOMContentLoaded", fillData);
  /* dynamic load */

  var $cont = document.querySelector('.cont');
  var $elsArr = [].slice.call(document.querySelectorAll('.el'));
  var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

  setTimeout(function () {
    $cont.classList.remove('s--inactive');
  }, 200);

  $elsArr.forEach(function ($el) {
    $el.addEventListener('click', function () {
      if (this.classList.contains('s--active')) return;

      /* added */
      const mediaQuery = window.matchMedia('(max-width: 700px)')
      // Check if the media query is true
      if (mediaQuery.matches) {
        $cont.style.height = "80vh";
      }
      else {
        $cont.style.height = "120vh";
      }

      document.styleSheets[0].addRule(".el__bg:before", "background-repeat: no-repeat; background-size: contain !important; background-position: center center !important;");
      /* added */

      $cont.classList.add('s--el-active');
      this.classList.add('s--active');
    });
  });

  $closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {

      /* added */
      $cont.style.height = "70vh";
      document.styleSheets[0].addRule(".el__bg:before", "background-size: 100% 100% !important;");
      /* added */

      e.stopPropagation();
      $cont.classList.remove('s--el-active');
      document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });
});
