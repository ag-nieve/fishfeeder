import {Link} from "react-router-dom";


export default function Sidebar(){

    return <div className={'w-1/6 bg-blue-800 flex flex-col items-center'}>
        <div className={'mt-10 flex flex-col items-center'}>
            <img className={'w-1/2 '} src={'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'}  alt={'icon'}/>
            <h1 className={'mt-2 text-white'}>Admin</h1>
            <div className={'mt-10 w-full flex flex-col px-4'}>
                <Link className={'text-white text-2xl hover:bg-blue-400 px-3  py-2 rounded-lg mb-5'}>
                    Feeds Level
                </Link>
                <Link className={'text-white text-2xl hover:bg-blue-400 px-3 py-2 rounded-lg mb-5'}>
                    Feeds Distribution
                </Link>
                <Link className={'text-white text-2xl hover:bg-blue-400 px-3 py-2 rounded-lg mb-5'}>
                    Water Temperature
                </Link>
                <Link className={'text-white text-2xl hover:bg-blue-400 px-3 py-2 rounded-lg '}>
                    PH Level
                </Link>

                <Link to={'/'} className={'text-white text-2xl hover:bg-blue-400 px-3 py-2 rounded-lg mt-20'}>
                    Logout
                </Link>
            </div>
        </div>
    </div>
}
