import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
  return (
    <div>
      <h2>
        <span>소개</span>
      </h2>
      <div>
        <h3>
          <FontAwesomeIcon icon={faCaretRight} width={16} />{' '}
          <span>
            데이터를 통해 일상을 편하고 즐겁게 만드는 것을 좋아합니다.
          </span>
        </h3>
        <div>
          <div>
            <p>
              <span>
                • 데이터를 구조화하고 서비스 기능이 수행되도록 구현하는
              </span>
              <span style={{ fontWeight: 800 }}>백엔드</span>
              <span>개발에 관심 있어요.</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>
          <FontAwesomeIcon icon={faCaretRight} width={16} />{' '}
          <span>꾸준한 자기 개발하려는 노력합니다.</span>
        </h3>
        <div>
          <p>
            <span>• 참고하거나 기억하기 위해 문제 풀이 또는 배운 것들을</span>
            <span style={{ fontWeight: 800 }}>블로그</span>
            <span>와</span>
            <span style={{ fontWeight: 800 }}>깃허브</span>
            <span>에 기록합니다.</span>
          </p>
          <p>
            <span style={{ fontWeight: 800 }}>• solved.ac :</span>
            <a
              href={'https://solved.ac/creator98'}
              style={{ padding: 0, border: 'none' }}
            >
              <img
                src={
                  'https://mazassumnida.wtf/api/mini/generate_badge?boj=creator98'
                }
                alt={'solved.ac 프로필'}
              />
            </a>
          </p>
        </div>
      </div>
      <div>
        <h3>
          <FontAwesomeIcon icon={faCaretRight} width={16} />{' '}
          <span>이런 것들을 주로 다룰 줄 알아요!</span>
        </h3>
        <div>
          <p>
            <span style={{ fontWeight: 800 }}>• 언어 : </span>
            <img
              src={
                'https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=000000'
              }
              alt={'Javascript'}
            />
            <img
              src={
                'https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=FFFFFF'
              }
              alt={'Typescript'}
            />
            <img
              src={
                'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=FFFFFF'
              }
              alt={'Python'}
            />
          </p>
          <p>
            <span style={{ fontWeight: 800 }}>• 런타임 및 프레임워크 : </span>
            <img
              src={
                'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=FFFFFF'
              }
              alt={'Node.js'}
            />
            <img
              src={
                'https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=FFFFFF'
              }
              alt={'Express'}
            />
            <img
              src={
                'https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=FFFFFFF'
              }
              alt={'NestJS'}
            />
            <img
              src={
                'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=000000'
              }
              alt={'React'}
            />
          </p>
          <p>
            <span style={{ fontWeight: 800 }}>• 도구 : </span>
            <img
              src={
                'https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=FFFFFF'
              }
              alt={'MySQL'}
            />
            <img
              src={
                'https://img.shields.io/badge/OCI-F80000?style=flat-square&logo=oracle&logoColor=FFFFFF'
              }
              alt={'OCI'}
            />
            <img
              src={
                'https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=FFFFFF'
              }
              alt={'AWS'}
            />
            <img
              src={
                'https://img.shields.io/badge/IntelliJ-5A5A5A?style=flat-square&logo=IntelliJIDEA&logoColor=FFFFFF'
              }
              alt={'IntelliJ'}
            />
            <img
              src={
                'https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=FFFFFF'
              }
              alt={'VisualStudio'}
            />
            <img
              src={
                'https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=FFFFFF'
              }
              alt={'Ubuntu'}
            />
            <img
              src={
                'https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=FFFFFF'
              }
              alt={'Github'}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
