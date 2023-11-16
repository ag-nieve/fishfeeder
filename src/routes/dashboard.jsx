import Sidebar from "../components/Sidebar.jsx";
import Logo from '../assets/logo.png';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Empty', 'Feeds Level'],
    datasets: [
        {
            label: "Level",
            data: [20, 80],
            backgroundColor: [
                '#001d4b',
                '#266dd3',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function Dashboard(){

    return <div className={'flex flex-1 bg-[url("/src/assets/bg.jpg")] bg-no-repeat bg-cover min-h-screen'}>
        <Sidebar />
        <div className={'m-10 w-full'}>
            <h2 className={'text-4xl text-blue-800 mb-10'}>September 21, 2023</h2>
            <div className={'flex justify-between w-full items-center'}>
                <span></span>
                <h1 className={'text-6xl font-bold text-blue-800'}>Feeds Level</h1>
                <img src={Logo}  alt={'logo'} className={'w-32'}/>
            </div>
            <div className={'w-full flex flex-1 justify-center'}>
                <div className={'mt-5 bg-white rounded-2xl shadow-lg p-5 w-3/4'}>
                    <Doughnut data={data} />
                </div>
            </div>
        </div>
    </div>
}
