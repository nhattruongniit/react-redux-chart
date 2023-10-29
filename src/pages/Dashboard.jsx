
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();

  return (
    <section className="pt-10 lg:pt-[40px] pb-12 lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Projects
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div 
              className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
              <h4 className="font-semibold text-xl text-dark mb-3">
                Refreshing Design
              </h4>
              <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics.
              </p>
              <button type="button" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  onClick={() => navigate("/project/1")}>Learn More</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div 
              className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
              <h4 className="font-semibold text-xl text-dark mb-3">
                Refreshing Design
              </h4>
              <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics.
              </p>
              <button type="button" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  onClick={() => navigate("/project/1")}>Learn More</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div 
              className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
              <h4 className="font-semibold text-xl text-dark mb-3">
                Refreshing Design
              </h4>
              <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics.
              </p>
              <button type="button" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  onClick={() => navigate("/project/1")}>Learn More</button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div 
              className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
              <h4 className="font-semibold text-xl text-dark mb-3">
                Refreshing Design
              </h4>
              <p className="text-body-color">
                We dejoy working with discerning clients, people for whom
                qualuty, service, integrity & aesthetics.
              </p>
              <button type="button" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  onClick={() => navigate("/project/1")}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard