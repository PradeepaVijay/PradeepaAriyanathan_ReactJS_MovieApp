import React from "react";
import { useDispatch } from "react-redux";
import { requestMovies } from "../../redux/actions";
import Content from "../Content";
import SearchBar from "../SearchBar";

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestMovies()); // eslint-disable-next-line
  }, []);

  return (
    <div className="index">
      <div className="row">
        <SearchBar />
        <Content />
      </div>
    </div>
  );
}
