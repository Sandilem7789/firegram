import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadFrom = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const changeHandler = (e) => {
        //here we want access file selected
        let selected = e.target.files[0];

        //allowed types to upload
        const types = ["image/png", "image/jpeg"];
        
        //updating the state if there is a file selected
        //and that file type is included in array "types" above
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError("")
        }
        else {
            setFile(null);
            setError("Please select an Image file (png or jpeg)");
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && 
                    <div className="error">
                        {error}
                    </div>
                }
                {/*this returns the file name*/}
                {file && 
                    <div>
                        {file.name}
                    </div>
                }
                {/*we only output this if there is a file selected.*/}
                {file && 
                    <ProgressBar file={file} setFile={setFile} />
                }
            </div>
        </form>
    )
}

export default UploadFrom
