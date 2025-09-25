import RevGovernDAO from "@/components/RevGovernDAO";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">RevEmpire DAO</h1>
          <nav className="space-x-4">
            <a href="#proposals" className="hover:underline">Proposals</a>
            <a href="#polls" className="hover:underline">Polls</a>
            <a href="#leaderboard" className="hover:underline">Leaderboard</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-6">
        <RevGovernDAO />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} RevEmpire. All rights reserved.
      </footer>
    </div>
  );
}
