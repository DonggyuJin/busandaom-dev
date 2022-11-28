import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Title from "../components/Title";
import styled from "@emotion/styled";
import axios from "axios";
import ArrowLeft from "../images/arrow_left.png";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Category() {
  const location: any = useLocation();
  const navigate = useNavigate();

  const category = location.state;

  const kakaoMap = window.kakao.maps;

  const [load, setLoad] = useState<boolean>(false);

  const [searchData, setSearchData] = useState<[]>([]);

  useEffect(() => {
    setLoad(true);
    const kakaoKEY = process.env.REACT_APP_KAKAO_REST_KEY;

    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?y=${category.middleLat}&x=${category.middleLng}&radius=20000&query=${category.keyword}`,
        {
          headers: {
            Authorization: `KakaoAK ${kakaoKEY}`,
          },
        }
      )
      .then(async (res) => {
        setLoad(false);
        const location = res.data.documents.slice(0, 4);
        setSearchData(location);
      })
      .catch((err) => {
        setLoad(false);
        alert("API Error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    setLoad(true);
    const container = document.getElementById("map");

    const options = {
      center: new kakaoMap.LatLng(category.middleLat, category.middleLng),
      level: 3,
    };

    const map = new kakaoMap.Map(container, options);

    // 마커가 지도 위에 표시되도록 설정
    var infoWindow = new kakaoMap.InfoWindow({ zIndex: 1 });

    // 장소 검색 객체를 생성합니다
    let ps = new kakaoMap.services.Places(map);

    // 카테고리로 은행을 검색합니다
    ps.categorySearch(category.category, placesSearchCB, {
      useMapBounds: true,
    });

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(
      data: string | any[],
      status: any,
      pagination: any
    ) {
      if (status === kakaoMap.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place: { y: any; x: any; place_name: string }) {
      // 마커를 생성하고 지도에 표시합니다
      let marker = new kakaoMap.Marker({
        map: map,
        position: new kakaoMap.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakaoMap.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infoWindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infoWindow.open(map, marker);
      });
    }
    setLoad(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(searchData);

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
          <CategoryBox>
            <CategoryTitleBox>
              <CategoryIcon
                src={ArrowLeft}
                alt="ArrowLeftIcon"
                onClick={() => navigate(-1)}
              />
              <CategoryTitle>
                {category.category === "FD6"
                  ? "그 외 먹거리"
                  : category.category === "CT1"
                  ? "그 외 놀거리"
                  : "그 외 새로다옴"}
              </CategoryTitle>
            </CategoryTitleBox>
            {searchData &&
              searchData.map((item: any, index: number) => {
                return (
                  <DataBox key={item.address_name}>
                    <DataTitleBox>
                      <DataTitle>
                        {index + 1}.&nbsp;
                        {item.place_name}
                      </DataTitle>
                      <DataTitleSub>({item.distance}km)</DataTitleSub>
                    </DataTitleBox>
                    <DataSub>- {item.category_name}</DataSub>
                    <DataSub>- {item.address_name}</DataSub>
                    <DataSub>
                      - {item.phone ? item.phone : "연락처 미확인"}
                    </DataSub>
                    <DataUrl href={item.place_url} target="_blank">
                      - {item.place_url}
                    </DataUrl>
                  </DataBox>
                );
              })}
          </CategoryBox>
        </MapBox>
      )}
    </>
  );
}

const MapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 18vw;
  height: 70vh;
  background-color: #ffffff;
  border-radius: 15px;
  margin-right: 3vw;
  padding: 0 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

const CategoryTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CategoryIcon = styled.img`
  width: 12px;
  height: 18px;
  margin-right: 15px;
  cursor: pointer;
`;

const CategoryTitle = styled.h1`
  display: block;
  margin: 25px 0;
  color: #000000;
  font-size: 20px;
  font-weight: 800;
  word-break: keep-all;
`;

const DataBox = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  word-break: break-all;
  margin: 10px 0;
`;

const DataTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const DataTitle = styled.h2`
  margin-right: 5px;
  color: #b24e4f;
  font-size: 15px;
  font-weight: 700;
`;

const DataTitleSub = styled.span`
  color: #000000;
  font-size: 8px;
  font-weight: 300;
`;

const DataSub = styled.span`
  margin-top: 7px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

const DataUrl = styled.a`
  margin-top: 7px;
  color: #006be0;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
`;
