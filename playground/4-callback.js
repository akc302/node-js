
    
// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })
    
// const geocode = (address, callback)=> {
//     setTimeout(() =>{
//         const data = {
//             latitude: 0,
//             longtitude: 0
//         }
//         return data
//     },2000)
// }
         
// const data = geocode('Philadelphia', (data) => {
//     console.log(data);
// })  


// setTimeout(() => {
//     console.log('Two seconds are up');
// },2000)


const add = ( a,b, callback)=> {
    setTimeout(() => {
        callback(a+b)
    },2000)
}    
add(1,4, (sum) => {
    console.log(sum);
})   