import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out items-center grid`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
          </div>
          <div>
            <div>
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
            <div>
              <button type="button">
                <MinusIcon className="w-5 h-5" />
              </button>

              <div>{cartQuantity}</div>

              <button type="button" className="">
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>{price * cartQuantity}</h1>
          </div>
          <div>
            <button type="button" className="">
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
