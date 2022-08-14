// 3 way to write function

// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x


// console.log(square(4));

const event = {
    name: 'Birthday party',
    guestList: ['Andrw', 'nafi', 'Mike'],
    printGuestList() {

        console.log('Guest List for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}
event.printGuestList()