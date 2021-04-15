import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";    //storage SDK (firebase)

//our custom hook: uploading an image to storage
const useStorage = (file) => {
    const [progress, setProgress] = useState(0);                            //prograss of th upload
    const [error, setError] = useState(null);                               //any error that we might come across
    const [url, setUrl] = useState(null);                                   //image url that we are going to get from storage after the img has uploaded 

    //the database will contain urls of images not actual images
    //the images will be kept in "storage"
    //the code below needs to run every time an image is uploaded.

    useEffect(() => {                                                       //useEffect(effect, dependency(s)): accepts function with impactful code (e.g cleanup function)
        //references: creating to  file inside 
        //the defauld firebase storage booking
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on(
            "state_chaged", 
            (snap) => {                                                      //this is asynchronous, it takes some time to complete
                //getting the progrss of the upload
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            }, 
            (err) => {
                setError(err);
            },
            //the following argument will fire once the upload is complete
            async () => {
                const url = await storageRef.getDownloadURL();              //get the usrl of the image that has just been uploaded      
                setUrl(url);
            }
        )
    }, [file]);

    return {progress, url, error}
}

export default useStorage;