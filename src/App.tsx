import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGithubSquare,
  faJsSquare,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeSquare,
  faRssSquare,
  faCloud,
  faDatabase,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import brawltree from './assets/brawltree.png';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className={'title'}>
        <h1>
          <span>박동훈 🙂</span>
        </h1>
        <div>
          <span>
            <FontAwesomeIcon icon={faEnvelopeSquare} width={16} /> 이메일 :
          </span>
          <a href={'mailto:creator98@naver.com'}>creator98@naver.com</a>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithubSquare} width={16} /> 깃허브 :
          </span>
          <a href={'https://github.com/laetipark'} target={'_blank'}>
            https://github.com/laetipark
          </a>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faRssSquare} width={16} /> 블로그 :
          </span>
          <a href={'https://blex.me/@laetipark'} target={'_blank'}>
            https://blex.me/@laetipark
          </a>
        </div>
      </div>
      <div>
        <h2>
          <span>소개</span>
        </h2>
        <div>
          <h3>
            <FontAwesomeIcon icon={faCaretRight} width={16} /> 데이터를 통해
            일상을 편하고 즐겁게 만드는 것을 좋아합니다.
          </h3>
          <p>
            • 서비스의 기능이 수행되도록 구현하는 백엔드 개발에 관심 있어요.
          </p>
          <p>
            • API를 이용해 필요한 정보들의 데이터베이스 구조를 설계하고 전적
            사이트로 서비스해 보았습니다.
          </p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faCaretRight} width={16} /> 꾸준한 자기
            개발하려는 노력합니다.
          </h3>
          <p>
            • Node.js 프레임워크 학습하면서 express에서 NestJS로 마이그레이션
            진행해 보았습니다.
          </p>
          <p>
            • 참고하거나 기억하기 위해 문제 풀이 또는 배운 것들을 블로그와
            깃허브에 기록합니다.
          </p>
        </div>
      </div>
      <div>
        <h2>
          <span>프로젝트</span>
        </h2>
        <div>
          <h3>
            <FontAwesomeIcon icon={faCaretRight} width={16} /> Brawl Tree (2023.
            09)
          </h3>
          <div className={'projects'}>
            <div>
              <img src={brawltree} alt={'brawltree'} />
            </div>
            <div className={'contents'}>
              <p>
                •{' '}
                <a href={'https://developer.brawlstars.com/'} target={'_blank'}>
                  브롤스타즈 공식 API
                </a>
                를 이용해 개발한 전적 사이트
              </p>
              <p>• 플레이어 정보 전투 기록 DB에 수집</p>
              <p>• 플레이어 프로필과 정보 확인, 전투 맵 / 브롤러 별 통계</p>
              <p>
                • 언어 및 런타임 환경 :{' '}
                <FontAwesomeIcon icon={faJsSquare} width={16} /> Javascript,{' '}
                <FontAwesomeIcon icon={faNodeJs} width={16} /> Node.js(NestJS)
              </p>
              <p>
                • 클라우드 서비스 :{' '}
                <FontAwesomeIcon icon={faCloud} width={16} /> Oracle Cloud
              </p>
              <p>
                • 데이터베이스 :{' '}
                <FontAwesomeIcon icon={faDatabase} width={16} /> Mysql
              </p>
              <p className={'two-columns'}>
                <a href={'https://brawltree.me/'} target={'_blank'}>
                  Brawl Tree
                </a>
                <a href={'https://blossomstats.site/'} target={'_blank'}>
                  Blossom Stats(클럽 전용)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>
          <span>학력</span>
        </h2>
        <div>
          <h3>
            <FontAwesomeIcon icon={faCaretRight} width={16} /> 한라대학교 (2017.
            03 - 2023. 02)
          </h3>
          <p>• ICT융합공학부 컴퓨터공학전공 학사 졸업 (4.44 / 4.5)</p>
          <p>• 알고리즘, 데이터베이스, 네트워크, 웹 프로그래밍 등 이수</p>
        </div>
      </div>
      <div>
        <h2>
          <span>기타</span>
        </h2>
        <div>
          <h3>
            <FontAwesomeIcon icon={faCaretRight} width={16} /> 정보처리기사
            (2022.09)
          </h3>
          <h3>
            <FontAwesomeIcon icon={faCaretRight} width={16} /> 한라대학교 제
            14기 나눔공부방 (2020. 12)
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
    </React.Fragment>
  );
}

export default App;
