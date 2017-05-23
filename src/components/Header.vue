<template>
    <header class="header">
        <div class="hd_box">
            <button v-if="showPrev" class="btn_prev" @click="gotomain()"><i>이전 페이지 이동</i></button>
            <h3 class="hd_tit">{{title}}</h3>
        </div>
    </header>            
</template>


<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        title() {
        	let view = this.$store.state.view;
        	let title;
        	switch(view) {
        	    case "main" :
        	        title = "설정";
        	    break;
        	    case "defaultbox" :
        	        title = "기본메일화면 설정";
        	    break;
        	    default : 
        	        title = "설정";
        	    break;
        	}
            return title;
        },
        showPrev() {
            if (this.$store.state.view == "main") {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        ...mapActions({
          gotomain: 'gotomain'
        })
    }
}
</script>
