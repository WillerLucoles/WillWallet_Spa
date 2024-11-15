import LogoWillWallet from "../assets/Logo_WillWallet.png";
import { FaUser, FaLock } from 'react-icons/fa'; // Importação dos ícones do react-icons

const Signin = () => {
  return (
    <div className="h-screen flex">
      {/* Seção da imagem de login */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-login-img justify-around items-center bg-cover bg-center"></div>
      
      {/* Seção do formulário de login */}
      <div className="lg:w-1/2 flex w-full justify-center items-center bg-white space-y-8"> 
        <div className="w-full px-8 md:px-32 lg:px-24"> 
          <form className="bg-white rounded-md shadow-2xl p-5 flex flex-col items-center space-y-6"> 
            <img src={LogoWillWallet} className="w-36 pb-3" /> {/* Ajuste do tamanho da logo */}
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Olá, seja bem-vindo!</h1> 
            <p> Ainda não tem sua conta? <a href="#" className="text-sm text-blue-500 hover:text-blue-700 transition-all">Cadastre aqui</a></p> 
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full"> 
              <FaUser className="h-5 w-5 text-gray-400" /> {/* Ícone de usuário */}
              <input id="email" className="pl-2 w-full outline-none border-none" type="email" name="email" placeholder="E-mail" /> 
            </div> 
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl w-full mb-8"> 
              <FaLock className="h-5 w-5 text-gray-400" /> {/* Ícone de senha */}
              <input className="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Senha" /> 
            </div> 
            <button type="submit" className="block w-full bg-black mt-5 py-2 rounded-2xl hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button> 
            <span className="self-start text-sm text-blue-500 hover:text-blue-700 cursor-pointer transition-all">Esqueceu a senha?</span> 
          </form> 
        </div> 
      </div>
    </div>
  );
};

export default Signin;
