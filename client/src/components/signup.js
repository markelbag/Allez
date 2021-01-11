import React from "react"
import { Link } from "gatsby";
import "./color.css"


function Signup() {

return (
<section className="py-8">
  <div className="w-full max-w-sm mx-auto">
    <form>
      <div className="mb-4">
        <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Email"></input>
      </div>
      <div className="mb-4">
        <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="password" placeholder="Password"></input>
      </div>
      <div className="mb-4">
        <label className="text-gray-500">
          <input className="mr-2 leading-tight" type="checkbox"></input>
          <span className="text-sm">Send me your newsletter!</span>
        </label>
      </div>
      <div className="mb-4">
        <button className="inline-block w-full py-4 px-8 leading-none text-white bg hover:bg-gray-700 rounded shadow"><Link to="/Membershipform">Sign up</Link></button>
      </div>
    </form>
  </div>
</section>
)}

export default Signup;