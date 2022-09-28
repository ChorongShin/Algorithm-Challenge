function calcuplateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    let afterInterest = principal * interest;
    let afterTax = afterInterest * (1 - tax);
    principal += afterTax;
    years++;
  }

  return years;
}
/*
"Your task is to complete the method provided
and return the number of years 'Y' as
a whole in order for Mr. Scrooge to get the desired sum."
 */

calcuplateYears(1000, 0.05, 0.18, 1100) //-> 3
