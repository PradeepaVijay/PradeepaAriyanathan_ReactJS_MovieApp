import axios from "axios";
import "./TopRated.css";
import { useEffect, useState } from "react";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../Pagination/CustomPagination";
import SearchBar from "../SearchBar";

const TopRated = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTopRated = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_SECRET_API_KEY}&language=en-US&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTopRated();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <SearchBar />
      <span className="pageTitle">Top Rated Movies</span>

      <div className="TopRated">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}

            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default TopRated;
