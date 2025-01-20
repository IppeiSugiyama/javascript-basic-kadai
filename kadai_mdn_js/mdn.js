const today = new Date()

const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDay = today.getDate(); 

const todayData = { year: todayYear, month: todayMonth, day: todayDay} ;
console.log(todayData.year + '年' + todayData.month + '月' + todayData.day + '日');