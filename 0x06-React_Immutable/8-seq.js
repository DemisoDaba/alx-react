import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const chosen = seq.filter((student) => {
  student.firstName.charAt(0).toUpperCase();
  return student.score > 70;
  });

  function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const OurObject = chosen.toJS();

  Object.keys(OurObject).map((key) => {
  OurObject[key].firstName = capFirstLetter(OurObject[key].firstName);
  OurObject[key].lastName = capFirstLetter(OurObject[key].lastName);
  return OurObject[key];
  });
  console.log(OurObject);
  }
