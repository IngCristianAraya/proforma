export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const body = req.body;
    
    const cliente = {
      nombre: body.nombre || '',
      email: body.email || '',
      telefono: body.telefono || '',
      negocio: body.negocio || '',
      tipoNegocio: body.tipoNegocio || '',
      ubicacion: body.ubicacion || ''
    };

    let plan = {
      nombre: 'Plan Básico',
      precio: '49',
      caracteristicas: [
        'Perfil completo en Tubarrio.pe',
        'Hasta 5 fotos del negocio',
        'Información de contacto visible',
        'Horarios de atención',
        'Ubicación en mapa'
      ]
    };

    const tipo = cliente.tipoNegocio.toLowerCase();
    
    if (tipo.includes('restaurante') || tipo.includes('comida')) {
      plan = {
        nombre: 'Plan Gastronómico',
        precio: '89',
        caracteristicas: [
          'Menú digital interactivo',
          'Sistema de pedidos online',
          'Gestión de delivery',
          'Integración con WhatsApp',
          'Reseñas y calificaciones'
        ]
      };
    } else if (tipo.includes('retail') || tipo.includes('tienda')) {
      plan = {
        nombre: 'Plan Comercial',
        precio: '69',
        caracteristicas: [
          'Catálogo de productos',
          'Sistema de inventario básico',
          'Promociones y descuentos',
          'Integración con redes sociales',
          'Analytics básicos'
        ]
      };
    } else if (tipo.includes('servicio')) {
      plan = {
        nombre: 'Plan Profesional',
        precio: '59',
        caracteristicas: [
          'Agenda de citas online',
          'Gestión de clientes',
          'Recordatorios automáticos',
          'Portfolio de trabajos',
          'Testimonios de clientes'
        ]
      };
    }

    const response = {
      cliente,
      plan,
      empresa: {
        nombre: 'Tubarrio.pe',
        direccion: 'Lima - Perú',
        telefono: '+51 901 426 737',
        email: 'ingcristian.araya@gmail.com'
      }
    };

    res.status(200).json(response);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}