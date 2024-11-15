/* eslint-disable react/prop-types */
export default function Input({type, placeholder}){
    return(
        <input
            type={type}
            placeholder={placeholder}
            className='pl-2 w-full outline-none border-none'
        />            
    )

}