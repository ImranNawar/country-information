

const Form = () => {
  return (
    <form>
      <div className="m-6">

        <label htmlFor="countryName" className="block text-gray-900  text-2xl pl-3">Enter the country name:
        </label>
        <div className="ml-10">
          <input
            type="text"
            name="countryName"
            id="countryName"
            autoComplete="countryName"
            className="m-2 p-1 border-2 border-teal-400 focus:outline-none bg-transparent placeholder:text-gray-400 rounded-md w-80"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
          >
            Search
          </button>
        </div>

      </div>
    </form>
  )
}

export default Form;