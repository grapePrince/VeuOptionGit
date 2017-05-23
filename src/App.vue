<template>
  <div id="app">
      <option_header></option_header>
      <option_main></option_main>
      <defaultbox></defaultbox>
  </div>
</template>

<script>
import Main from "./components/Main";
import Header from "./components/Header";
import DefaultBox from "./components/DefaultBox";

export default {
  components: {
    "option_main" : Main,
    "option_header" : Header,
    "defaultbox" : DefaultBox
  },
  created () {
        console.log("created App.vue");
    }
}
</script>