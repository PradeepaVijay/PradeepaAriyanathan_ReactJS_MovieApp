import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../components/config";
import "./SingleContent.css";
import ContentModal from "../../components/ContentModal/ContentModal";


const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,

}) => {
  return (
    <>
      <div>
        <ContentModal media_type={media_type} id={id}>
          <Badge
            badgeContent={vote_average}
            color={vote_average > 6 ? "secondary" : "primary"}
          />
          <img
            className="poster"
            src={poster ? `${img_300}${poster}` : unavailable}
            alt={title}
          />
          <b className="title">{title}</b>
          <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
            <span className="subTitle">{date}</span>
          </span>

        </ContentModal>

      </div>

    </>
  );
};

export default SingleContent;
