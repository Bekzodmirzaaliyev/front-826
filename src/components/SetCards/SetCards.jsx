import React from 'react'

const SetCards = () => {
  return (
        <div className="flex flex-wrap gap-[30px]  justify-center mt-[60px] text-center mb-[94px]">
          <div className="bg-[#FFDBC3] h-[260px] w-[40%] items-center flex justify-center flex-col cursor-pointer transition duration-300 hover:bg-opacity-80">
            <img src="src/components/SetCards/img/Group 125 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Готовые наборы</p>
            <p className='mt-[10px]'>Готовые наборы со скидкой. <br /> Вы можете подобрать набор на подходящий случай.</p>
          </div>
          <div className="bg-[#FFC2CC] h-[260px] w-[40%] items-center flex justify-center flex-col cursor-pointer transition duration-300 hover:bg-opacity-80">
            <img src="src/components/SetCards/img/Group 122 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Собрать свой набор</p>
            <p className='mt-[10px]'>Выбрать количество макарун, и выбрать вкусы</p>
          </div>
          <div className="bg-[#B4EAB3] h-[260px] w-[40%] items-center flex justify-center flex-col cursor-pointer transition duration-300 hover:bg-opacity-80">
            <img src="src/components/SetCards/img/Group 124 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Набор с индивидуальной печатью</p>
            <p className='mt-[10px]'>Собрать набор макарон с уникальным дизайном. </p>
          </div>
          <div className="bg-[#FDD5CD] h-[260px] w-[40%] items-center flex justify-center flex-col cursor-pointer transition duration-300 hover:bg-opacity-80">
            <img src="src/components/SetCards/img/Group 123 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Свадебные предложения</p>
            <p className='mt-[10px]'>Нежные пирожные макаронс с разными вкусами для<br /> украшения вашего свадебного торжества</p>
          </div>
          <div className="bg-[#A8DCDF] h-[260px] w-[40%] items-center flex justify-center flex-col cursor-pointer transition duration-300 hover:bg-opacity-80">
            <img src="src/components/SetCards/img/Group 131 (1).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Корпоративные подарки</p>
            <p className='mt-[10px]'>От 85 руб за шт. С уникальным дизайном. <br />Приятный комплимент для коллег и партнеров</p>
          </div>
          <div className="bg-[#C4C6EC] h-[260px] w-[40%] items-center flex justify-center flex-col cursor-pointer transition duration-300 hover:bg-opacity-80">
            <img src="src/components/SetCards/img/Group 130 (2).png" alt="" />
            <p className='font-semibold text-[20px] mt-[20px]'>Оптовые поставки</p>
            <p className='mt-[10px]'>Предложение для кофеен, кафе, отелей и т.д. <br />Посмотрите условия сотрудничества и отзывы.</p>
          </div>
        </div>
  )
}

export default SetCards
