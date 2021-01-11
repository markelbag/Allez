import React from "react"
import "./color.css"

function Contact() {
    return (
<section className="py-12 px-4">
  <h2 className="text-3xl mb-8 text-center font-heading">Contact the Allez team</h2>
  <div className="w-full max-w-2xl mx-auto mb-8">
    <form>
      <div className="flex mb-4 -mx-2">
        <div className="w-1/2 px-2">
          <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="Name"></input>
        </div>
        <div className="w-1/2 px-2">
          <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="Email"></input>
        </div>
      </div>
      <div className="mb-4"><textarea className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write something..." rows="5"></textarea></div>
      <div>
        <button className="inline-block w-full py-4 px-8 leading-none text-white bg hover:bg-gray-700 rounded shadow">Submit</button>
      </div>
    </form>
  </div>
  <div className="text-center">
    <p className="mb-2">Or just email us on</p>
    <a className="text hover:underline" href="#">coaches@fenceallez.com</a>
  </div>
</section>
)}

export default Contact;