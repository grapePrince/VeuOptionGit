<template>
	<div v-if="main">
        <header class="header">
            <div class="hd_box">
                <h3 class="hd_tit">{{head_title}}</h3>
                <button class="btn_close" :data-clickcr="head_cancelbtn_clickcr">
                    <i>{{head_cancelbtn_info}}</i>
                </button>
            </div>
        </header>
    </div>    
</template>