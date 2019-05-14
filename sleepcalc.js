const getSleepHours = day => {
  
    switch(day) {
  case 'monday':
    return 1
    break;
  case 'tuesday':
    return 7
    break;
  case 'wednesday':
    return 8
    break;
  case 'thursday':
    return 6
    break;
  case 'friday':
    return 9
    break;
  case 'saturday':
    return 5
    break;
  case 'sunday':
    return 8
    break;
    default:
    return "error"
}
};

const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours ('thursday') + getSleepHours('friday') + getSleepHours('saturday') + 
getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());
const getIdealSLeepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSLeepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSLeepHours){
    console.log("you got enough sleep.");
  }
  else if(actualSleepHours > idealSleepHours) {
    console.log("you got more than needed");
  }
  else if(actualSLeepHours < idealSleepHours){
    console.log("you should get some more rest");
  }
  else{
    console.log("error");
  }
};