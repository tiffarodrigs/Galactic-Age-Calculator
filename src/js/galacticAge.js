export default class GalacticAge{
  constructor(age){
    this.age = age;
  }
  AgeInMercuryYears(){
    let mercuryAge=(this.age/.24).toFixed(2);
    console.log(mercuryAge);
    return `${mercuryAge} mercury years.`  ;
  }
}