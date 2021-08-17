
// const coustomers = [
//     {
//       id: 10,
//       name: "Dan Daniel",
//       phone: "05334573362",
//       mail: "Dan.daniel@gmail.com",
//       balance: 200,
//     },
//     {
//       id: 11,
//       name: "Israel Israeli",
//       phone: "0530285774",
//       mail: "Israel.isr@gmail.com",
//       balance: 100,
//     },
//     {
//       id: 12,
//       name: "Yoni Azriel",
//       phone: "0537493827",
//       mail: "yoni.azr@gmail.com",
//       balance: 300,
//     }
//   ];


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
//     for(let i=0; i < coustomers.length; i++){
//         if (clientId == coustomers[i].id)
//         return coustomers[i];
//     }

// }

// getId= getClientByID(612738463);

// console.log(getId);




//   Exercise C: ///

// function deleteClinetById (clientId){
//     for(let i=0; i<coustomers.length; i++){
//         if(clientId==coustomers[i].id){
//             coustomers.splice(coustomers[i],1);
//             return "coustomers[i].name" +("is deleted!")
//         }
//     }
// }

// deleteCLient = deleteClinetById(327362534);
// console.log(coustomers);




// //   Exercise D: ///

//   function  cashWithDrawal (clientId, amount){
//       for(let i=0; i < clientId.length; i++){
//           if (clientId == coustomers[i].id){
//             coustomers[i].balance-=amount;
//             break;
//           }
//       }

//   }




// //   Exercise E: ///

// function cashDiposit(clientId,amount){
//     for(let i=0; i < coustomers.length; i++){
//         if (clientId == coustomers[i].id){
//             coustomers[i].balance+=amount;
//             break;
//         }
//     }
// }

// cashDiposit(12,300);
// console.log(coustomers);



