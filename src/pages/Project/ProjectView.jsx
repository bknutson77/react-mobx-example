import React, { useContext, useEffect } from "react";
import { RootStoreContext } from "../../providers/RootStoreContext";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import FileComponent from "../../components/file/FileComponent";
import { BoundingBox, XLg } from "react-bootstrap-icons";
import ModalComponent from "../../components/modal/ModalComponent";
import ImageView from "../Image/ImageView";

const ImageModal = observer(() => {

  // Stores:
  let rootStore = useContext(RootStoreContext);
  let projectStore = rootStore.projectStore;

  return (
    <ModalComponent open={projectStore.showImageModal} width={800}>
      <ImageView/>
    </ModalComponent>
  );
});

const ProjectView = observer(() => {

  // Stores:
  let rootStore = useContext(RootStoreContext);
  let projectStore = rootStore.projectStore;
  
  // Params
  let { id } = useParams();

  // Hooks:
  useEffect(() => {
    projectStore.populate(id);
  }, []);

  return (
    <div className="w-full h-full p-4">

      {/* Modals */}
      <ImageModal/>

      {/* Project Header */}
      <div className="w-full flex flex-col">
        <div className="w-full flex text-xl">{projectStore.project.project_name}</div>
        <div className="w-full flex text-sm font-light">{projectStore.project.project_description}</div>
      </div>

      {/* Add Image */}
      <div className="w-full flex justify-end mt-8">
        <div className="w-[128px]">
          <FileComponent
            id="File"
            label="Add Image"
            accepts="image/png, image/jpeg"
            onChangeCallback={(e) => projectStore.addImage(e)}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full relative flex items-center mt-[-10px] mb-[16px]">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-sm">Images</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Image List */}
      <div className="w-full flex flex-wrap justify-center gap-4">
        {projectStore.imageList.map((image, i) =>

          // Image Card:
          <div key={i} className="w-[350px] h-[350px] bg-gray-800 flex content-center relative">

            {/* Label Image */}
            <div
              className="w-[20px] absolute left-2 top-2 text-white cursor-pointer"
              onClick={() => projectStore.labelImage(image)}
            >
              <BoundingBox/>
            </div>

            {/* Delete Image */}
            <div
              className="w-[20px] absolute right-2 top-2 text-white cursor-pointer"
              onClick={() => projectStore.deleteImage(image)}
            >
              <XLg/>
            </div>

            {/* Display Image */}
            <img src={image.image_get_url} className="justify-self-center self-center"/>
          </div>
        )}
      </div>
    </div>
  );
});

export default ProjectView;
