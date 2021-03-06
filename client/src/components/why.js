import React from "react"
// import { Link } from "gatsby";
import "./color.css"


function Why() {
    return(
<div className="bg-white overflow-hidden">
  <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
    <div className="mx-auto text-base max-w-prose lg:max-w-none">
      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Case Study</p>
      <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Meet Whitney</h1>
    </div>
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
        <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div className="relative pb-7/12 lg:pb-0">
              <img src="https://firebasestorage.googleapis.com/v0/b/allez-47904.appspot.com/o/Arigrant.jpg?alt=media&token=4f3cb25b-4b5c-4718-8162-d889789c3ebd"></img>
            </div>
            <figcaption className="flex mt-3 text-sm text-gray-500">
              {/* <!-- Heroicon name: camera --> */}
              <svg className="flex-none w-5 h-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Grant S taking silver at a national event in boston.
            </figcaption>
          </figure>
        </div>
      </div>
      <div>
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <p className="text-lg leading-7 text-gray-500 mb-5">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
        </div>
        <div className="prose text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
          <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
          <p>Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
          <p>Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.</p>
          <ul>
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
          <h2>How we helped</h2>
          <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>
          <p>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
        </div>
      </div>
    </div>
  </div>
</div>
       

    )
}

export default Why;