import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../images/background.jpg';
import styled from '@emotion/styled';

const pages = [
  {
    path: '/P1',
    text: 'центри гуманітарної допомоги',
  },
  {
    path: '/P2',
    text: 'торгівельні центри та магазини',
  },
  {
    path: '/P3',
    text: 'пам’ятки та цікавинки',
  },
  {
    path: '/P4',
    text: 'відпочинок',
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <HomePageContainer>
      {pages.map((p) => (
        <button
          key={p.path}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '15px 30px',
            paddingLeft: '70px',
            fontSize: '20px',
            color: 'white',
            cursor: 'pointer',
            alignSelf: 'flex-start',
          }}
          onClick={() => navigate(p.path)}
        >
          {p.text}
        </button>
      ))}
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  justify-content: space-between;
  align-self: flex-start;
`;
