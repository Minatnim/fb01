import { PenIcon } from '../icons';

export default function ProfilePage() {
  return (
    <div className="shadow bg-gradient-to-b from-gray-300 to-white">
      <div className="max-w-[68.5rem] max-h-[25.25rem] rounded-b-lg mx-auto aspect-[1096/404] overflow-hidden flex items-center justify-between">
        <img src="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <div className="max-w-[66.5rem] px-4 pb-4 flex flex-col gap-y-2 md:flex-row gap-x-4 mx-auto items-center md:items-end">
        <div className="-mt-[5.25rem] md:-mt-[1.875rem]">
          <a href="/">
            <img
              src="https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[10.5rem] w-[10.5rem] rounded-full ring-4 ring-white"
            />
          </a>
        </div>
        <div className="flex flex-col items-center mb-4 flex-1 md:block">
          <h2 className="text-3xl font-bold">Stanley Goodspeed</h2>
          <span className="block text-gray-500 font-semibold py-1">6 friends</span>
          <div className="flex -space-x-2">
            <a href="/">
              <img
                src="https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[2rem] w-[2rem] rounded-full ring-2 ring-white"
              />
            </a>
            <a href="/">
              <img
                src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[2rem] w-[2rem] rounded-full ring-2 ring-white"
              />
            </a>
            <a href="/">
              <img
                src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[2rem] w-[2rem] rounded-full ring-2 ring-white"
              />
            </a>
            <a href="/">
              <img
                src="https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[2rem] w-[2rem] rounded-full ring-2 ring-white"
              />
            </a>
            <a href="/">
              <img
                src="https://images.pexels.com/photos/14854491/pexels-photo-14854491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[2rem] w-[2rem] rounded-full ring-2 ring-white"
              />
            </a>
            <a href="/">
              <img
                src="https://images.pexels.com/photos/12524283/pexels-photo-12524283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-[2rem] w-[2rem] rounded-full ring-2 ring-white"
              />
            </a>
          </div>
        </div>
        <div className="md:mb-4">
          <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md">
            <div className="flex items-center gap-2">
              <PenIcon />
              <span className="font-semibold">Edit profile</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
