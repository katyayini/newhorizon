const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let allAdded = false;
const managers = [];
const engineers=[];
const interns=[];

const addManager = async () => {
  const mquestions = [
    {
      type: 'input',
      name: 'managername',
      message: 'What is the team manager\'s name?',
    },
    {
      type: 'input',
      name: 'managerid',
      message: 'What is the team manager\'s id?',
    },
    {
      type: 'input',
      name: 'manageremail',
      message: 'What is the team manager\'s email?',
    },
    {
      type: 'input',
      name: 'officenumber',
      message: 'What is the team manager\'s office number?',
    },
  ];

  const mData = await inquirer.prompt(mquestions);
  const m1 = new Manager(mData.managername, mData.managerid, mData.manageremail, mData.officenumber);
  managers.push(m1);
}


const addEngineer = async () => {
  const equestions = [
    {
      type: 'input',
      name: 'engname',
      message: 'What is your team engineer\'s name?',
    },
    {
      type: 'input',
      name: 'engid',
      message: 'What is your team engineer\'s id?',
    },
    {
      type: 'input',
      name: 'engemail',
      message: 'What is your team engineer\'s email?',
    },

    {
      type: 'input',
      name: 'githubname',
      message: 'What is your team engineer\'s GitHub username?',
    },
  ];
  const eData = await inquirer.prompt(equestions);
  const e1 = new Engineer(eData.engname, eData.engid, eData.engemail, eData.githubname);
  engineers.push(e1);
}

const addIntern = async () => {
  const iquestions = [
    {
      type: 'input',
      name: 'internname',
      message: 'What is your team intern\'s name?',
    },
    {
      type: 'input',
      name: 'internid',
      message: 'What is your team intern\'s id?',
    },
    {
      type: 'input',
      name: 'internemail',
      message: 'What is your team intern\'s email?',
    },

    {
      type: 'input',
      name: 'schoolname',
      message: 'What is your team intern\'s school?',
    },
  ];
  const iData = await inquirer.prompt(iquestions);
  const i1 = new Intern(iData.internname, iData.internid, iData.internemail, iData.schoolname);
  interns.push(i1);
};


const promptUser = async () => {
  await addManager();
  while (!allAdded) {

    const addNew = [
      {
        type: 'list',
        name: 'addemployee',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add more members']
      }
    ]


    const empRole = await inquirer.prompt(addNew);
    if (empRole.addemployee === 'I don\'t want to add more members') { 
      allAdded = true; }
    else {
      if (empRole.addemployee === 'Engineer')
        await addEngineer();
      if (empRole.addemployee === 'Intern')
        await addIntern();
    }

  }
 
 
  fs.writeFileSync('./dist/index.html', generateHTML(managers, engineers, interns), (err) => {
    if (err) { console.log(err); }
    else { console.log("Team profile created.") }
  });


};

promptUser();