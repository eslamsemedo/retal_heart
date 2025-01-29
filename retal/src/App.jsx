import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function App() {
  const [formData, setFormData] = useState({})
  // const { currentUser } = useSelector((state) => state.counter)

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.id]: e.target.value
  //   })
  //   // console.log(formData)
  // }
  const checkResult = async () => {
    const res = await fetch("https://nodejs-api-ruby.vercel.app/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json()
    setFormData({ data })
  }

  return (
    <>
      <button onClick={checkResult}>eslam</button>
      <p>{formData ? JSON.stringify(formData) : ""}</p>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        {/* Title and Subheading */}
        <h1 className="text-2xl font-bold mb-1 text-gray-800">
          ESP32 Patient Health Monitoring
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          www.how2electronics.com
        </p>

        {/* Card Container */}
        <div className="bg-white rounded shadow p-6 w-full max-w-md">
          {/* Room Temperature */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              {/* Example placeholder icon (thermometer) */}
              <span className="text-yellow-500">
                {/* Replace with your desired icon: */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 2a1 1 0 012 0v6a4 4 0 11-2 0V2z"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Room Temperature</span>
            </div>
            <span className="text-xl text-yellow-500 font-semibold">
              27°C
            </span>
          </div>

          {/* Room Humidity */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              {/* Example placeholder icon (water drop) */}
              <span className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C9.243 6.063 7 8.677 7 11a5 5 0 0010 0c0-2.323-2.243-4.937-5-9z"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Room Humidity</span>
            </div>
            <span className="text-xl text-blue-500 font-semibold">
              34%
            </span>
          </div>

          {/* Heart Rate */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              {/* Example placeholder icon (gauge) */}
              <span className="text-teal-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 13v7m-6 0h12M5.454 9.545a9 9 0 1113.09 0"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Heart Rate</span>
            </div>
            <span className="text-xl text-teal-500 font-semibold">
              33 BPM
            </span>
          </div>

          {/* Blood Oxygen */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              {/* Example placeholder icon (mountains) */}
              <span className="text-purple-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 17l6-6 4 4 8-8"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Blood Oxygen</span>
            </div>
            <span className="text-xl text-purple-500 font-semibold">
              97%
            </span>
          </div>

          {/* Body Temperature */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Example placeholder icon (thermometer) */}
              <span className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 2a1 1 0 012 0v6a4 4 0 11-2 0V2z"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Body Temperature</span>
            </div>
            <span className="text-xl text-yellow-500 font-semibold">
              27°C
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
