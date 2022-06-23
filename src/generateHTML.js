const fs=require('fs');



const createEngineer=(engineers)=>
{
if (engineers.length===0)
return "";
else {
var string = "";
for(i=0; i<engineers.length; i++)
string = string +  
 `<div class="card mr-1 ml-1" style="width: 18rem;">
 <div class="card-header">
 ${engineers[i].name}
 <br>Engineer
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item">Id: ${engineers[i].id}</li>
   <li class="list-group-item">Email: ${engineers[i].email}</li>
   <li class="list-group-item">GitHub Username: ${engineers[i].github} </li>
 </ul>
</div>`
return string;
}
}
 

const createIntern=(interns)=>
{
if (interns.length===0)
return "";
else{
  var string = "";
  for(i=0; i<interns.length; i++)
  string= string+
  `<div class="card mr-1 ml-1" style="width: 18rem;">
  <div class="card-header">
  ${interns[i].name}
  <br>Intern
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${interns[i].id}</li>
    <li class="list-group-item">Email: ${interns[i].email}</li>
    <li class="list-group-item">School ${interns[i].school} </li>
  </ul>
 </div>`
 return string;
 }
}




const generateHTML = (managers,engineers, interns) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid bg-danger text-light">
  <div class="container">
    <h1 class="display-4">My Team</h1>
  </div>
</div>

<div class="d-flex justify-content-around">
<div class="card mr-1 ml-1 " style="width: 18rem;">
  <div class="card-header">
  ${managers[0].name}
  <br>Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${managers[0].id}</li>
    <li class="list-group-item">Email: ${managers[0].email}</li>
    <li class="list-group-item">Office Number: ${managers[0].officeNumber} </li>
  </ul>
</div>

${createEngineer(engineers)}

${createIntern(interns)}

</div>

</body>
</html>`;

module.exports = generateHTML;