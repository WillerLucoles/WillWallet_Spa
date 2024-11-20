import LogoWillWallet from "../assets/Logo_WillWallet.png";
import { FaUser, FaLock } from 'react-icons/fa'; // Importação dos ícones do react-icons
import Input from "../components/Input";
import Button from "../components/Button";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import {signupSchema} from "../schemas/SignupSchema"



const Signup = () => {
    const {register, handleSubmit, formState:{ errors }} = useForm({resolver: zodResolver(signupSchema)});
  function handleSubmitForm(data){
    console.log(data)
  }
  return (
    <div className="h-screen flex">
      {/* Seção da imagem de login */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-login-img-2 justify-around items-center bg-cover bg-center"></div>
      
      {/* Seção do formulário de login */}
      <div className="lg:w-1/2 flex w-full justify-center items-center bg-white space-y-8"> 
        <div className="w-full px-8 md:px-32 lg:px-24"> 
          <form onSubmit={handleSubmit(handleSubmitForm)} className="bg-white rounded-md shadow-2xl p-5 flex flex-col items-center mt-5"> 
            <img src={LogoWillWallet} className="w-36 pb-3 mt-5" /> {/* Ajuste do tamanho da logo */}
            <h1 className="text-gray-800 font-bold text-2xl mb-1 mt-5">Olá, cadastre-se aqui!</h1> 
            <p>Já tem sua conta? <Link to='/' className="text-sm text-blue-500 hover:text-blue-700 transition-all mt-5">Acesse aqui</Link></p>
            <p className="text-xs text-red-900 mt-5">Esse projeto é para fins demostrativos, por favor utilize dados fictícios para testes.</p> 
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mt-5"> 
              <FaUser className="h-5 w-5 text-gray-400" />
              <Input type='text' placeholder='Seu nome' register={register} name='name' />              
            </div>
            {errors.name && <ErrorInput text={errors.name.message}/>}

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mt-5"> 
              <MdAlternateEmail className="h-5 w-5 text-gray-400" />
              <Input type='email' placeholder='Email' register={register} name='email'  />              
            </div>
            {errors.email && <ErrorInput text={errors.email.message}/>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mt-5"> 
              <FaLock className="h-5 w-5 text-gray-400" />
              <Input type='password' placeholder='Password' register={register} name='password' /> 
            </div>
            {errors.password && <ErrorInput text={errors.password.message}/>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mb-2 mt-5"> 
              <FaLock className="h-5 w-5 text-gray-400" />
              <Input type='password' placeholder='Confirm Password' register={register} name='ConfirmPassword' /> 
            </div>
            {errors.ConfirmPassword && <ErrorInput text={errors.ConfirmPassword.message}/>}
            <Button type='submit' text='Concluir'/> 
          </form> 
        </div> 
      </div>
    </div>
  );
};

export default Signup;
