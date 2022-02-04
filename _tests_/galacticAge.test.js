import GalacticAge from './../src/js/galacticAge.js';

describe('GalacticAge', () => {

  test('should create a GalacticAge object with the given age', () => {
    const galacticAge = new GalacticAge(24);
    expect(galacticAge.age).toEqual(24);

  });

  test('Should return age in Mercury years', () => {
    const galacticAge = new GalacticAge(1);
    expect(galacticAge.AgeInMercuryYears()).toEqual("4.17 mercury years.");

  });


});