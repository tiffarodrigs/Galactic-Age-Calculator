export default class GalacticAge{
  constructor(age){
    this.age = age;
  }
  AgeInMercuryYears(){
    let mercuryAge=Math.floor(this.age/.24);
    console.log(mercuryAge);
    return mercuryAge;
  }
}