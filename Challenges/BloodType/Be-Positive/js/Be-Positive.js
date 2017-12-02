//jshint esversion: 6
BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};


BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 90000,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */
   //works but not for inventory:
    //  let invtry = Object.values(blood_inventory);
    // console.log(invtry);

    // let type = Object.values(BloodType);
    // let patients = patient.blood_type;
    
    // if(patients.indexOf(type)){
    //   return patients;
    // }


  receive_patient : function (blood_inventory, patient) {
    let patients = patient.blood_type;
    let count = Object.values(blood_inventory);
    let type = Object.values(BloodType);
    if(patients === "O_NEG"){return type[7];} // O_NEG ONLY
          
          else if (patients === "O_POS"){//O_NEG - 7 && O_POS - 6
          let opos = [];
          opos.push(0,0,0,0,0,0,count[6],count[7]);
          let oposidx = opos.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax);
          console.log("O_POS: ", type[oposidx]);
          return type[oposidx];
          }
          else if (patients === "A_NEG"){//O_NEG - 7 && A_NEG - 1
          let aneg = [];
          aneg.push(0,count[1],0,0,0,0,0,count[7]);
          let anegidx = aneg.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax);
          console.log("A_NEG: ", type[anegidx]);
          return type[anegidx];
          }
          else if (patients === "A_POS"){//O_NEG - 7 / O_POS - 6 / A_NEG - 3 / A_POS - 2
          let apos = [];
          apos.push(0,0,count[2],count[3],0,0,count[6],count[7]);
          let aposidx = apos.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax);
          console.log("A_POS: ", type[aposidx]);
          return type[aposidx];
          }
          else if (patients === "B_NEG"){//O_NEG - 7 && //B_NEG -5
          let bneg = [];
          bneg.push(0,0,0,0,0,count[5],0,count[7]);
          let bnegidx = bneg.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax);
          console.log("B_NEG: ", type[bnegidx]);
          return type[bnegidx];
          }
          else if (patients === "B_POS"){//O_NEG - 7 / O_POS - 6 / B_NEG - 5 / B_POS - 4
          let bpos = [];
          bpos.push(0,0,0,0,count[4],count[5],count[6],count[7]);
          let bposidx = bpos.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax);
          console.log("B_POS: ", type[bposidx]);
          return type[bposidx];
          }
          else if (patients === "AB_NEG"){//O_NEG - 7 / A_NEG - 3 / B_NEG - 5 / AB_NEG - 1
          let abneg = [];
          abneg.push(0,count[1],0,count[3],0,count[5],0,count[7]);
          let abnegidx = abneg.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax);
          console.log("AB_NEG: ", type[abnegidx]);
          return type[abnegidx];
          }
          else if (patients === "AB_POS"){//ALL
          let abpos = [];
          abpos.push(count[0],count[1],count[2],count[3],count[4],count[5],count[6],count[7]);
          let abposidx = abpos.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax);
          console.log("AB_POS: ", type[abposidx]);
          return type[abposidx];
          }
        }
};

 

//end of 







    // give a random blood type to anyone
    // very bad idea!


  



