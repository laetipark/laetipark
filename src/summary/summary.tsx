import { faCaretRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Summary = () => {
  const [checked, setChecked] = useState(false);
  const arrowRotate = {
    transform: checked ? 'rotate(90deg)' : '',
    transition: 'transform 0.3s ease',
  };

  return (
    <div>
      <h2>
        <span>소개</span>
      </h2>
      <div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faCaretRight} width={16} />{' '}
            <div>
              <span>데이터를 통해 일상을 편하고</span>
              <span>즐겁게 만드는 것을 좋아합니다.</span>
            </div>
          </h3>
        </div>
        <div>
          <div>
            <p>
              <div>
                <span>• 데이터를 구조화하고 서비스 기능이</span>
                <span>수행되도록 구현하는</span>
                <span className={'mark'}>백엔드</span>
                <span>개발에 관심 있어요.</span>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>
          <FontAwesomeIcon icon={faCaretRight} width={16} />{' '}
          <div>
            <span>자기 계발과 자기 개발을 위해</span>
            <span>꾸준히, 적극적으로 도전합니다.</span>
          </div>
        </h3>
        <div>
          <p>
            <div>
              <span>• 참고하거나 기억하기 위해 문제 풀이</span>
              <span>또는 배운 것들을</span>
              <span className={'mark'}>블로그</span>
              <span>와</span>
              <span className={'mark'}>깃허브</span>
              <span>에 기록합니다.</span>
            </div>
          </p>
          <div>
            <label form={'check'}>
              <FontAwesomeIcon
                icon={faAngleRight}
                width={12}
                style={arrowRotate}
              />
              <strong>목록</strong>
              <input
                id={'check'}
                type={'checkbox'}
                onChange={({ target: { checked } }) => setChecked(checked)}
              />
            </label>
            {checked && (
              <p>
                <p>
                  • <span className={'mark'}>코딩 테스트</span>:
                  <a
                    href={'https://github.com/laetipark/coding-test'}
                    style={{ padding: 0, border: 'none' }}
                    target={'_blank'}
                  >
                    <img
                      src={
                        'https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=FFFFFF'
                      }
                      alt={'repository'}
                    />
                  </a>
                  <a
                    href={'https://blex.me/@laetipark/series/coding-test'}
                    style={{ padding: 0, border: 'none' }}
                    target={'_blank'}
                  >
                    <img
                      src={
                        'https://img.shields.io/badge/BLEX-181717?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDE1NSAxNDIiPiAgICA8cGF0aCBmaWxsPSIjZmZmIiAgICAgICAgICBkPSJNMzMgOTVIMjNsLTUgMS00IDEtNiA0YTIyIDIyIDAgMCAwLTYgMTdjMCAxMiAxMSAyMCAyMyAyMiAxMyAyIDMwLTE5IDMwLTE5bDE0LTE4IDE0LTE5IDEwLTE0IDEyLTE3IDctMTEgNy05di0xbDEzLTIwIDYtMTEtMjYgMzEtOCAxMC05IDExLTEyIDE1LTExIDEzLTggMTAtMTEgMTItOCA4LTggOC03IDZjLTggMy0xMy0zLTE1LTV2LTljMi02IDgtMTAgMTgtMTZabTM3IDM5YzIgMiA4IDQgMTMgNWgzM2wxNS01YTQ2IDQ2IDAgMCAwIDE1LTE0bDUtMTEgMi05YzAtNC0yLTgtNC0xMWwtOS05LTExLTZzOC0yIDEwLTRjNS0yIDQtMiA3LTVsNi04YzItMyAxLTUgMi05IDAtNC0xLTYtMy05bC01LTktNy02LTgtNWMtNC0zLTgtNC0xMS00bC0xNC0yYTEzNCAxMzQgMCAwIDAtNDMgMiAxNzIgMTcyIDAgMCAwLTM1IDE0Yy00IDEtNiA0LTYgNGE1OCA1OCAwIDAgMCAxMyAzbDEwIDRhOTkgOTkgMCAwIDAgMTggOWwtMy00LTUtNS02LTVjLTUtNC00LTMtMi00YTc4IDc4IDAgMCAxIDE1LTVsMTItM2gyMGwxNCAxYzMgMSA5IDEgMTIgMyAzIDEgNCAyIDUgNGw3IDcgNCA2YzEgNCAwIDgtMiAxMmwtNiA3Yy00IDQtMTIgOC0xMiA4bC02IDQgNiA0IDEzIDEyYzkgOSA3IDEzIDEgMjJsLTkgOS0xNSA4LTEyIDItMTEgMkg3MFoiLz48L3N2Zz4='
                      }
                      alt={'repository'}
                    />
                  </a>
                </p>
                <p>
                  • <span className={'mark'}>웹 프로그래밍</span>:
                  <a
                    href={'https://github.com/laetipark/web-programming'}
                    style={{ padding: 0, border: 'none' }}
                    target={'_blank'}
                  >
                    <img
                      src={
                        'https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=Github&logoColor=FFFFFF'
                      }
                      alt={'repository'}
                    />
                  </a>
                </p>
                <p>
                  • <span className={'mark'}>Node.js</span>:
                  <a
                    href={'https://github.com/laetipark/node_js-textbook'}
                    style={{ padding: 0, border: 'none' }}
                    target={'_blank'}
                  >
                    <img
                      src={
                        'https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=Github&logoColor=FFFFFF'
                      }
                      alt={'repository'}
                    />
                  </a>
                  <a
                    href={'https://blex.me/@laetipark/series/node_js'}
                    style={{ padding: 0, border: 'none' }}
                    target={'_blank'}
                  >
                    <img
                      src={
                        'https://img.shields.io/badge/BLEX-181717?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDE1NSAxNDIiPiAgICA8cGF0aCBmaWxsPSIjZmZmIiAgICAgICAgICBkPSJNMzMgOTVIMjNsLTUgMS00IDEtNiA0YTIyIDIyIDAgMCAwLTYgMTdjMCAxMiAxMSAyMCAyMyAyMiAxMyAyIDMwLTE5IDMwLTE5bDE0LTE4IDE0LTE5IDEwLTE0IDEyLTE3IDctMTEgNy05di0xbDEzLTIwIDYtMTEtMjYgMzEtOCAxMC05IDExLTEyIDE1LTExIDEzLTggMTAtMTEgMTItOCA4LTggOC03IDZjLTggMy0xMy0zLTE1LTV2LTljMi02IDgtMTAgMTgtMTZabTM3IDM5YzIgMiA4IDQgMTMgNWgzM2wxNS01YTQ2IDQ2IDAgMCAwIDE1LTE0bDUtMTEgMi05YzAtNC0yLTgtNC0xMWwtOS05LTExLTZzOC0yIDEwLTRjNS0yIDQtMiA3LTVsNi04YzItMyAxLTUgMi05IDAtNC0xLTYtMy05bC01LTktNy02LTgtNWMtNC0zLTgtNC0xMS00bC0xNC0yYTEzNCAxMzQgMCAwIDAtNDMgMiAxNzIgMTcyIDAgMCAwLTM1IDE0Yy00IDEtNiA0LTYgNGE1OCA1OCAwIDAgMCAxMyAzbDEwIDRhOTkgOTkgMCAwIDAgMTggOWwtMy00LTUtNS02LTVjLTUtNC00LTMtMi00YTc4IDc4IDAgMCAxIDE1LTVsMTItM2gyMGwxNCAxYzMgMSA5IDEgMTIgMyAzIDEgNCAyIDUgNGw3IDcgNCA2YzEgNCAwIDgtMiAxMmwtNiA3Yy00IDQtMTIgOC0xMiA4bC02IDQgNiA0IDEzIDEyYzkgOSA3IDEzIDEgMjJsLTkgOS0xNSA4LTEyIDItMTEgMkg3MFoiLz48L3N2Zz4='
                      }
                      alt={'repository'}
                    />
                  </a>
                </p>
              </p>
            )}
          </div>
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
