import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';
import brawltree from '../../assets/brawltree.png';
import blossomstats from '../../assets/blossomstats.png';
import { useState } from 'react';

export const Project = () => {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);

  const popup1 = () => {
    return (
      <div className={'overlay'}
           onClick={() => setV1(!v1)}>
        <div>
          <h3 className={'overlayTitle'}>
            <strong>Blossom Stats</strong>
          </h3>
          <div>
            • <a href={'https://developer.brawlstars.com/'} target={'_blank'}>
            브롤스타즈 공식 API
          </a>
            를 이용해 개발한 전적 사이트
          </div>
          <div>• 플레이어 정보 전투 기록 DB에 수집</div>
          <div>• 플레이어 프로필과 정보, 전투 맵 / 브롤러 별 통계 확인</div>
          <div>
            <strong>• 언어 및 런타임 환경 :</strong>{' '}
            <span className={'mark-small'}>NODE.JS ( NESTJS )</span>
          </div>
          <div>
            <strong>• 클라우드 서비스 :</strong>{' '}
            <span className={'mark-small'}>ORACLE CLOUD</span>
          </div>
          <div>
            <strong>• 데이터베이스 :</strong>{' '}
            <span className={'mark-small'}>MYSQL</span>
          </div>
          <p>
            <p>
            <span>
              브롤스타즈를 즐기는 사용자들과 함께 통계를 보면서 게임을 즐기고
              싶어 개발한{' '}
              <span className={'mark'}>첫 전적 사이트 프로젝트</span>
              입니다!
            </span>
            </p>
            <p>
              <FontAwesomeIcon icon={faWindowMaximize} width={16} fontSize={16} />{' '}
              링크 :
              <a
                href={'https://brawltree.me/blossom/'}
                style={{ padding: 0, border: 'none' }}
                target={'_blank'}
              >
                <img
                  src={
                    'https://img.shields.io/badge/Blossom_Stats-FFE3E1?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNFNTZBQTYiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiDQoJZD0iDQpNOTAuMjE0NDYyLDE0LjQ5NTA2OA0KCUM5My4wNTAyNTUsMTYuNDI1NjQwIDk1LjcwMDQ2MiwxOC40MTM5NzkgOTguMTA2NzczLDIwLjY2MzIzOQ0KCUMxMDAuNzM3MzgxLDIzLjEyMjE0NSAxMDIuMzMyODkzLDIwLjkwMzg5MyAxMDMuOTQ1MDc2LDE5LjUwMjM1Nw0KCUMxMTAuNjQyMDA2LDEzLjY4MDQyOCAxMTAuNTIxMTY0LDEzLjY5NzU0MCAxMTUuNTU0NDM2LDIwLjk3MjMwMA0KCUMxMjQuNzYzODc4LDM0LjI4MzAwNSAxMzAuODEwMzAzLDQ4LjYwNDk2OSAxMjkuOTk5NzcxLDY1Ljg3NTI5MA0KCUMxMzYuNDExOTQyLDYyLjI2OTMxOCAxNDMuMjQ0ODQzLDYxLjMzMjY0NSAxNDkuNzYzOTc3LDYxLjI3MTM1OA0KCUMxNjEuMDk5NDI2LDYxLjE2NDc5NSAxNzIuMzE0NDk5LDYzLjM0NDAxNyAxODMuMTA1MjcwLDY3LjExOTc4OQ0KCUMxODQuNDU5NzE3LDY3LjU5MzcxMiAxODUuNDM2NDE3LDY4LjUyMjY5MCAxODQuMzkxOTgzLDcwLjE2NjQyMA0KCUMxODQuMjE2MzI0LDcwLjQ0Mjg3OSAxODQuMTAzODgyLDcwLjc2MjU2NiAxODMuOTgzMzgzLDcxLjA3MDU2NA0KCUMxODAuNTUwMzA4LDc5Ljg0NjU1MCAxODAuNTc4NjI5LDc5LjgwNjM0MyAxODguNDg0NjgwLDg1LjI2NjQ5NQ0KCUMxODkuNjY1MDA5LDg2LjA4MTY3MyAxOTEuODk3MDAzLDg2Ljk3MTc0MSAxOTAuMzE3MDkzLDg5LjA5MzU1Mg0KCUMxNzkuNDczOTUzLDEwMy42NTU5NTIgMTY3LjcyOTE4NywxMTcuMDg3NDE4IDE0OC4yNjEzMjIsMTIxLjQ1NDUwNg0KCUMxNTMuNDQyNTY2LDEyOC4xMDgzODMgMTU3LjUwNjkyNywxMzUuMjU4ODUwIDE1OS43MjI0NTgsMTQzLjM3MTIxNg0KCUMxNjIuMzExMzU2LDE1Mi44NTA2MzIgMTYzLjE5NjQ0MiwxNjIuNDgzNTIxIDE2My4wMzQ4NTEsMTcyLjI3MDQ3Nw0KCUMxNjIuOTk3MTE2LDE3NC41NTU4NjIgMTYxLjk3NzAzNiwxNzUuMDkxMzA5IDE1OS45NzMzNDMsMTc1LjAyNTM3NQ0KCUMxNTguNjA3OTU2LDE3NC45ODA0NTMgMTU3LjQwMTQ4OSwxNzQuNDA2NDAzIDE1Ni4xMzM2NTIsMTc0LjE5MjUwNQ0KCUMxNTIuMzM0MDc2LDE3My41NTE0NjggMTQ5LjM0ODE5MCwxNzMuNTU1NjM0IDE0OC4zNTkwODUsMTc4Ljg5ODU5MA0KCUMxNDYuODY0ODgzLDE4Ni45Njk4OTQgMTQ2LjM3ODU0MCwxODYuODUyNTcwIDEzOC4yMTg1NTIsMTg0LjEyMTQ5MA0KCUMxMjYuNjUxNTg4LDE4MC4yNTAxMzcgMTE2LjEzOTE1MywxNzQuNTM4MzkxIDEwNy40ODQxNjEsMTY1Ljg2MzUyNQ0KCUMxMDQuNzQ5NTg4LDE2My4xMjI2ODEgMTAyLjc0NDEzMywxNTkuNjU0NDA0IDEwMC40MjYxNTUsMTU2LjU0NzM5NA0KCUM5MC40MDU3NjksMTczLjE3NjQ5OCA3NC4yMjIzMTMsMTgwLjc3NDIxNiA1Ni41Njg5ODksMTg2LjI2MzE1Mw0KCUM1NC45NjA0MzQsMTg2Ljc2MzMyMSA1NC4wNzM2MjAsMTg3LjA1MDE1NiA1My45ODA3MjgsMTg0Ljk3MDUwNQ0KCUM1My45NTIwODAsMTg0LjMyOTEwMiA1My43MDEwMjcsMTgzLjY5MzkwOSA1My41MjUwMjgsMTgzLjA2MzM1NA0KCUM1MS4xNDE0NjgsMTc0LjUyMzc4OCA1MS4xMzc0NTUsMTc0LjQ3ODMxNyA0Mi4zNjM4ODAsMTc1LjAyMTk4OA0KCUMzOS40MzQ0MTgsMTc1LjIwMzUyMiAzNy45MjI2MTEsMTc0LjczNjM0MyAzNy44OTkwMzYsMTcxLjEwNDI3OQ0KCUMzNy44MTc5MjEsMTU4LjYwODUzNiAzOS40ODU3MzcsMTQ2LjQ0Mjc5NSA0NC4xOTAxODIsMTM0Ljg1NzAyNQ0KCUM0NS42NTM0MDQsMTMxLjI1MzUxMCA0Ny44NTU0NjUsMTI3Ljg5MzEyMCA1MC40NjQ1NzcsMTI0LjgzNzA1OQ0KCUM1MS43MTIwMDksMTIzLjM3NTk1NCA1My4xMTgwOTUsMTIxLjg2NzI2NCA0OS4wOTM1ODIsMTIwLjcxMTI1OA0KCUMzNi4yMTc0NTcsMTE3LjAxMjY5NSAyNS45NDMzMDAsMTA5LjE2NzI3NCAxNy43OTUxOTgsOTguNTI5MzI3DQoJQzE1Ljg4OTE3NCw5Ni4wNDA4NzEgMTMuODEwOTg3LDkzLjY4MzkwNyAxMS44MDIwNzIsOTEuMjc0NzI3DQoJQzkuNjcxMTIyLDg4LjcxOTE5MyA5LjY3Njg4Miw4Ni41NzE4NDYgMTIuOTU1MTcxLDg1LjAxNTMyNw0KCUMxMy44NDk0NTUsODQuNTkwNzIxIDE0LjcyMDAwNiw4NC4xMTQyNTggMTUuNjIzOTgwLDgzLjcxMjI1Nw0KCUMyMC4wMjk4NjEsODEuNzUyOTQ1IDIwLjQ0NTkzOCw3OC45MTkxMjEgMTguNDAyNTk0LDc0LjY2NjUwNA0KCUMxNS4xMjA5MjAsNjcuODM2NjkzIDE1LjQ4MzA3NCw2OC4xMDI0NzAgMjIuNzI3MzY5LDY1Ljg0NDI4NA0KCUMzMy4zMDMyODQsNjIuNTQ3NTc3IDQ0LjAyNzcyMSw2MS42NzM2MTUgNTUuMDExMTY2LDYxLjkxMDI3MQ0KCUM2MC41NDU2ODEsNjIuMDI5NTMwIDY1LjQyMjA0Myw2NC41NzI4MzggNzEuMDQ1ODMwLDY1LjQzMzU5NA0KCUM2OS42MDEwMTMsNDUuNDgyMDEwIDc4LjAwMTMzNSwyOS40MDc1MzYgOTAuMjE0NDYyLDE0LjQ5NTA2OA0KeiIvPg0KPHBhdGggZmlsbD0iI0ZFRjhGQiIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSINCglkPSINCk0xMjMuODg0MDQ4LDExNy4zMjM5NTINCglDMTIzLjgzMTY1MCwxMjYuODE0NTc1IDEyMS44NjgzODUsMTI4Ljc2NTc0NyAxMTIuNjkwNzI3LDEyOC43ODE1MjUNCglDMTAyLjM4NDA3MSwxMjguNzk5MjU1IDkyLjA3NDY3NywxMjguNjUyMjgzIDgxLjc3MjE0OCwxMjguODU5MzE0DQoJQzc4LjIxODY1MSwxMjguOTMwNzI1IDc2Ljc2MjcyNiwxMjguMTY2MDAwIDc2Ljg4OTM3NCwxMjQuMjMxMjU1DQoJQzc3LjE4MzMyNywxMTUuMDk3Njg3IDc3LjEwNjczNSwxMDUuOTQ1NjQxIDc2LjkxNzYzMyw5Ni44MDY1MjYNCglDNzYuODQ4OTE1LDkzLjQ4NTA5MiA3Ny42MTY5MTMsOTIuMDk5ODMxIDgxLjI3NTI3Niw5Mi4xNzcxMjQNCglDOTEuOTA5NzIxLDkyLjQwMTg0MCAxMDIuNTUyMDcxLDkyLjI5MzMwNCAxMTMuMTkxMDU1LDkyLjI1MDYwMw0KCUMxMjMuMjc0MTkzLDkyLjIxMDEyOSAxMjQuNzIwODc5LDk3Ljc1OTg2NSAxMjIuMjI3MDk3LDEwNi43ODcxMDkNCglDMTIxLjQ4NTUzNSwxMDkuNDcxNDgxIDEyMC41OTc3MDIsMTExLjAwODI3MCAxMjIuODE1MDI1LDExMy4xNTg2MzANCglDMTIzLjYyMTg2NCwxMTMuOTQxMTA5IDEyMy41NDgzNDAsMTE1LjYzMTM3OCAxMjMuODg0MDQ4LDExNy4zMjM5NTINCnoiLz4NCjxwYXRoIGZpbGw9IiNFNjcyQUIiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiDQoJZD0iDQpNODUuNDEwNDg0LDk3Ljk5OTAwOA0KCUM5NC4zNTUwMDMsOTcuOTczMDQ1IDEwMi44NDM3MTIsOTguMDI3NDY2IDExMS4zMzA5NjMsOTcuOTQwMjI0DQoJQzExNC42Njc3NzAsOTcuOTA1OTIyIDExNi44Nzg1MTAsOTguODgyMjU2IDExNi44ODEwNDIsMTAyLjY0MDY0MA0KCUMxMTYuODgzNDUzLDEwNi4yMDkxMjkgMTE0Ljg3MzQ0NCwxMDcuNzc2NDg5IDExMS41NDMzMjAsMTA3LjgwMjQxNA0KCUMxMDMuODg3ODI1LDEwNy44NjIwMTUgOTYuMjMwODg4LDEwNy44ODc2NjUgODguNTc2MjAyLDEwNy43OTI5MDgNCglDODYuNzU1ODc1LDEwNy43NzAzNzAgODMuODgyOTI3LDEwOC44MDY2NDEgODMuNTU4Mzk1LDEwNi4wNzQzOTQNCglDODMuMjQ2NzY1LDEwMy40NTA4NzQgODEuNjgyNTcxLDEwMC4xODI5NjEgODUuNDEwNDg0LDk3Ljk5OTAwOA0KeiIvPg0KPHBhdGggZmlsbD0iI0U2NkRBOCIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSINCglkPSINCk05OS45OTgzMjksMTIzLjA0NzcyOQ0KCUM5Ni4wMDc3NDQsMTIzLjA0ODAxOSA5Mi40OTMxNDEsMTIyLjgwMTIzMSA4OS4wMjg3OTMsMTIzLjExMjkxNQ0KCUM4NS4wMDAxOTgsMTIzLjQ3NTM1NyA4My41NjUzOTksMTIyLjI2NTA2OCA4My41NzczMDEsMTE3Ljk2ODA3OQ0KCUM4My41ODkxMTEsMTEzLjcwMDE1NyA4NC45ODQ2NzMsMTEyLjYxNDY3MCA4OS4wMjc3ODYsMTEyLjc3MTAxOQ0KCUM5Ni42NjY0MjAsMTEzLjA2NjM5OSAxMDQuMzI2MzMyLDExMi45NjExNjYgMTExLjk3MzY1NiwxMTIuODE5ODc4DQoJQzExNS44OTExNTEsMTEyLjc0NzUwNSAxMTcuMjM5NzQ2LDExNC40NTI3ODIgMTE3LjIwNDcwNCwxMTguMjM5NjM5DQoJQzExNy4xNjk5NTIsMTIxLjk5NjI3NyAxMTUuNDcyMDM4LDEyMy4yMjAwNzggMTExLjk3MDEzMSwxMjMuMDgwMjAwDQoJQzEwOC4xNTEyNTMsMTIyLjkyNzY1OCAxMDQuMzIxNTMzLDEyMy4wNDY4NTIgOTkuOTk4MzI5LDEyMy4wNDc3MjkNCnoiLz4NCjwvc3ZnPg=='
                  }
                  alt={'repository'}
                />
              </a>
            </p>
          </p>
        </div>
      </div>
    );
  };

  const popup2 = () => {
    return (
      <div className={'overlay'}
           onClick={() => setV2(!v2)}>
        <div>
          <h3 className={'overlayTitle'}>
            <strong>Brawl Tree</strong>
          </h3>
          <div>
            • <a href={'https://developer.brawlstars.com/'} target={'_blank'}>
            브롤스타즈 공식 API
          </a>
            를 이용해 개발한 전적 사이트
          </div>
          <div>• 플레이어 정보 전투 기록 DB에 수집</div>
          <div>• 플레이어 프로필과 정보, 전투 맵 / 브롤러 별 통계 확인</div>
          <div>
            <strong>• 언어 및 런타임 환경 :</strong>{' '}
            <span className={'mark-small'}>NODE.JS ( NESTJS )</span>
          </div>
          <div>
            <strong>• 클라우드 서비스 :</strong>{' '}
            <span className={'mark-small'}>ORACLE CLOUD</span>
          </div>
          <div>
            <strong>• 데이터베이스 :</strong>{' '}
            <span className={'mark-small'}>MYSQL</span>
          </div>
          <p>
            <p>
            <span>
              <span className={'mark'}>Blossom Stats</span> 프로젝트를 확장해 더
              많은 데이터를 수집하고 다른 사람들도 이용할 수 있는{' '}
              <span className={'mark'}>전적 사이트 프로젝트</span>입니다!
            </span>
            </p>
            <p>
            <span className={'highlight01'}>
              * 이전 프로젝트와 다르게 많은 사용자들 데이터를 주기적으로
              받아오는 것에 어려움이 있었는데,{' '}
              <span className={'mark'}>병렬 방식을 통한 대량의 데이터 수집 scheduler</span>를 이용해 구현하였습니다.
            </span>
            </p>
            <p>
            <span className={'highlight01'}>
              * 전적 사이트처럼 전적을 중점으로 확인할 수 있도록{' '}
              <span className={'mark'}>REST API</span>를 구현하고, 지금도 추가
              기능을 개발하고 있습니다.
            </span>
            </p>
            <p>
              <FontAwesomeIcon icon={faWindowMaximize} width={16} fontSize={16} />{' '}
              링크 :
              <a
                href={'https://brawltree.me/'}
                style={{ padding: 0, border: 'none' }}
                target={'_blank'}
              >
                <img
                  src={
                    'https://img.shields.io/badge/Brawl_Tree-E5F9DB?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MiIgaGVpZ2h0PSIxOTIiPgo8cGF0aCBkPSJNMCAwIEMwLjcwMTI1IDAuNDEyNSAxLjQwMjUgMC44MjUgMi4xMjUgMS4yNSBDMTAuMTEyMTI3NTIgNi41NzQ3NTE2OCAxNS40MDkwMzMwMSAxNC44NTU0MTA2NCAxOCAyNCBDMTguMTg3NSAyNy41IDE4LjE4NzUgMjcuNSAxOCAzMCBDMTguNzIxODc1IDMwLjI0NzUgMTkuNDQzNzUgMzAuNDk1IDIwLjE4NzUgMzAuNzUgQzIzLjI3NjA2NTgyIDMyLjEyMjY5NTkyIDI1LjUxMDExNDE4IDMzLjcyMzUzMjk2IDI4IDM2IEMyOCAzNi42NiAyOCAzNy4zMiAyOCAzOCBDMjkuNDg1IDM4LjQ5NSAyOS40ODUgMzguNDk1IDMxIDM5IEMzOC4wNTAzMzgyMiA0Ny40MjYwMTM5NyAzOS40NzkwMjYwNSA1Ny4zODI5MTAxOCA0MCA2OCBDNDAuOTkgNjguMzMgNDEuOTggNjguNjYgNDMgNjkgQzQ4Ljg4MTA4NDQ4IDc1LjU0NTI3MjY2IDUyLjU4NjgwNTMyIDgyLjU4NzkwMzI4IDU1IDkxIEM1NS4xOTA3ODEyNSA5MS42MTEwMTU2MiA1NS4zODE1NjI1IDkyLjIyMjAzMTI1IDU1LjU3ODEyNSA5Mi44NTE1NjI1IEM1Ny45NzkyMTQwNCAxMDUuMDc5MzMwNzYgNTUuODcwNzA5MzIgMTE4LjE3MjgzMjMyIDQ5LjMxMjUgMTI4Ljc1IEM0MS41MjYyMDY5NyAxMzkuMzMyMzY4MzMgMzEuNzM4MTAzOSAxNDcuMzU2Mjg5MzggMTguNDk2MDkzNzUgMTQ5Ljc2MTcxODc1IEMxMS43MDcxNTY5OCAxNTAuNDA5ODAxOTIgNC42MjEyMDUxOSAxNTAuNzk2NjU5NDEgLTIgMTQ5IEMtMS45Njg1NzkxIDE1MC41MDU2NjUyOCAtMS45Njg1NzkxIDE1MC41MDU2NjUyOCAtMS45MzY1MjM0NCAxNTIuMDQxNzQ4MDUgQy0xLjg2MzkzMzA2IDE1NS43NzgyNTU2NiAtMS44MTgxMzE4OSAxNTkuNTE0NzAxMzcgLTEuNzgwMjczNDQgMTYzLjI1MTcwODk4IEMtMS43NjAyMDEwOCAxNjQuODY2NzI0NTggLTEuNzMyOTM2NyAxNjYuNDgxNjY3ODkgLTEuNjk4MjQyMTkgMTY4LjA5NjQzNTU1IEMtMS42NDk1Mjc4NSAxNzAuNDIyNTQ1MDEgLTEuNjI2OTg4NDYgMTcyLjc0NzY5MDkzIC0xLjYwOTM3NSAxNzUuMDc0MjE4NzUgQy0xLjU4ODcyOTg2IDE3NS43OTIxMjA4MiAtMS41NjgwODQ3MiAxNzYuNTEwMDIyODkgLTEuNTQ2ODEzOTYgMTc3LjI0OTY3OTU3IEMtMS41NDUyNzM2OCAxODAuNzE4MTI2NTggLTEuOTQ1Mzk0MDUgMTgyLjkwMDcyNTQgLTMuNjI1OTc2NTYgMTg1Ljk1NjA1NDY5IEMtNi42OTQyOTAyOSAxODguNTk3NzU3OTUgLTguMzU4NzQ1NSAxODguNjMxNDkxMDggLTEyLjM3NSAxODguNjI4OTA2MjUgQy0xMy42MDczNDM3NSAxODguNjMwODM5ODQgLTE0LjgzOTY4NzUgMTg4LjYzMjc3MzQ0IC0xNi4xMDkzNzUgMTg4LjYzNDc2NTYyIEMtMTcuMzkzMjgxMjUgMTg4LjYxMDkxNzk3IC0xOC42NzcxODc1IDE4OC41ODcwNzAzMSAtMjAgMTg4LjU2MjUgQy0yMS4yODM5MDYyNSAxODguNTczNDU3MDMgLTIyLjU2NzgxMjUgMTg4LjU4NDQxNDA2IC0yMy44OTA2MjUgMTg4LjU5NTcwMzEyIEMtMzMuMTkwMTg4NzkgMTg4LjUyMjc0NjMgLTMzLjE5MDE4ODc5IDE4OC41MjI3NDYzIC0zNi4zNzQwMjM0NCAxODYuNDY3NTI5MyBDLTM4LjY0MDIxNjQ0IDE4My4wMjg0MjgzIC0zOC41MDA4MjQwMiAxNzkuOTI5NDI4IC0zOC4zOTA2MjUgMTc1Ljk1MzEyNSBDLTM4LjM4NDk2NTIxIDE3NS4xODE5MjMyMiAtMzguMzc5MzA1NDIgMTc0LjQxMDcyMTQ0IC0zOC4zNzM0NzQxMiAxNzMuNjE2MTQ5OSBDLTM4LjM1MTEzNTg5IDE3MS4xNjAxMjcyMSAtMzguMzAwOTQ3NjMgMTY4LjcwNTU3OTQ1IC0zOC4yNSAxNjYuMjUgQy0zOC4yMjk5MzE1NCAxNjQuNTgyMDUyMzcgLTM4LjIxMTY4MTM3IDE2Mi45MTQwODE3OSAtMzguMTk1MzEyNSAxNjEuMjQ2MDkzNzUgQy0zOC4xNTEyNzk5MiAxNTcuMTYzNDk2NzcgLTM4LjA4MjI3MjgzIDE1My4wODE5OTgxOSAtMzggMTQ5IEMtMzguOTM5NTY1NDMgMTQ5LjA3ODcxMzM4IC0zOS44NzkxMzA4NiAxNDkuMTU3NDI2NzYgLTQwLjg0NzE2Nzk3IDE0OS4yMzg1MjUzOSBDLTQyLjA5MTI3NDQxIDE0OS4zMzY0MTM1NyAtNDMuMzM1MzgwODYgMTQ5LjQzNDMwMTc2IC00NC42MTcxODc1IDE0OS41MzUxNTYyNSBDLTQ1Ljg0NTUwMjkzIDE0OS42MzQ0OTQ2MyAtNDcuMDczODE4MzYgMTQ5LjczMzgzMzAxIC00OC4zMzkzNTU0NyAxNDkuODM2MTgxNjQgQy02MC4wNzUwNDI1MiAxNTAuMzYxMzY4MTIgLTcwLjcyNDI2NTE2IDE0Ni40ODU4MTA4OCAtNzkuODc1IDEzOS4xMjUgQy04OS43NjI0NjYwNyAxMjkuODYxNTAwMjMgLTk1LjEzOTM4NjAyIDExOC40ODgxNjgxMyAtOTYgMTA1IEMtOTUuOTg1NjEzNjUgOTIuNTk4OTYzNTcgLTkzLjQ1NTIwNzQzIDgyLjkyMDcwOTA5IC04NiA3MyBDLTg1LjI1NzUgNzIuMDEgLTg0LjUxNSA3MS4wMiAtODMuNzUgNzAgQy04MiA2OCAtODIgNjggLTgwIDY3IEMtNzkuNjI3MTYwNjIgNjQuODQ1ODE2OTMgLTc5LjM1MjY1MzY1IDYyLjY3NDMyNDY1IC03OS4xMjUgNjAuNSBDLTc4LjMyNzA0ODI1IDU0LjMyMzcyNzgxIC03Ni45NjM2OTc1OCA0OS40NDcxMTIxNCAtNzQgNDQgQy03My41ODc1IDQzLjEzMzc1IC03My4xNzUgNDIuMjY3NSAtNzIuNzUgNDEuMzc1IEMtNjkuNzUyOTE4NzMgMzcuMzA3NTMyNTYgLTY1LjYzNjEwODg0IDMzLjAyMTY3MjkgLTYwLjg2MzI4MTI1IDMxLjE3MTg3NSBDLTU3Ljk5OTA0NTc1IDI5LjM3MDQ2OTAzIC01Ny45MTQ1NzY2IDI3LjE1MjIwNDczIC01Ny4xMjUgMjMuOTM3NSBDLTUzLjgyNjczOTM1IDEyLjM3NDQ4NTg0IC00Ny4xMDg4ODk1IDQuMjM3OTkxODIgLTM2Ljc1IC0xLjkzNzUgQy0yNS45MDkzOTk5IC02LjEyNTkxMzY3IC0xMC4wMDY0NDIzMyAtNi4wNjQ1MTA1MSAwIDAgWiAiIGZpbGw9IiM3REFENzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNiw0KSIvPgo8cGF0aCBkPSJNMCAwIEM0Ljk2NjIyMzQ5IC0wLjAyNDY1MDk4IDkuOTMyNDExNjYgLTAuMDQyODM2NDkgMTQuODk4NjgxNjQgLTAuMDU0OTMxNjQgQzE2LjU4OTQ0MzE2IC0wLjA1OTk3MTkgMTguMjgwMjAwMjkgLTAuMDY2ODA0MDUgMTkuOTcwOTQ3MjcgLTAuMDc1NDM5NDUgQzIyLjM5NjAwNzA3IC0wLjA4NzUxODU3IDI0LjgyMTAwOTQ0IC0wLjA5MzIzMTIzIDI3LjI0NjA5Mzc1IC0wLjA5NzY1NjI1IEMyOC4zODY3MjUyMyAtMC4xMDUzOTgxOCAyOC4zODY3MjUyMyAtMC4xMDUzOTgxOCAyOS41NTAzOTk3OCAtMC4xMTMyOTY1MSBDMzEuMzY3MzI1NyAtMC4xMTM0OTIzOCAzMy4xODQxMzEyNyAtMC4wNjE5NzI3NyAzNSAwIEMzNi45NTY3NjkzOSAxLjk1Njc2OTM5IDM2LjIxMDk1NzU4IDUuNjg1NTY2NjIgMzYuMjM4MjgxMjUgOC4zNTkzNzUgQzM2LjI0NjM1MyA5LjEwMDc2NzIxIDM2LjI1NDQyNDc0IDkuODQyMTU5NDIgMzYuMjYyNzQxMDkgMTAuNjA2MDE4MDcgQzM2LjI3NjU5ODg0IDEyLjE3OTcwNDI5IDM2LjI4NzMxMzQgMTMuNzUzNDIwNzkgMzYuMjk1MTY2MDIgMTUuMzI3MTQ4NDQgQzM2LjMxMjMzMTg2IDE3LjcyNjQ5ODkyIDM2LjM1NjE5MzY0IDIwLjEyNDQ1NDU0IDM2LjQwMDM5MDYyIDIyLjUyMzQzNzUgQzM2LjQxMDUyMTU0IDI0LjA1MjA3MzE5IDM2LjQxOTAzNjQgMjUuNTgwNzIwNjIgMzYuNDI1NzgxMjUgMjcuMTA5Mzc1IEMzNi40NDMyODkzNCAyNy44MjQxNDAwMSAzNi40NjA3OTc0MiAyOC41Mzg5MDUwMyAzNi40Nzg4MzYwNiAyOS4yNzUzMjk1OSBDMzYuNDYzOTA1NjEgMzIuNzMwODY3MjUgMzYuMDQ4NjAzMzQgMzQuOTExODIzMSAzNC4zNzE4MjYxNyAzNy45NTM4NTc0MiBDMzEuMzA1MzQzNSA0MC41OTkyNzA4MyAyOS42NDIwNzc2NSA0MC42MzE0OTE2MSAyNS42MjUgNDAuNjI4OTA2MjUgQzI0LjM5MjY1NjI1IDQwLjYzMDgzOTg0IDIzLjE2MDMxMjUgNDAuNjMyNzczNDQgMjEuODkwNjI1IDQwLjYzNDc2NTYyIEMyMC42MDY3MTg3NSA0MC42MTA5MTc5NyAxOS4zMjI4MTI1IDQwLjU4NzA3MDMxIDE4IDQwLjU2MjUgQzE2LjcxNjA5Mzc1IDQwLjU3MzQ1NzAzIDE1LjQzMjE4NzUgNDAuNTg0NDE0MDYgMTQuMTA5Mzc1IDQwLjU5NTcwMzEyIEM0LjgxNzE5MTQ1IDQwLjUyMjgwNDIgNC44MTcxOTE0NSA0MC41MjI4MDQyIDEuNjI1OTc2NTYgMzguNDgxMjAxMTcgQy0wLjY2ODI2NjcgMzQuOTgwMjQxMDYgLTAuNDk5NDQ1NDEgMzEuNzc2MjMwNTggLTAuMzkwNjI1IDI3LjczNDM3NSBDLTAuMzg0OTY1MjEgMjYuOTQwOTc3MTcgLTAuMzc5MzA1NDIgMjYuMTQ3NTc5MzUgLTAuMzczNDc0MTIgMjUuMzMwMTM5MTYgQy0wLjM1MTEzMTQ3IDIyLjgwMjgwNTI3IC0wLjMwMDk0MTc2IDIwLjI3NjkwMzM1IC0wLjI1IDE3Ljc1IEMtMC4yMjk5MzIxNCAxNi4wMzM4NzQ2OCAtMC4yMTE2ODE4NyAxNC4zMTc3MjcwOCAtMC4xOTUzMTI1IDEyLjYwMTU2MjUgQy0wLjE1MTI3Mzk1IDguNDAwNDkyMiAtMC4wODIyNjMyNiA0LjIwMDQ4ODY1IDAgMCBaICIgZmlsbD0iIzY2NUE0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzgsMTUyKSIvPgo8cGF0aCBkPSJNMCAwIEM0Ljc5NzM4NjU3IDIuMDQ1Mzk3MzcgNy44OTQwMzg2MiA1LjI4OTcwMDA4IDEwLjU2NjQwNjI1IDkuNzI2NTYyNSBDMTIuODk3MzE5OSAxNS41NzUwMzY3NSAxMi45NjgzNjQ4MyAyMi4wMTA3NzEwNCAxMC42Nzk2ODc1IDI3Ljg5MDYyNSBDNy41NjE5MjE1MyAzMy4yMTI2NzEzNyAzLjMxOTYzMTk3IDM2Ljk4MDYyNjEgLTIuMzU5Mzc1IDM5LjQyMTg3NSBDLTguMTIxOTkzNSA0MC4yNjQ3MDY5NiAtMTMuNDI5ODk2NjcgMzkuNzc3MjY1NDIgLTE4LjUzNTE1NjI1IDM2Ljg5ODQzNzUgQy0yMy4xMTM0OTczIDMzLjE5MjYyODI2IC0yNi44ODcwODI4NSAyNy4zNDczMTk1NSAtMjcuNTk3NjU2MjUgMjEuNDQxNDA2MjUgQy0yNy43OTUzMzIwMyAxNS41NjMxNTI2NSAtMjYuODQzNTM1MzkgMTEuMjI5MDA2NDQgLTIzLjM1OTM3NSA2LjQyMTg3NSBDLTE2LjQ4MDQ2MDEgLTAuNjI1NTY1NjYgLTkuODE1MjMzMDcgLTIuNDA1MDU3MTEgMCAwIFogIiBmaWxsPSIjMDIwMjAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3My4zNTkzNzUsODEuNTc4MTI1KSIvPgo8cGF0aCBkPSJNMCAwIEM0LjgzMzk0OTQxIDMuNzkwNzI1MjkgNy40NDUwNzA0MiA3LjgwMjMwMzQzIDguMzM1OTM3NSAxMy45MjE4NzUgQzguNTAxNDIzMTUgMTkuMTQ1NzA1MzMgOC4zODY2NDA3NCAyMy4yMDkxNTU0MSA2LjIwMzEyNSAyNy45OTYwOTM3NSBDLTIuNTQzMTMyNDkgMzYuOTcyNTE1OTEgLTIuNTQzMTMyNDkgMzYuOTcyNTE1OTEgLTguNTM5MDYyNSAzNy43MzQzNzUgQy0xMy44NDgzNDUzNCAzNy43NTkxODQ3MyAtMTcuNzA5NDIxMzYgMzcuNjA2ODk0MTIgLTIyLjE3MTg3NSAzNC40MzM1OTM3NSBDLTI3LjcwNTEyNzM2IDI4LjkyMzMwMDk0IC0zMC4zMDQxMjIxOSAyNS4yMTAyNTMzMSAtMzAuNTQ2ODc1IDE3LjI0NjA5Mzc1IEMtMzAuNDk3OTQ5NjEgMTAuOTY5NjY1NjkgLTI5LjM3NDIwMzI5IDcuMDk1MTkyODkgLTI1LjE3MTg3NSAyLjQzMzU5Mzc1IEMtMTguNDE5MDAwNTIgLTMuOTg5ODcyMjIgLTguMDc5NTUxNzUgLTQuNzQ1OTE1NTYgMCAwIFogIiBmaWxsPSIjMDEwMTAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzguMTcxODc1LDgzLjU2NjQwNjI1KSIvPgo8cGF0aCBkPSJNMCAwIEMyLjkyMTQwMzU1IDIuMTE4MDE3NTggNC4xNTY3NDcyNSAzLjQ1NDM2ODEzIDUuNSA2LjgxMjUgQzYuNDc2MTI4MTkgMTMuMjExNTYyNTcgNC45MjA0MzEwNyAxNy4wNDkwMzQ3NSAxLjM5MDYyNSAyMi40MTc5Njg3NSBDLTQuNjc0MTQ5MjYgMzAuMDk5MTgwNzcgLTEzLjA5OTI5MTE0IDM0LjY4OTYzMzgzIC0yMi43NjU2MjUgMzYuMTU2MjUgQy0yOC4yMDUyNjE5MyAzNi40MDUzOTM2OCAtMzIuMTc1MjAxMzkgMzQuNzM2NDcxMjYgLTM2LjMxMjUgMzEuMzEyNSBDLTM4LjY5Njk1MzMyIDI4LjMwMDU1ODk2IC0zOC45NjQyMzUxMiAyNC44MDY0NjAxOCAtMzguOTAyMzQzNzUgMjEuMDU4NTkzNzUgQy0zNy42NzYwNjc1NyAxNC4yMTI4NzcxOSAtMzEuODk0MDA1NTggOC41NjUzMTc2NCAtMjYuNjkxNDA2MjUgNC4zMjAzMTI1IEMtMTguNTg0ODgyMTkgLTEuMjU3NDM4NDYgLTkuNDM4NjI5MzcgLTMuMjAyMzkyMTEgMCAwIFogIiBmaWxsPSIjRkNGREZDIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4My41LDM1LjE4NzUpIi8+CjxwYXRoIGQ9Ik0wIDAgQzIuMjkyOTY4NzUgMC40MTQwNjI1IDIuMjkyOTY4NzUgMC40MTQwNjI1IDQuMjkyOTY4NzUgMi40MTQwNjI1IEM0Ljc0MjE4NzUgNC42NzE4NzUgNC43NDIxODc1IDQuNjcxODc1IDQuMjkyOTY4NzUgNy40MTQwNjI1IEMyLjYxNjEzOTU4IDkuNjE2NTUyNjUgMS4wNjc1MDI5OSAxMS4zODQ5NTczOCAtMC44OTQ1MzEyNSAxMy4yODkwNjI1IEMtMS4zNzcyODUxNiAxMy43OTk1MzEyNSAtMS44NjAwMzkwNiAxNC4zMSAtMi4zNTc0MjE4OCAxNC44MzU5Mzc1IEMtMy44MTI1IDE2LjI4MTI1IC0zLjgxMjUgMTYuMjgxMjUgLTYuNzA3MDMxMjUgMTguNDE0MDYyNSBDLTEwLjg4MTcwMzc0IDE4LjIzOTM5MDAxIC0xMC44ODE3MDM3NCAxOC4yMzkzOTAwMSAtMTIuNzA3MDMxMjUgMTYuNDE0MDYyNSBDLTEzLjIxODM0NTMxIDEyLjQ5MjExNTA4IC0xMy4wNDk0NzYzOCAxMC44ODYxNzEzMiAtMTAuNjk1MzEyNSA3LjY0MDYyNSBDLTkuODEyMzA0NjkgNi43ODIxMDkzOCAtOC45MjkyOTY4OCA1LjkyMzU5Mzc1IC04LjAxOTUzMTI1IDUuMDM5MDYyNSBDLTYuNzE0MzU1NDcgMy43MjgwODU5NCAtNi43MTQzNTU0NyAzLjcyODA4NTk0IC01LjM4MjgxMjUgMi4zOTA2MjUgQy0yLjcwNzAzMTI1IDAuNDE0MDYyNSAtMi43MDcwMzEyNSAwLjQxNDA2MjUgMCAwIFogIiBmaWxsPSIjMDYwNzAzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIuNzA3MDMxMjUsNjkuNTg1OTM3NSkiLz4KPHBhdGggZD0iTTAgMCBDNC45ODcyMTczOSAwLjIwMDMxNzYgNy40MDMyMTI0MyAxLjY5ODE3ODE1IDEwLjg3NSA1LjE4NzUgQzExLjY1NjE3MTg3IDUuOTQ0MTc5NjkgMTIuNDM3MzQzNzUgNi43MDA4NTkzNyAxMy4yNDIxODc1IDcuNDgwNDY4NzUgQzE1LjQwODA3OTQ1IDEwLjU4NDkxMzg4IDE1LjUwMzA3MDg5IDEyLjI4ODU2ODgyIDE1IDE2IEMxNC4zNCAxNi42NiAxMy42OCAxNy4zMiAxMyAxOCBDOC4yMzYyMTkwNiAxNy44Mzc2OTA2IDUuOTUzMzUxMTggMTUuNTIwNjg5NDggMi42ODc1IDEyLjI1IEMxLjM2Mjk4ODI4IDEwLjk1ODM1OTM4IDEuMzYyOTg4MjggMTAuOTU4MzU5MzggMC4wMTE3MTg3NSA5LjY0MDYyNSBDLTIgNyAtMiA3IC0yLjQxNzk2ODc1IDQuMjk2ODc1IEMtMiAyIC0yIDIgMCAwIFogIiBmaWxsPSIjMDYwNzA0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Nyw3MCkiLz4KPHBhdGggZD0iTTAgMCBDMC42NiAwIDEuMzIgMCAyIDAgQzMuMzM4NTg1MjQgMi4yODg3NDE3MyA0LjY3MTAxMDE0IDQuNTgwNjk2NTYgNiA2Ljg3NSBDNi4zODE1NjI1IDcuNTI1OTc2NTYgNi43NjMxMjUgOC4xNzY5NTMxMiA3LjE1NjI1IDguODQ3NjU2MjUgQzEwIDEzLjc3MzQzNzUgMTAgMTMuNzczNDM3NSAxMCAxNiBDMy43MyAxNiAtMi41NCAxNiAtOSAxNiBDLTcuMzkxOTQ0MTIgMTEuOTc5ODYwMzEgLTUuNzg3Mjg4MjIgOC44MDc0MjQzNiAtMy41IDUuMTg3NSBDLTIuNTg3MzQzNzUgMy43MjM3Njk1MyAtMi41ODczNDM3NSAzLjcyMzc2OTUzIC0xLjY1NjI1IDIuMjMwNDY4NzUgQy0xLjEwOTY4NzUgMS40OTQ0MTQwNiAtMC41NjMxMjUgMC43NTgzNTkzNyAwIDAgWiAiIGZpbGw9IiMwQTBDMDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1LDEwOSkiLz4KPC9zdmc+Cg=='
                  }
                  alt={'repository'}
                />
              </a>
            </p>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>
        <span>프로젝트</span>
      </h2>
      <div className={'projects'}>
        <div onClick={() => {
          setV1(!v1);
        }}>
          <div>
            <img src={blossomstats} alt={'brawltree'} />
          </div>
          <h4>
            <span>Blossom Stats (2023. 01 ~ 04)</span>
            <span className={'mark-prod'}>운영 중</span>
          </h4>
        </div>
        <div onClick={() => {
          setV2(!v2);
        }}>
          <div>
            <img src={brawltree} alt={'brawltree'} />
          </div>
          <h4>
            <span>Brawl Tree (2023. 06 ~ )</span>
            <span className={'mark-dev'}>개발 중</span>
            <span className={'mark-prod'}>운영 중</span>
          </h4>
        </div>
      </div>
      {v1 && popup1()}
      {v2 && popup2()}
    </div>
  );
};