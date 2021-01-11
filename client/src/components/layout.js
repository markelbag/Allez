import PropTypes from "prop-types";
import React from "react";
import "./color.css"

// import Header from "./header";
import Nav from "./nav"

function Layout({ children }) {
  
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      {/* <Header /> */}
      <Nav />

      <main className="flex-1 lg:w-3/4 max-w-8xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-white-700 h-16 fixed bottom-0 w-full bg-white">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-gray-700">
            Created by{` `}
            <a
              className="font-bold no-underline text"
              href="https://bryant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terraformed
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline text-gray-400"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
