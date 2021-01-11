import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AcctBilling from "../components/acctbilling"

function Billing() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
    <AcctBilling/>
    </Layout>
  );
}

export default Billing;