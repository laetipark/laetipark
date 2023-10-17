import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faCloud,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import brawltree from '../assets/brawltree.png';
import { faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Project = () => {
  return (
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
            <p>• 플레이어 프로필과 정보, 전투 맵 / 브롤러 별 통계 확인</p>
            <p>
              <span style={{ fontWeight: 800 }}>• 언어 및 런타임 환경 :</span>
              <span>
                <FontAwesomeIcon icon={faJsSquare} width={16} /> Typescript,
              </span>
              <span>
                <FontAwesomeIcon icon={faNodeJs} width={16} /> Node.js(NestJS)
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 800 }}>• 클라우드 서비스 :</span>
              <span>
                <FontAwesomeIcon icon={faCloud} width={16} /> Oracle Cloud
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 800 }}>• 데이터베이스 :</span>
              <FontAwesomeIcon icon={faDatabase} width={16} /> Mysql
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className={'two-columns'}>
          <span style={{ fontWeight: 800 }}>• Blossom Stats :</span>
          <span>같이 게임을 즐기는 사람들 전용으로 개발한</span>
          <span style={{ fontWeight: 800 }}>첫 전적 사이트 프로젝트</span>
          <span>입니다!</span>
        </p>
        <p className={'two-columns'}>
          <span style={{ fontWeight: 800 }}>• Brawl Tree :</span>
          <span style={{ fontWeight: 800 }}>프로젝트를 확장하여</span>
          <span>더 많은 데이터를 수집하고 다른 사람들도 이용할 수 있는</span>
          <span style={{ fontWeight: 800 }}>
            개발 중인 전적 사이트 프로젝트
          </span>
          <span>입니다!</span>
        </p>
        <p className={'two-columns'}>
          <span style={{ fontWeight: 800 }}>• 프로젝트 링크 :</span>
          <a href={'https://blossomstats.site/'} target={'_blank'}>
            Blossom Stats
          </a>
          <a href={'https://brawltree.me/'} target={'_blank'}>
            Brawl Tree
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
