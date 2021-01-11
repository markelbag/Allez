import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about"
function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <About />
    </Layout>
  );
}

export default AboutPage;
