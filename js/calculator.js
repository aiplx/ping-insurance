export function initCalculator() {
    const slider = document.getElementById('deposit-slider');
    const depositVal = document.getElementById('deposit-val');
    const resultVal = document.getElementById('result-val');

    if (slider) {
        slider.oninput = function() {
            let val = parseInt(this.value);
            depositVal.innerHTML = '$' + val.toLocaleString();
            // 改进的计算公式: 考虑了平均5%的复利增长
            let years = 25;
            let rate = 0.05;
            let futureValue = val * ((Math.pow(1 + rate, years) - 1) / rate);
            resultVal.innerHTML = '$' + Math.round(futureValue).toLocaleString();
        };
    }
}
