import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineGlobal,
  AiOutlineMail,
  AiFillFilePdf,
} from "react-icons/ai";
import { WiHorizon } from "react-icons/wi";
import Image from "next/image";
import sim_img from "../public/img/simul_photo.png";
import skills_be from "../public/img/skills_be.png";
import skills_fe from "../public/img/skills_fe.png";
import skills_db from "../public/img/skills_db.png";
import skills_o from "../public/img/skills_o.png";
import project1 from "../public/img/proj/1_0-humber-emp-eng-event-portal.jpg";
import project1_1_2 from "../public/img/proj/1_1_2_petal-express-react-angular-express-node.png";
import project1_2 from "../public/img/proj/1_2-java-spring-boot-pet-mgmt-app.png";
import project1_3 from "../public/img/proj/1_3-java-spring-boot-book-mgmt-app.png";
import project1_5 from "../public/img/proj/1_5-java-spring-boot-restaurant-web-app.png";
import project2 from "../public/img/proj/2-travel-website.png";
import project3 from "../public/img/proj/3-j2ee-db-prog-servlets.png";
import project4 from "../public/img/proj/4-j2ee-2tier-webapp.png";

import project5 from "../public/img/proj/5-J2EE-MVC-Design-Friends-Info-App.png";
import project6 from "../public/img/proj/6-Android-Events-Form.png";
import project7 from "../public/img/proj/7-Ontario-RRSP-and-Tax-Calculation-Android-App.png";
import project8 from "../public/img/proj/8-Books-Record-App-Using-Express-JS-Handlebars.png";
import project9 from "../public/img/proj/9-RestaurantApp.png";

import project10 from "../public/img/proj/10-csharp-consoleapp.png";
import project11 from "../public/img/proj/11-android-cookingapp.png";
import project12 from "../public/img/proj/12-usr-mgmt-app.png";
import project13 from "../public/img/proj/13-restaurant-portal.png";
import project14 from "../public/img/proj/14-ttc-bus-delay-big-data.png";
import project15 from "../public/img/proj/15-diamond-price-analysis.png";
import project16 from "../public/img/proj/16-Prediction-Analysis_of_ Healthy_Life_ Expectancy.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Simul's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-800">
        <section className>
          <nav className="py-10 mb-12 flex justify-between items-center">
            <h1 className="text-xl font-burtons max-sm:text-sm dark:text-white">
              Developed By: Simul
            </h1>
            <ul className="flex items-center">
              <li>
                <WiHorizon
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl lg:text-5xl text-orange-600 hover:text-orange-300 hover:ease-in hover:scale-75 hover:delay-150 hover:duration-100 dark:text-white dark:hover:text-orange-600 dark:hover:scale-125 "
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-lg ml-8"
                  href="/report/Simul Bista - Resume.pdf"
                  alt="resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center px-5">
            <h2 className="text-5xl py-2 text-orange-400 font-medium  max-sm:text-4xl">
              Simul Bista
            </h2>
            <div className="text-3xl flex justify-center gap-5 pt-3 dark:text-green-400">
              <a
                href="https://www.linkedin.com/in/simul-bista/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/simulbista" target="_blank">
                <AiFillGithub />
              </a>
              <a href="mailto:simulbista@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
            <h3 className="text-sm py-2 leading-10 font-semibold text-green-600 dark:text-orange-400">
              Software Developer
            </h3>
            <div className="relative mx-auto bg-gradient-to-b from-orange-400 to-red-400 text-white rounded-full w-60 h-80 shadow-2xl mt-4 mb-8 overflow-hidden">
              <Image
                src={sim_img}
                alt="simul_image"
                fill="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-justify text-base pt-2 dark:text-white lg:px-32">
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
        </section>
        <section>
          <div className="text-center pt-10 font-semibold">
            <h3 className="text-5xl pt-16 pb-10 text-orange-400 font-medium">
              Skills
            </h3>
          </div>
          <div className="flex justify-evenly flex-wrap gap-5">
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5 red "
                src={skills_be}
                width={100}
                height={100}
                alt="skills"
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">
                Back-end Technologies
              </h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>Spring MVC</li>
                  <li>REST API</li>
                  <li>Spring Data JPA</li>
                  <li>Thymeleaf</li>
                  <li>J2EE</li>
                  <li>JAVA Servlets</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
            </div>
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5"
                src={skills_fe}
                width={100}
                height={100}
                alt="skills"
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">
                Front-end Technologies
              </h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>React.js</li>
                  <li>Angular.js</li>
                  <li>Redux</li>
                  <li>Thymeleaf</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind.css</li>
                  <li>Material UI</li>
                </ul>
              </div>
            </div>
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5"
                src={skills_db}
                width={100}
                height={100}
                alt="skills"
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">
                Databases Technologies
              </h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>Oracle (PL/SQL)</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>H2 Database Engine</li>
                </ul>
              </div>
            </div>
            <div className="scale-90 shadow-lg p-10 rounded-xl transition ease-in-out hover:scale-100 hover:shadow-orange-400 duration-500 max-sm:w-full h-fit lg:h-[520px] dark:bg-white">
              <Image
                className="mx-auto w-16 mb-5"
                src={skills_o}
                width={100}
                height={100}
                alt="skills"
              />
              <h3 className="text-sm leading-10 font-semibold text-green-600">
                Others
              </h3>
              <div>
                <ul className="list-disc pl-5">
                  <li>Git</li>
                  <li>Vercel</li>
                  <li>Maven</li>
                  <li>Postman</li>
                  <li>Thunder Client</li>
                  <li>XML</li>
                  <li>JSON</li>
                  <li>Lombok</li>
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
              Featured Projects
            </h3>
          </div>
          <div className="flex flex-col gap-2 py-10 md:flex-row md:flex-wrap">
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project1}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Humber Employer Engagement Event Portal</li>
                  <li>
                    <a
                      href="https://github.com/Humber-EE/EE_website"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://employerengagement-event.vercel.app"
                      target="_blank"
                    >
                      <AiOutlineGlobal />
                    </a>
                  </li>
                </ul>
                <p>
                  Humber College's Employer Engagement Event Website that uses
                  html, css, bootstrap and vanilla javascript.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project1_1_2}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Petal Express</li>
                  <li>
                    <a
                      href="https://github.com/2023-Summer-ITE-5425-IGA/react-project-web-warriors/tree/main/petal_express_backend"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/2023-Summer-ITE-5425-IGA/react-project-web-warriors/tree/main/petal_express_frontend"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/2023-Summer-ITE-5425-IGA/angular-project-web_warriors"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://petal-express-fe.vercel.app/flowers"
                      target="_blank"
                    >
                      <AiOutlineGlobal />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://angular-project-web-warriors.vercel.app/home"
                      target="_blank"
                    >
                      <AiOutlineGlobal />
                    </a>
                  </li>
                </ul>
                <p>
                  A specialized e-commerce platform delivers various flowers,
                  offering authentication, product information, order and cart
                  management features. The backend uses Express.js and Node.js
                  with MongoDB, and there are two frontends: one in React.js and
                  the other in Angular.js.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project1_2}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Pet Mgmt App - PawfectPal</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Pet-Management-Application"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  A JAVA Spring boot pet management application that allows the
                  user to manage pet information (CRUD) using Spring MVC, Tomcat
                  server, H2 db, Spring JPA, Lombok, command line runner,
                  Thymeleaf (form binding, fragments, conditionals), and
                  bootstrap.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project1_3}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Book-Library-XML-REST-API</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Book-Library-API"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  XML REST API Spring Boot Application that provides different
                  API endpoints to manage books in a H2 database (Spring Data
                  JPA, Tomcat, Lombok, jackson, jaxb)
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project1_5}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Restaurant Web Application</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Restaurant-Application"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      target="_blank"
                    >
                      <AiOutlineGlobal />
                    </a>
                  </li> */}
                </ul>
                <p>
                  A Java Spring Boot restaurant web application (REST APIs,
                  Spring Data JPA, Spring MVC, Maven, Spring Dev Tools, Lombok,
                  Postman, Thymeleaf, Bootstrap) that retrieves dish data from
                  H2 in memory database.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project2}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Travel Website</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/G6Travels"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://simulbista.github.io/G6Travels/pages/blog.html"
                      target="_blank"
                    >
                      <AiOutlineGlobal />
                    </a>
                  </li>
                </ul>
                <p>
                  Travel Website that uses html, css and vanilla javascript.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project3}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>J2EE DB Prog. Using Servlets</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/J2EE-Database-Programming-using-Servlets"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  A J2EE web app that uses java servlet and mysql database to
                  insert(validation) and fetch data.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project4}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>J2EE Two Tier Web App</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Two-tier-java-web-app"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  Two tier client-server J2EE web app where the client uses html
                  form to sends data to the server(JAVA Servlet) where server
                  side validation is applied before displaying the result.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project5}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>J2EE MVC Friend's Info Web App</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/J2EE-MVC-Design"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  Use MVC Framework to handle CRUD operations in the J2EE web
                  app using MYSQL database.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center pt-10 font-semibold">
            <h3 className="text-5xl pt-20 pb-10 text-orange-400 font-medium">
              Other Projects
            </h3>
          </div>
          <div className="flex flex-col gap-2 py-10 md:flex-row md:flex-wrap">
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project6}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Android-Event-Form</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Android-Calendar-Form/"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  An android app that uses xml and java (intents) to submit
                  event data to the native app calendar (stores photo taken from
                  the native camera app to the form).
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project7}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Ontario-RRSP-and-Tax-Calculation-Android-App</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Ontario-RRSP-and-Tax-Calculation-Android-App"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  Android application to calculate rrsp and tax for annual
                  income of year 2022 (xml and java)
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project8}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Books-Record-App-Using-Express-JS-Handlebars</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Books-Record-App-Using-Express-JS-Handlebars"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  A Node/Express js Application that uses template engines
                  (handlebars) to display records of books from Books.json file
                  is with different routing that has features such as filter
                  data(using form) by book title and book id, highlight book
                  record based on their count.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project9}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>RestaurantApp</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/RestaurantApp"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  A node/Express js web app about restaurants that interacts
                  with mongodb (using thunderclient) to perform CRUD operations.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project10}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>IT Equip. Purchasing c# Console App</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/IT-Equipment-Purchasing-Console-Application"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  A c# console application where user can make individual/mass
                  IT equipment purchase (with randomly generated accessories)
                  based on the chosen type. The app utilizes various data
                  structures and design patterns.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project11}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Dishcovery - Android Cooking App</li>
                  <li>
                    <a
                      href="https://github.com/dennx2/android-cooking-app"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  An android cooking app (java/xml) that has features such as
                  recipe catalog, filter, recommendation and many more.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project12}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>User Management App</li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Customer-Record-Management-Application"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Product-Management-Application"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/simulbista/Staff-Management-Application"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
                <p>
                  Customer Record, product and staff management app that uses
                  java, jdbc,sql server along with read-write to text/binary
                  files.{" "}
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project13}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Restaurant Portal Design</li>
                  <li>
                    <a
                      href="https://everestcuisinecolumbus.com"
                      target="_blank"
                    >
                      <AiOutlineGlobal />
                    </a>
                  </li>
                </ul>
                <p>A US based restaurant portal redesign using WordPress.</p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project14}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Analysis of TTC Bus Delay</li>
                  <a
                    href="/report/Toronto-Bus-Delay-Analysis-BigData.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillFilePdf />
                  </a>
                </ul>
                <p>
                  Analysis of the Factors that Affect Bus Delay in Toronto using
                  big data technologies such as hadoop(hdfs),hive and spark.
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project15}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Analysis/Prediction of Price of Diamond</li>
                  <a
                    href="/report/Diamond-Price-Prediction-MachineLearning.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillFilePdf />
                  </a>
                </ul>
                <p>
                  Analysis/Prediction of the price of diamond using regression
                  model (python, numpy, pandas, matplotlib, seaborn).
                </p>
              </div>
            </div>
            <div className="max-w-md basis-1/3 flex-1 lg:basis-1/3 bg-gray-600 p-5 rounded-lg  dark:bg-white scale-90 hover:scale-100 ease-in-out delay-150 duration-300">
              <Image
                className="rounded-lg object-contain w-full h-64"
                src={project16}
                alt="project"
              />
              <div className="text-gray-100 dark:text-black">
                <ul className="flex gap-5 py-5 items-center text-xl">
                  <li>Prediction/Analysis of Healthy Life Expectancy</li>
                  <a
                    href="/report/Healthy-Life-Expectancy-Prediction-MachineLearning.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillFilePdf />
                  </a>
                </ul>
                <p>
                  Prediction of healthy life expectancy and identification of
                  factors influencing it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
