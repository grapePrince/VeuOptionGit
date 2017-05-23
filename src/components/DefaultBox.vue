<template>
    <div v-if="viewBox">
        <section class="setting_body">
            <ul class="set_lst_sub">
                <li v-for="folder in folderList" style="display: block;">
                    <input type="radio" :id="folder.id" name="mailbox" data-clickcr="stl*d.all" value="on">
                    <label for="all">{{folder.name}}</label>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import * as Constants from '../constants';

export default {
    computed: {
        ...mapState({
            folderList : 'folderList'
        }),
    }
}
</script>
