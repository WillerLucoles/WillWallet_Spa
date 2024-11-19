import LogoWillWallet from "../assets/Logo_WillWallet.png";
import { FaUser, FaLock } from 'react-icons/fa'; // Importação dos ícones do react-icons
import Input from "../components/Input";
import Button from "../components/Button";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
    const {register, handleSubmit} = useForm();
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
          <form onSubmit={handleSubmit(handleSubmitForm)} className="bg-white rounded-md shadow-2xl p-5 flex flex-col items-center space-y-6"> 
            <img src={LogoWillWallet} className="w-36 pb-3" /> {/* Ajuste do tamanho da logo */}
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Olá, cadastre-se aqui!</h1> 
            <p>Já tem sua conta? <Link to='/' className="text-sm text-blue-500 hover:text-blue-700 transition-all">Acesse aqui</Link></p>
            <p className="text-xs text-red-900">Esse projeto é para fins demostrativos, por favor utilize dados fictícios para testes.</p> 
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full"> 
              <FaUser className="h-5 w-5 text-gray-400" />
              <Input type='text' placeholder='Seu nome' register={register} name='name' />              
            </div> 
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full"> 
              <MdAlternateEmail className="h-5 w-5 text-gray-400" />
              <Input type='email' placeholder='Email' register={register} name='email'  />              
            </div> 
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mb-8"> 
              <FaLock className="h-5 w-5 text-gray-400" />
              <Input type='password' placeholder='Password' register={register} name='password' /> 
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mb-8"> 
              <FaLock className="h-5 w-5 text-gray-400" />
              <Input type='password' placeholder='Confirm Password' register={register} name='ConfirmPassword' /> 
            </div>
            <Button type='submit' text='Concluir'/> 
          </form> 
        </div> 
      </div>
    </div>
  );
};

export default Signup;
