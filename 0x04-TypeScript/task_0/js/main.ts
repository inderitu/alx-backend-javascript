/*
Write your code in the main.ts file:

Write an interface named Student that accepts the following elements: 
firstName(string), lastName(string), age(number), and location(string)

Create two students
Create an array named studentsList containing the two variables

Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible.
*/

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Liz',
  lastName: 'Muthoni',
  age: 22,
  location: 'Eldoret',
}

const studentTwo: Student = {
  firstName: 'Juma',
  lastName: 'Otieno',
  age: 21,
  location: 'Nairobi',
}

const studentsList: Array<Student> = [studentOne, studentTwo];

/**
 * generate a table with first name of the student and the location
 *
 * @param stdArr list of students
 */
function genTable(stdArr: Student[]) {
  // create <table> and <tbody>
  const tbl = document.createElement('table');
  const tblbody = document.createElement('tbody');

  // create title row
  const titleRow = document.createElement('tr');

  const fNameTitle = document.createElement('th');
  fNameTitle.appendChild(document.createTextNode('First name'));

  const locationTitle = document.createElement('th');
  locationTitle.appendChild(document.createTextNode('Location'));

  titleRow.appendChild(fNameTitle);
  titleRow.appendChild(locationTitle);

  tblbody.appendChild(titleRow);

  for (const student of stdArr) {
    // create row
    const row = document.createElement('tr');

    // create td
    const nameDetail = document.createElement('td');
    nameDetail.appendChild(document.createTextNode(`${student.firstName}`));

    const locationDetail = document.createElement('td');
    locationDetail.appendChild(document.createTextNode(`${student.location}`));

    row.appendChild(nameDetail);
    row.appendChild(locationDetail);

    tblbody.appendChild(row);
  }

  tbl.appendChild(tblbody);
  document.body.appendChild(tbl);
}

genTable(studentsList);
