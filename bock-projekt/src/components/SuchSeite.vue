<script>
import axios from 'axios';



export default {
  name: 'SuchSeite',
  data:()=>({
    nutzer:  [],
    avgScore : 0.0,
    avgHScore: 0.0

  }),
  async created () {
    await axios.get("http://localhost:3600/disc/refreshStats")
    .then((response) =>{
        this.avgScore = response.data.averageScore;
        this.avgHScore = response.data.averageHighestScore;
    })



    axios.get(`http://localhost:3600/disc/discoverFor/${this.profileId}`) //Richtige Profilid abfrage bitte
    .then(response => {
        this.nutzer = [];
        for(var inhalt of response.data){
            inhalt[0].score = inhalt[1];
            this.nutzer.push(inhalt[0]);
        }
    }).catch(reason => {
        this.nutzer.push({vornamen: "Der",
            nachname: "Weihnachtsmann",
            fachbereich: "Nordpol",
            beschreibung: "Ho Ho Ho",
            alter: "Zwölfundsechzig"
        });
        console.log(reason);
    });
  },
  methods: 
  {
    ratingWrapper(score){
       return this.getRating(score);
    },
    getRating(scr){

    if(scr>this.avgHScore){return 'S';}
    else if(scr>this.avgScore){return 'A';}
    else if(scr > 0){return 'B';}
    else return 'F';
  },
  getColor(rating){
    if(rating == 'S') return 'yellow';
    if(rating == 'A') return 'blue';
    if(rating == 'B') return 'green';
    if(rating == 'F') return 'red';
  }
}
};
</script>
<template>
<div class="Vorschlaege">
    
    <div class="container" v-for="n in nutzer" :key="n.id">
        <div class="topOverview">
        <h2>{{n.vornamen + " " + n.nachname}}</h2>
        <div>Alter: {{n.alter}} </div>
        <div>Fachbereich: {{n.fachbereich}}</div>
        </div>
        <hobbyDiv>
            <ul>
                <li v-for="h in n.hobbys" :key="h">{{h}}</li>
            </ul>
        </hobbyDiv>
        <div class="Beschreibung">
          {{ n.beschreibung }}  
        </div>
        <div style="display:flex; flex-flow: column; justify-content: center;justify-items: center;align-content: center; align-items: center; align-self: center;" >
        <div id="nutzerIcons">
              <img :src="require('../assets/Yoga.png')" alt="Yoga"/>
              <img :src="require('../assets/Boxen.png')"  alt="Boxen"/>
              <img :src="require('../assets/Yoga.png')" alt="Yoga"/>
              
            </div>
            <div id="rating" :style="{color: getColor(ratingWrapper(n.score))}"> {{ ratingWrapper(n.score) }} </div>
            <button class="button">Anschreiben</button>
            
        </div>
    </div>
</div> 
</template>



<style scoped>
.Vorschlaege{
    display: flex;
    height: 70vh;
    width: auto;
    align-content:space-around;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-gutter: 1vh;
    padding-top: 1vh;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    
}
.container{
    margin-left:2.5vw;
    margin-right: 2.5vw;
    width:auto;
    min-width: 200px;
    height: 58vh;
    aspect-ratio: 9/16;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: start;
    justify-content: space-between;
    padding: 6vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
    overflow-y: hidden;
    overflow-x: hidden;
    font-size: calc((1vw+1vh));
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
}
#rating{
    position: absolute;
    bottom: 3%;
    right: 10%;
    font-weight: 600;
    
}
.nutzerIcons{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
img{
    height: 5vh;
    justify-self: center;
    align-self: center;
    margin: 1vh;
}
h2{
    font-family: Arial, Helvetica, sans-serif;
}
.button{
    
    border: var(--primary-color) 2px solid ;
    align-self: center;
    justify-self: center;
    border-radius: 5px;
    width: 15vh;
    height: 5vh;
    margin-left: 1vh;
    

}
</style>