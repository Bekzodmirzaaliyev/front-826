import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full">
        <navbar className="bg-[#F7EBE5] h-[48px] flex items-center ">
          
            <div className="flex w-[85%] mx-auto container justify-between">
            <ul className="flex gap-[14px]">
              <li className="hover:text-gray-500">Гарантия свежести</li>
              <li className="hover:text-gray-500">Доставка и оплата</li>
              <li className="hover:text-gray-500">Оптовые поставки</li>
              <li className="hover:text-gray-500">Контакты</li>
            </ul>
          
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center">
            <img src="public/images/Vector (2).png" alt="" />
            <select name="" id="" className="bg-transparent cursor-pointer border-none outline-none flex items-center">
              <option className="border-none  text-center" value="Санкт-Петербург">Санкт-Петербург</option>
              <option value="Samarqand">Санкт-Петербург</option>
              <option value="Buxoro">Санкт-Петербург</option>
            </select>
            </div>
            <div className="flex items-center gap-2">
              <img src="public/images/Group 6.png" alt="" />
              <p>8 812 309-82-88</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="public/images/Group 3.png" alt="" />
              <p>В корзине (4 товара)</p>
              </div>
            <div className="flex gap-[10px]">
              <img src="public/images/tg.png" alt="" />
              <img src="public/images/vk.png" alt="" />
              <img src="public/images/ok.png" alt="" />
            </div>
          </div>
            </div>
        </navbar>
        <navbar className='flex mx-auto mt-[18px]'>
            <div className="flex items-center  mx-auto gap-[30px]">
              <ul className="flex gap-[30px]">
                <li className="flex gap-1">
                  <p className="hover:text-gray-500">СЛАДКИЕ ДНИ</p>
                  <img src="public/images/Group 32.png" alt="" />
                  </li>
                <li>
                  <select name="ПОДАРОЧНЫЕ НАБОРЫ" id="" className="bg-transparent hover:text-gray-500 cursor-pointer border-none outline-none flex items-center">
                  <option value="ПОДАРОЧНЫЕ НАБОРЫ">ПОДАРОЧНЫЕ НАБОРЫ</option>
                  <option value="ПОДАРОЧНЫЕ НАБОРЫ">ПОДАРОЧНЫЕ НАБОРЫ</option>
                  <option value="ПОДАРОЧНЫЕ НАБОРЫ">ПОДАРОЧНЫЕ НАБОРЫ</option>
                  </select>
                </li>
                <li>
                   <p className="hover:text-gray-500">СОБРАТЬ НАБОР</p>
                </li>
              </ul>
              <img src="public/images/лого.png" alt="" />
              <ul className="flex gap-[30px]">
                <li><p className="hover:text-gray-500">СОЗДАТЬ ДИЗАЙН</p></li>
                <li>
                  <select name="КОМПАНИЯМ" id="" className="bg-transparent hover:text-gray-500 cursor-pointer border-none outline-none flex items-center">
                  <option value="КОМПАНИЯМ">КОМПАНИЯМ</option>
                  <option value="КОМПАНИЯМ">КОМПАНИЯМ</option>
                  <option value="КОМПАНИЯМ">КОМПАНИЯМ</option>
                  </select>
                </li>
                <li>
                <select name="ВЕСЬ КАТАЛОГ" id="" className="bg-transparent hover:text-gray-500 cursor-pointer border-none outline-none flex items-center">
                  <option value="ВЕСЬ КАТАЛОГ">ВЕСЬ КАТАЛОГ</option>
                  <option value="ВЕСЬ КАТАЛОГ">ВЕСЬ КАТАЛОГ</option>
                  <option value="ВЕСЬ КАТАЛОГ">ВЕСЬ КАТАЛОГ</option>
                  </select>
                </li>
              </ul>
            </div>
            
            
        </navbar>
      </nav>
    </div>
  );
};

export default Navbar;
