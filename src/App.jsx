import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Header from "./component/header";
import styles from "./styles/app.module.scss";
import { useEffect } from "react";
import api from "./utils/api";

const App = () => {
  useEffect(() => {
    api
      .get("/jobs")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />

        <main className={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Form />} />
            <Route path="/edit/:id" element={<Form />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
