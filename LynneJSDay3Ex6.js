var record = [
  {
    "Name": "Gibo",
    "Age": 16,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" }
    ]
  },
  {
    "Name": "Patrick",
    "Age": 22,
    "SkillSet": [
      { "Skill": "SAP UI5" },
      { "Skill": "SAP HANA" },
      { "Skill": "SAP ABAP" }
    ]
  },
  {
    "Name": "MJ",
    "Age": 24,
    "SkillSet": [
      { "Skill": "SAP HANA" }
    ]
  }
];

let maxSkills = 0;
let personWithMostSkills = null;

for (let i = 0; i < record.length; i++) {
  let skillsCount = record[i].SkillSet.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    personWithMostSkills = record[i];
  }
}

if (personWithMostSkills) {
  console.log("Name:", personWithMostSkills.Name);
  console.log("Age:", personWithMostSkills.Age);
}