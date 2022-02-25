function getDayInfo(date) {

    let nameOfDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    let nameOfMonth = ['Января','Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября','Ноября', 'Декабря'] 

    let day = date.getDay()
    
    let countOfWeeks = date
    let counter = Math.ceil((countOfWeeks.getDate()- (countOfWeeks.getDay()?countOfWeeks.getDay():7))/7 )+1
    let word = 'неделя'

    let month = date.getMonth()
          
    let year = date.getFullYear()
    let word2 = 'года'
  
    return nameOfDay[day] + ", " + counter + " " + word + " " + nameOfMonth[month] + " " + year + " " + word2
}
  const date = new Date('2021.12.30')
console.log(getDayInfo(date))