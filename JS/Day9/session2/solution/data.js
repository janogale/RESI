const users = [
  {
    id: 1,
    name: "Ahmed Farah",
    username: "afarah",
    email: "afarah@gmail.com",
    nationality: "Kenyan",
    address: {
      street: "Daruuraha",
      city: "Hargeisa",
    },
    phone: "3545435",
    website: "afarah.org",
    company: {
      name: "Telesom Company",
      slogan: "Reliable Service",
    },
  },
  {
    id: 2,
    name: "Warda Jama",
    username: "wjama",
    email: "wjama@gmail.com",
    address: {
      street: "new Hargeisa",
      city: "Hargeisa",
    },
    phone: "4534663",
    website: "wjama.net",
    company: {
      name: "daryeel hospital",
      slogan: "Proactive didactic contingency",
    },
  },
  {
    id: 3,
    name: "Mohamed Abdi",
    username: "mabdi",
    email: "mabdi@gmailcom",
    nationality: "Ethiopia",
    address: {
      street: "Pepsi Area",
      city: "Hargeisa",
    },
    phone: "35354345",
    website: "mabdi.info",
    company: {
      name: "Dahabshiil Company",
      slogan: "Fast Money Transfer",
    },
  },
  {
    id: 4,
    name: "Asma Yousuf",
    username: "ayousuf",
    email: "ayousuf@gmail.com",
    address: {
      street: "Jigjiga Yar",
      city: "Hargeisa",
    },
    phone: "4931709623",
    website: "ayousuf.com",
    company: {
      name: "WordRemit",
      slogan: "Online Money Transfer",
    },
  },
  {
    id: 5,
    name: "Khadra Mohamed",
    username: "kmohamed",
    email: "kmohamed@gmail.com",
    address: {
      street: "Calaamada",
      city: "Hargeisa",
    },
    phone: "2549541289",
    website: "kmohamed.info",
    company: {
      name: "Somcable",
      slogan: "Fiber-optic Internet",
    },
  },
  {
    id: 6,
    name: "Mahad Ibrahim",
    username: "mibrahim",
    email: "mibrahim@gmail.com",
    address: {
      street: "Idaacada",
      city: "Hargeisa",
    },
    phone: "477-935-8478",
    website: "mibrahim.org",
    company: {
      name: "Radio Hargeisa",
      slogan: "Synchronised bottom-line interface",
    },
  },
  {
    id: 7,
    name: "Kariima Hasan",
    username: "khasan",
    email: "khasan@hotmail.com",
    address: {
      street: "Isha Borama",
      city: "Hargeisa",
    },
    phone: "064376132",
    website: "khasan.io",
    company: {
      name: "Somtel Company",
      slogan: "Share Your World",
    },
  },
  {
    id: 8,
    name: "Raage Warsame",
    username: "rwarsame",
    email: "rwarsame@gmail.com",
    address: {
      street: "Shacabka",
      city: "Hargeisa",
    },
    phone: "4936943343",
    website: "rwarsame.com",
    company: {
      name: "SBI Group",
      slogan: "Somaliland Beverage Industry",
    },
  },
  {
    id: 9,
    name: "Deqa Rooble",
    username: "drooble",
    email: "drooble@gmail.com",
    address: {
      street: "Masalaha",
      city: "Hargeisa",
    },
    phone: "9679441206",
    website: "drooble.com",
    company: {
      name: "Hass Petrolium",
      slogan: "Serving New Frontiers",
    },
  },
  {
    id: 10,
    name: "Ali Daud",
    username: "adaud",
    email: "adaud@live.com",
    address: {
      street: "xero awr",
      city: "Hargeisa",
    },
    phone: "06483804",
    website: "adaud.net",
    company: {
      name: "DP World",
      slogan: "Creating the Future, Now",
    },
  },
];


//Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students))



function convertArrayToObject(arr){
  let obj = [];

  for(let [name, skills, scores] of arr){

   obj.push( {
      name: name,
      skills: skills,
      score: scores
    })

  }

  return obj;
}



console.log( convertArrayToObject(students) )



const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};



const newStudent = Object.assign({}, student, {})


