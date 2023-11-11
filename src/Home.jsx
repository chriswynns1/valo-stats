import React, {useState, useEffect} from 'react'
import  Datepicker from 'react-tailwindcss-datepicker';
import MatchCard from './MatchCard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    const [matches, setMatches] = useState([]);
    const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  }

  const startDateString = value.startDate;
  const endDateString = value.endDate;
  const startDateObject = new Date(startDateString);
  const endDateObject = new Date(endDateString);

  // Get the Unix timestamp (epoch time) in milliseconds
  const startEpoch = startDateObject.getTime();
  const endEpoch = endDateObject.getTime();
  const endEpochSecs = Math.floor(endEpoch / 1000);
  const startEpochSecs = Math.floor(startEpoch / 1000);



  const handleProcessDateRange = async () => {
    try {
      const response = await axios.post('http://localhost:5000/processDateRange', { startEpochSecs, endEpochSecs });
      const matchesWithId = response.data.documents.map((document) => ({
        id: document.id, // Use document ID as the match ID
        ...document,
      }));
  
      setMatches(matchesWithId);
      console.log('Response:', matches);
      toast("✅ Date range processed successfully!");
    } catch (error) {
      console.error('Error processing date range:', error.response.data);
    }
  };

  

  return (
    <div className='pt-20 bg-gradient-to-tr from-black via-violet-900 to-blue-900 min-h-screen'>
    <div className='text-white text-3xl mx-80 px-3 text-left flex flex-col justify-around'>
      <div className='flex flex-col'>
        <div className='mb-2'>
          SalTsui#NA1
        </div>
        <div className='flex mb-2 w-80'>
          <Datepicker
            value={value}
            onChange={handleValueChange}
          />
        <div className=''>
            <button onClick={handleProcessDateRange} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Go
            </span>
            </button>
        </div>
        </div>
      </div>
           
      <div className='text-5xl pt-4'>
  Matches to Sync:
  {matches.map((match) => (
    <MatchCard key={match.id} match={match} />
  ))}
  <div className='text-center pt-5'>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-4xl font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-blue-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Sync to DB
      </span>
    </button>
  </div>
</div>

        </div>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
    </div>
  )
}

export default Home
