import KakaoMap from '../components/KakaoMap/KakaoMap.component';
import SideContents from '../components/SideContents/SideContents.component';

const Map = () => {
  return (
    <div className='container-row'>
      <KakaoMap />
      <SideContents />
    </div>
  );
};

export default Map;
