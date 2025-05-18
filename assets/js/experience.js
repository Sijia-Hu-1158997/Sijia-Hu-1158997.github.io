AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Technology Graduate",
    cardImage: "assets/images/experience-page/bnz.jpeg",
    place: "Bank of New Zealand",
    time: "(Feb, 2025 - Present)",
    desp: "<li>Front-End Development: Develop and deploy web features using React, TypeScript, and JavaScript.</li><li>Communication & Teamwork: Collaborate effectively with team members and contribute to a supportive, productive work environment.</li><li>Continuous Learning: Actively embrace opportunities to learn new tools, technologies, and best practices.</li>",
  },
  {
    title: "Full-stack Developer Intern",
    cardImage: "assets/images/experience-page/nimpression.svg",
    place: "Nimpression Ltd.",
    time: "(Aug, 2024 - Oct, 2024)",
    desp: "<li>Developed a full-stack web application that allows users to obtain quotes and explore the company’s offerings. </li><li>Consulted with company owner to understand and gather user requirements, translated them into a responsive and user-friendly web design.</li><li>Utilized Tailwind CSS, JavaScript, Node.js, React, and MongoDB to create an easily maintainable system with seamless front-end and back-end integration.</li>",
  },
  {
    title: "Teacher",
    cardImage: "assets/images/experience-page/rb.jpeg",
    place: "Reggio Bambini Private Preschool & Infant Centre",
    time: "(Aug, 2022 - Jan, 2025)",
    desp: "<li>Cultivated trusted and respectful relationships with parents and colleagues.</li> <li>Engaged in continuous reflection on team practices, embracing change, actively seeking improvement opportunities, and implementing innovative solutions to boost productivity and effectiveness.</li>",
  },
  {
    title: "Teacher",
    cardImage: "assets/images/experience-page/millies.png",
    place: "Millie's House Basin Reserve",
    time: "(Aug, 2021 - Aug, 2022)",
    desp: "<li>Mentored and supported a new team member</li><li>Effectively managed and addressed parental concerns and complaints, showcasing strong communication and conflict resolution skills.</li><li>Reviewed student progress and feedback to identify trends and patterns, summarizing findings to inform ongoing curriculum development and classroom practices.</li>",
  },
  {
    title: "Teacher",
    cardImage: "assets/images/experience-page/kiwikids.png",
    place: "Kiwi Kids Childcare Centre",
    time: "(Nov, 2020 - Aug, 2021)",
    desp: "Conducted a wide range of engagements within a diverse educational setting, catering to the needs of children from various backgrounds and learning styles.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Administration and department supervisor",
    cardImage: "assets/images/experience-page/cpo.jpeg",
    place: "Club Program Office of XJTLU",
    time: "(2015 - 2016)",
    description:
      "Be on duty in Service Centre for rental service and club colsultations.",
    href: "https://engage.xjtlu.edu.cn/en/topic/clubprogram_office",
  },
  {
    title: "Volunteer teacher",
    cardImage: "assets/images/experience-page/green.jpg",
    place: "Green Power Now Public Welfare Project",
    time: "(Nov - Dec, 2015)",
    description:
      "In Suzhou Local Middle School, taught environmental protection lessons for children to develop their bilingual ability in Mandarin and English, and increase their awareness of sustainability.",
  },
  {
    title: "Team leader",
    cardImage: "assets/images/experience-page/competition.jpg",
    place: "The 6th Business Simulation Competition",
    time: "(2015)",
    description:
      "Participated in planning market strategies, discussed, promoted, and sold designated products and liaised with the company’s logistics department to ship the products.",
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, place, time, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height:630px; width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px" alt="">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="meta">
            <span class="pre-heading">${place}</span><br>
            <h5><span class="author">${time}</span></h5>
          </p>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* // Hackathon Section

// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//   { */
/* 
//     title: "The Uplift Project",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/uplift.png",
//     desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
//     href: "https://uplift.girlscript.tech/",
//   },
//   { */
/* //     title: "ULHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/ulhacks.png",
//     desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
//     href: "https://ulhacks.com/",
//   },
//   { */
/* //     title: "WaffleHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/wafflehacks.png",
//     desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//     href: "https://wafflehacks.org/",
//   },
//   { */
//   {
//     title: "NHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/nhacks.png",
//     desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//     href: "https://nhacks-vi.devpost.com/",
//   },
// ];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp, href }) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="${href}" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
