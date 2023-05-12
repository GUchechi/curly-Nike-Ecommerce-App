import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          </div>
          <div>
            <h1>
              Your Cart <span>(Items)</span>
            </h1>
          </div>
        </div>
        <div>
          <button type="button">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
