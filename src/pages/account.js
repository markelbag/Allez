import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Signup from "../components/signup"


function Account() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Account"
      />
    <Signup/>    
    </Layout>
  );
}

export default Account;
