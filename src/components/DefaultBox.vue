<template>
<div v-if="viewMailbox">
    <div>
        <section class="setting_body">
            <ul class="set_lst_sub">
            <!--
                <li v-for="mailbox in mailboxes" style="display: block;">
                    <input type="radio" :id="mailbox.id" name="mailbox" data-clickcr="stl*d.all" value="on">
                    <label for="all">{{mailbox.title}}</label>
                </li>
            -->    
            </ul>    
        </section>
    </div>
</div>
</template>

<scripts>
import { mapGetters, mapActions } from "vuex";

export default {
    created () {
        console.log("created");
    }
} 
</scripts>