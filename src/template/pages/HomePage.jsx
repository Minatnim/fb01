import {
  EllipsisIcon,
  FacebookIcon,
  HouseIcon,
  MessageIcon,
  RightFromBracketIcon,
  ThumbsUpAltIcon,
  ThumbsUpIcon,
  UserGroupIcon
} from '../icons';

export default function HomePage() {
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
        {/* <div className="basis-96 shrink-0 h-[--content-height] overflow-hidden sticky top-[--header-height] hidden lg:block">
          <div className="h-full overflow-y-auto scrollbar"></div>
        </div> */}

        <div className="max-w-[44rem] px-8 mx-auto py-6 flex flex-col gap-4">
          <div className="bg-white border rounded-lg shadow px-4 py-3 flex gap-2">
            <div className="shrink-0">
              <a href="/">
                <img
                  src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                />
              </a>
            </div>

            <div className="w-full rounded-full bg-gray-200 hover:bg-gray-300 text-gray-500 px-3 py-1.5" role="button">
              What&rsquo;s on your mind, Alice?
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white border rounded-lg shadow px-4 pt-3 pb-2">
              <div className="flex items-center gap-2 mb-3">
                <a href="/">
                  <img
                    src="https://images.pexels.com/photos/14854491/pexels-photo-14854491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="h-[2.5rem] w-[2.5rem] rounded-full"
                  />
                </a>

                <div className="flex flex-col items-start flex-1">
                  <a href="/" className="font-semibold text-sm hover:underline">
                    Tatiana Rusesabagina
                  </a>
                  <small className="text-gray-500 text-xs">1h</small>
                </div>

                <div className="relative">
                  <div
                    className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-gray-200"
                    role="button"
                  >
                    <EllipsisIcon className="fill-gray-500" />
                  </div>
                  <ul className="absolute right-0 translate-y-1 border rounded-xl shadow p-2 bg-white w-48 text-sm hidden">
                    <li className="p-2 rounded-md font-semibold hover:bg-gray-200 cursor-pointer">Edit</li>
                    <li className="p-2 rounded-md font-semibold hover:bg-gray-200 cursor-pointer">Delete</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-sm">Hello my friend</span>
                <div className="-mx-4">
                  <img src="https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
              </div>

              <div className="flex justify-between items-center py-2.5">
                <div>
                  <div className="h-[1.125rem] w-[1.125rem] rounded-full bg-blue-500 inline-flex items-center justify-center">
                    <ThumbsUpIcon />
                  </div>
                  <span className="text-sm ml-1">2</span>
                </div>
                <span className="text-sm text-gray-500 hover:underline" role="button">
                  8 comments
                </span>
              </div>
              <hr />
              <div className="py-1 flex gap-1">
                <button className="py-1.5 text-sm font-semibold text-blue-600 w-full rounded hover:bg-gray-200">
                  <div className="flex gap-2 items-center justify-center">
                    <ThumbsUpAltIcon className="fill-blue-600" />
                    <span>Like</span>
                  </div>
                </button>
                <button className="py-1.5 text-sm font-semibold text-gray-500 w-full rounded hover:bg-gray-200">
                  <div className="flex gap-2 items-center justify-center">
                    <MessageIcon className="fill-gray-500" />
                    <span>Comment</span>
                  </div>
                </button>
              </div>
              <hr />
              <div>
                <span className="text-sm text-gray-500 hover:underline pt-1" role="button">
                  View 5 previous comments
                </span>
                <div className="pt-1 flex gap-2">
                  <a href="/">
                    <img
                      src="https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="h-[2rem] w-[2rem] rounded-full"
                    />
                  </a>
                  <div>
                    <div className="flex items-center gap-1">
                      <div className="rounded-2xl bg-gray-200 px-3 py-2">
                        <a href="/" className="block text-xs font-semibold hover:underline">
                          Anju Salgaonkar
                        </a>
                        <div className="text-sm">Good boy. Lovely.</div>
                      </div>
                      <div className="relative">
                        <div
                          className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-200"
                          role="button"
                        >
                          <EllipsisIcon className="fill-gray-500" />
                        </div>
                        <ul className="absolute right-0 translate-y-1 border rounded-xl shadow p-2 bg-white w-48 text-sm hidden">
                          <li className="p-2 rounded-md font-semibold hover:bg-gray-200 cursor-pointer">Edit</li>
                          <li className="p-2 rounded-md font-semibold hover:bg-gray-200 cursor-pointer">Delete</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 px-3">8m</div>
                  </div>
                </div>

                <div className="pt-1 flex gap-2">
                  <a href="/">
                    <img
                      src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="h-[2rem] w-[2rem] rounded-full"
                    />
                  </a>
                  <div>
                    <div className="flex items-center gap-1">
                      <div className="rounded-2xl bg-gray-200 px-3 py-2">
                        <a href="/" className="block text-xs font-semibold hover:underline">
                          Siu Lin
                        </a>
                        <div className="text-sm">Wonderful !!!</div>
                      </div>
                      <div className="relative">
                        <div
                          className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-200"
                          role="button"
                        >
                          <EllipsisIcon className="fill-gray-500" />
                        </div>
                        <ul className="absolute right-0 translate-y-1 border rounded-xl shadow p-2 bg-white w-48 text-sm hidden">
                          <li className="p-2 rounded-md font-semibold hover:bg-gray-200 cursor-pointer">Edit</li>
                          <li className="p-2 rounded-md font-semibold hover:bg-gray-200 cursor-pointer">Delete</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 px-3">34m</div>
                  </div>
                </div>

                <div className="pt-1 flex gap-2">
                  <a href="/">
                    <img
                      src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="h-[2rem] w-[2rem] rounded-full"
                    />
                  </a>
                  <div>
                    <div className="flex items-center gap-1">
                      <div className="rounded-2xl bg-gray-200 px-3 py-2">
                        <a href="/" className="block text-xs font-semibold hover:underline">
                          Lau Piu-piu
                        </a>
                        <div className="text-sm">Beautiful. Skin look almost painted.</div>
                      </div>
                      <div className="relative">
                        <div
                          className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-200"
                          role="button"
                        >
                          <EllipsisIcon className="fill-gray-500" />
                        </div>
                        <ul className="absolute right-0 translate-y-1 border rounded-xl shadow p-2 bg-white w-48 text-sm hidden">
                          <li className="p-2 rounded-md font-semibold hover:bg-gray-200 cursor-pointer">Edit</li>
                          <li className="p-2 rounded-md font-semibold hover:bg-gray-200 cursor-pointer">Delete</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 px-3">55m</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
