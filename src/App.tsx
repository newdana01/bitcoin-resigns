import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // 다크 모드 토글
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">테스트</h1>
      <p className="mt-4">테스트</p>
    </Layout>
    // <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-primary-dark">
    //   <button
    //     onClick={toggleDarkMode}
    //     className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
    //   >
    //     {darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
    //   </button>
    //   <h1 className="text-3xl font-bold text-black dark:text-white">
    //     다크 모드 테스트
    //   </h1>
    // </div>
  );
}

export default App;
