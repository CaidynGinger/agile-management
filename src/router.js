import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calendar } from "./components/Pages/Calendar/Calendar";
import { Main } from "./components/Main/Main";
import { DoctorListRouter } from "./components/Pages/DoctorListMain/DoctorListRouter";
import { DoctorsList } from "./components/Pages/DoctorListMain/DoctorsList/DoctorsList";
import { Profile } from "./components/Pages/DoctorListMain/DoctorsList/Doctor/Profile/Profile";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Calendar />} />
          <Route path="doctors-list" element={<DoctorListRouter />} >
            <Route path="" element={<DoctorsList/>}/>
            <Route path=":doctorId" element={<Profile />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
