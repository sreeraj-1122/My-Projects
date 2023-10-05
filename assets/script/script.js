// menu click
let bar = document.querySelector(".fa-bars");
let socialMedia = document.querySelector(".social-media");
bar.addEventListener('click', () => {
    socialMedia.classList.toggle('is-active');
});

// project details

let projects = [
    {
        name: 'SignUp page',
        image: 'assets/images/signup.png',
        sourceCode: 'https://github.com/sreeraj-1122/login-signup-page.git',
        liveDemo: 'https://sreeraj-1122.github.io/login-signup-page/',

    },
    {
        name: 'Profile card',
        image: 'assets/images/profilecard.png',
        sourceCode: 'https://github.com/sreeraj-1122/profile-card.git',
        liveDemo: 'https://sreeraj-1122.github.io/profile-card/',

    },
    {
        name: 'Navbar',
        image: 'assets/images/navbar.png',
        sourceCode: 'https://github.com/sreeraj-1122/responsive-navbar.git',
        liveDemo: 'https://sreeraj-1122.github.io/responsive-navbar/',

    },
    {
        name: 'Simple calculator',
        image: 'assets/images/simpcal.png',
        sourceCode: 'https://github.com/sreeraj-1122/simple-calculator.git',
        liveDemo: 'https://sreeraj-1122.github.io/simple-calculator/',

    },
    {
        name: 'Login page',
        image: 'assets/images/login.png',
        sourceCode: 'https://github.com/sreeraj-1122/login-signup-page.git',
        liveDemo: 'https://sreeraj-1122.github.io/login-signup-page/',

    },
    {
        name: 'Color generator',
        image: 'assets/images/color.png',
        sourceCode: 'https://github.com/sreeraj-1122/color-generator.git',
        liveDemo: 'https://sreeraj-1122.github.io/color-generator/',

    },

    {
        name: 'BMI calculator',
        image: 'assets/images/bmi.png',
        sourceCode: 'https://github.com/sreeraj-1122/BMI-calculator.git',
        liveDemo: 'https://sreeraj-1122.github.io/BMI-calculator/',

    },

    {
        name: 'Hotel website',
        image: 'assets/images/color.png',
        sourceCode: 'https://github.com/sreeraj-1122/hotel-website.git',
        liveDemo: 'https://sreeraj-1122.github.io/hotel-website/',

    },
    {
        name: 'Quiz app',
        image: 'assets/images/quiz.png',
        sourceCode: 'https://github.com/sreeraj-1122/Quiz-App.git',
        liveDemo: 'https://sreeraj-1122.github.io/Quiz-App/',

    },
    {
        name: 'Calculator',
        image: 'assets/images/calc.png',
        sourceCode: 'https://github.com/sreeraj-1122/calculator-project.git',
        liveDemo: 'https://sreeraj-1122.github.io/calculator-project/',

    },
    {
        name: 'Signup page',
        image: 'assets/images/odin.png',
        sourceCode: 'https://github.com/sreeraj-1122/Sign-up-page.git',
        liveDemo: 'https://sreeraj-1122.github.io/Sign-up-page/',

    },

    {
        name: 'Portfolio ',
        image: 'assets/images/port.png',
        sourceCode: 'https://github.com/sreeraj-1122/portfolio-website.git',
        liveDemo: 'https://sreeraj-1122.github.io/portfolio-website/',

    },

];
let projectList = document.querySelector(".project-list");
projects.forEach((project) => {
    let card = document.createElement('div');
    card.classList.add('project-card');

    let image = document.createElement('img');
    image.src = project.image;
    image.alt = project.name;
    image.classList.add('project-img');

    let projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');

    let name = document.createElement('h3');
    name.textContent = project.name;
    name.classList.add('project-name');

    // let tagGroup=document.createElement('div');
    // tagGroup.classList.add('tag-group');

    let btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');

    let sourceCodeBtn = document.createElement('a');
    sourceCodeBtn.textContent = 'Sourse code';
    sourceCodeBtn.setAttribute('href', project.sourceCode);
    sourceCodeBtn.setAttribute('target', '__blank');
    sourceCodeBtn.classList.add('source-code-btn');

    let liveDemoBtn = document.createElement('a');
    liveDemoBtn.textContent = 'Live Demo';
    liveDemoBtn.setAttribute('href', project.liveDemo);
    liveDemoBtn.setAttribute('target', '__blank');
    liveDemoBtn.classList.add('livedemo-btn');

    btnGroup.appendChild(sourceCodeBtn);
    btnGroup.appendChild(liveDemoBtn);

    projectDetails.appendChild(name);
    projectDetails.appendChild(btnGroup);

    card.appendChild(image);
    card.appendChild(projectDetails);

    projectList.appendChild(card);
});