export default function Dropdown({
  value,
  setValue,
  items,
  allItemsText,
}: {
  value: string;
  setValue: (value: string) => void;
  items: string[];
  allItemsText: string;
}) {
  return (
    <select className="w-full md:w-1/4 p-2 border rounded" value={value} onChange={(e) => setValue(e.target.value)}>
      <option value="">{allItemsText}</option>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
