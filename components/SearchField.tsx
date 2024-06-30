export default function SearchField({
  searchText,
  setSearchText,
  placeholderText,
}: {
  searchText: string;
  setSearchText: (text: string) => void;
  placeholderText: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholderText}
      className="w-full md:w-1/2 p-2 mb-4 md:mb-0 border rounded"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}
