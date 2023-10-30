/* eslint-disable react/prop-types */
import Slider from '@mui/material/Slider';

const Filter = ({ price, priceHandler, setCategory }) => {

  const categories = [
    "single bed quilt",
    "double bed quilt",
    "blanket",
    "pillow",
  ];

  return (
    <>
      <div className="w-72 hidden lg:block border rounded bg-white">
        <div className="p-4">
          <div>
            <h2 className="text-lg font-medium text-black">Apply Filter</h2>
          </div>
          <div className="w-full mt-2">
            <div>
              <h2 className="font-medium text-black">Price</h2>
            </div>
            <div className='mt-2 px-2'>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={15000}
              />
            </div>
          </div>
          <div className="w-full mt-2">
            <div>
              <h2 className="font-medium text-black">Categories</h2>
            </div>
            <div className='mt-2 px-1'>
              <ul>
                {categories.map((item) => (
                  <li
                    className="mt-2 cursor-pointer hover:text-orange-500 capitalize"
                    key={item}
                    onClick={()=> setCategory(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
