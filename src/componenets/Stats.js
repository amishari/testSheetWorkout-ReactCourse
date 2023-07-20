export function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">Start adding something to your list.</p>;
  }
  const itemQty = items.length;
  const packed = items.filter((item) => item.done).length;
  const percent = Math.round((packed / itemQty) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "✅You are done.Ready to go! Have a nice trip!!"
          : `You have ${itemQty} items on your list, and you have already ${packed} (${percent})%
        packed.`}
      </em>
    </footer>
  );
}
