import React from "react";
import Project_Img1 from "../Assets/Project1.png";
import Project_IMg2 from "../Assets/projects2.png";
import project_Todo from "../Assets/Todo.png";
import LogIn from "../Assets/login.png";
import Habits from "../Assets/habits.png";
import WorkInProgress from "../Assets/WIP.jpg";
import Netflix from "../Assets/netflix.png";
import Kavis from "../Assets/kavis.png";
import eCommerce from "../Assets/ecommerce.png";

const Projects = () => {
  return (
    <div>
      <section id="projects" class="bg-gray-900 text-white">
        <div class="mx-auto  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-2xl text-indigo-500 font-semibold sm:text-3xl">
              My Projects
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://sheshan-raj-cb9cf3.netlify.app/"
              target="blank"
              rel="noreferrer"
              class="block"
            >
              <img
                alt="Signage"
                src={Project_Img1}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">Bootstrap</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">Website / Bootstrap</p>
              </div>
            </a>

            <a
              href="https://portfolio-nu-one-34.vercel.app/"
              target="blank"
              rel="noreferrer"
              class="block"
            >
              <img
                alt="Signage"
                src={Project_IMg2}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">Tailwind Css</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">Portfolio / Email.js</p>
              </div>
            </a>
            {/* phrase=====2 */}
            <a
              href="https://mern-jwt-token.vercel.app/"
              target="blank"
              rel="noreferrer"
              class="block"
            >
              <img
                alt="Signage"
                src={LogIn}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">JWT_Token</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">Form / useFormik</p>
              </div>
            </a>

            <a href="/" rel="noreferrer" class="block">
              <img
                alt="Signage"
                src={eCommerce}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">E-Commerce</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">Next.js / TypeScript</p>
              </div>
            </a>

            <a
              href="https://dr-kavis-womens-care-center-4yy4.vercel.app/"
              target="blank"
              rel="noreferrer"
              class="block"
            >
              <img
                alt="Signage"
                src={Kavis}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">Dr.Kavi's Women Care center</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">RealTime / Nodemailer</p>
              </div>
            </a>
            {/* phrase===3 */}

            <a
              href="https://play.google.com/store/apps?utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-ap-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700064490253544_creativeid_480915691381_device_c&gclid=Cj0KCQjw3JanBhCPARIsAJpXTx5WhhrIOQ3earlJfPYMSEpR3ywdSZum90xQ8e3MyEv8cu2AAHHwzUMaAtc5EALw_wcB&gclsrc=aw.ds"
              target="blank"
              rel="noreferrer"
              class="block"
            >
              <img
                alt="Signage"
                src={Habits}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">Habits</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">
                  Financial Mobile App/ ReactNaive
                </p>
              </div>
            </a>

            <a href="/" rel="noreferrer" class="block">
              <img
                alt="Signage"
                src={Netflix}
                class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong class="font-medium">Netflix</strong>

                <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p class="mt-0.5 opacity-50 sm:mt-0">
                  {" "}
                  ReduxToolkit / Social Media App
                </p>
              </div>
            </a>

            {/* phrase===4 */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
