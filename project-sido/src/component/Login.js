import React from "react";

function Login(props){
    return(
        <div>
            <main class="form-signin m-auto">
            <form>
                <p class="p-h1 title-margin-login">로그인</p>

                <p class="p-p text-end">아직 회원이 아니신가요? <a href="#">회원가입</a></p>
                <div class="form-floating">
                    <input type="text" class="form-control h-100" id="floatingInput" placeholder="학번"  />
                    <label for="floatingInput">학번</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control h-100" id="floatinngPassword" placeholder="비밀번호" />
                    <label for="floatingPassword">비밀번호</label>
                </div>

                <button class="btn btn-primary btn-sido" type="submit">로그인</button>
                <p class="p-p a-pwpage"><a href="#">비밀번호 찾기</a></p>
            </form>
            </main>
        </div>
    );
}

export default Login;