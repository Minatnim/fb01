import {
  FacebookIcon,
  HouseIcon,
  RightFromBracketIcon,
  UserGroupIcon,
  UserGroupIconAlt,
  UserInIcon,
  UserOutIcon,
  UserPlusIcon
} from '../icons';

export default function FriendPage() {
  return (
    <>
      <header className="grid grid-cols-2 sm:grid-cols-3 px-4 bg-white shadow-md sticky top-0 z-10">
        <div className="py-2 justify-self-start">
          <a href="/">
            <FacebookIcon />
          </a>
        </div>

        <nav className="hidden sm:flex items-center justify-center gap-2">
          <a href="/">
            <div className="px-10 py-2 rounded-lg">
              <HouseIcon className="fill-blue-600" />
            </div>
          </a>
          <a href="/friends">
            <div className="px-10 py-2 rounded-lg hover:bg-gray-100">
              <UserGroupIcon className="fill-gray-500" />
            </div>
          </a>
        </nav>

        <div className="py-2 justify-self-end">
          <div className="relative">
            <div role="button">
              <img
                src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[2.5rem] w-[2.5rem] rounded-full"
              />
            </div>
            <div className="absolute right-0 translate-y-1 w-96 max-w-[calc(100vw-2rem)] border p-2 bg-white shadow-xl rounded-xl hidden">
              <a href="/">
                <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100">
                  <img
                    src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="h-[3.75rem] w-[3.75rem] rounded-full"
                  />
                  <div>
                    <div className="font-semibold">Stanley Goodspeed</div>
                    <div className="text-sm text-gray-500">See your profile</div>
                  </div>
                </div>
              </a>
              <hr className="m-2 border border-gray-300" />
              <div role="button" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                <div className="h-9 w-9 bg-gray-300 rounded-full flex justify-center items-center">
                  <RightFromBracketIcon />
                </div>
                <span className="text-sm font-semibold">Log Out</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <div className="basis-72 shrink-0 h-[--content-height] overflow-hidden sticky top-[--header-height] bg-white shadow-[4px_0_6px_rgb(0_0_0_/0.1)]">
          <div className="h-full hover:overflow-y-auto scrollbar">
            <div className="m-4 text-2xl font-bold">Friends</div>
            <nav className="m-2">
              <a href="/">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                  <div className="h-9 w-9 bg-blue-500 rounded-full flex justify-center items-center">
                    <UserGroupIconAlt className="fill-white stroke-white" />
                  </div>
                  <span className="font-semibold">All Friends</span>
                </div>
              </a>
              <a href="/">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                  <div className="h-9 w-9 bg-gray-300 rounded-full flex justify-center items-center">
                    <UserPlusIcon />
                  </div>
                  <span className="font-semibold">Suggestions</span>
                </div>
              </a>
              <a href="/">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                  <div className="h-9 w-9 bg-gray-300 rounded-full flex justify-center items-center">
                    <UserInIcon />
                  </div>
                  <span className="font-semibold">Friend Requests</span>
                </div>
              </a>
              <a href="/">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                  <div className="h-9 w-9 bg-gray-300 rounded-full flex justify-center items-center">
                    <UserOutIcon />
                  </div>
                  <span className="font-semibold">Sent Requests</span>
                </div>
              </a>
            </nav>
          </div>
        </div>

        <div className="flex-1 p-8">
          <h2 className="text-xl font-bold mb-4">All Friends</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
            <div className="rounded-lg bg-white overflow-hidden shadow-md flex flex-col">
              <a href="/">
                <img src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </a>
              <div className="p-3">
                <div className="flex flex-col gap-2">
                  <div className="truncate">
                    <a href="/" className="font-semibold hover:underline hover:underline-offset-2">
                      Lau Piu-piu
                    </a>
                  </div>
                  <button className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-gray-200 text-sm font-semibold hover:bg-gray-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white overflow-hidden shadow-md flex flex-col">
              <a href="/">
                <img src="https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </a>
              <div className="p-3">
                <div className="flex flex-col gap-2">
                  <div className="truncate">
                    <a href="/" className="font-semibold hover:underline hover:underline-offset-2">
                      Jack Bruno
                    </a>
                  </div>
                  <button className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-gray-200 text-sm font-semibold hover:bg-gray-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white overflow-hidden shadow-md flex flex-col">
              <a href="/">
                <img src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </a>
              <div className="p-3">
                <div className="flex flex-col gap-2">
                  <div className="truncate">
                    <a href="/" className="font-semibold hover:underline hover:underline-offset-2">
                      Siu Lin
                    </a>
                  </div>
                  <button className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-gray-200 text-sm font-semibold hover:bg-gray-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white overflow-hidden shadow-md flex flex-col">
              <a href="/">
                <img src="https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </a>
              <div className="p-3">
                <div className="flex flex-col gap-2">
                  <div className="truncate">
                    <a href="/" className="font-semibold hover:underline hover:underline-offset-2">
                      Anju Salgaonkar
                    </a>
                  </div>
                  <button className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-gray-200 text-sm font-semibold hover:bg-gray-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white overflow-hidden shadow-md flex flex-col">
              <a href="/">
                <img src="https://images.pexels.com/photos/14854491/pexels-photo-14854491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </a>
              <div className="p-3">
                <div className="flex flex-col gap-2">
                  <div className="truncate">
                    <a href="/" className="font-semibold hover:underline hover:underline-offset-2">
                      Tatiana Rusesabagina
                    </a>
                  </div>
                  <button className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-gray-200 text-sm font-semibold hover:bg-gray-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white overflow-hidden shadow-md flex flex-col">
              <a href="/">
                <img src="https://images.pexels.com/photos/12524283/pexels-photo-12524283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </a>
              <div className="p-3">
                <div className="flex flex-col gap-2">
                  <div className="truncate">
                    <a href="/" className="font-semibold hover:underline hover:underline-offset-2">
                      Sue Chow
                    </a>
                  </div>
                  <button className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-gray-200 text-sm font-semibold hover:bg-gray-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white overflow-hidden shadow-md flex flex-col">
              <a href="/">
                <img src="https://images.pexels.com/photos/547593/pexels-photo-547593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </a>
              <div className="p-3">
                <div className="flex flex-col gap-2">
                  <div className="truncate">
                    <a href="/" className="font-semibold hover:underline hover:underline-offset-2">
                      Bill Rhodes
                    </a>
                  </div>
                  <button className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-gray-200 text-sm font-semibold hover:bg-gray-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
