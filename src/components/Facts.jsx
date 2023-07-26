import { useState } from 'react';
import LOGO from '../assets/favicon.jpg';

const Facts = () => {
    const [nums, setNums] = useState("");
    const baseURL = "http://numbersapi.com/";

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(baseURL + nums,{
            headers:{
              'x-requested-with': 'text/plain'
            }})
            .then(response => response.text())
            .then(text => {
                document.getElementById('factDiv').innerHTML = text;
                setNums("");
            })
            .catch(e=>console.log(e));      
    }
    return (
        <div className='grid place-items-center h-screen px-5 text-2xl text-center'>
            <div>
                <img
                src={LOGO}
                alt=""
                className='h-48'
                />
            </div>
            <div>
                <em><span  id='factDiv'></span></em>
            </div>
            <div className="flex  items-center">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 w-full max-w-sm">
                        <input
                        type="number"
                        value={nums}
                        className="w-full sm:w-48 md:w-64 lg:w-96 xl:w-128 bg-gray-50 border-2 border-[var(--primary)] text-gray-900 text-lg rounded-lg focus:ring-[var(--primary)] focus:border-[var(--primary)] p-2.5"
                        onChange={(e) => setNums(e.target.value)}
                        placeholder='Please type number'
                        required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="text-white bg-[var(--primary)] hover:bg-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)] font-medium rounded-lg text-sm px-10 w-full py-2.5 max-w-sm"
                            >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Facts;
