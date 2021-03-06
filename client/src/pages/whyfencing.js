import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Why from "../components/why"

function WhyFencing() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
    <Why/>    
    </Layout>
  );
}

export default WhyFencing;