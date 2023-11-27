import axios from "axios";

const ImageUpload = async (event: any, uploadPreset: any, cloudname: any) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", `${uploadPreset}`);
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
      formData
    );
    return response.data.url;
  } catch (error: any) {
    console.error("Error uploading file: ", error);
    return error.message;
  }
};

export default ImageUpload;
