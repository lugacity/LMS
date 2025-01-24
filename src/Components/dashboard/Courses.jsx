import PropTypes from "prop-types";
// import img from "../../assets/images/join_team.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { slice } from "lodash";

function Courses({ wishlist, handleRemove }) {
  const {  title, average_rating, total_reviews, id } = wishlist;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-[#F53366]" />,
      );
    }
    return stars;
  };

  return (
    <div className="overflow-hidden rounded-lg">
      <img
        src={wishlist.cover_image}
        className="h-[180px] "
        alt={title}
      />
      <div className="bg-[#FCFCFC] px-[10px] py-3">
        <p className="text-xs text-tertiary-color-900 md:max-w-[190px] md:text-[14px]">
          {title.length > 24 ? `${title.slice(0, 22)}...` : title}
        </p>
        <div className="my-3 flex items-center gap-2">
          <span className="text-xs font-light text-[#566B8E]">
            {Math.floor(average_rating * 10) / 10}
          </span>
          <div className="flex items-center text-xs">{renderStars()}</div>
          <span className="text-xs font-light text-[#566B8E]">
            {total_reviews ? `(${total_reviews}-review)` : "(No review)"}
          </span>
        </div>
        <div className="h-px w-full bg-primary-color-500" />

        <div className="mt-3 flex items-center justify-between">
          {/* <span className="text-xs text-tertiary-color-900 md:text-sm">
            {wishlist.price}
          </span> */}
          <button
            className="font-light text-[14px] text-[#566b8e]"
            onClick={() => handleRemove(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

Courses.propTypes = {
  wishlist: PropTypes.object,
  handleWishlist: PropTypes.func,
};

export default Courses;
