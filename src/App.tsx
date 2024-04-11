import { FaPlus } from 'react-icons/fa';
import { TbBox } from 'react-icons/tb';

function BarButton({children}) {
  return (
    <div className="flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto
                    bg-gray-100 hover:bg-red-600 text-red-500 hover:text-white
                    rounded-3xl hover:rounded-xl
                    transition-all duration-0 hover:duration-[50ms] ease-linear cursor-pointer shadow-xl">
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-green-600">
        <BarButton><TbBox className="size-10"/></BarButton>
        <hr className="bg-gray-200 dark:bg-red-600
                       mx-2"/>
        <BarButton><FaPlus className="size-6" /></BarButton>
        <BarButton><FaPlus className="size-6" /></BarButton>
        <BarButton><FaPlus className="size-6" /></BarButton>
        <BarButton><FaPlus className="size-6" /></BarButton>
        <BarButton><FaPlus className="size-6" /></BarButton>
      </div>
    </div>
  );
}

export default App
