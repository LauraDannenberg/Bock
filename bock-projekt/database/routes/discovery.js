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
ownCompList = await getOwnHobbyCompList(ownCompList)
return ownCompList;
}

async function getOwnHobbyCompList(hobbyArr){
result = hobbyArr;
for (let index = 0; index < hobbyArr.length; index++) {
    const hobby = hobbyArr[index];
    
}
for(hobby in hobbyArr){
    agg = [
        {
          '$match': {
            'name': hobby
          }
        }, {
          '$unwind': '$kategorie'
        }, {
          '$lookup': {
            'from': 'hobby', 
            'localField': 'kategorie', 
            'foreignField': 'name', 
            'as': 'matching_docs'
          }
        }, {
          '$unwind': '$matching_docs'
        }, {
          '$replaceRoot': {
            'newRoot': '$matching_docs'
          }
        }
      ];
      cur = await Hobby.aggregate(agg);
      await cur.forEach(supHobby=>{result= result + supHobby.name});
      
      

}

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