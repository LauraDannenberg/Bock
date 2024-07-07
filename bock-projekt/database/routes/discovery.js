const express = require('express');
const router = express.Router();
const Hobby = require('../models/hobby.model');
const Profil = require('../models/profil.model');
const { json } = require('express');
const DiscoveryStats = require('../models/discoveryStats.model');



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
resArr = [];
for(user of otherUsers){
    console.log(compareHobbys(ownArr,await getHobbyCompList(user.hobbys)));
    score = compareHobbys(ownArr,await getHobbyCompList(user.hobbys));
    resArr.push([user,score]);
}
resArr.sort((a,b)=> b[1] - a[1]);
return resArr;
}

function compareHobbys(arr1, arr2){
    score = 0;
    for(el1 of arr1){
        for(el2 of arr2){
            if(el1 == el2) score++;
        }
    }
    return score
}





router.get('/refreshStats',async (req,res)=>{
    try{
        if(await DiscoveryStats.countDocuments({}) >= 0){
            discoveryStats = await DiscoveryStats.find({});

            profiles = await Profil.find({});
            scores = [];
            comparisons = 0;
            highestScores = [];
            for(profil1 of profiles){
                tempScores = [];
                for(profil2 of profiles){
                    if(profil1!=profil2){
                        compP1 = await getHobbyCompList(profil1.hobbys);
                        compP2 = await getHobbyCompList(profil2.hobbys);
                        scores.push(compareHobbys(compP1,compP2));
                        comparisons +=1;
                        tempScores.push(compareHobbys(compP1,compP2));
                    }
                }
                highestScores.push(Math.max(...tempScores));
            }
            sum = 0;
            hscoresum=0;
            for(score of scores){
                sum += score;
            }
            for(score of highestScores){
                hscoresum+= score;
            }
            stats = {};
            stats.averageScore = sum / comparisons;
            stats.averageHighestScore = hscoresum/highestScores.length;
            await DiscoveryStats.deleteMany();
            await DiscoveryStats.create(stats);
            
            res.json([stats]);
        }
        //res.json("Tja");
        
    }catch (err){
        res.status(500).json({ message: err.message });
    }
});


router.get('/discoverFor/:suchenderId', async (req, res) => {  // Hier kann man dynamisch die Parameter einbeziehen, wenn sie gesetzt wurden
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