import React from 'react'
import { useUserAuthStore } from '../stores/authStore'
import FileUploader from './FileUploader'

const UserProfile = () => {
  const { user } = useUserAuthStore()
  const [profileData, setProfileData] = React.useState({
    name: user?.username,
    email: user?.email,
    dateOfBirth: '1990-01-01',
    profilePicture: 'https://picsum.photos/200/200?random=1'
  })

  const handleUpdate = (data) => {
    setProfileData(data)
  }

  return (
    <div className="user-profile p-6 sm:p-8 mb-8 md:mt-16">
      {user?.username && (
        <img
          src={profileData.profilePicture}
          alt="Profile Picture"
          className="rounded-lg shadow-md mb-6"
          onError={(e) => {
            e.target.src = 'https://picsum.photos/200/200?random=2'
          }}
        />
      )}

      <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        {['Name', 'Email', 'Date of Birth']
          .map((label, index) => (
            <div key={index} className="w-full md:w-1/3 px-2">
              <div className="bg-white rounded-lg shadow-sm mb-2">
                <label className="text-sm font-medium mb-2 block">{label}</label>
                <div className="flex-1 px-3">
                  <input
                    type="text"
                    value={profileData[index.toLowerCase().replace(' ', '')]}
                    onChange={(e) => setProfileData({ [index.toLowerCase().replace(' ', '')]: e.target.value })}
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-md shadow-sm"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-8">
        <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 px-4 rounded">Save Changes</button>
      </div>
    </div>
  )
}

export default UserProfile