export default function Header({isOpen,setIsOpen}) {
  return (
    <header className="bg-gray-500 sticky top-0 ">
      <div className="flex justify-between max-w-7xl items-center mx-auto h-14 px-4">
        <div className="flex items-center text-yellow-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 className="text-black text-2xl font-bold mx-3 hover:text-yellow-400">
            TODO
          </h3>
        </div>

        <button className="bg-white px-4 py-3 rounded-lg shadow-md hover:bg-yellow-400" onClick={()=>{
          setIsOpen(true)
        }}>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="green"
              viewBox="0 0 24 24"
              stroke="black"
              stroke-width="4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="ml-1 text-black-900 font-bold">Add New</span>
            
          </div>
        </button>
      </div>
    </header>
  );
}
