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

  test('Should return age in Venus years', () => {
    const galacticAge = new GalacticAge(1);
    expect(galacticAge.AgeInVenusYears()).toEqual("1.61 Venus years.");

  });
  test('Should return age in Mars years', () => {
    const galacticAge = new GalacticAge(1);
    expect(galacticAge.AgeInMarsYears()).toEqual("0.53 Mars years.");

  });

  test('Should return age in Jupiter years', () => {
    const galacticAge = new GalacticAge(1);
    expect(galacticAge.AgeInJupiterYears()).toEqual("0.08 Jupiter years.");

  });


});