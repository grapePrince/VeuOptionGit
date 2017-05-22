<template>
  <div id="app">
      <option_header></option_header>
      <option_main></option_main>
  </div>
</template>

<script>
import OptionMain from "./components/OptionMain";
import OptionHeader from "./components/OptionHeader";
export default {
  components: {
    "option_main" : OptionMain,
    "option_header" : OptionHeader
  },
  created () {
        console.log("created App.vue");
    }
}
</script>