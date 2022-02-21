export const montyHallSimulator = (numSimulations, doorChange) => {
  let winCount = 0;

  for (let i = 0; i <= numSimulations; i++) {
    // creating an Array of doors
    const allDoorsArray = [0, 1, 2];

    //randomly select a car location when
    //game starts by picking a random num from allDoorsArray

    let carLocation = allDoorsArray[Math.floor(Math.random() * allDoorsArray.length)];

    // simular approach for the initial door random selection
    //of num from allDoorsArray
    let playerSelectedDoor = allDoorsArray[Math.floor(Math.random() * allDoorsArray.length)];

    //now host of the show is opening the door , not the
    //carLocation one and not the playerSelectedDoor
    let hostSelectedDoor = allDoorsArray.find((door) => door !== playerSelectedDoor && door !== carLocation);

    //now if the doorChange is false we will stand by the
    //initial player selection

    if (doorChange === false) {
      if (carLocation === playerSelectedDoor) {
        winCount += 1;
      }
    } else {
      if (carLocation === allDoorsArray.find((door) => door !== playerSelectedDoor && door !== hostSelectedDoor)) {
        winCount += 1;
      }
    }

    // if doorChange is true we will switch to the resabled door
    //that was not initially picked and was not opened by host
  }
  //call up the function and increament the win count for each
  //successfull run (that returned true)

  //return the count of successfull runs
  return winCount;
};
