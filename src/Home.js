import React from 'react'

function Home() {
  return (
    <div 
        className='pt-20 bg-gradient-to-tr from-black via-violet-900 to-blue-900 min-h-screen '
    >
        <div className='text-white text-3xl mx-80 px-3 text-left'>
            SalTsui#NA1
            <div className='text-5xl pt-4'>
                Most Recent Match
                <div className='border rounded-sm shadow-2xl mt-6'>
                <div
                    className="bg-cover bg-center h-auto"
                    style={{ backgroundImage: `url('https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png')` }}
                >
                    <div className="bg-opacity-50 p-4 bg-gradient-to-t from-black to-transparent text-white text-8xl text-center">
                        <p>HAVEN</p>
                        <div className='text-left text-2xl mx-20 flex flex-row justify-between'>
                            <div>
                                <ul className='py-2'>
                                    <li>
                                        11-10-2023 @ 12:45 AM
                                    </li>
                                    <li>
                                        Starting Rank: Gold 2
                                    </li>
                                    <li>
                                        Average rank of teammates: Gold 2
                                    </li>
                                    <li>
                                        Average rank of enemies: Gold 2
                                    </li>
                                    <li>
                                        Score: 13-10
                                    </li>

                                    <li>
                                        RR Change: +13
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <ul>
                                    <li>
                                        Average Combat Score: 10
                                    </li>
                                    <li>
                                        Average Damage Per Round: 10
                                    </li>
                                    <li>
                                        Damage Delta Total: 10
                                    </li>
                                    <li>
                                        30% Headshot
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='text-center pt-5'>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-4xl font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Sync to DB
  </span>
</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home
