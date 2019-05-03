// import the data models
import rates_2014_12_01 from '../data/20141201_rates';
import rates_2016_12_01 from '../data/20161201_rates';
import rates_2017_12_01 from '../data/20171201_rates';
import rates_2018_12_01 from '../data/20181201_rates';

const rate = {
  rateTable: function (effectiveDate) {
    let rateTable = 0;
    if (effectiveDate === "20141201") {
      rateTable = rates_2014_12_01;
      // return rateTable["10%"];
    } else if (effectiveDate === "20161201") {
      rateTable = rates_2016_12_01;
      // return rateTable["10%"];
    } else if (effectiveDate === "20171201") {
      rateTable = rates_2017_12_01;
      // return rateTable["10%"];
    } else if (effectiveDate === "20181201") {
      rateTable = rates_2018_12_01
      // return rateTable["10%"];
    };

    return rateTable;
  },


  lookUp: function (effectiveDate, compEval, married, depParents, depChildren, schoolChildren, spAA) {
    let parseCompEval = compEval + "%";
    let table = rate.rateTable(effectiveDate);
    let totalChildren = parseInt(depChildren) + parseInt(schoolChildren);
    let newRate = 0;
    if (parseCompEval === "10%" || parseCompEval === "20%") {
      newRate = (table[parseCompEval]);
    } else if (parseCompEval === "30%" || parseCompEval === "40%" || parseCompEval === "50%" || parseCompEval === "60%" || parseCompEval === "70%" || parseCompEval === "80%" || parseCompEval === "90%" || parseCompEval === "100%") {

      function addlChild (compEval,depChildren,schoolChildren) {

      }

      // MARRIED VETERAN
      if (married === "married") {
        // spouse aid and attendance toggle
        if (spAA === "yes") {
          // adds the appropriate aa allowance to newRate if toggled
          newRate += (table[parseCompEval].spouse_aa_allowance)
        }

        // spouse only
        if (depParents === "0" && depChildren === "0" && schoolChildren === "0") {
          newRate += (table[parseCompEval].spouse_only)
        }
        // spouse and one parent
        if (depParents === "1" && depChildren === "0" && schoolChildren === "0") {
          newRate += (table[parseCompEval].spouse_one_parent)
        }
        // spouse and two parents
        if (depParents === "2" && depChildren === "0" && schoolChildren === "0") {
          newRate += (table[parseCompEval].spouse_two_parent)
        }

        // spouse and one child
        if (depParents === "0" && totalChildren === 1) {
          newRate += (table[parseCompEval].spouse_one_child)
        }

        // spouse and more than one child
        if (depParents === "0" && totalChildren > 1) {
          let totalMinor = parseInt(depChildren);
          let totalSchool = parseInt(schoolChildren);
          console.log("Total Minor: " + totalMinor);
          console.log("Total School: " + totalSchool);


          // in any case where each category has at least one child we'll want to subtract the included child from total minor
          if (totalMinor > 0 && totalSchool > 0) {
            totalMinor -= 1;
            console.log("New Total Minor: " + totalMinor)
          }
          // if there are no children in minor, subtract the included child from totalSchool
          else if (totalMinor <= 0) {
            totalSchool -= 1;
          }
          // if there are no children in school, subtract the included child from minor
          else if (totalSchool <= 0) {
            totalMinor -= 1;
          }
          // if some other case, something is broken.
          else { console.log("something has gone wrong") }

          let additionalChildAmt = (totalMinor * table[parseCompEval].additional_minor_child) + (totalSchool * table[parseCompEval].additional_school_child);

          newRate += additionalChildAmt;
          newRate += (table[parseCompEval].spouse_one_child)
        }

        // spouse one parent and one child
        if (depParents === "1" && totalChildren === 1) {
          newRate += (table[parseCompEval].spouse_one_parent_child)
        }

        // spouse two parents and one child
        if (depParents === "2" && totalChildren === 1) {
          newRate += (table[parseCompEval].spouse_two_parents_child)
        }




        // UNMARRIED VETERAN
      } else if (married === "single") {
        // no other Veteran dependents
        if (depParents === "0" && depChildren === "0" && schoolChildren === "0") {
          newRate = (table[parseCompEval].single)
        }
        // unmarried vet and one parent
        if (depParents === "1" && depChildren === "0" && schoolChildren === "0") {
          newRate = (table[parseCompEval].one_parent)
        }
        // unmarried vet and two parents
        if (depParents === "2" && depChildren === "0" && schoolChildren === "0") {
          newRate = (table[parseCompEval].two_parents)
        }
        // unmarried vet and one child
        if (depParents === "0" && totalChildren === 1) {
          newRate = (table[parseCompEval].child_only)
        }
        // unmarried vet one parent and one child
        if (depParents === "1" && totalChildren === 1) {
          newRate = (table[parseCompEval].one_parent_child)
        }
        // spouse two parents and one child
        if (depParents === "2" && totalChildren === 1) {
          newRate = (table[parseCompEval].two_parents_child)
        }
      }

      else newRate = 0;
    }

    // passing out whatever comes back for new rate.
    return newRate;
  }
}

export default rate;

