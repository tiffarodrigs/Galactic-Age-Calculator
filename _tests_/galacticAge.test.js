import GalacticAge from './../src/js/galacticAge.js';

describe('GalacticAge', () => {

  test('should create a GalacticAge object with the given age', () => {
    const galacticAge = new GalacticAge(24);
    expect(galacticAge.age).toEqual(24);

  });

  test('Should create a GalacticAge object with the given age,diet,activityLevel and residenceType', () => {
    const galacticAge = new GalacticAge(24, "mediterranean", "high", "seaside");
    expect(galacticAge.age).toEqual(24);
    expect(galacticAge.diet).toEqual("mediterranean");
    expect(galacticAge.activity_level).toEqual("high");
    expect(galacticAge.residence_type).toEqual("seaside");

  });

  test('Should return life expectancy as 60 with just age parameter', () => {
    const galacticAge = new GalacticAge(24);
    expect(galacticAge.calculateLifeExpectancy()).toEqual(60)

  });
  test('Should return life expectancy as 65 with just age  and diet as Mediterranean ', () => {
    const galacticAge = new GalacticAge(24, "Mediterranean");
    expect(galacticAge.calculateLifeExpectancy()).toEqual(65)

  });
  test('Should return life expectancy as 68 with just age  and diet as Mediterranean activity Level as high ', () => {
    const galacticAge = new GalacticAge(24, "Mediterranean", "High");
    expect(galacticAge.calculateLifeExpectancy()).toEqual(68)

  });
  test('Should return life expectancy as 73 with just age  and diet as Mediterranean,activity Level as high and residence as seaside', () => {
    const galacticAge = new GalacticAge(24, "Mediterranean", "High", "Seaside");
    expect(galacticAge.calculateLifeExpectancy()).toEqual(73)

  });

  test('Should create a GalacticAge object with the given age,diet,activityLevel and residenceType and planet', () => {
    const galacticAge = new GalacticAge(24, "Mediterranean", "High", "Seaside", "Mercury");
    expect(galacticAge.age).toEqual(24);
    expect(galacticAge.diet).toEqual("Mediterranean");
    expect(galacticAge.activity_level).toEqual("High");
    expect(galacticAge.residence_type).toEqual("Seaside");
    expect(galacticAge.planet).toEqual("Mercury");

  });
  test('Should return age in Mercury years', () => {
    const galacticAge = new GalacticAge(1, "Mediterranean", "High", "Seaside", "Mercury");
    expect(galacticAge.ageInPlanets()).toEqual("4.17");
  });
  test('Should return age in Venus years', () => {
    const galacticAge = new GalacticAge(1, "Mediterranean", "High", "Seaside", "Venus");
    expect(galacticAge.ageInPlanets()).toEqual("1.61");
  });
  test('Should return age in Mars years', () => {
    const galacticAge = new GalacticAge(1, "Mediterranean", "High", "Seaside", "Mars");
    expect(galacticAge.ageInPlanets()).toEqual("0.53");
  });
  test('Should return age in Jupiter years', () => {
    const galacticAge = new GalacticAge(1, "Mediterranean", "High", "Seaside", "Jupiter");
    expect(galacticAge.ageInPlanets()).toEqual("0.08");
  });

  test('Should return the years  left to live in this planet', () => {
    const galacticAge = new GalacticAge(30, "Mediterranean", "High", "Seaside", "Mercury");
    expect(galacticAge.calculateExpectancyInPlanet()).toEqual("179.17 years you have left to live in Mercury.");
  });

  test('Should return the years  outlived', () => {
    const galacticAge = new GalacticAge(90, "Mediterranean", "High", "Seaside", "Mercury");
    expect(galacticAge.calculateExpectancyInPlanet()).toEqual("70.83 past the life expectancy.");
  });

  test('Should return the years  outlived', () => {
    const galacticAge = new GalacticAge(73, "Mediterranean", "High", "Seaside", "Mercury");
    expect(galacticAge.calculateExpectancyInPlanet()).toEqual("Age and Expectancy same.");
  });



});
