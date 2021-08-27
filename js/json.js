
//JavaScript Object Notation
//JSON
const user = { id: 33, name: 'gorib', job: 'actor' };
const stringified = JSON.stringify(user)
// console.log(stringified)
// console.log(user);

const shop = {
    name: 'Alia Store',
    address: 'Ishaka Road',
    woner: {
        name: 'Jakir hossin',
        profetion: 'acting'
    },
    products: ['laptop', 'mobile', 'mori'],
    // isExpensive = false,
}
const shopStringified = JSON.stringify(shop);
// console.log(shop)
console.log(shopStringified);
const converted = JSON.parse(stringified);
console.log(converted);