export default function MapSection() {
  return (
    <section id="localizacao" className="w-full bg-white py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Nossa Localização
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        <iframe
          className="w-full h-96 rounded-lg shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.5246315771249!2d-49.33186971953798!3d-16.709606410837946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7df8461f327%3A0x2ae4fe14453bdb88!2sCondom%C3%ADnio%20Rubi!5e1!3m2!1spt-BR!2sbr!4v1745541299067!5m2!1spt-BR!2sbr"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
