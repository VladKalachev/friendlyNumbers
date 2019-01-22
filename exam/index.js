// Дру́жественные чи́сла — два различных натуральных числа,
// для которых сумма всех собственных делителей 
// первого числа равна второму числу и наоборот,
// сумма всех собственных делителей второго числа равна первому числу.

function getFriendlyNumbers(start, end) {
        if (start > 0 && end > 0 && typeof (start) == 'number' && typeof (end) == 'number' && start <= end) {
            let numbers = [];
            function sumNum(number, numberTwo = false) {
                let sum = 1;
                for (let i = 2; i <= number / 2; i++) {
                    if (number % i == 0) sum += i;
                }
                if (!numberTwo && sum >= start && sum <= end && sum > number) {
                    return sumNum(sum, number);
                } else if (numberTwo == sum) {
                    numbers.push([numberTwo,number]);
                }
            }
            for (let i = start; i <= end; i++) {
                sumNum(i);
            }
            return numbers;
        } else {
            return false;
        }
    }

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}