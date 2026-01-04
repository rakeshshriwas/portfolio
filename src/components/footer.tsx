export default function Footer() {
  return (
    <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-medium">Rakesh Shriwas</span>. All rights
        reserved.
      </p>
    </footer>
  );
}
