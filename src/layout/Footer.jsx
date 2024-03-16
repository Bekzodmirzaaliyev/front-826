import React from 'react'
import img from '../images/Frame (7).png'
import img2 from '../images/Group 18 (1).png'
import img3 from '../images/Vector (2).png'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div className='flex flex-col'>
            <div><img src={img} alt="1" /></div>
            <p className='max-w-[140px]'>Готовим вручную и с любовью</p>
          </div>
          <div className='flex flex-col'>
            <div><img src={img2} alt="1" /></div>
            <p className='max-w-[140px]'>Доставимв день заказа</p>
          </div>
          <div className='flex flex-col'>
            <div><img src={img3} alt="1" /></div>
            <p className='max-w-[140px]'>100% миндальная мукаи натуральные ингредиенты</p>
          </div>
        </div>
        <div>
          <p>
            © 2021 Макароншоп <br /> ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, дом 22
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;