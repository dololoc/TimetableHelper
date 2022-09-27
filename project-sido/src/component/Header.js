import React from "react";
import logo from './logo.svg';

function Header(props) {
    return(
            <div className="navigation">
                {/* <nav class="navbar navbar-expannd-lg bg-light">
                    <div class="containner-fluid">
                        <a class="navbar-brand" href="#">
                            대학생을 위한 시간표 도우미
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">이용안내</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">회원가입</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav> */}
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                       <a class="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
                       <p class="p-p p-nav">대학생을 위한 시간표 도우미</p>
                       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                        </button>
                       <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                          <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">이용안내</a>
                            <a class="nav-link" href="#">회원가입</a>
                            <a class="nav-link disabled" href="#">내시간표</a>
                           <a class="nav-link disabled">게시판</a>
                      </div>
                    </div>
                  </div>
                </nav>
            </div>
    );
}

export default Header;