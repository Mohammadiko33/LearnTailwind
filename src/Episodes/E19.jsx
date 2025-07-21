import React from 'react'

const E19 = () => {
  return (
    <div className='fullCenterCol'>
        <div className="part2 w-52 h-52 bg-red-200 group">
            <button className="btn">       
                <span className='group-hover:text-gray-600 transition-colors select-none'> hover me</span>
                {/* appearance-none 
                ظاهر و استایل های اولیه یک المنت رو بخایم ریست کنیم از این استفاده میکنیم
                */}
                {/* 
                select-none
                سلکت کردن متن رو بهمون کنترل میده
                */}
            </button>
        </div>
    </div>
  )
}

export default E19;