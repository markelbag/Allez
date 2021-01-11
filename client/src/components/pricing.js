import React from "react"
import { Link } from "gatsby";

import './pricing.css';

function Pricing() {
    return (
        
        <div className="border-2 w-3/4 m-auto border-orange-500 ">
            <text className="mem flex w-full text-4xl font-semibold tracking-wider text-gray-700 justify-center"><text className="bg-white">MEMBERSHIP</text></text>
            <div className="flex pt-8 w-2/3 m-auto justify-center  text-gray-500">In our classes we introduce you to footwork, bladework, and tactical aspects of this centuries old European martial art. You will learn how to concentrate on your breathing, to calm your mind, to master your emotions and push aside all other distractions, to attend to the most pertinent aspects of what is happening in the moment, to slow down time to see your options clearly, and to execute (or revise) your strategy most effectively. </div>
            <p className="flex justify-center pt-12 w-full font-bold text-sm">An active&nbsp; <a className="text-blue-600 underline" href="https://member.usafencing.org/"> USFA membership</a> &nbsp;is required to be a member at Allez.</p>
        <section className=" section w-2/3 border-b-2 border-orange-300 m-auto py-8 px-4">
  <div className="flex flex-wrap -mx-8 text-center">
    <div className="w-full md:w-1/3 p-8 mb-4 md:mb-0">
      <h3 className="text-5xl font-heading">$100 / mo</h3>
      <p className="flex-grow mt-4 mb-6 text-gray-500 leading-relaxed bg-white">Introductory membership for 3 months. This class will teach you all of the basic forms and tactics to ready yourself for the world of Olympic Fencing.<br/><br/>This class is offered every Thursday night at 5:30 pm<br/><br/>All necessary equipment is provided.
      <div className="flex-col pt-16 text-left ml-8 w-full">
          <li>Basic Footwork and bladework</li>
          <li>Introduction to tactics</li>
          <li>Coordination drills</li>
          <li>Open bouting​​</li>
          <li>Lots of fun!​​</li>
      </div>
      </p>
      <a className="inline-block py-4 px-8 leading-none text-white bg-orange-600 hover:bg-gray-700 rounded shadow" href="#"><Link to="/account">Sign Up</Link></a>
    </div>
    <div className="w-full md:w-1/3 p-8 mb-4 md:mb-0 md:border-l border-orange-300">
      <h3 className="text-5xl font-heading">$200 ADDED TEXT / mo</h3>
      <p className="mt-4 mb-6 text-gray-500 leading-relaxed bg-white">Advanced Technique and Tactics  is dedicated to developing two key ingredients of competitive fencing: discipline and focus.<br/><br/>Membership includes 3 ninety-minute classes per week and open bouting on Saturdays. <br/><br/> Weapon, glove and mask required.
      <div className="flex-col  pt-8 text-left ml-8 w-full">
          <li>Refine Footwork and Bladework</li>
          <li>Advanced Tactics</li>
          <li>Fencing Strength and Conditioning</li>
          <li>Tempo and Technique Drills</li>
          <li>Situational and Open Bouting​​​</li>
      </div></p>
      <a className="inline-block py-4 px-8 leading-none text-white bg-orange-600 hover:bg-gray-700 rounded shadow" href="#"><Link to="/account">Sign Up</Link></a>
    </div>
    <div className="w-full md:w-1/3 p-8 mb-4 md:mb-0 md:border-l border-orange-300">
      <h3 className="text-5xl font-heading">$500 / mo</h3>
      <p className="mt-4 mb-6 text-gray-500 leading-relaxed bg-white">This is for the competitive athlete trying to reach the top of their division. This membership will mentally and physically challenge you<br/><br/>Membership includes unlitmited class, free coaching at local events and discounts on private lessons.<br/><br/> Full kit and competitions required.
      <div className="flex-col  pt-8 text-left ml-8 w-full">
          <li>Mastery of Footwork and Bladework</li>
          <li>Competition Prep</li>
          <li>Competitive Level Fitness</li>
          <li>Short and Long Term Goal Setting</li>
          <li>Video Analysis and more!</li>
      </div></p>
      <a className="inline-block py-4 px-8 leading-none text-white bg-orange-600 hover:bg-gray-700 rounded shadow" href="#">Sign Up</a>
    </div>
  </div>

</section>
<div className="pt-48 py-12 px-4">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl text-gray-700 text-center mb-4 font-heading">Frequently Asked Questions</h2>
    <button className="flex items-center w-full p-4 mb-4 text-left rounded shadow"><span className="flex-grow text-orange-400">What should I wear to my first class?</span><img className="w-12" src="placeholders/icons/angle-bottom.svg" alt=""></img></button>
    <button className="flex items-center w-full p-4 mb-4 text-left rounded shadow"><span className="flex-grow text-orange-400">How much does a full kit cost?</span><img className="w-12" src="placeholders/icons/angle-bottom.svg" alt=""></img></button>
    <button className="flex items-center w-full p-4 mb-4 text-left rounded shadow"><span className="flex-grow text-orange-400">When will I be able to move up to a competitive membership?</span><img className="w-12" src="placeholders/icons/angle-bottom.svg" alt=""></img></button>
    <button className="flex items-center w-full p-4 text-left rounded shadow"><span className="flex-grow text-orange-400">When will I be ready to go to competitions?</span><img className="w-12" src="placeholders/icons/angle-bottom.svg" alt=""></img></button>
  </div>
  </div>
</div>
    )
}

export default Pricing;