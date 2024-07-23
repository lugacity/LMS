import { useState } from "react";
import { Heading } from "../auth/components/Text";
import Wishlists from "@/Components/dashboard/Wishlists";
import EmptyWishlist from "@/Components/dashboard/EmptyWishlist";

function Wishlist() {
  const [wishlists, setWishlists] = useState([]);
  return (
    <article className="h-full">
      <Heading className="text-left">Wishlist</Heading>
      {wishlists.length > 0 ? <Wishlists /> : <EmptyWishlist />}
    </article>
  );
}

export default Wishlist;
