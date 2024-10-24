import React from "react";
import {
	Rocket,
	Twitter,
	MessageCircle,
	BarChart3,
	Coins,
	ArrowRight,
	Zap,
	Trophy,
	DollarSign,
} from "lucide-react";
import Header from "./components/Header";
import HowToBuy from "./components/HowToBuy";
import WhyBuy from "./components/WhyBuy";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen bg-indigo-900 text-white font-mono">
			<div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
			<div className="relative">
				<Header />
				<main className="container mx-auto px-4 py-16 space-y-32">
					<HowToBuy />
					<WhyBuy />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
