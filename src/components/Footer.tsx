export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-900 text-white py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Seu Nome ou Empresa. Todos os
          direitos reservados.
        </p>
      </footer>
    </>
  );
}
