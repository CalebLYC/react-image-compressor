import React, { useRef } from 'react';

function UploadCard(props) {
    const fileInput = useRef('fileInput');

    return (
        <div className='card'>
            <div>
                <img src={props.src} alt="download" max-width='500' max-heigth='500' />
            </div>
            <button className='compressBtn' onClick={() => { fileInput.current.click() }}>{props.uploadImage ? 'Changer l\'image' : 'Charger un fichier'}</button>
            <input type="file" name="image" id="image" hidden ref={fileInput} onChange={(e) => props.onChange(e)} />
        </div>
    );
}

export default UploadCard;