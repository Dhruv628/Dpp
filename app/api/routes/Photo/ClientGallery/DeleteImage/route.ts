import { authMiddleware } from "@/app/api/middleware/AuthMiddleware";
import ClientGallery from "@/app/api/models/ClientGallery/route";
import { NextRequest, NextResponse } from "next/server";

export type ImageType = {
  url: string;
};

export async function PUT(req: NextRequest, res: Response) {
  const isAuthenticated = await authMiddleware(req);
  if(isAuthenticated){
    try {
      const reqBody = await req.json();
      const { name, url } = reqBody;
      const id=req.url.split("id=")[1]
      const clientGalleryExists = await ClientGallery.find({ name: name,_id:id });
      let imageArray: ImageType[] = clientGalleryExists[0]?.images || [];
      const updatedImageArray = imageArray.filter((e) => e.url !== url);
      console.log(updatedImageArray);
      const updatedClientGallery = await ClientGallery.findOneAndUpdate(
        { name: name,_id:id },
        { name: name, images: updatedImageArray }
      );
      return NextResponse.json(
        { success: true, updatedClientGallery },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { success: false, message: (error as Error).message },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      { success: false, message: "You don't have access to this resource" },
      { status: 400 }
    );
  }
  }
