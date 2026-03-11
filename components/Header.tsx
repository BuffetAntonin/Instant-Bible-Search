import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
        <span className="text-3xl">✝️</span>
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">
            Instant Bible Search
          </span>
          <span className="text-sm text-gray-500">
            Recherche instantanée de versets bibliques
          </span>
        </Link>
      </div>
    </header>
  );
}
