import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import Recommend from "../components/Recommend";
import Title from "../components/Title";
import styled from "@emotion/styled";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Map() {
  const location: any = useLocation();
  const kakaoMap = window.kakao.maps;

  const [load, setLoad] = useState<boolean>(false);
  const [latiLongA, setLatiLongA] = useState<any>({});
  const [latiLongB, setLatiLongB] = useState<any>({});
  const [middleSpot, setMiddleSpot] = useState<string>("");
  const [middleY, setMiddleY] = useState<any>();
  const [middleX, setMiddleX] = useState<any>();

  useEffect(() => {
    setLoad(true);
    const kakaoKEY = process.env.REACT_APP_KAKAO_REST_KEY;

    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${location.state.addressA}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoKEY}`,
          },
        }
      )
      .then(async (res) => {
        setLoad(false);
        const location = res.data.documents[0];
        setLatiLongA({
          si: location.address.region_1depth_name,
          gu: location.address.region_2depth_name,
          dong: location.address.region_3depth_name,
          locationX: location.address.x,
          locationY: location.address.y,
        });
      })
      .catch((err) => {
        setLoad(false);
        alert("API Error");
      });

    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${location.state.addressB}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoKEY}`,
          },
        }
      )
      .then(async (res) => {
        setLoad(false);
        const location = res.data.documents[0];
        setLatiLongB({
          si: location.address.region_1depth_name,
          gu: location.address.region_2depth_name,
          dong: location.address.region_3depth_name,
          locationX: location.address.x,
          locationY: location.address.y,
        });
      })
      .catch((err) => {
        setLoad(false);
        alert("API Error");
      });
  }, [location]);

  useEffect(() => {
    let middleLat =
      (Number(latiLongA.locationY) + Number(latiLongB.locationY)) / 2;
    let middleLng =
      (Number(latiLongA.locationX) + Number(latiLongB.locationX)) / 2;

    setMiddleY(middleLat);
    setMiddleX(middleLng);

    const container = document.getElementById("map");

    const options = {
      center: new kakaoMap.LatLng(middleLat, middleLng),
      level: 3,
    };

    const map = new kakaoMap.Map(container, options);

    // 마커가 표시될 위치
    let markerPosition = new kakaoMap.LatLng(middleLat, middleLng);

    // 마커를 생성
    let marker = new kakaoMap.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);

    let geocoder = new kakaoMap.services.Geocoder();

    let coord = new kakaoMap.LatLng(middleLat, middleLng);
    let callback = function (result: any, status: any) {
      if (status === kakaoMap.services.Status.OK) {
        // console.log(result[0].address.address_name);
        setMiddleSpot(result[0].address.address_name);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

    let iwContent = `<div style="display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;padding:8%;padding-left:5%;text-align:center;box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);"><span style="font-weight:700;">${middleSpot}</span><div style="display:flex;flex-flow:row nowrap;padding:8px 0 5px 0;"><a href="https://map.kakao.com/link/map/${middleSpot},${middleLat},${middleLng}" style="color:#006BE0;text-decoration:none;margin-right:5px;" target="_blank">큰지도보기</a>/ <a href="https://map.kakao.com/link/to/${middleSpot},${middleLat},${middleLng}" style="color:#006BE0;text-decoration:none;margin-left:5px;" target="_blank">길찾기</a></div></div>`,
      iwPosition = new kakaoMap.LatLng(middleLat, middleLng);

    // 인포윈도우 생성
    let infoWindow = new kakaoMap.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우 표시
    infoWindow.open(map, marker);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latiLongA, latiLongB, middleSpot]);

  return (
    <>
      <Loading value={load} />
      <Title title="부산다옴" memo="web" />
      {!load && (
        <MapBox>
          <div
            id="map"
            style={{
              width: "67vw",
              height: "70vh",
              marginLeft: "3vw",
              marginRight: "3vw",
            }}
          ></div>
          <Recommend
            address={middleSpot}
            middleLat={middleY}
            middleLng={middleX}
          />
        </MapBox>
      )}
    </>
  );
}
