export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo de Tubarrio.pe */}
          <div className="mb-4">
            <img 
              src="/logos/tubarriope_logo_penegro2.webp" 
              alt="Tubarrio.pe" 
              className="h-12 mx-auto mb-2"
            />
          </div>
          <p className="text-gray-400 text-sm mb-6">
            La plataforma que conecta negocios locales con su comunidad
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-400">
              &copy; 2025 Derechos reservados tubarrio.pe / Creado por Ing. Cristian Araya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}