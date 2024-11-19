/* eslint-disable react/prop-types */
export default function Input({type, placeholder, register, name}){
    return(
        <input
            type={type}
            placeholder={placeholder}            
            className='pl-2 w-full outline-none border-none'
            {...register(name)}
        />            
    )

}