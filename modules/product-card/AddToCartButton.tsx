import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { IPokemonCard } from "../../@types/pokemonAPIs";
import { usePokemonCartStore } from "../../stores/cart";

/**
 * @todo: extract add to cart hook, should there be use cases elsewhere
 * @param props
 * @returns
 */
export const AddToCartButton = (props: IPokemonCard) => {
  const [isBeginAddedToCart, setIsBeingAddedToCart] = useState(false);
  const addToCart = usePokemonCartStore((state) => state.addToCart);
  const isLoading = usePokemonCartStore((state) => state.isLoading);

  const handleAddToCart = async () => {
    setIsBeingAddedToCart(true);
    await addToCart(props);
    setIsBeingAddedToCart(false);
  };

  return (
    <Button
      bg="button.primary"
      _hover={{
        bg: "button.hover",
      }}
      _active={{
        bg: "button.focus",
      }}
      onClick={handleAddToCart}
      isLoading={isLoading && isBeginAddedToCart}
      isDisabled={isLoading}
    >
      Add to cart
    </Button>
  );
};