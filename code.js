$(document).ready(
    function ()
    {
      $("#calculateBacButton").click(calculateBAC);
      $("#displayButton").click(showBAC);

      function showBAC()
      {
          $(".output").show();
      }

      function calculateBAC()
      {
          var numberOfBeers = $("#numberOfBeers").val();
          numberOfBeers = parseFloat(numberOfBeers);

          var numberOfWine = $("#numberOfWine").val();
          numberOfWine = parseFloat(numberOfWine);

          var numberOfShots = $("#numberOfShots").val();
          numberOfShots = parseFloat(numberOfShots);

          var personWeight = $("#personWeight").val();
          personWeight = parseInt(personWeight);

          var numberOfHours = $("#numberOfHours").val();
          numberOfHours = parseFloat(numberOfHours);

          var totalLiquidOunces = (numberOfBeers * 0.54) + (numberOfWine * 0.6) + (numberOfShots * 0.6);
          var avgAlcoholAbsorptionRate = totalLiquidOunces * 7.5;
          var userBAC = avgAlcoholAbsorptionRate / personWeight;
          var realUserBAC = userBAC - (numberOfHours * 0.015);

          $("#totalBAC").text(realUserBAC.toFixed(3));
      }
    }
);