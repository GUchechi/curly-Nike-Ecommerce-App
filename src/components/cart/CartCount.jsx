import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <ChevronDoubleLeftIcon />
          </div>
          <div>
            <h1>
              Your Cart <span>(Items)</span>
            </h1>
          </div>
        </div>
        <div>
          <button type="button">
            <XMarkIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
