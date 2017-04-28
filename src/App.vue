<template>
  <div id="app">
      <option_main></option_main>
  </div>
</template>

<script>
import OptionMain from "./components/OptionMain";
export default {
  components: {
    "option_main" : OptionMain
  },
  created () {
        console.log("created App.vue");
    }
}
</script>