import React from "react";

function Signup(props){
    return(
        <div>
            <main class="form-signin m-auto">
            <form>
                <p class="p-h1 title-margin-login">회원가입</p>

                <div class="form-floating">
                    <input type="text" class="form-control h-100" id="floatingInput" placeholder="학번"  />
                    <label for="floatingInput">학번</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control h-100" id="floatinngPassword" placeholder="비밀번호" />
                    <label for="floatingPassword">비밀번호</label>
                </div>

                <div class="row-signup row">
                <div class="col-md-8">
                    <select class="form-select" aria-label="전공">
                        <option selected>전공</option>
                        <option value="1">전자전기공학부</option>
                        <option value="2">컴퓨터공학과</option>
                        <option value="3">산업 데이터공학과</option>
                        <option value="3">신소재공학과</option>
                        <option value="3">화학공학과</option>
                        <option value="3">기계 시스템디자인공학과</option>
                        <option value="3">건축학과</option>
                        <option value="3">실내건축학과</option>
                        <option value="3">도시공학과</option>
                        <option value="3">경영학과</option>
                        <option value="3">영어영문학과</option>
                        <option value="3">독어독문학과</option>
                        <option value="3">불어불문학과</option>
                        <option value="3">국어국문학과</option>
                        <option value="3">법학과</option>
                        <option value="3">수학교육과</option>
                        <option value="3">국어교육과</option>
                        <option value="3">영어교육과</option>
                        <option value="3">역사교육과</option>
                        <option value="3">교육학과</option>
                        <option value="3">동양화과</option>
                        <option value="3">회화과</option>
                        <option value="3">판화과</option>
                        <option value="3">조소과</option>
                        <option value="3">목조형가구학과</option>
                        <option value="3">예술학과</option>
                        <option value="3">금속조형디자인과</option>
                        <option value="3">도예유리과</option>
                        <option value="3">섬유미술패션디자인과</option>
                        <option value="3">시각디자인과</option>
                        <option value="3">산업디자인과</option>
                        <option value="3">미술대학 자율전공</option>
                        <option value="3">경제학과</option>
                        <option value="3">캠퍼스자율전공</option>
                        <option value="3">뮤지컬전공</option>
                        <option value="3">실용음악전공</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <select class="form-select" aria-label="학년">
                        <option selected>학년</option>
                        <option value="1">1학년</option>
                        <option value="2">2학년</option>
                        <option value="3">3학년</option>
                        <option value="4">4학년 이상</option>
                    </select>
                </div>
                </div>

                <button class="btn btn-outline-primary w-100" type="submit">다음</button>
            </form>
            </main>
        </div>
    );
}

export default Signup;