import { uploadFile } from '@uploadcare/upload-client';

  const ImageUploadTwo =async (event:any) => {
    let url:any="";
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }
    const fileData = new File([selectedFile], 'filename.ext');
    const result = await uploadFile(fileData, {
      publicKey: '4ff3af5727bbcad03796',
      store: 'auto',
      metadata: {
        subsystem: 'uploader',
        pet: 'cat'
      }
    });
    console.log(`URL: ${result.cdnUrl}`);
    url=result.cdnUrl
    return url;
  }


  

export default ImageUploadTwo;