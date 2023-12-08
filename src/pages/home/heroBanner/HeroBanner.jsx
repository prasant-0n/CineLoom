/* eslint-disable no-unused-vars */
import "./style.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "./../../../components/contentWrapper/ContentWrapper";
export default function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  //   console.log(data);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
    // console.log(bg);
  }, [data]);
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img src={background} className="" />
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome !</span>
          <span className="subTitle">
            Revel in Cinephile ecstasy! Unearth zeitgeist gems, pinnacle-rated
            wonders, and imminent spectacles.
          </span>
          <span className="subTitle_1">
            Ignite your cinematic odyssey with unparalleled jubilation !
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv Show..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchQueryHandler}>search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
