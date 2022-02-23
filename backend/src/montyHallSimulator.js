export const montyHallSimulator = (numSimulations, doorChange) => {
  //declaring an aggregating variable to store the win count
  let winCount = 0;

  for (let i = 0; i <= numSimulations; i++) {
    // creating an Array of doors
    const allDoorsArray = [0, 1, 2];

    //randomly select a car location when
    //game starts by picking a random num from allDoorsArray

    let carLocation = allDoorsArray[Math.floor(Math.random() * allDoorsArray.length)];

    // similar approach for the initial door random selection
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
  }
  //return the count of successful runs
  return winCount;
};
