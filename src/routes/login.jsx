

import logo from '../assets/logo.png';
import {Link} from "react-router-dom";
export default function Login(){
    return <div className={'flex flex-1 bg-[url("/src/assets/bg.jpg")] bg-no-repeat bg-cover min-h-screen items-center justify-center'}>
        <div className={'w-1/4 p-5 bg-white shadow-lg rounded-xl'}>
            <div className={'w-full flex justify-center mb-3'}>
                <img className={''} alt={'logo'} src={logo} width={130} height={130} />
            </div>
            <h1 className={'text-center font-extrabold text-blue-800 text-4xl'}>AFFLM</h1>
            <p className={'text-center text-sm'}>Automated Fishpond Feeder Level Monitoring</p>
            <div className={'mt-10 flex flex-col gap-y-3'}>
                <input type={'text'} placeholder={'Username'} className={'rounded border border-gray-300 px-4 py-2'} />
                <input type={'password'} placeholder={'Password'} className={'rounded border border-gray-300 px-4 py-2'} />
                <Link to={'/dashboard'} className={'bg-blue-700 text-white py-3 rounded-lg w-full text-center'}>Login</Link>
            </div>
        </div>
    </div>
}
