<template>
    <div class="profil">
        <div class=" rechts">
              <button type="submit" >
                <router-link to="/App/Profile/Bearbeiten"><img :width="35" :src="require('../assets/Stift.png')"></router-link>
              </button>
        </div>
        <div id="mitte" class="content">
          
            <div>
              <img :src="require('../assets/Yoga.png')" :width="160" alt="Yoga"/>
              <img :src="require('../assets/Boxen.png')" :width="180" alt="Boxen"/>
            </div>

            <div class="container">
            {{name}}
            <ul>
              <li>Alter: {{ age  }} Jahre</li>
              <li>Fachbereich: {{ fachbereich }}</li>
              <li>Hobby: {{ hobby }}</li>
            </ul>
            </div>
            <div class="container">
              Hei! <br> {{ textAbout }}
            </div>
            
        </div>


        
    </div>    
</template>

<script>


export default {
  name: 'ProfilSeite',
  data:() => ({
    textAbout:"Ich bin Paula und studiere Informatik im 4. Semester. Meine Lieblingsthemen sind Webtechnologien und Betriebssysteme. In meiner Freizeit bin ich total gerne draußen und mache Yoga, alleine macht es aber weniger spaß, also schreibt mich an",
    name: "Paula",
    age: 22,
    fachbereich:"Informatik",
    hobby: "Yoga, Kickboxen"
    
  }) 
}
</script>

<style>

.content{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height:75vh;
    
}
.rechts{
   display: flex;
   flex-direction: row-reverse;
}

.container{
  width: 40vw;  
  height:20%;
  margin: 2vh 0 2vh 0;
  padding: 15px;
  background-color: white;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);

}
.inline{
  margin-top: -15vh;
  display: flex;
  flex-direction: row;
}

img{
  margin-left: 2vw;
}

button{
  margin: 15px 15px 0 0;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);
}


</style>