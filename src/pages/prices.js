import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Membership from "../components/membership"

function Prices() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
    <Membership/>    
    </Layout>
  );
}

export default Prices;
