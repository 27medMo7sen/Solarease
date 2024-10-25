import { ProductImages } from "./ProductImages";
import { ProductActions } from "./ProductActions";
import { Sections } from "./Sections";
export const Details = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex gap-4 mb-4 justify-around mx-lg:flex-col  mx-lg:items-center items-start px-20 mx-lg:px-10 mx-sm:px-2">
        <div className="w-full mx-lg:max-w-full max-w-main-card max-h-main-card mx-sm:max-w-96 ">
          <ProductImages />
        </div>
        <div className="w-full mx-lg:w-auto max-w-main-card">
          <ProductActions />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Sections />
      </div>
    </div>
  );
};