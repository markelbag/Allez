import React from "react"
// import Image from "../img/image.jpg"
import "./color.css"
function About() {

    return (
        <section className="w-3/4 justify-center m-auto py-12 px-4 text-center">
  <h2 className="text-4xl mb-2 leading-tight font-heading font-semibold tracking-wider uppercase text">Allez Team</h2>
  <p className="max-w-xl mx-auto mb-12 text-gray-600">Helping people master themselves through the art of mastering fencing.</p>
  <div className="flex flex-wrap -mx-8">
    <div className="md:w-1/2 p-8">
      <img className="w-2/3 mx-auto mb-4 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/allez-47904.appspot.com/o/Coaches%20Photo.png?alt=media&token=3b651fb6-8cc9-4f70-8613-f5ff29340156" alt=""></img>
      <h3 className="text-xl font-heading text">Ariana Mikhak and Mark Elbag</h3>
      <span className="text-orange-400">Owners and Competition Coaches</span>
      <p className="mt-4 text-gray-600 leading-relaxed"></p>
    </div>
    <div className="md:w-1/2 p-8 md:border-l border-orange-300">
      <h3 className="text-xl font-heading text">Philosophy</h3>
      <span className="text-orange-400">Performance with adrenaline requires mental discipline</span>
      <p className="mt-4 text-gray-600 leading-relaxed">As coaches we believe fencing should teach self control, good-sportsmanship, discipline and team work in a fun and engaging environment. In addition to the technical and tactical aspects of the sport, we look to develop our fencers physiologically and psychologically through a strong understanding of anatomy and sports psychology. We strive to help our students reach their highest potential whether they are looking for a new fitness program, recreational activity or to be competitive. <br/> <br/> Talk about how we pay attention to individuals and their natural draw versus just shoving them in a box and theory crafting to build complete fencers </p>
    </div>
    {/* <div className="md:w-1/3 p-8 md:border-l border-orange-300">
      <img className="w-1/3 mx-auto mb-4 bg-red-500  rounded-full" src={Image} alt=""></img>
      <h3 className="text-xl font-heading text-orange-600">Kelly Kapoor</h3>
      <span className="text-orange-400">Customer Service</span>
      <p className="mt-4 text-gray-600 leading-relaxed">I work for Dunder Mifflin for a few years now. I learned a lot. You know, one person department is not easy to manage.</p>
    </div> */}
  </div>
  <div className="bg-white">
  <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
      <div className="space-y-5 sm:space-y-4">
        <h2 className="text-3xl leading-9 text font-semibold tracking-tight sm:text-4xl">Coaches</h2>
        <p className="text-xl leading-7 text-gray-500">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.</p>
      </div>
      <div className="lg:col-span-2">
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:col-gap-8">
          <li>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </img>
              <div className="font-medium text-lg leading-6 space-y-1">
                <h4>Leslie Alexander</h4>
                <p className="text">Co-Founder / CEO</p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </img>
              <div className="font-medium text-lg leading-6 space-y-1">
                <h4>Michael Foster</h4>
                <p className="text">Co-Founder / CTO</p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </img>
              <div className="font-medium text-lg leading-6 space-y-1">
                <h4>Dries Vincent</h4>
                <p className="text">Manager, Business Relations</p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </img>
              <div className="font-medium text-lg leading-6 space-y-1">
                <h4>Lindsay Walton</h4>
                <p className="text">Front-end Developer</p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </img>
              <div className="font-medium text-lg leading-6 space-y-1">
                <h4>Courtney Henry</h4>
                <p className="text">Designer</p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </img>
              <div className="font-medium text-lg leading-6 space-y-1">
                <h4>Tom Cook</h4>
                <p className="text">Director, Product Development</p>
              </div>
            </div>
          </li>

          {/* <!-- More people... --> */}
        </ul>
      </div>
    </div>
  </div>
</div>
</section>
    )
}

export default About;