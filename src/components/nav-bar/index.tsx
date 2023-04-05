import React, { useState } from "react";

import menuData from "./data.json";

const normalize = () => {
  console.log(menuData);
  // const topMenuData = JSON.parse(JSON.stringify(menuData[0].topMenuData));
  const { topMenuData, brandsMenuData } = menuData[0];
  const { subMenuDisplayData } = menuData[1];

  topMenuData.map((menu) => {
    const { data, id } = menu;
    if (data.MenuTitle === "BRANDS")
      return {
        id,
        title: data.MenuTitle,
        url: data.href,
        linkonly: data.linkonly,
        linkonlymobile: data.linkonlymobile,
        items: brandsMenuData.ordered.map((order) => {
          return {
            id: order.id,
            title: order.data.MenuTitle,
            url: order.data.Handle,
            items: order.uiObject.map((item) => {
              return {
                title: item.text,
                url: item.handle,
              };
            }),
          };
        }),
      };

    const subMenu = subMenuDisplayData.find((item) => item.id === id);
  });

  return {};
};

normalize();

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative">
      <button
        className="bg-gray-500 text-white p-3"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Navbar
      </button>
      {open && (
        <div className="absolute top-0 left-0 z-10">
          <div className="relative">
            <div
              onClick={() => {
                setOpen(false);
              }}
              className="w-10 cursor-pointer h-10 bg-[#E1E1E0] absolute flex font-bold justify-center items-center rounded-full -right-12"
            >
              X
            </div>
            <div className="bg-black border border-[#707070] w-[375px] h-screen text-white">
              Oke bro
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
