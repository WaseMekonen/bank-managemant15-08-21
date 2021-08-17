// //   Exercise 1: ///

const blockedCoustomers = [13, 15, 16, 17];
const coustomers = [
  {
    id: 10,
    name: "Dan Daniel",
    phone: "05334573362",
    mail: "Dan.daniel@gmail.com",
    balance: 200,
  },
  {
    id: 11,
    name: "Israel Israeli",
    phone: "0530285774",
    mail: "Israel.isr@gmail.com",
    balance: 100,
  },
  {
    id: 12,
    name: "Yoni Azriel",
    phone: "0537493827",
    mail: "yoni.azr@gmail.com",
    balance: 300,
  },
];

// //   Exercise 3: ///

//   const blockedCoustomers =[13,15,16,17];

//   function isBlocked(clientId){
//       for(let i=0; i < blockedCoustomers.length; i++){
//           if(clientId == blockedCoustomers[i]){
//               return true;
//           }
//       }
//       return false;
//   }

//   Exercise A: ///

// function addClient(newClient){
//     coustomers.push(newClient);
// }

// let newClie ={
//     id: 382749834,
//     name: "Wase Mekonen",
//     phone: "0543928734",
//     mail: "wase.isr@gmail.com",
//     balance: 3002,
// }

// addClient(newClie);

// console.log(coustomers);

//   Exercise B: ///

// function getClientByID (clientId){

//   if(isBlocked(clientId)){
//     for(let i=0; i < coustomers.length; i++){
//         if (clientId == coustomers[i].id)
//         return coustomers[i];
//     }
//   }
//   else{
//       console.log("your acount is blocked!");
//     }
// }

//   Exercise C: ///

// function deleteClinetById(clientId) {
//   if (isBlocked(clientId)) {
//     for (let i = 0; i < coustomers.length; i++) {
//       if (clientId == coustomers[i].id) {
//         coustomers.splice(coustomers[i], 1);
//         return "coustomers[i].name" + "is deleted!";
//       }
//     }
//   } else {
//     console.log("your acount is blocked!");
//   }
// }

// //   Exercise D: ///

// function  cashWithDrawal (clientId, amount){
//   if(isBlocked(clientId)){
//       for(let i=0; i < clientId.length; i++){
//           if (clientId == coustomers[i].id){
//             coustomers[i].balance-=amount;
//             break;
//           }
//       }
//   }
//   else{
//     console.log("your acount is blocked!");
//   }

// }

// //   Exercise E: ///

// function cashDiposit(clientId,amount){
//     if(isBlocked(clientId)){
//         for(let i=0; i < coustomers.length; i++){
//             if (clientId == coustomers[i].id){
//                 coustomers[i].balance+=amount;
//                 break;
//             }
//         }
//     }
//     else{
//         console.log("your acount is blocked!");
//     }
// }

// //   Exercise 3: ///

// function isBlocked(clientId){
//     for(let i=0; i < blockedCoustomers.length; i++){
//         if(clientId == blockedCoustomers[i]){
//             return false;
//         }
//     }
//     return true;
// }

// //   Exercise 3: ///
// 2: ///

// for(let i=0; i<coustomers.length; i++){
//   if(coustomers[i].balance>=400){
//     return coustomers[i].name;
//   }
//   return "there is no client with amout over 400 "
// }

// 3: ///
// for(let i=0; i<coustomers.length; i++){
//   if(coustomers[i].balance<=200){
//     return coustomers[i].name;
//   }
//   return "there is no client with amout less than 200 "
// }



