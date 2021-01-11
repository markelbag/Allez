//This is where the form for becoming a member will be.
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Memform from "../components/memform"

function Membershipform() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
    <Memform/>    
    </Layout>
  );
}

export default Membershipform;