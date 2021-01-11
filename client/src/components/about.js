import React from "react"
// import Image from "../img/image.jpg"
import "./color.css"
function About() {

    return (
        <section className="lg:w-3/4 justify-center m-auto py-12 px-4 text-center">
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
      <p className="mt-4 text-gray-600 leading-relaxed">As coaches we believe fencing should teach self control, good-sportsmanship, discipline and team work in a fun and engaging environment. In addition to the technical and tactical aspects of the sport, we look to develop our fencers physiologically and psychologically through a strong understanding of anatomy and sports psychology. We strive to help our students reach their highest potential whether they are looking for a new fitness program, recreational activity or to be competitive. <br/> <br/>  </p>
    </div>
    {/* <div className="md:w-1/3 p-8 md:border-l border-orange-300">
      <img className="w-1/3 mx-auto mb-4 bg-red-500  rounded-full" src={Image} alt=""></img>
      <h3 className="text-xl font-heading text-orange-600">Kelly Kapoor</h3>
      <span className="text-orange-400">Customer Service</span>
      <p className="mt-4 text-gray-600 leading-relaxed">I work for Dunder Mifflin for a few years now. I learned a lot. You know, one person department is not easy to manage.</p>
    </div> */}
  </div>
  
</section>
    )
}

export default About;