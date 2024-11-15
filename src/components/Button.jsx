/* eslint-disable react/prop-types */
export default function Button({type, text}){
    return(
        <button
            type={type}
            
            className='block w-full bg-black mt-5 py-2 rounded-2xl hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
        >{text}</button>            
    )

}