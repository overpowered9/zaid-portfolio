import kodatiimage from "../assets/Kodati.png";
import valleyimage from "../assets/valley.jpg";
import sageimage from "../assets/sage-l.png";
import car from "../assets/carrent.png";
import vlogo from "../assets/v-logo.png";
import calorie from "../assets/calorie.png";
import scribeai from "../assets/2.png";
import touseeq from "../assets/tauseeq800.png";

const PortFolio = () => {
  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="font-mono text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Portfolio
            </h1>
            <p className="mt-4 text-center text-gray-500 dark:text-gray-300 font-mono text-lg">
              <span className=" text-yellow-400 font-mono text-lg">
                {" "}
                Highlights
              </span>{" "}
              of What to
              <span className=" text-emerald-900 font-mono text-lg">
                {" "}
                Expect
              </span>
            </p>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{
                  backgroundImage: `url(${kodatiimage})`,
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    Merchant & Vendor Management
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                    <a
                      href="https://kodati-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to Website
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{
                  backgroundImage: `url(${touseeq})`,
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    Shopify Email Automation Application with AI content
                    Generation
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase"></p>
                </div>
              </div>
              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{
                  backgroundImage: `url(${scribeai})`,
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    Shopify Email Automation Application with AI content
                    Generation
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase"></p>
                </div>
              </div>
              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group border-2 border-gray-800 dark:border-gray-200 sm:hidden"
                style={{
                  backgroundImage: `url(${vlogo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    Tenant & Property Management
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                    <a
                      href="https://valleypeakpm.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to Website
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="hidden sm:flex overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group border-2 border-gray-800 dark:border-gray-200"
                style={{
                  backgroundImage: `url(${valleyimage})`,
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    Tenant & Property Management
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                    <a
                      href="https://valleypeakpm.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to Website
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{
                  backgroundImage: `url(${sageimage})`,
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    Shoe Store, Complete E-Commerece Functionality
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                    <a
                      href="https://github.com/overpowered9/Sage_Ecomm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{
                  backgroundImage: `url(${car})`,
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    Car Rental Landing Page
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                    <a
                      href="https://hybridcarparts.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to Website
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{
                  backgroundImage: `url(${calorie})`,
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    Calorie Fitness Application
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                    <a
                      href="https://github.com/overpowered9/CalorieQuest-main"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default PortFolio;
