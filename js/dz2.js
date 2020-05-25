//       DZ 2
//2.1
   let a = +prompt("Введіть перше число")
   let b = +prompt("Введіть друге число")
   let c = +prompt("Введіть трет'е число")
   if (a < b && b < c) {
      document.write(a, b, c)
   } else if (a < c && c < b) {
      document.write(a, c, b)
   } else if (b < a && a < c) {
      document.write(b, a, c)
   } else if (b < c && c < a) {
      document.write(b, c, a)
   } else if (c < a && a < b) {
      document.write(c, a, b)
   } else if (c < b && b < a) {
      document.write(c, b, a)
   } else
      document.write('Деякі числа рівні!!')
   document.write('<br>')

//2.2
      let color = prompt('Якого кольору світлофор?')
//    if (color = 'Червоний'){
//       alert('Стой!')
//    } else if (color = 'Зелений'){
//       alert('Йди!')
//    } else if (color = 'Жовтий'){
//       alert('Зачекай!')
//    } else
//       alert ('Роби що хочеш!')

//2.3
   let isRoadClear = confirm("Чи є машини на дорозі?")
   if (!isRoadClear && color = Зелений){
      alert('Вперед!!')
   } else if (isRoadClear && color = "Зелений"){
      alert('Зачекай поки порушник проїде!')
   } else if (isRoadClear && color = "Жовтий"){
   alert('Зачекай!')
   } else if (isRoadClear = fals && color = "Жовтий"){
      alert('Все одно чекай!')
   } else if (isRoadClear && color = "Жовтий"){
      alert('Зачекай!')
   } else if (isRoadClear = fals && color = "Червоний"){
      alert('Все одно стій!')
   } else if (isRoadClear && color = Червоний){
      alert('Стій!')
   } else alert('Роби, що заманется!')
