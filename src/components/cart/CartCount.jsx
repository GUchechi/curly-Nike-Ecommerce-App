import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = () => {
  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
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
