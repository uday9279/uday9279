let date = new Date()
console.log(date)
console.log(Date.now())
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getDay());
console.log(date.getYear())
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getTime())
console.log(date.toDateString())


function DayName(dateString) {
    const days = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return days[dayIndex];
}
 console.log(DayName("2023-11-12"))