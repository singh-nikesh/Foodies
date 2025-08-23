import Menu from "./Pages/Menu";
export default function Menu() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Our Menu</h1>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Pizza</li>
        <li>Burgers</li>
        <li>Salads</li>
        <li>Noodles</li>
      </ul>
    </section>
  );
}

