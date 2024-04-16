/*
Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco
*/
/**
 * returns an array of objects
*/
export default function getListStudents() {
  const studentOne = { id: 1, firstName: 'Guillame', loaction: 'San Francisco' };
  const studentTwo = { id: 2, firstName: 'James', loaction: 'Columbia' };
  const studentThree = { id: 5, firstName: 'Serena', loaction: 'San Francisco' };

  return [studentOne, studentTwo, studentThree];
}
