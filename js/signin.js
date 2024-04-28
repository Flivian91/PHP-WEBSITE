// Sigin Page Variables

const join = document.getElementById("join");
const signin = document.getElementById("signin");

const signinBtn = document.getElementById("signin-btn");
const joinBtn = document.getElementById("join-btn");
// Sections
const signinSection = document.querySelector(".signin-section");
const mainSection = document.querySelector(".main-section");
const mainNav = document.querySelector(".main__nav");

const inputEmailSign = document.getElementById("sign__email-sign");
const inputPasswordSign = document.getElementById("signin__password-sign");
const btnSignin = document.getElementById("signin__input-btn");
const btnProfile = document.getElementById("btn-profile");
const profileImage = document.querySelectorAll(".profile__img");
const sideCancel = document.querySelector(".side-close");
const containerSideMenu = document.querySelector(".side-menu");
const mainMenu = document.getElementById("main-menu");

// Labels
const labelProfile = document.querySelector(".profile__drop");
const labelUsername = document.getElementById("username");
const labelEmailID = document.getElementById("email-id");
const labelSignOut = document.getElementById("sign-out");

const signInForm = document.querySelector(".active");
const joinForm = document.querySelector(".disabled");

const overay = document.querySelector(".overlay");

const containerMainPost = document.querySelector(".main__post");
const containermainPostElement = document.querySelector(".main__post--element");

// Show and Hide Btn
const passwordHideBtn = document.querySelectorAll(".password__hide");
const passwordShowBtn = document.querySelectorAll(".password__show");
// ProgressBar
const progressContainer = document.querySelector(".progress");
const postSeeAll = document.querySelector(".post__seeAll");
let postMain = [];
// Main FUnction in the application
async function dataFetch() {
  try {
    const requestPost = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postData = await requestPost.json();
    const requestComment = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const commentData = await requestComment.json();
    // console.log(commentData);

    renderPostHTML(postData.slice(0, 10), commentData.slice(0, 10));
    commentPage(commentData);
  } catch (error) {
    console.log("Something went Wrong", error);
  }
}
dataFetch();
// Render Html Document
function renderPostHTML(posts, comment) {
  posts.forEach((post) => {
    // Create the Html Element
    const postContainer = document.createElement("div");
    postContainer.classList.add("main__post--container");
    postContainer.dataset.postId = post.id;
    const commentType = comment.find((com) => com.id === post.id);
    // console.log(commentType);
    postContainer.innerHTML = `
                <div class="main__post--image">
                  <img
                    id="post-image"
                    src="img/degree4.jpg"
                    alt="Student image"
                  />
                </div>
                <div class="main__post--info flex-column">
                  <div class="main__post--owner flex-row__start">
                    <div class="main__post--owner-profile">
                      <img
                        id="post-owner-profile"
                        src="img/customers/customer-6.jpg"
                        alt="User Profile"
                      />
                    </div>
                    <div class="main__post--owner-name">
                      <span id="post__owner-name">Flivian</span>
                      <p id="post__date">Mar 13(2 days ago)</p>
                    </div>
                  </div>
                  <div class="main__post--tags flex-column">
                    <h1 id="post__heading">
                      ${post.title}
                      Updates
                    </h1>
                    <div class="main__post--tags-nav flex-row__start">
                      <a id="post__tag1" href="#">#Exams</a>
                      <a id="post__tag2" href="#">#Education</a>
                      <a id="post__tag3" href="#">#Skills</a>
                      <a id="post__tag4" href="#">#Motivation</a>
                    </div>
                  </div>
                  <div class="main__post--reaction flex-row__start">
                    <div class="main__post--reaction-emoji flex-row__start">
                      <div class="main__post--reaction-main flex-row__start">
                        <div class="main__post--reaction-main-1">
                          <span>❤️</span>
                          <span>😋</span>
                          <span>🥰</span>
                          <span>🤗</span>
                        </div>

                        <div class="main__post--reaction-count flex-row__start">
                          <span id="post__reaction">12</span>
                          <p>Reactions</p>
                        </div>
                      </div>
                      <div class="main__post--reaction-comment">
                        <a href="#">
                          <i class="fa fa-comment-o" aria-hidden="true"></i>
                          <span>10 Comments</span>
                        </a>
                      </div>
                    </div>
                    <div class="main__post--reaction-bookmark flex-row__center">
                      <p>
                        <span>2</span>
                        min read
                      </p>
                      <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="main__post--comment flex-row__start">
                    <div class="main__post--comment-profile">
                      <img src="img/customers/customer-4.jpg" alt="Profile" />
                    </div>
                    <div class="main__post--comment-details">
                      <p><span>${commentType.name
                        .split(" ")
                        .at(-1)}</span> &nbsp; 5 hours ago</p>
                      <p>
                        ${commentType.body}
                      </p>
                    </div>
                  </div>
                  <div class="main__post--see-all">
                    <span class="post__seeAll"> See all 10 comments </span>
                  </div>
                </div>
              </div>
    `;
    containermainPostElement.appendChild(postContainer);
  });
}
function commentPage(commentData) {
  const postMainContainer = document.querySelectorAll(".main__post--container");
  postMainContainer.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const clicked = e.target;
      if (clicked.classList.contains("post__seeAll")) {
        const postId = clicked.parentElement.parentElement.parentElement.dataset.postId;
        console.log(typeof postId);
        const currentPostId = commentData.filter(comment => comment.postId === Number(postId))
        console.log(currentPostId);
      }
    });
  });
}

// Array for the Available Users
const users = [
  {
    name: "Flivian Mwirigi",
    email: "dflivo@gmail.com",
    password: "flivian254",
    role: "Front-End Developer",
    location: "Kenya",
    dateJoined: "Feb 10, 2024",
    school: "Kirinyaga University",
    gender: "Male",
    work: "Meccatech",
    language: "English",
    profile: "img/customers/customer-2.jpg",
  },
  {
    name: "Ann Mazuri",
    email: "ann@gmail.com",
    password: "annkimani12345",
    role: "Community Developer",
    location: "Tanzania",
    dateJoined: "Feb 28, 2021",
    school: "Mazuo University",
    gender: "Female",
    work: "Kibwako",
    language: "Kiswahili",
    profile: "img/customers/customer-1.jpg",
  },
  {
    name: "Alpha Mureti",
    email: "alpha@gmail.com",
    password: "alphamureti1234",
    role: "Clinical Officer",
    location: "USA",
    dateJoined: "March 12, 2018",
    school: "Kenyatta University",
    gender: "Male",
    work: "Kenyatta Hospital",
    language: "English/Kiswahili",
    profile: "img/customers/customer-3.jpg",
  },
  {
    name: "Eugine Maina",
    email: "eugine@gmail.com",
    password: "eugine1253Mkuu",
    role: "Backend Developer",
    location: "Kenya",
    dateJoined: "Dec 01, 2023",
    school: "Nairobi University",
    gender: "Male",
    work: "Kitale LTD",
    language: "English",
    profile: "img/customers/customer-4.jpg",
  },
  {
    name: "Tonny Murimi",
    email: "tonnymurimi@gmail.com",
    password: "tonnyMurimi1234@",
    role: "Product Manager",
    location: "Kenya",
    dateJoined: "Jan 01, 2022",
    school: "Meru University",
    gender: "Male",
    work: "Shambani LTD",
    language: "English",
    profile: "img/customers/customer-5.jpg",
  },
  {
    name: "samuel Muchui",
    email: "samuel@gmail.com",
    password: "smaul1234muchui",
    role: "Social Media Influencer",
    location: "Australia",
    dateJoined: "Feb 10, 2023",
    school: "Muranga University",
    gender: "Male",
    work: "Citizen",
    language: "English/Kiswahili",
    profile: "img/customers/customer-6.jpg",
  },
];
// Post Array
// const names = users.map(((user, i) => user.name))
const posts = [
  {
    postImage: [
      "img/degree1.jpg",
      "image/work1.jpg",
      "img/helping.webp",
      "img/degree4.jpg",
      "img/degree5.jpg",
      "img/degree6.webp",
    ],
    postOwnerProfile: [
      "img/customers/customer-1.jpg",
      "img/customers/customer-2.jpg",
      "img/customers/customer-3.jpg",
      "img/customers/customer-4.jpg",
      "img/customers/customer-5.jpg",
      "img/customers/customer-6.jpg",
    ],
    postOwnerName: users.map((user, i) => user.name),
    datePost: [
      "2024-03-16T10:30:20.100Z",
      "2024-03-24T10:30:20.100Z",
      "2024-04-16T10:30:20.100Z",
      "2024-03-03T10:30:20.100Z",
      "2024-05-15T10:30:20.100Z",
      "2024-04-30T10:30:20.100Z",
    ],
    heading: [
      "Study Techniques and Strategies",
      "Time Management",
      "Subject-Specific Help",
      "Exam Preparation",
      "Career and Academic Planning",
      "Personal Development",
    ],
    tags: ["Skills", "Studies", "Life", "Exams", "Time", "subject"],
    reaction: [20, 10, 30, 40, 50, 3],
    commentCount: [20, 40, 30, 50, 10, 35],
    read: [5, 1, 2, 5, 8, 6],
    commentProfile: [
      "image/work1.jpg",
      "image/work2.jpg",
      "image/work3.jpg",
      "image/work4.jpg",
      "image/work5.jpg",
      "image/work6.jpg",
    ],
    commentName: ["Flivian", "Alpha"],
    comment: [
      "Share different methods for effective studying, such as spaced repetition, active recall, and mnemonic devices. High-level students can provide insights into advanced techniques, while lower-level students can learn the basics",
      "Discuss tips and tools for managing time effectively, including creating schedules, setting priorities, and avoiding procrastination. Both groups can benefit from sharing their experiences and learning from each other's approaches.",
      "Create threads or channels dedicated to specific subjects, where students can ask questions, share resources, and collaborate on assignments. High-level students can offer tutoring or guidance, while lower-level students can seek clarification and support",
      "Share strategies for preparing for exams, including how to review material, practice problem-solving, and manage test anxiety. High-level students can provide advice on advanced topics, while lower-level students can learn foundational concepts.",
      "Discuss career paths, academic goals, and opportunities for further education or training. High-level students can share their experiences with internships, research projects, and advanced coursework, while lower-level students can explore different options and seek advice on getting started.",
      "Exchange ideas and resources for personal growth, such as improving communication skills, building resilience, and cultivating a growth mindset. Both groups can benefit from sharing their challenges and successes in self-improvement.",
    ],
    totalComment: 20,
  },
];

// Parse Date to the right format
function formattedDate(date) {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const locale = navigator.language;
  return new Intl.DateTimeFormat(locale, options).format(date);
}

// Random function
setInterval(() => {}, 1000);

// console.log(posts[0].reaction[rad]);
// randomAnalysis()
// console.log(posts[0].postOwnerName[randomAnalysis(4)]);
// console.log("hello");
// console.log(users[0].name, users[0].email);

function displayPost(user) {
  function randomAnalysis() {
    return Math.floor(1 + Math.random() * 5);
  }

  containermainPostElement.innerHTML = "";
  const html = `
  <div class="main__post--element flex-column">
    <div class="main__post--image">
      <img id="post-image" src="${
        user.postImage[randomAnalysis()]
      }" alt="Student image" />
    </div>
    <div class="main__post--info flex-column">
      <div class="main__post--owner flex-row__start">
        <div class="main__post--owner-profile">
          <img id="post-owner-profile"
            src="${user.postOwnerProfile[randomAnalysis()]}"
            alt="User Profile"
          />
        </div>
        <div class="main__post--owner-name">
          <span id="post__owner-name">${
            user.postOwnerName[randomAnalysis()]
          }</span>
          <p id="post__date">${formattedDate()}</p>
        </div>
      </div>
      <div class="main__post--tags flex-column">
        <h1 id="post__heading">
        ${user.heading[randomAnalysis()]}
        </h1>
        <div class="main__post--tags-nav flex-row__start">
          <a id="post__tag1" href="#">#${user.tags[0]}</a>
          <a id="post__tag2" href="#">#${user.tags[1]}</a>
          <a id="post__tag3" href="#">#${user.tags[2]}</a>
          <a id="post__tag4" href="#">#${user.tags[3]}</a>
        </div>
      </div>
      <div class="main__post--reaction flex-row__start">
        <div class="main__post--reaction-emoji flex-row__start">
          <div class="main__post--reaction-main flex-row__start">
            <div class="main__post--reaction-main-1">
              <span>❤️</span>
              <span>😋</span>
              <span>🥰</span>
              <span>🤗</span>
            </div>

            <div class="main__post--reaction-count flex-row__start">
              <span id="post__reaction">${
                user.reaction[randomAnalysis()]
              }</span>
              <p>Reactions</p>
            </div>
          </div>
          <div class="main__post--reaction-comment">
            <a href="#">
              <i class="fa fa-comment-o" aria-hidden="true"></i>
              <span>${user.commentCount[randomAnalysis()]} Comments</span>
            </a>
          </div>
        </div>
        <div class="main__post--reaction-bookmark flex-row__center">
          <p>
            <span>${user.read[randomAnalysis()]}</span>
            min read
          </p>
          <i class="fa fa-bookmark-o" aria-hidden="true"></i>
        </div>
      </div>
      <div class="main__post--comment flex-row__start">
        <div class="main__post--comment-profile">
          <img src="${user.commentProfile[randomAnalysis()]}" alt="Profile" />
        </div>
        <div class="main__post--comment-details">
          <p><span>${user.commentName[1]}</span> &nbsp; 5 hours ago</p>
          <p>
          ${user.comment[randomAnalysis()]}
          </p>
        </div>
      </div>
      <div class="main__post--see-all">
        <span> See all ${user.totalComment} comments </span>
      </div>
    </div>
  </div>
  
  `;
  containerMainPost.insertAdjacentHTML("beforeend", html);
}
displayPost(posts[0]);

// Display current user Datails
function userLoginaccount(user) {
  const para = document.createElement("p");
  para.innerText = `Welcome ${user}`;
  document.body.appendChild(para);
}

// Event Listener
// Cancel Buttoon on the side Nav on phone view
sideCancel.addEventListener("click", function () {
  containerSideMenu.classList.add("hidden");
  overay.classList.add("hidden");
});

// Menu icon To display the Side bar
mainMenu.addEventListener("click", function () {
  containerSideMenu.classList.remove("hidden");
  overay.classList.remove("hidden");
});

// Button to Open the Profile menu
btnProfile.addEventListener("click", function () {
  labelProfile.classList.toggle("hidden");
  overay.classList.remove("hidden");
});

// Overlay To
overay.addEventListener("click", () => {
  overay.classList.add("hidden");
  labelProfile.classList.add("hidden");
  containerSideMenu.classList.add("hidden");
});

// Function to display user Data
function displayUserData(user) {
  labelUsername.textContent = user.name;
  labelEmailID.textContent = user.email;
  profileImage.forEach((el) => (el.innerHTML = user.profile));
  // profileImage.setAttribute()
}

// Function to Log Out
labelSignOut.addEventListener("click", () => {
  const index = users.findIndex((user) => (user.email = currentUser.email));
  users.splice(index, 1);
  loginSection.classList.remove("hidden");
  mainSectionLogin.classList.add("hidden");

  // Close the necessary Window imported from user__script file
  mainBody.classList.remove("hidden");
  userSection.classList.add("hidden");
  containerProfileDropdown.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Show Button
passwordHideBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    inputPasswordSign.setAttribute("type", "text");
    joinPassword.setAttribute("type", "text");
    el.style.display = "none";
    passwordShowBtn.forEach((el) => {
      el.style.display = "block";
    });
  });
});
// Hide Button
passwordShowBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    inputPasswordSign.setAttribute("type", "password");
    joinPassword.setAttribute("type", "password");
    el.style.display = "none";
    passwordHideBtn.forEach((el) => {
      el.style.display = "block";
    });
  });
});

// Progress Bar
function progressBar() {
  progressContainer.style.display = "block";
  setTimeout(() => {
    progressContainer.style.display = "none";
  }, 3000);
}
