import React, { useState } from 'react';
//import { useRef } from 'react';
import '../styles/style.css';
import upload from '../../src/images/upload.png';
import MiddleCard from './MiddleCard';
import DownloadCard from './DownloadCard';
import UploadCard from './UploadCard';
import imageCompression from 'browser-image-compression';

function Compressor() {
    const [uploadLink, setUploadLink] = useState(upload);
    const [uploadImage, setuploadImage] = useState(false);
    const [originalImage, setoriginalImage] = useState({});
    const [compressedImageLink, setcompressedImageLink] = useState(upload);
    const [compressedImage, setcompressedImage] = useState({});
    const [isCompressed, setisCompressed] = useState(false);
    const autorizedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg', 'image/'];
    const [options, setOptions] = useState({
        maxSizeMB: 3,
        maxWidthOrHeight: 800,
        useWebWorker: true
    });

    // const fileInput = useRef('fileInput');


    const fileChange = (e) => {
        const imageLink = e.target.files[0]
        if (autorizedTypes.includes(imageLink.type)) {
            setUploadLink(URL.createObjectURL(imageLink));
            setoriginalImage(imageLink);
            setuploadImage(true);
        } else {
            alert('Fichier invalide!!!!');
        }
    }
    const sizeChange = (e) => {
        setOptions({
            maxSizeMB: e.target.value,
            maxWidthOrHeight: options.maxWidthOrHeight,
            useWebWorker: options.useWebWorker
        })
    }
    const widthChange = (e) => {
        setOptions({
            maxSizeMB: options.maxSizeMB,
            maxWidthOrHeight: e.target.value,
            useWebWorker: options.useWebWorker
        })
    }
    const webWorkerUsingChange = (e) => {
        setOptions({
            maxSizeMB: options.maxSizeMB,
            maxWidthOrHeight: options.maxWidthOrHeight,
            useWebWorker: e.target.checked
        })
    }
    const handleClick = () => {
        if (uploadImage) {
            if (options.maxSizeMB >= originalImage.size) {
                alert("Taille de l'image trop petite, choisis une autre");
                return 0;
            }
            let outPout;
            imageCompression(originalImage, options).then(x => {
                outPout = x;
                setcompressedImageLink(URL.createObjectURL(outPout));
                setcompressedImage(outPout);
                setisCompressed(true);
            })
            return 1;
        } else {
            alert('Aucune image choisi');
            return 0;
        }
    }

    return (

        <div className='container'>
            <UploadCard src={uploadLink} onChange={fileChange} uploadImage={uploadImage} />
            <MiddleCard onClick={handleClick} sizeChange={sizeChange} widthChange={widthChange} webWorkerUsing={options.useWebWorker} webWorkerUsingChange={webWorkerUsingChange} />
            <DownloadCard imagesrc={compressedImageLink} isCompressed={isCompressed} compressedImage={compressedImage} />
        </div>

        /*
         <div className='container' >
             <div className='card'>
                 <div>
                     <img src={uploadLink} alt="download" max-width='500' max-heigth='500' />
                 </div>
                 <button className='compressBtn' onClick={() => { fileInput.current.click() }}>{uploadImage ? 'Changer l\'image' : 'Charger un fichier'}</button>
                 <input type="file" name="image" id="image" hidden ref={fileInput} onChange={(e) => fileChange(e)} />
             </div>
 
             <div className='card'>
                 <button className='compressBtn' onClick={() => handleClick()}>Compresser</button>
             </div>
 
             <div className='card'>
                 <div>
                     <img src={`${compressedImageLink}`} alt="download" max-width='500' max-heigth='500' />
                 </div>
                 {isCompressed && <a href={compressedImageLink} download={'compressed' + compressedImage.name}><button className='compressBtn'>Télécharger</button></a>}
             </div>
         </div >*/
    );
}

export default Compressor;