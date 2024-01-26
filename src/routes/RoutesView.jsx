import React, { useContext } from "react";
import { RootStoreContext } from "../providers/RootStoreContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react";
import UserView from "../pages/User/UserView";
import ProjectView from "../pages/Project/ProjectView";

const RoutesView = observer(() => {

  // Stores:
  const rootStore = useContext(RootStoreContext); // root store
  const routesStore = rootStore.routesStore; // native store

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserView/>}></Route>
          <Route path="/project/:id" element={<ProjectView/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
});

export default RoutesView;
