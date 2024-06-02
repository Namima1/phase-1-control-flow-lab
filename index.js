//gives customer free sample if ride is <= 400 feet
//charge $20 for distance of 400-2000 feet
//charge $30 for distance >2000 feet
//no rides over 2500 feet

function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance > 400 && distance <= 2000){
    return 'That will be twenty bucks.';
  }
  else if (distance > 2000 && distance <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else {
    return "No can do.";
  }
}

//returns "Ok, sounds good." when the city is NYC
//return "No go." if the destination city is not NYC

function ternaryCheckCity(city){
 return city === "NYC" ? "Ok, sounds good." : "No go.";
 }

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}