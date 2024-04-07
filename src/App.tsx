import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function App() {
  return (
    <div class="flex">
    	<div class="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-gray-900">
		<FaPlus class="relative flex items-center justify-center
			       h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
			       hover:rounded-xl
			       bg-gray-800 text-green-500
			       hover:bg-green-600 hover:text-white"/>
	</div>
    </div>
  );
}

export default App
