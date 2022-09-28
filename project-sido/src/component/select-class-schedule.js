import '../styles/article/gridscss.scss';

export default function Vy() {
  const exServerData = [
    {
      className: '영어',
      Professor: 'Bora Kim',
      ClassTime: '월12, 목1',
      lectureRoom: 'R426',
      Classification: '교양필수',
      Grades: '3',
    },
    {
      className: '창의적테크노프레너십설계(캡스톤디자인)(*)',
      Professor: '엄태식, 최수형, 김범상',
      ClassTime: '수9, 수10, 수11',
      lectureRoom: 'Q403',
      Classification: '전공필수',
      Grades: '3',
    },
    {
      className: '논리적사고와글쓰기(인문)',
      Professor: '이정환',
      ClassTime: '화34, 목34',
      lectureRoom: 'C720',
      Classification: '교양필수',
      Grades: '3',
    },
    {
      className: '논리적사고와글쓰기(인문)',
      Professor: '홍인숙',
      ClassTime: '월34, 수34',
      lectureRoom: 'C717',
      Classification: '교양필수',
      Grades: '3',
    },
    {
      className: '논리적사고와글쓰기(인문)',
      Professor: '구봉곤',
      ClassTime: '화78, 목78',
      lectureRoom: 'C718',
      Classification: '교양필수',
      Grades: '3',
    },
    {
      className: '논리적사고와글쓰기(인문)',
      Professor: '김기란',
      ClassTime: '수78, 금78',
      lectureRoom: 'C709',
      Classification: '교양필수',
      Grades: '3',
    },
    {
      className: '논리적사고와글쓰기(인문)',
      Professor: '유정월',
      ClassTime: '화78, 목78',
      lectureRoom: 'C715',
      Classification: '교양필수',
      Grades: '3',
    },
    {
      className: '소프트웨어공학',
      Professor: '김한규',
      ClassTime: '월3, 화3, 수3',
      lectureRoom: 'T503,T606',
      Classification: '전공필수',
      Grades: '3',
    },
    {
      className: '소프트웨어공학',
      Professor: '김은삼',
      ClassTime: '월8, 화8, 목8',
      lectureRoom: 'T502',
      Classification: '전공필수',
      Grades: '3',
    },
  ];

  return (
    <div className="mainVy__grid">
      <div className="grid__grid-header">
        <span>과목명</span>
        <span>담당교수</span>
        <span>수업시간</span>
        <span>강의실</span>
        <span>수강구분</span>
        <span>학점</span>
      </div>
      <div className="grid__contents">
        {exServerData.map((data) => {
          return (
            <>
              <div className="grid__contents__columns">
                <span className="grid__contents__className">
                  {data.className}
                </span>
                <span className="grid__contents__Professor">
                  {data.Professor}
                </span>
                <span className="grid__contents__ClassTime">
                  {data.ClassTime}
                </span>
                <span>{data.lectureRoom}</span>
                <span>{data.Classification}</span>
                <span>{data.Grades}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
