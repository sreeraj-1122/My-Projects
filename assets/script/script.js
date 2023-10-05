// menu click
let bar = document.querySelector(".fa-bars");
let socialMedia = document.querySelector(".social-media");
bar.addEventListener('click', () => {
    socialMedia.classList.toggle('is-active');
});

// project details

let projects = [
    {
        name: 'Buttons',
        image: 'assets/images/35456.jpg',
        sourceCode: 'https://github.com/sreeraj-1122?tab=repositories',
        liveDemo: 'https://github.com/sreeraj-1122?tab=repositories',

    },
    {
        name: 'Buttons',
        image: 'assets/images/35456.jpg',
        sourceCode: 'https://github.com/sreeraj-1122?tab=repositories',
        liveDemo: 'https://github.com/sreeraj-1122?tab=repositories',

    },
    {
        name: 'Buttons',
        image: 'assets/images/35456.jpg',
        sourceCode: 'https://github.com/sreeraj-1122?tab=repositories',
        liveDemo: 'https://github.com/sreeraj-1122?tab=repositories',

    },
    {
        name: 'Buttons',
        image: 'assets/images/35456.jpg',
        sourceCode: 'https://github.com/sreeraj-1122?tab=repositories',
        liveDemo: 'https://github.com/sreeraj-1122?tab=repositories',

    },
    {
        name: 'Buttons',
        image: 'assets/images/35456.jpg',
        sourceCode: 'https://github.com/sreeraj-1122?tab=repositories',
        liveDemo: 'https://github.com/sreeraj-1122?tab=repositories',

    },
    {
        name: 'Buttons',
        image: 'assets/images/35456.jpg',
        sourceCode: 'https://github.com/sreeraj-1122?tab=repositories',
        liveDemo: 'https://github.com/sreeraj-1122?tab=repositories',

    },
    {
        name: 'Buttons',
        image: 'assets/images/35456.jpg',
        sourceCode: 'https://github.com/sreeraj-1122?tab=repositories',
        liveDemo: 'https://github.com/sreeraj-1122?tab=repositories',

    },
    {
        name: 'Buttons',
        image: 'assets/images/35456.jpg',
        sourceCode: 'https://github.com/sreeraj-1122?tab=repositories',
        liveDemo: 'https://github.com/sreeraj-1122?tab=repositories',

    },
];
let projectList = document.querySelector(".project-list");
projects.forEach((project) => {
    let card=document.createElement('div');
    card.classList.add('project-card');

    let image=document.createElement('img');
    image.src=project.image;
    image.alt=project.name;
    image.classList.add('project-img');

    let projectDetails=document.createElement('div');
    projectDetails.classList.add('project-details');

    let name=document.createElement('h3');
    name.textContent=project.name;
    name.classList.add('project-name');

    // let tagGroup=document.createElement('div');
    // tagGroup.classList.add('tag-group');

    let btnGroup=document.createElement('div');
    btnGroup.classList.add('btn-group');

    let sourceCodeBtn=document.createElement('a');
    sourceCodeBtn.textContent='Sourse code';
    sourceCodeBtn.setAttribute('href',project.sourceCode);
    sourceCodeBtn.setAttribute('target','__blank');
    sourceCodeBtn.classList.add('source-code-btn');

    let liveDemoBtn=document.createElement('a');
    liveDemoBtn.textContent='Live Demo';
    liveDemoBtn.setAttribute('href',project.liveDemo);
    liveDemoBtn.setAttribute('target','__blank');
    liveDemoBtn.classList.add('livedemo-btn');

    btnGroup.appendChild(sourceCodeBtn);
    btnGroup.appendChild(liveDemoBtn);

    projectDetails.appendChild(name);
    projectDetails.appendChild(btnGroup);

    card.appendChild(image);
    card.appendChild(projectDetails);

    projectList.appendChild(card);
});