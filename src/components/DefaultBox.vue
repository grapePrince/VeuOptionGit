<template>
    <transition
        name="defaultbox-classes-transition"
        v-bind:enter-active-class="transitionClassDefaultBoxEnterActive"
        v-bind:leave-active-class="transitionClassDefaultBoxLeaveActive"  
    >
    <div v-show="viewBox" v-bind:style="layerDepthDefaultBox">
        <header class="header">
            <div class="hd_box">
                <button class="btn_prev" @click="gotomain()"><i>이전 페이지 이동</i></button>
                <h3 class="hd_tit">기본메일화면 설정</h3>
            </div>
        </header> 
        <section class="setting_body">
            <ul class="set_lst_sub">
                <li v-for="folder in folderList" style="display: block;">
                    <input type="radio" :id="folder.id" name="mailbox" data-clickcr="stl*d.all" value="on">
                    <label for="all">{{folder.name}}</label>
                </li>
            </ul>
        </section>
    </div>
    </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import * as Constants from '../constants';

export default {
    computed: {
        ...mapState([
            'folderList',
            'transitionClassDefaultBoxEnterActive',
            'transitionClassDefaultBoxLeaveActive',
            'layerDepthDefaultBox'
        ]),
        viewBox() {
            if (this.$store.state.view == "defaultbox") {
                return true;
            } else {
                return false;
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
