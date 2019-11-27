module.exports = {
  getTargetRetirementAmount: function(yearlyIncome) {
    return yearlyIncome / 0.04;
  },
  getFutureValueWithYearlyDeposit: function(pv, pmt, rate, np) {
    rate = parseFloat(rate); // Annual interest rate
    np = parseFloat(np); // Number of periods/years
    pmt = parseFloat(pmt); // Payment per period/year
    pv = parseFloat(pv); // Present value
    if (np == 0) {
      alert('Why do you want to test me with zeros?');
      return 0;
    }
    if (rate == 0) {
      // Interest rate is 0
      fv_value = pv + pmt * np;
    } else {
      x = Math.pow(1 + rate, np);
      fv_value = (-pmt + x * pmt + rate * x * pv) / rate;
    }
    fv_value = conv_number(fv_value, 2);
    return fv_value;
  }
};

function conv_number(expr, decplaces) {
  var str = '' + Math.round(eval(expr) * Math.pow(10, decplaces));
  while (str.length <= decplaces) {
    str = '0' + str;
  }
  var decpoint = str.length - decplaces;
  return str.substring(0, decpoint) + '.' + str.substring(decpoint, str.length);
}
