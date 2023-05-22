export default function LoginPage() {
  return (
    <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[8.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
      <div className="max-w-[25rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem]">
        <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            className="-m-7 h-[6.625rem]"
            alt="fakebook-logo"
          />
        </div>
        <h2 className="text-2xl font-medium text-center min-[900px]:text-left leading-7 min-[1075px]:text-[1.75rem] min-[1075px]:w-[31.25rem]">
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>
      <div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
        <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
          <form>
            <div className="grid gap-4">
              <div>
                <input
                  className="w-full rounded-md px-4 py-3.5 border border-red-500 outline-none focus:ring-1 focus:ring-red-300"
                  placeholder="Email address or phone number"
                />
                <small className="text-xs text-red-500">Email address or phone number is required.</small>
              </div>
              <div>
                <input
                  className="w-full rounded-md px-4 py-3.5 border border-gray-300 focus:border-blue-500 outline-none focus:ring-1 focus:ring-blue-300"
                  placeholder="Password"
                />
              </div>
              <button className="w-full bg-[#1877f2] text-xl text-white font-bold px-4 leading-[3rem] rounded-md">
                Log in
              </button>
            </div>
          </form>
          <hr className="my-5" />
          <div className="pt-1 pb-2 text-center">
            <button className="text-white font-bold px-4 leading-[3rem] tracking-wide rounded-md bg-[#42b72a] hover:bg-[#36a420]">
              Create new account
            </button>
          </div>
        </div>
        <div className="text-sm text-center">
          <span className="font-bold">Create a Page</span> for a celebrity, brand or business.
        </div>
      </div>
    </div>
  );
}
