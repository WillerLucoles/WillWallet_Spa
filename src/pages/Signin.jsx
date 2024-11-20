import LogoWillWallet from "../assets/Logo_WillWallet.png";
import { FaUser, FaLock } from 'react-icons/fa';
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {signinSchema} from "../schemas/SigninSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signin } from "../services/users";
import Cookies from "js-cookie";



const Signin = () => {
  const {register, 
    handleSubmit,
    formState:{ errors }
  } = useForm({resolver: zodResolver(signinSchema)});
 
  async function handleSubmitForm(data){
    try{
      const token = await signin(data);
      Cookies.set("token", token.data, {expires:1});
      console.log(Cookies.get("token"));
    } catch(error){
      console.log(error);
    };

  }

  return (
    <div className="h-screen flex">
      {/* Seção da imagem de login */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-login-img justify-around items-center bg-cover bg-center"></div>
      
      {/* Seção do formulário de login */}
      <div className="lg:w-1/2 flex w-full justify-center items-center bg-white space-y-8"> 
        <div className="w-full px-8 md:px-32 lg:px-24"> 
          <form onSubmit={handleSubmit(handleSubmitForm)} className="bg-white rounded-md shadow-2xl p-5 flex flex-col items-center max-w-[55rem] mx-auto"> 
            <img src={LogoWillWallet} className="w-36 pb-3 mt-5" /> {/* Ajuste do tamanho da logo */}
            <h1 className="text-gray-800 font-bold text-2xl mb-1 mt-5">Olá, seja bem-vindo!</h1> 
            <p> Ainda não tem sua conta? <Link to='/Signup' className="mt-5 text-sm text-blue-500 hover:text-blue-700 transition-all">Cadastre aqui</Link></p>
            <p className="text-xs text-red-900 mt-5">Esse projeto é para fins demostrativos, por favor utilize dados fictícios para testes.</p> 
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mt-5"> 
              <FaUser className="h-5 w-5 text-gray-400" />
              <Input type='email' placeholder='Email' register={register} name='email' /> 
                           
            </div>
            {errors.email && <ErrorInput text={errors.email.message}/>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mt-5"> 
              <FaLock className="h-5 w-5 text-gray-400" />
              <Input type='password' placeholder='Password' register={register} name='password' /> 
            </div>
            {errors.password && <ErrorInput text={errors.password.message}/>}
            <Button type='submit' text='Login'/>
            <span className="self-start text-sm text-blue-500 hover:text-blue-700 cursor-pointer transition-all">Esqueceu a senha?</span> 
          </form> 
        </div> 
      </div>
    </div>
  );
};

export default Signin;
