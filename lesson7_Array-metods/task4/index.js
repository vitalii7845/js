const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  // put your code here
};

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList.filter(name => !studentsForRetake.includes(name)).map(name => `God job, ${name}`);

const allStudentsList = ['Ann', 'Tom', 'Robert', 'Jon', 'Victor', 'Olga'];
const studentsForRetake = ['Jon', 'Victor'];

console.log(getMessageForPassedStudents(allStudentsList, studentsForRetake));

console.log(allStudentsList);
console.log(studentsForRetake);
