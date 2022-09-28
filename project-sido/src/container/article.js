import '../styles/article/article.scss';
// import classInfoList from './class-info-list';
import BlueBtn from '../component/bluebutton';
// import GoSchedule from './go-schedule';
//  import TopBanner from './Top-banner';
import Header from '../component/Header';
import Vy from '../component/select-class-schedule';

export default function Article() {
  return (
    <>
      {/* // <Header /> */}
      <h1 className="article__title">
        이번 학기에 수강할 필수 과목들을 선택해주세요
      </h1>
      <span className="article__sub-title">
        강의 정보는 다음 페이지에서도 확인하실 수 있습니다
      </span>
      <Vy />
      <BlueBtn text="시간표 짜러가기" />
    </>
  );
}
