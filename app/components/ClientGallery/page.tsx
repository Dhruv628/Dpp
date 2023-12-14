"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingPopover from "./SettingsPopover";
import CreateFolderModal from "./CreateFolderModal";
import NavBar from "../Navbar/page";
import Footer from "../Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { inititalizeClientGallery } from "@/app/redux/actions/clientGalleryAction";
import Loader from "../Loader/Loader";
import AccessConfirmationModal from "./AccessConfirmationModal";
import { CircularLoader } from "../Services/Photography/Photos";

const Photography = () => {
  const [folderName, setFolderName] = useState(0);
  const photos = useSelector((state) => (state as any).photosReducer?.photos);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [isAccessConfirmationModalOpen, setisAccessConfirmationModalOpen] =
    useState(false);
  const [isImageLoading, setIsImageLoading] = useState<any>(false);

  useEffect(() => {
    setloading(true);
    const fetchPhotosForInitialization = async () => {
      setloading(true);
      try {
        const response = await fetch(
          "/api/routes/Photo/ClientGallery/FindAll",
          {
            method: "GET",
          }
        );
        const resPhotos = await response.json();
        console.log(resPhotos);
        console.log(`pp: ${photos}`);
        if (
          Array.isArray(resPhotos.clientGallery) &&
          resPhotos.clientGallery.length > 0
        ) {
          const photosLength = resPhotos.clientGallery.length;
          dispatch(inititalizeClientGallery(resPhotos.clientGallery));
        }
        setloading(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setloading(false);
      }
    };
    fetchPhotosForInitialization();
    console.log(photos);
  }, []);

  return (
    <div className="bg-white  w-full text-black ">
      <div style={{ zIndex: 30 }} className="fixed top-0 w-full">
        <NavBar />
      </div>
      {!loading ? (
        <>
          <div className="py-6 mt-16 min-h-[100vh]">
            <h1 className="flex justify-center py-6 text-4xl sm:text-5xl font-bold tracking-wide">
              Client Gallery
            </h1>
            {/* Header  */}
            <div className="flex gap-4 flex-col items-center px-2  pb-8">
              <div className=" px-[3.8rem] justify-end flex w-full">
                <CreateFolderModal />
              </div>
              <div
                style={{ zIndex: 0 }}
                className="flex flex-row flex-wrap justify-center hover:cursor-pointer gap-12 "
              >
                {(photos as any).length > 0
                  ? photos.map((e: any, i: any) => {
                      return (
                        <div
                          className=" "
                          key={i + 69}
                          onClick={() => {
                            setFolderName(i);
                          }}
                        >
                          <div className="flex relative w-96 h-[17rem]">
                            {isImageLoading ? (
                              ""
                            ) : (
                              <div className="text-sm z-20 flex items-center justify-between absolute bottom-0 right-0 py-4 px-3 text-white bg-black bg-opacity-60 w-full  ">
                                <span className="tracking-wide uppercase font-semibold">
                                  {e.name}
                                </span>
                                <span className="">
                                  <SettingPopover
                                    index={folderName}
                                    fId={e._id}
                                    setFoldername={setFolderName}
                                  />
                                </span>
                              </div>
                            )}
                            <div
                              onClick={() => {
                                setisAccessConfirmationModalOpen(true);
                              }}
                              className="text-sm hover:cursor-pointer z-10 absolute top-0 bg-black bg-opacity-[0] hover:bg-opacity-[0.25] h-full w-full"
                            ></div> 
                            <div className="20">
                              <LazyLoadImage
                                src={e.images[0].url}
                                effect="blur"
                                beforeLoad={() => {
                                  setIsImageLoading(true);
                                }}
                                onLoad={() => {
                                  setIsImageLoading(false);
                                }}
                                className="shadow-md  h-[17rem] object-cover "
                                alt={`Image not found`}
                              />{" "}
                              <AccessConfirmationModal
                                index={i}
                                photos={photos[i]}
                                isAccessConfirmationModalOpen={
                                  isAccessConfirmationModalOpen
                                }
                                setisAccessConfirmationModalOpen={
                                  setisAccessConfirmationModalOpen
                                }
                              />
                            </div>
                            {isImageLoading && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div>
                                  <CircularLoader />
                                </div>
                              </div>
                            )} 
                            </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
            {/* Header  */}
          </div>
          <Footer />
        </>
      ) : (
        <div className="flex justify-center items-center bg-white h-[100vh]">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Photography;
