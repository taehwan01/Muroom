import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';

const dummyBestLists = [
  {
    id: 1,
    user: 'dummy1',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 2,
    user: 'dummy2',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 3,
    user: 'dummy3',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 4,
    user: 'dummy4',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 5,
    user: 'dummy5',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 6,
    user: 'dummy6',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 7,
    user: 'dummy7',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
  {
    id: 8,
    user: 'dummy8',
    location: '동대문역 4호선',
    name: 'BC 뮤직 스튜디오',
  },
];

const Home = () => {
  return (
    <>
      <div className='home'>
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
          <h2>BEST STUDIOS</h2>
          <div className='best-lists'>
            {dummyBestLists.map((room) => {
              return (
                <div key={room.id} style={{ border: '1px solid black' }}>
                  <h4>{room.name}</h4>
                  <h5>{room.user}</h5>
                  <h4>{room.location}</h4>
                </div>
              );
            })}
          </div>
        </div>
        {/* <hr color='black' /> */}
        <div className='secondary-contents'>
          <h2>PREMIUM STUDIOS</h2>
          <div className='premium-lists'>
            {dummyBestLists.map((room) => {
              return (
                <div key={room.id} style={{ border: '1px solid black' }}>
                  <h4>{room.name}</h4>
                  <h5>{room.user}</h5>
                  <h4>{room.location}</h4>
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
