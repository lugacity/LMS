import { useState, useEffect } from "react";
import { Heading } from "../auth/components/Text";
import Wishlists from "@/Components/dashboard/Wishlists";
import EmptyWishlist from "@/Components/dashboard/EmptyWishlist";
import { useFetchWishlist } from "../../hooks/wishlists/use-fetch-wishlist";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { isLoading, data, error } = useFetchWishlist();
  console.log("The wishlist", data);


  useEffect(() => {
    if (data?.data?.data) {
      setWishlist(data.data.data);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <p>{error?.response?.data?.message || "Something went wrong"}</p>;
  }

  return (
    <article className="h-full">
      <Heading className="text-left">Wishlist ({wishlist.length})</Heading>
      {wishlist.length > 0 ? (
        <Wishlists wishlist={wishlist} setWishlist={setWishlist} />
      ) : (
        <EmptyWishlist />
      )}
    </article>
  );
}

export default Wishlist;
