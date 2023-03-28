import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import sunflower from '../../images/sunflower.png';
import './Home.styles.scss';
import { useAuth } from '../../context/auth';

const dummyBestLists = [
  {
    id: 1,
    image: sunflower,
    user: 'dummy1',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 2,
    image: sunflower,
    user: 'dummy2',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 3,
    image: sunflower,
    user: 'dummy3',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 4,
    image: sunflower,
    user: 'dummy4',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 5,
    image: sunflower,
    user: 'dummy5',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 6,
    image: sunflower,
    user: 'dummy6',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 7,
    image: sunflower,
    user: 'dummy7',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 8,
    image: sunflower,
    user: 'dummy8',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
];

const Home = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <div className='home'>
        {/* <div>{JSON.stringify(auth, null, 4)}</div> */}
        <div className='main-banner'>
          <div className='banner-contents'>
            <div className='banner-title'>
              <h1>우리만의 작업실을 만나다, Muroom.</h1>
            </div>
            <div className='main-search'>
              <input type='text' placeholder='지하철역, 지역(동/구)' />
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <div className='secondary-contents'>
          <h2 style={{ marginLeft: '1rem' }}>BEST STUDIOS</h2>
          <div className='room-lists'>
            {dummyBestLists.map((room) => {
              return (
                <div key={room.id} style={{ margin: '10px' }}>
                  <div className='room-image'></div>
                  <div className='room-info'>
                    <h4>{room.name}</h4>
                    <span>
                      {room.location} - {room.user}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='secondary-contents'>
          <h2 style={{ marginLeft: '1rem' }}>PREMIUM STUDIOS</h2>
          <div className='room-lists'>
            {dummyBestLists.map((room) => {
              return (
                <div key={room.id} style={{ margin: '10px' }}>
                  <div className='room-image'></div>
                  <div className='room-info'>
                    <h4>{room.name}</h4>
                    <span>
                      {room.location} - {room.user}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
