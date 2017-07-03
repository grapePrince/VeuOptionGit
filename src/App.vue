<template>
  <div id="app" class="cover_setting">
      <option_main></option_main>
      <defaultbox></defaultbox>
  </div>
</template>

<script>
import Main from "./components/Main";
import DefaultBox from "./components/DefaultBox";

export default {
  components: {
    "option_main" : Main,
    "defaultbox" : DefaultBox
  },
  created () {
        console.log("created App.vue");
    }
}
</script>