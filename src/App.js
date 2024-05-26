import FAQ from "./pages/FAQ";
import Feed from "./pages/Feed";
import Follow from "./pages/Follow";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Not from "./pages/Not";
import Post from "./pages/Post";
import Search from "./pages/Search";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import GlobalModal from "./components/GlobalModal";
import DefaultLayout from "./components/layout/DefaultLayout";
import MinimalLayout from "./components/layout/MinimalLayout";
import PrivateRoute from "./components/route/PrivateRoute";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalModal />
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/follow" element={<Follow />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route
                path="/mypage"
                element={<PrivateRoute element={<Mypage />} />}
              />
              <Route path="/post" element={<Post />} />
              <Route
                path="/setting"
                element={<PrivateRoute element={<Setting />} />}
              />
              <Route path="*" element={<Not />} />
              <Route path="/post1" element={<Post />} />
            </Route>

            {/* Header와 Player가 없는 Layout */}
            <Route element={<MinimalLayout />}>
              <Route
                path="/write"
                element={<PrivateRoute element={<Write />} />}
              />{" "}
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
