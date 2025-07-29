const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border p-2 rounded w-[200px]"
      />
    </div>
  );
};

export default SearchBar;
