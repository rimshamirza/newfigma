"use client";

import Cart from "@/components/Cart";
import Data from "./data.json";
import { useState } from "react";
import { cartData } from "@/app/type";
import Item from "@/components/Item";

type ItemType = { [key: string]: any };

export default function Home() {
  const [list, setList] = useState<Array<cartData>>([]);

  function addItem(name: string, price: number, imageThumbnail: string) {
    let existed = false;
    const newList = list.map((l) => {
      if (l.name === name) {
        const newQuantity = (l.quantity || 0) + 1;
        existed = true;
        return { ...l, quantity: newQuantity };
      }
      return l;
    });
    if (existed) setList(newList);
    else setList([...list, { name, price, imageThumbnail, quantity: 1 }]);
  }

  function decreaseItem(itemIndex: number) {
    let existed = true;
    const newList = list.map((l, id) => {
      if (id === itemIndex) {
        const newQuantity = (l.quantity || 1) - 1;
        if (newQuantity <= 0) existed = false;
        return { ...l, quantity: newQuantity };
      }
      return l;
    });
    if (existed) setList(newList);
    else setList(list.filter((l, id) => id !== itemIndex));
  }

  function removeItem(index: number) {
    const newList = list.filter((l, id) => id !== index);
    setList(newList);
  }

  return (
    <div>
      <main className="bg-Rose-50 p-5">
      <section className="max-w-[1220px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4  bg-modal-bg p-6 rounded-lg">
  {/* Banner Section */}
  <div className="flex flex-col justify-center items-start p-6">
    <h6 className="text-xl text-Rose-700">WELCOME TO CHAIRY</h6>
    <h1 className="text-3xl text-Rose-900 font-bold mt-2">
      Best Furniture Collection For Your Interior.
    </h1>
    <p className="text-xs text-surface/75 dark:text-neutral-300 mt-4">
      Last updated 3 mins ago
    </p>
    <button
      className="mt-4 px-6 py-2 bg-Green text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      onClick={() => alert("shop now")}
    >
      Shop Now
    </button>
  </div>
  <div className="relative flex justify-center items-center">
    <img
      className="w-full h-auto rounded-lg object-cover"
      src="/mainp.png"
      alt="Banner Image"
    />
  </div>
</section>


        <div className="h-full flex gap-11 justify-center items-center">
      
      <img src="/Logo3.png" alt="" width={"50"} className="w-32 h-32 object-cover"></img>
      <img src="/Logo4.png" alt="" width={"50"} className="w-32 h-32 object-cover"></img>
      <img src="/Logo5.png" alt="" width={"50"} className="w-32 h-32 object-cover"></img>
      <img src="/Logo6.png" alt="" width={"50"} className="w-32 h-32 object-cover"></img>
      <img src="/Logo7.png" alt="" width={"50"} className="w-32 h-32 object-cover"></img>
      <img src="/Logo8.png" alt="" width={"50"} className="w-32 h-32 object-cover"></img>
      <img src="/Logo9.png" alt="" width={"50"} className="w-32 h-32 object-cover"></img>
      <img src="/Logo10.png" alt="" width={"50"} className="w-32 h-32 object-cover"></img>      
    </div>
  
    <div className="text-3xl text-Rose-900 text-center leading-loose font-bold mb-6">
  <h1>Featured Products</h1>
  
  {/* Flex container for products */}
  <div className="flex justify-center space-x-6 mt-6"> {/* Added margin-top (mt-6) to separate from heading */}
    
    {/* Product 1 */}
    <div className="flex flex-col items-center">
      <img
        src="/product1.png"
        alt="Product 1"
        className="w-50 h-50 object-cover rounded-lg"
      />
      <p className="text-lg font-semibold mt-2">Library Stool</p>
      <div className="flex justify-between items-center w-full mt-2">
        <p className="text-gray-500 text-sm">${20}</p>
        <img
          src="/add-cart.png"
          alt="Add to Cart"
          className="w-6 h-6 cursor-pointer"
          onClick={() => alert('Added to cart')}
        />
      </div>
    </div>




    {/* Product 2 */}
    <div className="flex flex-col items-center">
      <img
        src="/product2.png"
        alt="Product 2"
        className="w-50 h-50 object-cover rounded-lg"
      />
      <p className="text-lg font-semibold mt-2">Library Stool</p>
      <div className="flex justify-between items-center w-full mt-2">
        <p className="text-gray-500 text-sm">${30}</p>
        <img
          src="/add-cart.png"
          alt="Add to Cart"
          className="w-6 h-6 cursor-pointer"
          onClick={() => alert('Added to cart')}
        />
      </div>
    </div>

    {/* Product 3 */}
    <div className="flex flex-col items-center">
      <img
        src="/product3.png"
        alt="Product 3"
        className="w-50 h-50 object-cover rounded-lg"
      />
      <p className="text-lg font-semibold mt-2">Library Stool</p>
      <div className="flex justify-between items-center w-full mt-2">
        <p className="text-gray-500 text-sm">${25}</p>
        <img
          src="/add-cart.png"
          alt="Add to Cart"
          className="w-6 h-6 cursor-pointer"
          onClick={() => alert('Added to cart')}
        />
      </div>
    </div>

    {/* Product 4 */}
    <div className="flex flex-col items-center">
      <img
        src="/product4.png"
        alt="Product 4"
        className="w-50 h-50 object-cover rounded-lg"
      />
      <p className="text-lg font-semibold mt-2">Library Stool</p>
      <div className="flex justify-between items-center w-full mt-2">
        <p className="text-gray-500 text-sm">${35.99}</p>
        <img
          src="/add-cart.png"
          alt="Add to Cart"
          className="w-6 h-6 cursor-pointer"
          onClick={() => alert('Added to cart')}
        />
      </div>
    </div>
  </div>
</div>

<div className="text-3xl text-Rose-900 text-center leading-loose font-bold mb-6">
  <h1>Top Categories</h1>
  
  {/* Flex container for products */}
  <div className="flex justify-center space-x-6 mt-6"> {/* Added margin-top (mt-6) to separate from heading */}
    
    {/* category 1 */}
    <div className="flex flex-col items-center">
      <img
        src="/Category.png"
        alt="Category"
        className="w-53 h-50 object-cover rounded-lg"
      />
     </div>
     




    {/*Category2 */}
    <div className="flex flex-col items-center">
      <img
        src="/Category1.png"
        alt="Category"
        className="w-53 h-50 object-cover rounded-lg"
      />
       </div>
    

    {/* Category 3 */}
    <div className="flex flex-col items-center">
      <img
        src="/Category2.png"
        alt="Category"
        className="w-53 h-50 object-cover rounded-lg"
      />
     </div>
     </div>
     </div>

     <section className="max-w-6xl mx-auto p-4 flex items-center space-x-4">
  {/* Vertical Heading */}
  <div className="flex flex-col justify-center items-center transform -rotate-90">
    <h2 className="text-3xl font-bold text-gray-700 whitespace-nowrap">
      Explore New And Verticle Styles
    </h2>
  </div>

  {/* Box Wrapper */}
  <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full h-[600px]">
    {/* Grid Layout */}
    <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
      {/* Vertical Image */}
      <div className="row-span-2">
        <img
          src="/Product3.png"
          alt="Vertical Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Top Left Image */}
      <div>
        <img
          src="/Product4.png"
          alt="Top Left"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Top Right Image */}
      <div>
        <img
          src="/Product1.png"
          alt="Top Right"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Bottom Left Image */}
      <div>
        <img
          src="/Product6.png"
          alt="Bottom Left"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Bottom Right Image */}
      <div>
        <img
          src="/Product1.png"
          alt="Bottom Right"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

        {/* Product Cards Section */}
        <section className="mt-8">
          <h1 className="text-3xl text-Rose-900 text-center leading-loose font-bold mb-6">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Data.map((item: ItemType, index: number) => (
              <Item
                key={index}
                name={"Library Stool Chair"}
                category={item.category}
                price={item.price}
                imageDesk={"/Product1.png"}
                imageMobile={"/product2.png"}
                imageTab={"/Product3.png"}
                imageThumbnail={"/product4.png"}
                addItem={addItem}
                decreaseItem={decreaseItem}
                list={{
                  list: list,
                  removeItem: removeItem,
                  setList: setList,
                }}
              />
              
            ))}
          </div>
        </section>

        {/* Cart Component */}
        <Cart list={list} removeItem={removeItem} setList={setList} />
      </main>
    </div>
  );
}          