//1
   let str_ru = '«Привет»'
   let num = 123
   let flag = true
   let txt = '«true»'

//2
   let a1 = 5
   let a2 = a1 + 3
   let a3 = a1 - 3
   let a4 = a1 * 3
   let a5 = a1 / 3

//3
   let a6 = 5 % 3
   let a7 = 3 % 5
   let a8 = 5 + '3'
   let a9 = '5' - 3
   let a10 = 75 + ' кг'

   document.write(`${a1} ${a2} ${a3} ${a4} ${a5} <br> ${a6} ${a7} ${a8} ${a9} ${a10}`)
   document.write('<br>')

//4
   let height = 23
   let width = 10
   let s = height * width
   document.write(s + ' cm²')
   document.write('<br>')

//5
   let heightC = 10
   let dC = 4
   let v = 3.14 * dC
   document.write(v + ' м³ ')
   document.write('<br>')
//6
   let n = 3
   let m = 4
   let k = Math.sqrt(n**2-(m/2)**2)
   document.write(k + ' m' +'<br>')

//7
   let str = '"Hello world"'
   document.write(str)
   document.write('<br>')
   alert(str)
   console.log(str)
//8
   let user = {
       "name" : 'Скриба Олексій',
       "edg" : 45,
       "hobby" : 'Web-дізайн'
   }
   alert(`${user.name} \n Вік -  ${user.edg}  \n Хоббі -  ${user.hobby}`)
//9
   let str1 =  'Кто '
   let str2 = 'ты '
   let str3 = 'такой?'
   let concatenation = str1 + str2 + str3
   document.write(concatenation)
   document.write('<br>')
//10
   let st = "20"
   let a = 5
   document.write(st + a + "<br/>")
   document.write(st - a + "<br/>")
   document.write(st * "2" + "<br/>")
   document.write(st / 2 + "<br/>")
//11
   console.log(parseInt("3.14"))
   console.log(parseInt("-7.875"))
   console.log(parseInt("435"))
   console.log(parseInt("Вася"))
//12
   let strn = prompt("Enter something", "ho-ho")
   console.log(strn);
//13
   let num1 = +prompt('Введіть число 1')
   let num2 = +prompt('Введіть число 2')
   alert(num1 + num2)
//14
   let firstName = prompt("Введіть Ваше ім'я.")
   let lastName = prompt('Введіть прізвище')
   let ages = +prompt('Введіть Ваш вік')
   alert(`Доброго вечера ${firstName } ${lastName}, вітаю, що вам ${ages}! `)
