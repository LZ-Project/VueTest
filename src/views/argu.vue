<template>
  <div>
{{ name}}
  </div>
</template>
<script lang="ts">

export default{
  props:{
    name:{
      type:[String],
      default:'lison',
    }
  }
}
</script>
