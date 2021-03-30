"use strict";
let money = +prompt ("Your cash by month?");
let time = prompt ("Push date in formate yyyy-mm-dd",  new Date().toISOString().slice(0, 10));

let appData = {
    buidget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
};

let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", "");
let twoQuestions = prompt("Во колько обойдется?", "");
let threeQuestions = prompt("Введите обязательную статью расходов в этом месяце", "");
let fourQuestions = prompt("Во колько обойдется?", "");

appData.expenses.oneQuestions = twoQuestions;
appData.expenses.threeQuestions = fourQuestions;

alert(appData.buidget / 30);