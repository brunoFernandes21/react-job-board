
const Card = ({ children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} dark:bg-slate-700 dark:text-white p-6 rounded-lg transition-all ease-in-out duration-500 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-sky-500`}>
        { children }
    </div>
  )
}

export default Card
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]
//shadow-[0_3px_10px_rgb(0,0,0,0.2)]
//shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]
// shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
//shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]