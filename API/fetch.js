//  async  function get(){
// const reponce = await fetch('https://api.openweathermap.org/data/2.5/weather?q=tanger&appid=1253309e30b4fb953c136c1426565be0')
// const data = await reponce.json()

// console.log(data)

// }
// get()







fetch('https://api.openweathermap.org/data/2.5/weather?q=tanger&appid=1253309e30b4fb953c136c1426565be0')




.then (function(reponse){
    return reponse.json()
})

.then(function(data){
    console.log(data)
})