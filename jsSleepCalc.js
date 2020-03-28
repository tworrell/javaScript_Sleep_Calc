// Tara Worrell Sleep calculator @ 3/10/2020

const getSleepHours = (day) => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday'){
    return 4;
  } else if (day === 'wedsnesday') {
    return 6;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 5;
  } else if (day === 'sunday') {
    return 9;
  } else {
    console.log('Not valid!');
  }
}
const getActualSleepHours = () =>
 getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wedsnesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


const getIdealSleepHours = () => {
  const idealHours = 7;
  return (idealHours * 7);
}

const calculatesSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got perfect sleep!');
      } else if (actualSleepHours > idealSleepHours) {
        console.log('You got '+  (idealSleepHours + actualSleepHours) + 'hour(s) of sleep which is way  more than you needed -__-');} else {
          console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Go get some rest.');
        }
}

calculatesSleepDebt();
