import Container from 'postcss/lib/container'
import React from 'react'

const Holiday = () => {
    return (
        <div>
            <div className='flex flex-col gap-14'>
                <h1>Ближайшие праздники</h1>
                <div className='flex'>
                    <div>
                        <img src="src/layout/img/Group (1).png" alt="" />
                        <p>Скоро День рождения близкого человека </p>
                    </div>
                    <div>
                        <img src="src/layout/img/Group (2).png" alt="" />
                        <p>1 января Новый Год 2021</p>
                    </div>
                    <div>
                        <img src="src/layout/img/Group (3).png" alt="" />
                        <p>14 февраля День Святого Валентина</p>
                    </div>
                    <div>
                    <img src="src/layout/img/Group (5).png" alt="" />
                        <p>23 февраля День Защитник Отечества</p>
                    
                    </div>
                    <div>
                    <img src="src/layout/img/Group (1).png" alt="" />
                        <p>23 февраля День Защитника Отечества</p>
                    </div>
                    <div>
                    <img src="src/layout/img/Group.png" alt="" />
                        <p>9 марта День Сурка</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Holiday