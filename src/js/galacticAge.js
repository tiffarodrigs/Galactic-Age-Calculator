export default class GalacticAge{
  constructor(age,diet,activity_level,residence_type){
    this.age = age;
    this.diet =diet;
    this.activity_level=activity_level;
    this.residence_type=residence_type;
  }
  AgeInMercuryYears(){
    let mercuryAge=(this.age/.24).toFixed(2);
    return `${mercuryAge} mercury years.`  ;
  }
  AgeInVenusYears(){
    let venusAge=(this.age/.62).toFixed(2);
    return `${venusAge} Venus years.`  ;
  }

  AgeInMarsYears(){
    let marsAge=(this.age/1.88).toFixed(2);
    return `${marsAge} Mars years.`  ;
  }
  AgeInJupiterYears(){
    let jupiterAge=(this.age/11.86).toFixed(2);
    return `${jupiterAge} Jupiter years.`  ;

  }
  calculateLifeExpectancy()
  {
    let lifeExpectancy= 60;
    return lifeExpectancy;
    
  }

}