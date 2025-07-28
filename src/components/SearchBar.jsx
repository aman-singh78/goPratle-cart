const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border p-2 rounded w-[200px]"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
