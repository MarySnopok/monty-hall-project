import { montyHallSimulator } from "./montyHallSimulator";

("use strict");

describe("Get user inputs", function () {
  it("should not crash on negative inputs", () => {
    expect(montyHallSimulator(-2, false)).toEqual(expect.any(Number));
    expect(montyHallSimulator(-123, true)).toEqual(expect.any(Number));
  });

  it("should return number", () => {
    expect(montyHallSimulator("sdsd", true)).toEqual(expect.any(Number));
    expect(montyHallSimulator("%#@", false)).toEqual(expect.any(Number));
  });

  it("should give expected probabilities when switching the door", () => {
    const simulations = 1000;
    const resultDoorSwitch = montyHallSimulator(simulations, true);
    const yesDoorSwitchProbability = resultDoorSwitch / simulations;
    expect(yesDoorSwitchProbability).toBeGreaterThan(0.5);
  });

  it("should give expected probabilities when keep the same door", () => {
    const simulations = 1000;
    const resultNoDoorSwitch = montyHallSimulator(simulations, false);
    const noDoorSwitchProbability = resultNoDoorSwitch / simulations;
    expect(noDoorSwitchProbability).toBeLessThan(0.5);
  });
});
