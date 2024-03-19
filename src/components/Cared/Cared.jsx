import React from 'react'

const Cared = () => {
   let care = [
    {img:"src/components/Cared/images/Rectangle 214.png", title:"Лучшие ингрединты", description:"Что-то про суперкачество, лучших поваров, свежесть и т.д."},
    {img:"src/components/Cared/images/Rectangle 215.png", title:"Упаковка", description:"Что-то про суперкоробочки и бантики и бла бла бла"},
    {img:"src/components/Cared/images/Rectangle 216.png", title:"Получение в день заказа", description:"В день заказа доставка курьером или самовывоз"},
    {img:"src/components/Cared/images/Rectangle 217.png", title:"Анонимная доставка", description:"Можем преподнести Ваш заказ как анонимный подарок"},
    ]
    console.log(care)
  return (
   
    <div>
      <div className='flex w-[80%] items-center mx-auto flex-col pt-[85px] pb-[37px]'>
        <h2 className='pb-[40px] text-[30px] font-semibold'>Мы обо всём позаботились</h2>
        <div className='flex gap-[30px]'>
        {care.map((item, index) => (
        <div key={index} className='w-[270px] h-[370px]'>
            <img src={item.img} alt="" />
            <p className='text-[18px] font-semibold pt-[29px] pb-[11px] leading-[21.94px]'>{item.title}</p>
            <p className='text-[14px] leading-[17.05px]'>{item.description}</p>
        </div>
      ))}
        </div>
      
      </div>
    </div>
  )
}

export default Cared
