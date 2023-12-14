import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div>
      <h2>
        <span>자격증 및 기타 활동</span>
      </h2>
      <div>
        <h3>
          <FontAwesomeIcon icon={faCaretRight} width={16} /> 정보처리기사
          (2022.09)
        </h3>
        <p>• 한국산업인력공단 발급(22202110222N)</p>
      </div>
      <div>
        <h3>
          <FontAwesomeIcon icon={faCaretRight} width={16} /> 한라대학교 제 14기
          나눔공부방 (2020. 12)
        </h3>
        <p>• 3명의 튜티와 함께 2개월 동안 진행한 전공 튜터 활동</p>
        <p>
          • 학교에서 학습한 C언어의 부족한 것들을 확인하고 질문 받아 복습 진행
        </p>
        <p>
          • Baekjoon Online Judge에서 학습한 주제 등 문제 풀이 진행하고 서로의
          코드를 리뷰
        </p>
      </div>
    </div>
  );
};

export default Experience;
