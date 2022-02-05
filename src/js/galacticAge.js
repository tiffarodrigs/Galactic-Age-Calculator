export default class GalacticAge {
  constructor(age, diet, activity_level, residence_type, planet) {
    this.age = age;
    this.diet = diet;
    this.activity_level = activity_level;
    this.residence_type = residence_type;
    this.planet = planet;

  }

  calculateAge(age, planet) {
    let planetEarthYears = {
      Mercury: .24,
      Venus: .62,
      Mars: 1.88,
      Jupiter: 11.86
    }
    let planetAgeinEarthYrs = (age / planetEarthYears[planet]).toFixed(2);
    return planetAgeinEarthYrs;
  }

  ageInPlanets() {
    let ageInPlanetYear;
    ageInPlanetYear = this.calculateAge(this.age, this.planet);
    return ageInPlanetYear;
  }

  calculateExpectancyInPlanet() {
    let ExpectancyinEarth = this.calculateLifeExpectancy();
    let planetExpectancy = this.calculateAge(ExpectancyinEarth, this.planet);
    let planetYears = this.ageInPlanets();
    if (planetExpectancy < planetYears) {
      return `${(planetYears-planetExpectancy).toFixed(2)} years past the life expectancy.`;
    } else if (planetExpectancy > planetYears) {
      return `${(planetExpectancy-planetYears).toFixed(2)} years you have left to live in ${this.planet}.`;
    } else {
      return "Age and Expectancy same.";
    }
  }



  calculateLifeExpectancy() {
    let lifeExpectancy = 60;

    let dietType = {
      LowCarb: 1,
      Paleo: 2,
      PlantBased: 3,
      Mediterranean: 5,
    };
    let activityLevel = {
      Low: 1,
      High: 3
    };
    let residenceType = {
      Seaside: 5,
      Mountain: 4,
      Farm: 3,
      Desert: 2
    }
    if (this.diet != undefined) {
      lifeExpectancy += dietType[this.diet];
    }
    if (this.activity_level != undefined) {
      lifeExpectancy += activityLevel[this.activity_level];
    }

    if (this.residence_type != undefined) {
      lifeExpectancy += residenceType[this.residence_type];
    }

    return lifeExpectancy;
  }

}
