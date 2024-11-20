/* eslint-disable react/prop-types */
export default function Button({type, text}){
    return(
        <button
            type={type}
            
            className='block w-full max-w-[8rem] bg-black mt-7 py-2 rounded-2xl hover:-translate-y-1 transition-all duration-500 text-white font-semibold'
        >{text}</button>            
    )

}