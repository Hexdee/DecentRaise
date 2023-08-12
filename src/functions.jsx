import axios from "axios";
import { toaster } from "evergreen-ui";

const cloudaryUpload = async (payload, setCurrentProgress) => axios({
    method: 'POST',
    url: 'https://api.cloudinary.com/v1_1/dboqyj4bp/auto/upload',
    data: payload,
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      setCurrentProgress(percentCompleted);
    },
  });

export const uploadImage = (formData, setCurrentProgress) => {
    try {
      return cloudaryUpload(formData, setCurrentProgress)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
            toaster.danger(error?.response?.data?.error?.message, { id: 'mess' });
        })
    } catch (error) {
        toaster.danger(error?.response?.data?.error?.message, { id: 'mess' });
    }
  };

export const handleUploadImage = (file, setCurrentProgress) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'upload_preset', 'mvybpnf0',
    );
    return uploadImage(formData, setCurrentProgress);
  };