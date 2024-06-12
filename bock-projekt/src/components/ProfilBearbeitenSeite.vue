<template>
    <div class="Profilerstellen">
        <div id="content">
          <TextFeld :name="name" :alter="alter" :fb="fachbereich" :hobby="hobby"/>
          <TextFeld2Test :placeholder="textAbout"/> 
          <SpeicherButton />
        </div>
 
    </div>    
</template>

<script>
import TextFeld from './Textfeld.vue';
import TextFeld2Test from './Textfeld2Test.vue';
import SpeicherButton from './SpeicherButton.vue';

export default {
  name: 'ProfilBearbeitenSeite',
  components: {
    TextFeld,
    TextFeld2Test,
    SpeicherButton,
  },
  data:() => ({
    textAbout:"Ich bin Paula und studiere Informatik im 4. Semester. Meine Lieblingsthemen sind Webtechnologien und Betriebssysteme. In meiner Freizeit bin ich total gerne draußen und mache Yoga, alleine macht es aber weniger spaß, also schreibt mich an",
    name: "Paula",
    alter: "Alter: 22",
    fachbereich:"Fachbereich: Informatik",
    hobby: "Hobbys: Yoga, Kickboxen"
  })
};
</script>

<style>
#content{
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height:75vh;
    background-color: #00c853;
}
</style>