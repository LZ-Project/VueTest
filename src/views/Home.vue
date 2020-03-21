<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <b>{{food}}</b>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转下一页</button>
    <button @click="handleClick('replace')">替换下一页</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props:{
    food:{
      type:String,
      default:'apple',
    }
  },

  beforeRouteEnter(to,from,next){
    //
    console.log(to.name)
    next()
  },
    beforeRouteLeave(to,from,next){
    //
    const leave=confirm('确定要离开？')
    if(leave)next()
    else next(false)
  },
      beforeRouteUpdate(to,from,next){
    //

  },
  methods:{

    handleClick(type){
      if(type==='back')
      this.$router.go(-1)
      //else if(type==='push')this.$router.push('/parent')
      else if(type==='push'){
      const name ='lison'
      this.$router.push({

       path: `/argu/${name}`

        // name:'argu',
        // params: {
        //   name: 'lison'
        // }


        // query:{
        //   name:'lison'
        // }
      })
      }
      else if(type==='replace')this.$router.replace({
        name:'parent'
      })
    }
  }
}
</script>
