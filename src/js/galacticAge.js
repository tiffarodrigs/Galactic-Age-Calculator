export default class GalacticAge{
  constructor(age,diet,activity_level,residence_type,planet){
    this.age = age;
    this.diet =diet;
    this.activity_level=activity_level;
    this.residence_type=residence_type;
    this.planet=planet

  }
  // AgeInMercuryYears(){
    
  //   let mercuryAge=(this.age/.24).toFixed(2);
  //   return mercuryAge ;
  // }
  // AgeInVenusYears(){
  //   let venusAge=(this.age/.62).toFixed(2);
  //   return venusAge;
  // }

  // AgeInMarsYears(){
  //   let marsAge=(this.age/1.88).toFixed(2);
  //   return marsAge;
  // }
  // AgeInJupiterYears(){
  //   let jupiterAge=(this.age/11.86).toFixed(2);
  //   return jupiterAge;

  // }

  calculateLifeExpectancy()
  {
    let lifeExpectancy= 60;
    
    let dietType={
      LowCarb : 1,
      Paleo : 2,
      PlantBased : 3,
      Mediterranean : 5,
      };
     let activityLevel={
        Low:1,
        High:3
      };
     let residenceType={
        Seaside: 5,
        Mountain : 4,
        Farm :3,
        Desert:2
      }
      if(this.diet!=undefined){
      lifeExpectancy += dietType[this.diet];
      }
      if(this.activity_level!=undefined){
        lifeExpectancy += activityLevel[this.activity_level];
        }

        if(this.residence_type!=undefined){
          lifeExpectancy += residenceType[this.residence_type];
          }

    return lifeExpectancy;
  }

}