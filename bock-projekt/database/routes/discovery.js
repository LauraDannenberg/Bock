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
return ownCompList;
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

resultstemp = [... new Set(resultstemp)];
if(resultstemp.length>0){resultstemp = resultstemp.concat(await getHobbyCompList(resultstemp));}

result = result.concat(resultstemp);
result = [... new Set(result)];

    return result;


}

router.get('/', async (req, res) => {  // Hier kann man dynamisch die Parameter einbeziehen, wenn sie gesetzt wurden
    query={}
    if (req.query.suchenderId) {
      query.id = req.query.suchenderId;
    }
    try {
      const ergebnis = await getKumpels(query.id);
      res.json(ergebnis);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;