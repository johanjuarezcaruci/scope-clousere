/*function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(saveCoins);
}


moneyBox(5);
moneyBox(4);
*/
function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(saveCoins);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(6);
myMoneyBox(4);

const moneyBoxAna = moneyBox();
moneyBoxAna(3);
moneyBoxAna(7);
moneyBoxAna(3);

function petList(){
    let petList = [];
    return{
        add: function(pet){
            if(pet){
                petList.push(pet);
            }
            console.log(`Pets: ${petList}`);
        },
        remove: function(valor){
            petList = petList.filter(pets => pets !== valor);
            console.log(`Pets: ${petList}`);
        }
    }
}
const myPetList = petList();
myPetList.add('pet1');
myPetList.add('pet2');
myPetList.remove('pet1');