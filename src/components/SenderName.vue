<div v-if="sendername">
            <header class="header">
                <div class="hd_box">
                    <h3 class="hd_tit">보내는 사람 이름</h3>
                    <button class="btn_prev" data-clickcr="stl*s.cancel" @click="gotomain"><i>이전 페이지 이동</i></button>
                    <div class="option">
                        <button type="button" class="btn_save" data-clickcr="stl*s,save"><i>현재 내용 저장</i></button>
                    </div>
                </div>
            </header>
            <div>
                <section class="setting_body">
                    <p class="sender_infor">
                        <!-- react-text: 3898 -->메일을 받는 상대에게 보여지는 이름입니다.<!-- /react-text -->
                        <br>
                        <!-- react-text: 3900 -->모바일에서 설정한 이름은 PC웹 메일에서도 반영됩니다.<!-- /react-text -->
                    </p>
                    <ul class="set_lst_sub sender_type">
                        <li>
                            <div>
                                <input type="radio" id="sender01" name="mail_sender" value="on" checked="">
                                <label for="sender01">보내는 사람 이름</label>
                            </div>
                            <p class="slct_box">
                                <label class="selected_item" for="sendername_select1">별명</label>
                                <select data-clickcr="stl*s.selname" class="hidden_select" id="sendername_select1">
                                    <option value="naverName">nvmail</option>
                                    <option value="blogNickname">별명</option>
                                    <option value="naverNickname">nvmail060</option>
                                </select>
                                <i>으로 선택</i>
                            </p>
                        </li>
                        <li>
                            <div>
                                <input type="radio" id="sender02" data-clickcr="" name="mail_sender" value="on">
                                <label for="sender02">직접입력</label>
                            </div>
                            <div class="sign_box" style="display: none;">
                                <textarea id="edit_sender" data-clickcr="stl*s.input"></textarea>
                                <p class="byte">
                                    <i>현재 입력 바이트 수 :</i>
                                    <strong>0</strong>
                                    <span><!-- react-text: 3977 --> / <!-- /react-text --><!-- react-text: 3978 -->40<!-- /react-text --></span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>