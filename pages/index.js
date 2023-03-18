import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineGlobal,AiFillFilePdf } from "react-icons/ai";
import { WiHorizon } from "react-icons/wi";
import Image from "next/image";
import sim_img from "../public/img/simul_photo.png";
import skills_pl from "../public/img/skills_pl.png";
import skills_wd from "../public/img/skills_wd.png";
import skills_db from "../public/img/skills_db.png";
import skills_bd from "../public/img/skills_bd.png";
import skills_o from "../public/img/skills_o.png";
import project1 from "../public/img/proj/1-humber-emp-eng-event-portal.jpg"
import project2 from "../public/img/proj/2-travel-website.png"
import project3 from "../public/img/proj/3-j2ee-db-prog-servlets.png"
import project4 from "../public/img/proj/4-j2ee-2tier-webapp.png"
import project5 from "../public/img/proj/5-csharp-consoleapp.png"
import project6 from "../public/img/proj/6-android-cookingapp.png"
import project7 from "../public/img/proj/7-usr-mgmt-app.png"
import project8 from "../public/img/proj/8-restaurant-portal.png"
import project9 from "../public/img/proj/9-ttc-bus-delay-big-data.png"
import project10 from "../public/img/proj/10-diamond-price-analysis.png"
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Simul's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons max-sm:text-sm dark:text-white">
              Developed By: Simul
            </h1>
            <ul className="flex items-center">
              <li>
                <WiHorizon onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-5xl text-orange-400 hover:text-orange-200 hover:ease-in hover:scale-75 hover:delay-150 hover:duration-100 dark:text-white dark:hover:text-orange-600 dark:hover:scale-125 " />
              </li>
              <li>
              <a
                  className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-lg ml-8"
                  href="/report/Simul Bista - Resume.pdf" alt="resume" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10 px-5">
            <h2 className="text-5xl py-2 text-orange-400 font-medium  max-sm:text-4xl">
              Simul Bista
            </h2>
            <div className="text-3xl flex justify-center gap-5 pt-3 dark:text-green-400">
              <a href="https://www.linkedin.com/in/simul-bista/" target="_blank"><AiFillLinkedin /></a>
              <a href="https://github.com/simulbista" target="_blank"><AiFillGithub /></a>
            </div>
            <h3 className="text-sm py-2 leading-10 font-semibold text-green-600 dark:text-orange-400">
              Software Developer
            </h3>
            <p className="text-justify text-base dark:text-white">
              With my extensive background in Java and over three years of
              experience as a software developer, I bring valuable project
              management skills to the table. I have a proven track record of
              successfully managing multiple projects from start to finish,
              always striving to create impactful and innovative solutions. As a
              dedicated and proactive team player, I take full responsibility
              for the projects I am a part of and am always searching for ways
              to have a positive impact on the wider community.
            </p>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-orange-400 to-red-400 text-white rounded-full w-60 h-80 shadow-2xl mt-10 overflow-hidden">
            <Image src={sim_img} fill="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="text-center pt-10 font-semibold">
            <h3 className="text-5xl pt-20 pb-10 text-orange-400 font-medium">
              Skills
            </h3>
          </div>
          <div className="flex justify-evenly flex-wrap gap-5">
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5 red "
                src={skills_pl}
                width={100}
                height={100}
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">
                Programming Languages
              </h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>Java</li>
                  <li>C#</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5"
                src={skills_wd}
                width={100}
                height={100}
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">
                Web Development Technologies
              </h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>JSPs</li>
                  <li>Java Servlets</li>
                  <li>JDBC</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind CSS</li>
                  <li>XML</li>
                  <li>JSON</li>
                  <li>Web APIs</li> 
                  <li>WordPress</li>
                </ul>
              </div>
            </div>
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5"
                src={skills_db}
                width={100}
                height={100}
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">Databases</h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>Oracle (PL/SQL)</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5"
                src={skills_bd}
                width={100}
                height={100}
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">
                Big Data Technologies
              </h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>Hadoop</li>
                  <li>HDFS</li>
                  <li>Hive</li>
                </ul>
              </div>
            </div>
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5"
                src={skills_o}
                width={100}
                height={100}
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">Others</h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>Git</li>
                  <li>Linux</li>
                  <li>Bash Scripting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
        <div className="text-center pt-10 font-semibold">
            <h3 className="text-5xl pt-20 pb-10 text-orange-400 font-medium">
              Projects
            </h3>
        </div>
          <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project1}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Humber Employer Engagement Event Portal</li>
                  <li><a href="https://github.com/Humber-EE/EE_website" target="_blank"><AiFillGithub /></a></li>
                  <li><a href="https://employerengagement-event.vercel.app" target="_blank"><AiOutlineGlobal /></a></li>
                </ul>
                <p>Humber College's Employee Event Website that uses html, css, bootstrap and vanilla javascript.</p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project2}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Travel Website</li>
                  <li><a href="https://github.com/simulbista/G6Travels" target="_blank"><AiFillGithub /></a></li>
                  <li><a href="https://simulbista.github.io/G6Travels/pages/blog.html" target="_blank"><AiOutlineGlobal /></a></li>
                </ul>
                <p>Travel Website that uses html, css and vanilla javascript.</p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project3}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>J2EE DB Prog. Using Servlets</li>
                  <li><a href="https://github.com/simulbista/J2EE-Database-Programming-using-Servlets" target="_blank"><AiFillGithub /></a></li>
                </ul>
                <p>A J2EE web app that uses java servlet and mysql database to insert(validation) and fetch data.</p>
              </div>
            </div>     
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project4}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>J2EE Two Tier Web App</li>
                  <li><a href="https://github.com/simulbista/Two-tier-java-web-app" target="_blank"><AiFillGithub /></a></li>
                </ul>
                <p>Two tier client-server J2EE web app where the client uses html form to sends data to the server(JAVA Servlet) where server side validation is applied before displaying the result.</p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project5}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>IT Equip. Purchasing c# Console App</li>
                  <li><a href="https://github.com/simulbista/IT-Equipment-Purchasing-Console-Application" target="_blank"><AiFillGithub /></a></li>
                </ul>
                <p>A c# console application where user can make individual/mass IT equipment purchase (with randomly generated accessories) based on the chosen type. The app utilizes various data structures and design patterns.</p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project6}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Dishcovery - Android Cooking App</li>
                  <li><a href="https://github.com/dennx2/android-cooking-app" target="_blank"><AiFillGithub /></a></li>
                </ul>
                <p>An android cooking app (java/xml) that has features such as recipe catalog, filter, recommendation and many more.</p>
              </div>
            </div>     
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project7}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>User Management App</li>
                  <li><a href="https://github.com/simulbista/Customer-Record-Management-Application" target="_blank"><AiFillGithub /></a></li>
                  <li><a href="https://github.com/simulbista/Product-Management-Application" target="_blank"><AiFillGithub /></a></li>
                  <li><a href="https://github.com/simulbista/Staff-Management-Application" target="_blank"><AiFillGithub /></a></li>
                </ul>
                <p>Customer Record, product and staff management app that uses java, jdbc,sql server along with read-write to text/binary files. </p>
              </div>
            </div>  
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project8}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Restaurant Portal Design</li>
                  <li><a href="https://everestcuisinecolumbus.com" target="_blank"><AiOutlineGlobal /></a></li>
                </ul>
                <p>A US based restaurant portal redesign using WordPress CMS.</p>
              </div>
            </div>  
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project9}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Analysis of TTC Bus Delay</li>
                  <a href="Toronto-Bus-Delay-Analysis-BigData.pdf"alt="alt text" target="_blank" rel="noopener noreferrer"><AiFillFilePdf /></a>
                </ul>
                <p>Analysis of the Factors that Affect Bus Delay in Toronto using big data technologies such as hadoop(hdfs),hive and spark.</p>
              </div>
            </div>    
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image className="rounded-lg object-contain w-full h-64" src={project10}/>
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Analysis/Prediction of Price of Diamond</li>
                  <a href="/report/Diamond-Price-Prediction-MachineLearning.pdf"alt="alt text" target="_blank" rel="noopener noreferrer"><AiFillFilePdf /></a>
                </ul>
                <p>Analysis/Prediction of the price of diamond using regression model (python, numpy, pandas, matplotlib, seaborn).</p>
              </div>
            </div>   
          </div>
        </section>
      </main>
    </div>
  );
}
