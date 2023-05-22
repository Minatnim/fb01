export default function EditProfileModal() {
  return (
    <>
      <div className="fixed inset-0 bg-white opacity-80 z-20"></div>
      <div className="fixed inset-0 z-30">
        <div className="flex justify-center items-center min-h-full p-4">
          <div className="bg-white max-w-[43.75rem] w-full rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]">
            <div className="flex justify-between items-center p-4 border-b text-xl">
              <button className="invisible">&#10005;</button>
              <h5 className="font-bold">Edit profile</h5>
              <button className="text-gray-500 font-semibold hover:text-gray-700">&#10005;</button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto scrollbar">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-bold text-xl">Profile picture</h5>
                    <input type="file" className="hidden" />
                    <button className="text-blue-600 font-medium rounded-md px-2.5 py-1.5 hover:bg-gray-100">
                      Edit
                    </button>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="h-[10.5rem] w-[10.5rem] rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-bold text-xl">Cover photo</h5>
                    <input type="file" className="hidden" />
                    <div>
                      <button className="text-blue-600 font-medium rounded-md px-2.5 py-1.5 hover:bg-gray-100">
                        Save
                      </button>
                      <button className="text-blue-600 font-medium rounded-md px-2.5 py-1.5 hover:bg-gray-100">
                        Cancel
                      </button>
                      <button className="text-blue-600 font-medium rounded-md px-2.5 py-1.5 hover:bg-gray-100">
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center aspect-[1095/405] overflow-hidden rounded-lg">
                    <img src="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex gap-2 p-4 border-t">
              <div>
                <a href="/">
                  <img
                    src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="h-[2rem] w-[2rem] rounded-full"
                  />
                </a>
              </div>
              <div className="flex-1">
                <input
                  className="rounded-full bg-gray-200 px-3 py-1.5 w-full outline-none text-sm"
                  placeholder="Write a comment..."
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
