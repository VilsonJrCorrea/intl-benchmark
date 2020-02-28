var Benchmark = require("benchmark");

var suite = new Benchmark.Suite();

const options = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};

suite
  //------------------------------------------------------------------------------------------
    // .add("Intl.DateTimeFormat", function() {
    //   const date = new Date(Date.UTC(2020, 0, 20, 18, 18, 18));
    //   return Intl.DateTimeFormat("pt-BR", options).format(date);
    // })
    // .add("Format", function() {
    //   const date = new Date(Date.UTC(2020, 0, 20, 18, 18, 18));
    //   const strMonth = getMonth(date.getMonth());
    //   return `${date.getFullYear()}-${strMonth}-${date.getUTCDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // })
  //------------------------------------------------------------------------------------------
  // .add("Intl.NumberFormat", function() {
  //   return new Intl.NumberFormat("pt-BR", {
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2
  //   }).format(15.5);
  // })
  // .add("Replace", function() {
  //   const nValue = '1.2000,00';
  //   String(nValue).replace(".", ",");
  // })
  //------------------------------------------------------------------------------------------
  .add("Round", function() {
    Math.round(5.5 * 100) / 100;
  })
  .add("ToFixed", function() {
    Number((5.5).toFixed(2));
  })
  //------------------------------------------------------------------------------------------
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });

function getMonth(nIndex) {
  switch (nIndex) {
    case 0: {
      return "01";
      break;
    }
    case 1: {
      return "02";
      break;
    }
    case 2: {
      return "03";
      break;
    }
    case 3: {
      return "04";
      break;
    }
    case 4: {
      return "05";
      break;
    }
    case 5: {
      return "06";
      break;
    }
    case 6: {
      return "07";
      break;
    }
    case 7: {
      return "08";
      break;
    }
    case 8: {
      return "09";
      break;
    }
    case 9: {
      return "10";
      break;
    }
    case 10: {
      return "11";
      break;
    }
    case 11: {
      return "12";
      break;
    }
  }
}
