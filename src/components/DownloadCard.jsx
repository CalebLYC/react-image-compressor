import React from 'react';

function DownloadCard({ imagesrc, isCompressed, compressedImage }) {
    return (
        <div className='card'>
            <div>
                {!isCompressed ? <img src={`${imagesrc}`} alt="download" max-width='500' max-heigth='500' /> : <a href={imagesrc} rel='noreferrer' target='_blank'><img src={`${imagesrc}`} alt="download" max-width='500' max-heigth='500' /></a>}
            </div>
            {isCompressed && <a href={imagesrc} download={'compressed' + compressedImage.name}><button className='compressBtn'>Télécharger</button></a>}
        </div>
    );
}

export default DownloadCard;