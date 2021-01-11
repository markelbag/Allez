import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Prof from "../components/prof"

function Profile() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
    <Prof/>    
    </Layout>
  );
}

export default Profile;