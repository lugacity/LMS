import PropTypes from "prop-types";
import Courses from "./Courses";
import { useRemoveFromWishlist } from "@/hooks/students/use-remove-from-wishlist";

function Wishlists({ wishlist, setWishlists }) {
  const { removeFromList, isRemoving } = useRemoveFromWishlist();
  console.log("The remove from list", removeFromList);
  console.log("is removing from list", removeFromList);

  const handleRemove = (courseId) => {
    removeFromList({ courseId },
      {
        onSuccess: () => {
          setWishlists((prevWishlist) =>
            prevWishlist.filter((item) => item.id !== courseId),
          );
        },
      },
    );
  };

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {wishlist.map((item) => (
        <Courses
          key={item.id}
          wishlist={item}
          handleRemove={handleRemove}
          isRemoving={isRemoving}
        />
      ))}
    </div>
  );
}

Wishlists.propTypes = {
  wishlist: PropTypes.array.isRequired,
  setWishlists: PropTypes.func.isRequired,
};

export default Wishlists;
