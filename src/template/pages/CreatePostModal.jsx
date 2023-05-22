import { ImageIcon } from '../icons';

export default function CreatePostModal() {
  return (
    <>
      <div className="fixed inset-0 bg-white opacity-80 z-20"></div>
      <div className="fixed inset-0 z-30">
        <div className="flex justify-center items-center min-h-full p-4">
          <div className="bg-white max-w-[31.25rem] w-full rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]">
            <div className="flex justify-between items-center p-4 border-b text-xl">
              <button className="invisible">&#10005;</button>
              <h5 className="font-bold">Create Post</h5>
              <button className="text-gray-500 font-semibold hover:text-gray-700">&#10005;</button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto scrollbar">
              <form>
                <div className="flex flex-col gap-4">
                  <textarea
                    className="block w-full outline-none resize-none"
                    placeholder="What&rsquo;s on your mind, Stanley?"
                    rows="5"
                  />
                  <div
                    className="bg-gray-100 hover:bg-gray-200 rounded-lg flex flex-col items-center gap-2 py-12"
                    role="button"
                  >
                    <div className="h-10 w-10 bg-gray-300 rounded-full flex justify-center items-center">
                      <ImageIcon />
                    </div>
                    <span>Add photo</span>
                  </div>
                  <input type="file" className="hidden" />
                  <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 text-sm font-semibold text-white rounded-md w-full h-9">
                    Post
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
