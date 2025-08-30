import "./App.css";
import Layout from "./components/layout/Layout";
import ChartSection from "./components/domain/pricing/ChatSection";
import WhatIf from "./components/domain/whatif/WhatIf";
import NewsSection from "./components/domain/news/NewsSection";

function App() {
  return (
    <Layout>
      <ChartSection />
      <WhatIf />
      <NewsSection />
    </Layout>
  );
}

export default App;
