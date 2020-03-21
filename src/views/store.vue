<template>
  <div>
<a-input @input="handleInput"/>
    <p> {{inputValue}}</p>
<a-show :content="inputValue"/>
  </div>
</template>
<script>
import AInput from '@/components/AInput.vue'
import AShow from '@/components/AShow.vue'
export default {
name:'store',
data(){
return{
  inputValue:''
}
},
components:{
  AInput,
  AShow
},
methods:{
handleInput(val){
  this.inputValue=val
}
}
}
</script>
