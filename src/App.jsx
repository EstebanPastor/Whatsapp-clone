import {
  RiMessage2Fill,
  RiMore2Line,
  RiLoader3Line,
  RiSearch2Line,
  RiLink,
  RiEmotionFill,
  RiMicLine,
} from "react-icons/ri";

import { FiPaperclip } from "react-icons/fi";

function App() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 xl:grid-cols-4  text-gray-300">
        {/* Contacts  */}
        <div className="bg-[#1B2831] flex flex-col">
          {/* Profile  */}
          <div className="p-4 h-[15vh]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Mac_Miller_2017.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <div className="flex items-center gap-6 text-2xl text-gray-500">
                <RiLoader3Line className="hover:cursor-pointer" />
                <RiMessage2Fill className="hover:cursor-pointer" />
                <RiMore2Line className="hover:cursor-pointer" />
              </div>
            </div>
            <form className="w-full ">
              <div className="relative">
                <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
                <input
                  className="bg-[#0B131A] w-full rounded-full py-2 pl-10 pr-4 outline-none"
                  placeholder="Search or start a new chat"
                />
              </div>
            </form>
          </div>
          {/* Contacts */}
          <div className=" h-[85vh] ">
            {/* Contact  */}
            <a
              href=""
              className="p-4 flex items-center gap-4 bg-[#222C32] border-b border-[#222C32] "
            >
              <img
                src="https://estacionk2.com/wp-content/uploads/2021/04/saint-tropez-post-malone-2.jpg"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">Post Malone</h1>
                  <p className="text-gray-500 text-xs">Hi bro. ¿How are you?</p>
                </div>
                <div className="text-sm text-gray-500">18:22</div>
              </div>
            </a>
            <a
              href=""
              className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors"
            >
              <img
                src="https://media.revistavanityfair.es/photos/60e82b88bf8d45dd8c6f5f39/master/w_3638,h_3006,c_limit/228632.jpg"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">Ariana Grande</h1>
                  <p className="text-gray-500 text-xs">Yassss</p>
                </div>
                <div className="text-sm text-gray-500">15:25</div>
              </div>
            </a>
            <a
              href=""
              className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors"
            >
              <img
                src="https://www.clarin.com/img/2021/11/06/travis-scott-cuando-se-presento___oHtdsK478_2000x1500__1.jpg"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">Travis Scott</h1>
                  <p className="text-gray-500 text-xs">Yassss</p>
                </div>
                <div className="text-sm text-gray-500">15:12</div>
              </div>
            </a>
            <a
              href=""
              className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors"
            >
              <img
                src="https://es.rollingstone.com/wp-content/uploads/2022/03/The-Weeknd-ahora-en-Los-Simpson.jpg"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">Abel Makkonen</h1>
                  <p className="text-gray-500 text-xs">Eyooo</p>
                </div>
                <div className="text-sm text-gray-500">15:01</div>
              </div>
            </a>
            <a
              href=""
              className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors"
            >
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/asap-rocky-predijo-rihanna-embarazo-cosmopolitan-1643745302.jpg?crop=0.883xw:0.939xh;0.0328xw,0.0293xh&resize=640:*"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">A$AP Rocky</h1>
                  <p className="text-gray-500 text-xs">😊</p>
                </div>
                <div className="text-sm text-gray-500">14:27</div>
              </div>
            </a>
            <a
              href=""
              className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors"
            >
              <img
                src="https://imagez.tmz.com/image/96/1by1/2022/07/26/9629d98b3df1440aaf683ae83c56cfa7_xl.jpg"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">Kendrick Lamar</h1>
                  <p className="text-gray-500 text-xs">Maybe tomorrow hommie</p>
                </div>
                <div className="text-sm text-gray-500">14:02</div>
              </div>
            </a>
            <a
              href=""
              className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors"
            >
              <img
                src="https://media.pitchfork.com/photos/5deda171c573b80009766cb0/1:1/w_1500,h_1500,c_limit/Juice%20WRLD-GettyImages-1156284562.jpg"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">Juice WRLD</h1>
                  <p className="text-gray-500 text-xs">
                    lISTEN TO THIS SONG MY MAN
                  </p>
                </div>
                <div className="text-sm text-gray-500">Yesterday</div>
              </div>
            </a>
            <a
              href=""
              className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors"
            >
              <img
                src="https://imagenes.elpais.com/resizer/zPpESwB3LNaZPLhaiaKIG6DKgMY=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/RQ5WS673QZHQLPQWDNWGBA7RJ4.jpg"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">Lil nas</h1>
                  <p className="text-gray-500 text-xs">No wayyyy</p>
                </div>
                <div className="text-sm text-gray-500">Yesterday</div>
              </div>
            </a>
            <a
              href=""
              className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors"
            >
              <img
                src="https://akamai.sscdn.co/uploadfile/letras/fotos/8/c/1/b/8c1bde6151c188e2428eba147ee7638c.jpg"
                className="w-10 h-11 object-cover rounded-full"
              />
              <div className="flex-1 flex justify-between">
                <div>
                  <h1 className="text-lg">Lil skies</h1>
                  <p className="text-gray-500 text-xs">I have that man!</p>
                </div>
                <div className="text-sm text-gray-500">12/12/2022</div>
              </div>
            </a>
          </div>
        </div>
        {/* Chat */}
        <div className="xl:col-span-3">
          <header className="h-[8vh] bg-[#1B2B31] p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://estacionk2.com/wp-content/uploads/2021/04/saint-tropez-post-malone-2.jpg"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h1>Post Malone</h1>
                <p className="text-gray-500 text-sm">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-8 text-2xl text-gray-500">
              <RiSearch2Line className="hover:cursor-pointer" />
              <RiLink className="cursor-pointer" />
              <RiMore2Line className="cursor-pointer" />
            </div>
          </header>
          {/* Messages  */}
          <main className="h-[84vh] overflow-y-scroll p-4 ">
            {/* Message received  */}
            <div className="bg-[#1B2B31] py-1 px-4 rounded-tr-xl rounded-br-xl rounded-bl-xl float-left mb-3 flex">
              <p>Hi bro ¿How are you?</p>
            </div>
          </main>
          {/* Send messages  */}
          <div className="h-[8vh] text-gray-500 flex items-center bg-[#1B2B31]">
            <div className="w-1/12 flex justify-center text-2xl">
              <RiEmotionFill className="hover:cursor-pointer" />
            </div>
            <div className="w-14 flex justify-center text-2xl">
              <FiPaperclip className="hover:cursor-pointer" />
            </div>
            <form className="w-10/12">
              <input
                type="text"
                className="bg-[#0B131A] w-full py-2 px-6 rounded-full outline-none text-gray-300"
                placeholder="Write a message here"
              />
            </form>
            <div className="w-1/12 flex justify-center text-2xl">
              <RiMicLine className="hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
