import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from "./js/galacticAge";

$("#AgeExpectancy").click(() =>{
  let age = $("#age").val();
  let diet = $("input[name='diet']:checked").val();
  let residence_type = $("input[name='residence_type']:checked").val();
  let activity_level = $("input[name='activity_level']:checked").val();
  let planet = $("input[name='Planet']:checked").val();

  let galacticAge = new GalacticAge(age,diet,activity_level,residence_type,planet);

let planetAge=galacticAge.ageInPlanets();
let planetExpectancy=galacticAge.calculateExpectancyInPlanet();
$("#planetAge").html(planetAge);
$("#planetExpectancy").html(planetExpectancy);
$("#resultBox").show();
});
