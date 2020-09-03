import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Admn from "../components/admn"

function Admin() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
    <Admn/>    
    </Layout>
  );
}

export default Admin;