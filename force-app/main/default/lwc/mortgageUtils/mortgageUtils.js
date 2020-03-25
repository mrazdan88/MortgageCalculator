/* structure for utility class */
/*Definition of classes */
/* Modified the code to assume that months are coming in the years variable so replacing year with months*/
const calculateMonthlyPayment = (principal, months, rate) => {
    if (principal && months && rate && rate >0) {
        const monthlyRate = rate/100/12;
        const monthlyPayment = 
            (principal * monthlyRate) / (1 - Math.pow(1/ (1 + monthlyRate), months));
            return monthlyPayment;
    }
    return 0;
}
/*Export method */
export {calculateMonthlyPayment};
