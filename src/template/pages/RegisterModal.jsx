export default function RegisterModal() {
  return (
    <>
      <div className="fixed inset-0 bg-white opacity-80 z-20"></div>
      <div className="fixed inset-0 z-30">
        <div className="flex justify-center items-center min-h-full p-4">
          <div className="bg-white max-w-[27rem] w-full rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]">
            <div className="flex justify-between items-center p-4 border-b text-xl">
              <button className="invisible">&#10005;</button>
              <h5 className="font-bold">Sign Up</h5>
              <button className="text-gray-500 font-semibold hover:text-gray-700">&#10005;</button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto scrollbar">
              <form>
                <div className="grid gap-y-4 gap-x-3 sm:grid-cols-2">
                  <div>
                    <input
                      type="input"
                      className="block w-full rounded-md border border-gray-200 px-3 py-1.5 leading-6 text-sm outline-none focus:ring focus:border-blue-500"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <input
                      type="input"
                      className="block w-full rounded-md border border-gray-200 px-3 py-1.5 leading-6 text-sm outline-none focus:ring focus:border-blue-500"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-span-full">
                    <input
                      type="input"
                      className="block w-full rounded-md border border-gray-200 px-3 py-1.5 leading-6 text-sm outline-none focus:ring focus:border-blue-500"
                      placeholder="Email address or mobile number"
                    />
                  </div>
                  <div className="col-span-full">
                    <input
                      type="input"
                      className="block w-full rounded-md border border-gray-200 px-3 py-1.5 leading-6 text-sm outline-none focus:ring focus:border-blue-500"
                      placeholder="New password"
                    />
                  </div>
                  <div className="col-span-full">
                    <input
                      type="input"
                      className="block w-full rounded-md border border-red-500 px-3 py-1.5 leading-6 text-sm outline-none focus:ring focus:ring-red-300"
                      placeholder="Confirm new password"
                    />
                    <span className="text-sm text-red-500">Password and confirm password did not match</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button className="rounded-md bg-[#42b72a] hover:bg-[#36a420] text-white text-lg font-bold px-8 py-1 min-[320px]:min-w-[12rem]">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
