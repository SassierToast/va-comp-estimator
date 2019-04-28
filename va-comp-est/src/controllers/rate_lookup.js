// import the data models
import rates_2014_12_01 from '../data/20141201_rates';
import rates_2016_12_01 from '../data/20161201_rates';
import rates_2017_12_01 from '../data/20171201_rates';
import rates_2018_12_01 from '../data/20181201_rates';

const rate = {
  lookUp: function() {
    console.log(rates_2014_12_01["30%"].single);
  }

}

export default rate;