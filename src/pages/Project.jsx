import clsx from "clsx";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// mock data
import { dataVariants } from '../mocks/dataVariables'

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      maintainAspectRatio : false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
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

function Project() {
  return (
    <div className="h-[calc(100vh-65px)] flex justify-between">
      <div className="w-[350px] h-full py-4 border-r-[1px] border-[#ddd] shrink-0">
        <h3 className="uppercase text-center text-[14px]">Control Center</h3>

        <div className="font-bold text-[12px] mt-8 px-4">Selected Variables / Sections</div>
        <div className="mt-4 pb-4 h-[calc(100vh-240px)] overflow-auto">
          <div className="px-4">
            {Array.from(Array(50).keys()).map(item => (
              <div 
                key={item} 
                className="flex items-center"
                style={{
                  backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`
                }}
              >
                <input id="default-checkbox" type="checkbox" checked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-white">bacon</label>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-2 text-right mx-4 border-t-[1px] border-[#ddd] pt-4">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply</button>
        </div>

      
      </div>

      <div className="grow w-1/2">
        <ul className="flex overflow-auto text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {Array.from(Array(3).keys()).map(tab => (
            <li 
              key={tab}
              className={clsx(
                "p-4 shrink-0 flex items-center cursor-pointer",
                tab === 0 && "text-blue-600 bg-gray-100",
              )}
            >
              <span>Tab {tab}</span>
              <svg className="h-4 w-4 cursor-pointer ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </li>
          ))}
        </ul>

        <div className="p-4 h-[400px] flex justify-center">
          <Doughnut height="400px" data={data} />
        </div>

      </div>

      <div className="w-[350px] h-full py-4 border-l-[1px] border-[#ddd] shrink-0">
        <h3 className="uppercase text-center text-[14px]">Variables</h3>

        <div className="mb-2 px-4">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
          <select 
            className="bg-gray-50 border-b-[1px] border-gray-300 text-gray-900 text-sm block w-full p-2.5"
            value="all"
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="meat">Meat</option>
          </select>
        </div>
        <div className=" px-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              className="block w-full p-4 pl-10 text-sm text-gray-900 border-b-[1px] border-gray-300 bg-gray-50 " 
              placeholder="Search variables..." 
            />
          </div>
        </div>

        <div className="mt-4 pb-4 h-[calc(100vh-250px)] overflow-auto">
          <div className="px-4">
            {dataVariants.map(item => (
              <div 
                key={item.id} 
                className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <input 
                  id={`checked-checkbox-${item}`} 
                  type="checkbox" 
                  className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                />
                <label 
                  htmlFor={`checked-checkbox-${item}`}
                  className="ml-2 w-full text-sm cursor-pointer font-medium text-gray-900 dark:text-gray-300"
                >
                  {item.full_name}
                </label>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project