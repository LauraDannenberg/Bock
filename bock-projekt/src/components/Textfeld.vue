<template>
    <div class="textfeld">
    <form @submit.prevent="emitChange">
            <div class="form-group">
                <input type="text" id="firstname" v-model="firstname" :placeholder="name" required class="Firstname" @input="emitChange" />
                </div>
                <ul>
                <div class="form-group">
                    <input type="text" id="age" v-model="age" :placeholder="alter" required @input="emitChange"/>
                </div>
                <div class="form-group">
                    <input type="text" id="fachbereich" v-model="fachbereich" :placeholder="fb" required @input="emitChange"/>
                </div>
                <div class="form-group">
                    <input type="text" id="hobby" v-model="Hobby" :placeholder="hobby" required @input="emitChange"/>
                </div>
                </ul>
    </form>
    </div>
</template>
<script>
 export default{
    name:"TextFeld",
    props: {
        name:{
            type: String, default: "Dein Name..." ,
        },
        alter: {type: String, default: "Alter.." },
        fb: {type: String ,default:"Fachbereich..." },
        hobby: {type: String, default: "Hobby..." },
  },
  data() {
    return {
      firstname: "",
      age: "",
      fachbereich: "",
      Hobby: "",
    };
  },
  methods: {
    emitChange() {
      this.$emit('update:firstname', this.firstname);
      this.$emit('update:age', this.age);
      this.$emit('update:fachbereich', this.fachbereich);
      this.$emit('update:hobby', this.Hobby);
    },
  },
  watch: {
    firstname: 'emitChange',
    age: 'emitChange',
    fachbereich: 'emitChange',
    Hobby: 'emitChange',
  },
}



</script>
<style>
form {
    background-color: white;
    padding: 0 50px 0 50px;
    border-radius: 10px;
    box-shadow: 10px 10px 0px 0px #b370b3, -8px -8px 15px 1px rgba(0,0,0,0);
    overflow: hidden;
    
}

.form-group {
    margin: 2vh 0 0 0;
}


.Firstname{
    font-size: 2rem;
    font-weight: bold;
}

.textfeld{
    
}

</style>