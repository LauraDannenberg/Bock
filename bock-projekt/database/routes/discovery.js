const express = require('express');
const router = express.Router();
const Hobby = require('../models/hobby.model');
const Profil = require('../models/profil.model');
const { json } = require('express');


async function getKumpels(suchendId){
    
profile = [];

eigenesProfil = await Profil.findById(suchendId);
//json(eigenesProfil).hobbys
ownCompList = eigenesProfil.hobbys;
ownCompList = await getHobbyCompList(ownCompList)
ergebnis = await findBuddies(ownCompList,suchendId);
return ergebnis;
}

async function getHobbyCompList(hobbyArr){
result = hobbyArr;
resultstemp = [];
for( let hobby of result){
      query = {};
      query.name = hobby;
      kats = await Hobby.find(query)
      for(kat of kats){
        for(k of kat.kategorie){
            resultstemp.push(k);
        }
        
      }
      
      

}

resultstemp = [... new Set(resultstemp)]; // Dieses weirde Zeug entfernt automatisch duplikate weil sets duplikate nicht erlauben
if(resultstemp.length>0){resultstemp = resultstemp.concat(await getHobbyCompList(resultstemp));}

result = result.concat(resultstemp);
result = [... new Set(result)];

    return result;


}


async function findBuddies(ownArr, suchenderId){
otherUsers = await Profil.find({_id: {$ne: suchenderId}});
return otherUsers;
}










router.get('/:suchenderId', async (req, res) => {  // Hier kann man dynamisch die Parameter einbeziehen, wenn sie gesetzt wurden
    query={}
    if (req.params.suchenderId) {
      query.id = req.params.suchenderId;
    }
    try {
      const ergebnis = await getKumpels(query.id);
      res.json(ergebnis);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;