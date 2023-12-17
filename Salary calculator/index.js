//NET SALARY CALCULATOR
let netSalary = [
    {basicSalary: 10000},
    {benefits: 25000},
    {nssfDeductions: 100},
    {nhifDeductions: 100 },
    {tax: 100},
]
netSalary = (basicSalary+ benefits) - (nssfDeductions + nhifDeductions + tax);
console.log(netSalary);