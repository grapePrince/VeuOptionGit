<template>
    <div v-if="viewMain">
        <section class="setting_body">
            <ul class="set_lst">
                <li>
                    <h2>기본메일함 설정</h2>
                    <a data-clickcr="stl.dfmbox" @click="gotomailbox">{{defaultBoxName}}</a>
                    <span class="ico"><i>설정</i></span>
                </li>
                <li>
                    <h2>보내는사람 이</h2>
                    <a data-clickcr="stl.dfmbox">{{senderName}}</a>
                    <span class="ico"><i>설정</i></span>
                </li>
                <li>
                    <h2>모바일 서명</h2>
                    <a data-clickcr="stl.sign">사용함</a>
                    <span class="ico"><i>설정</i></span>
                </li>
                <li>
                    <h2>글자 크기</h2>
                    <p class="font_size">
                        <i>현재 글자 크기</i>
                        <strong>보통</strong>
                        <button type="button" class="btn_small" data-clickcr="stl*p.small">
                            <i>작게</i>
                        </button>
                        <button type="button" class="btn_large" data-clickcr="stl*p.large">
                            <i>크게</i>
                        </button>
                    </p>
                </li>
                <li>
                    <h2>메일 목록보기</h2>
                    <a data-clickcr="stl.list">숫자 페이징</a>
                    <span class="ico"><i>설정</i></span>
                </li>
                <li>
                    <h2>메일 뷰타입 설정</h2>
                    <a>기본 보기</a>
                    <span class="ico"><i>설정</i></span>
                </li>
                <li>
                    <h2>화면 너비에 맞춰 보기</h2>
                    <p class="chk">
                        <input type="checkbox" id="view_zoom" name="view_type" data-clickcr="stl.fit" v-model="view_type_value">
                    </p>
                </li>
                <li>
                    <h2>좌우로 밀어 이전/다음 메일보기</h2>
                    <p class="chk">
                        <input type="checkbox" id="flicking_chk" name="flicking_type" data-clickcr="stl.flick" v-model="flicking_type_value">
                    </p>
                </li>
                <li>
                    <h2>메일함 기준 시간 설정</h2>
                    <a>GMT +09:00 (서울, 도쿄)</a>
                    <span class="ico"><i>설정</i></span>
                </li>
            </ul>
        </section>
        <section class="setting_footer">
            <div class="btn_box">
                <button data-clickcr="fot.logout">로그아웃</button>
                <button data-clickcr="fot.me" class="me"><i>me</i></button>
                <button data-clickcr="fot.gopc"> PC버전 </button>
                <button data-clickcr="fot.naverapp">전체 앱</button>
                <button data-clickcr="fot.sitemap">전체서비스</button>
            </div>
            <div class="link_box">
                <a data-clickcr="fot.help">메일 고객센터</a>
                <a data-clickcr="fot.help">오류신고</a>
            </div>
            <address><!-- react-text: 3041 -->©<!-- /react-text -->
                <a data-clickcr="fot.nhncorp">NAVER Corp.</a>
            </address>
        </section>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            defaultBoxName: 'defaultBoxName'
        }),
        ...mapGetters({
            viewMain: 'viewMain',
        })
    },
    methods: mapActions([
        'gotomailbox'
    ]),
    created () {
        console.log("OptionMain created");
    }
}
</script>
