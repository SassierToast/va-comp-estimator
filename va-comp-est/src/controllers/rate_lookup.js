// import the data models
import rates_2014_12_01 from '../data/20141201_rates';
import rates_2016_12_01 from '../data/20161201_rates';
import rates_2017_12_01 from '../data/20171201_rates';
import rates_2018_12_01 from '../data/20181201_rates';

const rate = {
  rateTable: function(effectiveDate) {
    let rateTable = 0;
    if (effectiveDate==="20141201") {
      rateTable = rates_2014_12_01;
      // return rateTable["10%"];
    } else if (effectiveDate==="20161201") {
      rateTable = rates_2016_12_01;
      // return rateTable["10%"];
    } else if (effectiveDate==="20171201") {
      rateTable = rates_2017_12_01;
      // return rateTable["10%"];
    } else if (effectiveDate==="20181201") {
      rateTable = rates_2018_12_01
      // return rateTable["10%"];
    };

    return rateTable;
  },

  lookUp: function(effectiveDate, compEval) {
    let parseCompEval = compEval + "%";
    let table = rate.rateTable(effectiveDate);
    if (parseCompEval === "10%" || parseCompEval === "20%") {
      return (table[parseCompEval]);
    } else return 0;
  }


  // lookUp: function(effectiveDate, compEval) {
  //   // console.log(rates_2014_12_01["30%"].single);
  //   if (effectiveDate==="20141201") {
  //     let rateTable = rates_2014_12_01;
  //     // return rateTable["10%"];
  //   } else if (effectiveDate==="20161201") {
  //     let rateTable = rates_2016_12_01;
  //     // return rateTable["10%"];
  //   } else if (effectiveDate==="20171201") {
  //     let rateTable = rates_2017_12_01;
  //     // return rateTable["10%"];
  //   } else if (effectiveDate==="20181201") {
  //     let rateTable = rates_2018_12_01;
  //     // return rateTable["10%"];
  //   } else return 0;
  // }



}

export default rate;

// compEval, marital, spAA, depParents, depChildren, schoolChildren