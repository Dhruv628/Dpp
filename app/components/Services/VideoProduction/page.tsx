"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../../Navbar/page";
import Footer from "../../Footer";
import { useDispatch, useSelector } from "react-redux";
import { inititalizePhotography } from "@/app/redux/actions/photographyReducerAction";
import SettingPopover from "../Photography/SettingsPopover";
import CreateFolderModal from "../Photography/CreateFolderModal";
import Photos from "@/app/components/Services/Photography/Photos";
import Loader from "../../Loader/Loader";
 

const VideoProduction = () => {
  const [folderName, setFolderName] = useState(0);
  const photos = useSelector((state) => (state as any).photosReducer?.photos);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false)

  useEffect(() => {
    if((photos as any).length > 0){
      setloading(false)
    }
    console.log(loading)
    const fetchPhotosForInitialization = async () => {
      try {
        const response = await fetch("/api/routes/Photo/PhotoFolder/FindAll", {
          method: "GET",
        });
        const photos = await response.json();

        console.log(photos);
        if (
          Array.isArray(photos.photoFolder) &&
          photos.photoFolder.length > 0
        ) {
          dispatch(inititalizePhotography(photos.photoFolder));
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotosForInitialization();
  }, [loading]);

  return (
    <>
      {/* <ImageUpload cloudname="dnr7thjlu" uploadPreset="DHEERAJ_PHOTO_POINT"/> */}
      <NavBar />
      <div className="bg-white text-black py-6  min-h-[100vh]">
        <h1 className="flex justify-center  text-5xl font-bold tracking-wide">
          Videography
        </h1>
        {/* Header  */}
        <div className="flex justify-between items-center px-2 py-8">
          <div className="block"></div>
          <div className="flex  justify-center pl-6 gap-6 list-none font-light">
            {(photos as any).length > 0
              ? photos.map((e: any, i: any) => {
                  return (
                    <div
                      className="hover:cursor-pointer "
                      key={i + 69}
                      onClick={() => {
                        setFolderName(i);
                        setloading(true);
                      }}
                    >
                      <div className=" flex items-center gap-2">
                        <span
                          className={`hover:text-blue-400 uppercase transition ${
                            folderName === i
                              ? "border-b border-blue-400 text-blue-400"
                              : ""
                          }
            `}
                        >
                          {e.name}
                        </span>{" "}
                        <SettingPopover
                        index={folderName}
                          fId={e._id}
                          setFoldername={setFolderName}
                        />
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="pr-6 hover:scale-[1.05] transition">
            <CreateFolderModal />
          </div>
        </div>
        {/* Photos  */}
         {loading?<div className=" flex items-center justify-center h-[70vh]" ><Loader/></div>:<Photos photos={photos} folderName={folderName} />} 
        {/* Header  */}
      </div>
      <Footer />
    </>
  );
};

export default VideoProduction;
