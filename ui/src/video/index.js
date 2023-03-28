import VideoCall from './Call';
import React from "react";

function MessageBox() {
    return (
        <div className='absolute z-20 bottom-32'>
            <div className="card a-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h1 className='text-center justify-center'>header</h1>
                    <p className='text-center'>question</p>
                    <div className="card-actions justify-center">
                        {/*<button className="badge badge-outline mt-1">סיימתי</button>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Call()  {
    return (
        <main style={{display: 'flex', flex: 1}}>
            <VideoCall/>
            <MessageBox />
        </main>
    )
}
