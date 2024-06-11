<script>


export default {
  name: 'SuchSeite',
  data:()=>({
    nutzer: [
    {id: 2, name: "Max Mustermann", alter: "21", fachbereich: 'Informatik und Elektrotechnik',hobbies:["Yoga","Karate","Gitarre"],beschreibung: "Hey ich spiele übrigens Gitarre (aber nur Wonderwall)"},    
    {id: 2, name: "Pauline Musterfrau", alter: "20", fachbereich: 'Informatik und Elektrotechnik',hobbies:["Webdevelopment","Kickboxen","Häkeln"],beschreibung: "Wenn ich Webseiten baue brauchen die unnedingt ganz viel Klickibunti"},
    {id: 2, name: "Chris Musterperson", alter: "20", fachbereich: 'Architektur',hobbies:["Lego","Minecraft","Züge"],beschreibung: "Ich mag Züge."},
    {id: 2, name: "Dieter Bohlen", alter: "100+", fachbereich: '"Musik"',hobbies:["Coinmaster"],beschreibung: "Von Bohlen empfohlen."},
    {id: 1, name: "Mark Fischbach", alter: 34, fachbereich: "Yes",hobbies:["Youtube","FNAF","Linsen"],beschreibung: "Hello everybody, my name is Markiplier and welcome to Five Nights at Freddy's, an indie horror game that you guys suggested, en masse, and I saw that Yamimash played it and he said it was really really good... So I'm very eager to see what is up. And that is a terrifying animatronic bear!"},
       
    {id: 2, name: "Albert Einstein", alter: "100+", fachbereich: "Irgendwas Schlaues",hobbies:["Denken","Mathe","Physik"],beschreibung: "Ich bin der echte Albert, gib mir deine Kreditkarteninformationen."},
        
        
        
        
    ]

  })
};
</script>
<template>
<div class="Vorschlaege">
    
    <div class="container" v-for="n in nutzer" :key="n.id">
        <div class="topOverview">
        <h2>{{ n.name }}</h2>
        <div>Alter: {{n.alter}} </div>
        <div>Fachbereich: {{n.fachbereich}}</div>
        </div>
        <hobbyDiv>
            <ul>
                <li v-for="h in n.hobbies" :key="h">{{h}}</li>
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
            <button class="button">Anschreiben</button>
        </div>
    </div>
</div> 
</template>



<style scoped>
.Vorschlaege{
    display: flex;
    height: 75vh;
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
    overflow-y: scroll;
    overflow-x: hidden;
    font-size: calc((1vw+1vh));
}
.nutzerIcons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-self: center;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    flex-flow: wrap row;
}
img{
    height: 5vh;
    justify-self: center;
    align-self: center;
}
h2{
    font-family: Arial, Helvetica, sans-serif;
}
.button{
    
    border: var(--primary-color) 2px solid ;
    align-self: center;
    justify-self: center;
    border-radius: 5px;
    width: 15vw;
    height: 5vh;
    margin-left: 1vh;
    

}
</style>