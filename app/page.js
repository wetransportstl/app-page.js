export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="bg-black text-white px-8 py-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-28 h-28 rounded-2xl border border-slate-700 flex items-center justify-center bg-white overflow-hidden p-2 shadow-md">
              <img src="/logo.png" alt="WE Transport STL LLC Logo" className="w-full h-full object-contain" loading="eager" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">WE TRANSPORT STL LLC</h1>
              <p className="text-blue-400">Reliable Freight • Cargo Vans • Logistics</p>
            </div>
          </div>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-slate-900 text-white px-8 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Fast, Secure & Professional Transportation</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Dedicated trucking, cargo van delivery, and regional logistics services serving St. Louis and beyond.
          </p>
          <button className="mt-8 bg-white text-slate-900 px-8 py-3 rounded-2xl font-semibold shadow-xl">
            Get a Quote
          </button>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-3 gap-8">
        {[
          ['Freight Transport', 'Safe and efficient truck transportation services.'],
          ['Cargo Van Delivery', 'Flexible same-day and scheduled cargo van solutions.'],
          ['Logistics Support', 'Reliable route planning and delivery coordination.']
        ].map(([title, desc]) => (
          <div key={title} className="p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-slate-600">{desc}</p>
          </div>
        ))}
      </section>

      <section id="about" className="bg-slate-100 px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">About WE Transport STL LLC</h3>
          <p className="text-lg text-slate-700">
            We specialize in dependable transportation solutions with a focus on professionalism, timeliness, and customer service.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-black text-white px-8 py-10 text-center">
        <p className="text-lg font-semibold">Contact Us</p>
        <p>Email: info@wetransportstl.com</p>
        <p>Phone: 866-769-3785</p>
      </footer>
    </main>
  );
}
