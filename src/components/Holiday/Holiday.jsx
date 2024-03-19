import Container from 'postcss/lib/container'
import React from 'react'

const Holiday = () => {
    return (
        <section className='py-20'>
            <div className='flex flex-col gap-14 container mx-auto text-center'>
                <h1 className='text-[30px] font-bold text-center'>Ближайшие праздники</h1>
                <div className='flex items-center'>
                    <div className="flex items-center justify-center flex-col flex-1">
                        <img src="src/layout/img/Group (1).png" alt="" />
                        <p className="h-20">Скоро День рождения близкого человека </p>
                    </div>
                    <div className="flex items-center justify-center flex-col flex-1">
                        <img src="src/layout/img/Group (2).png" alt="" />
                        <p className="h-20">1 января Новый Год 2021</p>
                    </div>
                    <div className="flex items-center justify-center flex-col flex-1">
                        <img src="src/layout/img/Group (3).png" alt="" />
                        <p className="h-20">14 февраля День Святого Валентина</p>
                    </div>
                    <div className="flex items-center justify-center flex-col flex-1">
                        <img src="src/layout/img/Group (5).png" alt="" />
                        <p className="h-20">23 февраля День Защитник Отечества</p>

                    </div>
                    <div className="flex items-center justify-center flex-col flex-1">
                        <img src="src/layout/img/Group (1).png" alt="" />
                        <p className="h-20">23 февраля День Защитника Отечества</p>
                    </div>
                    <div className="flex items-center justify-center flex-col flex-1">
                        <img src="src/layout/img/Group.png" alt="" />
                        <p className="h-20">9 марта День Сурка</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Holiday