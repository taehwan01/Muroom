import { useEffect, useState } from 'react';

import './Map.styles.scss';

const { kakao } = window;

const Map = () => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.5662803, 126.9778346), //지도의 중심좌표.
      level: 8, //지도의 레벨(확대, 축소 정도)
    };

    setMap(new kakao.maps.Map(container, options)); //지도 생성 및 객체 리턴

    // var markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    // var marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });
    // marker.setMap(map);
  }, []);

  function zoomIn() {
    // 현재 지도의 레벨을 얻어옵니다
    var level = map.getLevel();

    // 지도를 1레벨 내립니다 (지도가 확대됩니다)
    map.setLevel(level - 1);
  }
  function zoomOut() {
    // 현재 지도의 레벨을 얻어옵니다
    var level = map.getLevel();

    // 지도를 1레벨 내립니다 (지도가 확대됩니다)
    map.setLevel(level + 1);
  }

  return (
    <div id='map' style={{ width: '70%', height: 'calc(100vh - 72px)' }}>
      <button className='level-button' onClick={zoomIn}>
        +
      </button>
      <button className='level-button' onClick={zoomOut}>
        -
      </button>
    </div>
  );
};

export default Map;
