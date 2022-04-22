import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
import SearchBar from "../SearchBar";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);


  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_SECRET_API_KEY}&language=en-US&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);



  return (
    <div>
      <SearchBar />
      <span className="pageTitle">Trending Today</span>
      <div className="TopRated">
        {content &&
          content.map((c) => (
            <>
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                media_type={c.media_type}
              />

            </>

          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
