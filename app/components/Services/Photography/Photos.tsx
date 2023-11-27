import React from 'react'
import MyModal from "./DeleteImageModal";

const Photos = (props:any) => {
    const {photos,folderName}=props;
  return (
    <div className="grid grid-cols-2 gap-4 justify-center">
    {(photos as any).length > 0
      ? photos
          .find((e: any, i: number) => i === folderName)
          .images.map((image: any, index: any) => {
            return (
              <div className="m-4 relative" key={index + 169}>
                <img
                  src={`${image.url}`}
                  className="w-full"
                  alt={`Image ${index}`}
                />
                <div className="absolute right-2 top-2">
                  <MyModal
                    id={
                      photos.find((e: any, i: number) => i === folderName)
                        ._id
                    }
                    url={image.url}
                  />
                </div>
              </div>
            );
          })
      : ""}
  </div>
  )
}

export default Photos 