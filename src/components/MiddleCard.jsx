import React from 'react';

function MiddleCard(props) {
    return (
        <div className='card'>
            <button className='compressBtn' onClick={() => props.onClick()}>Compresser</button>
            <div className='options'>
                <h4>Options</h4>
                <div className='option'>
                    <label htmlFor="sizes">Taille en MB</label>
                    <select name="sizes" id="sizes" onChange={(e) => props.sizeChange(e)} defaultValue='3'>
                        <option value="1">1MB</option>
                        <option value="2">2MB</option>
                        <option value="3">3MB</option>
                    </select>
                </div>

                <div className="option">
                    <label htmlFor="width">Taille en px</label>
                    <select name="width" id="width" onChange={(e) => props.widthChange(e)} defaultValue='800'>
                        <option value="100">100px</option>
                        <option value="200">200px</option>
                        <option value="400">400px</option>
                        <option value="800">800px</option>
                    </select>
                </div>

                <div className="option">
                    <label htmlFor="useWebWorker">useWebWorker</label>
                    <input type="checkbox" name="useWebWorker" id="useWebWorker" checked={props.webWorkerUsing} onChange={(e) => props.webWorkerUsingChange(e)} />
                </div>
            </div>
        </div>

    );
}

export default MiddleCard;