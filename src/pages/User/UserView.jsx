import React, { useContext, useEffect } from "react";
import { RootStoreContext } from "../../providers/RootStoreContext";
import { observer } from "mobx-react"
import { BoundingBox, XLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const UserView = observer(() => {

  // Navigation:
  const navigate = useNavigate();

  // Stores:
  let rootStore = useContext(RootStoreContext);
  let userStore = rootStore.userStore;

  // Hooks:
  useEffect(() => {
    userStore.populate();
  }, []);

  return (
    <div className="w-full h-full p-4">

      {/* User Header */}
      <div className="w-full flex flex-col">
        <div className="w-full flex text-xl">Your Projects</div>
        <div className="w-full flex text-sm font-light">These are your projects, click on any project to view project details.</div>
      </div>

      {/* Divider */}
      <div className="w-full relative flex items-center mt-4 mb-[16px]">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-sm">Projects</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Project List */}
      <div className="w-full flex flex-wrap justify-center gap-4">
        {userStore.projectList.map((project, i) =>

          // Project Card:
          <div 
            key={i} 
            className="w-[350px] p-4 flex flex-col justify-center content-center relative border hover:shadow-lg cursor-pointer"
            onClick={() => navigate("/project/" + project.sk)}
          >

            {/* Delete Project */}
            <div
              className="w-[20px] absolute right-2 top-2 text-black cursor-pointer"
              onClick={() => userStore.deleteProject(project)}
            >
              <XLg/>
            </div>

            {/* Display Project Description */}
            <div className="text-sm font-medium">{project.project_name}</div>
            <div className="text-sm font-light">{project.project_description}</div>
          </div>
        )}
      </div>
    </div>
  );
});

export default UserView;
