// Datos de Cursos y Certificaciones
const coursesData = [
  {
    id: "os-support",
    title: "Operating Systems Support",
    issuer: "Cisco Networking Academy",
    category: "cisco-os",
    badgeType: "cisco",
    badgeLabel: "Certificación Cisco",
    date: "13 Mar 2026",
    description: "Formación integral en soporte técnico, mantenimiento y resolución de incidencias en sistemas operativos modernos (Linux y Windows). Configuración de servicios esenciales, administración de usuarios y diagnóstico a nivel de hardware y software.",
    topics: ["Linux & Windows OS", "Resolución de Problemas", "Gestión de Servicios", "Soporte Técnico TI", "Instalación & Mantenimiento"],
    certificateUrl: "assets/operating_systems_support_certificate.pdf",
    details: [
      "Diagnóstico avanzado de fallas en el arranque y servicios del sistema operativo.",
      "Gestión de permisos, grupos de usuarios y políticas de acceso.",
      "Monitoreo de procesos en tiempo real y optimización de recursos de CPU/RAM.",
      "Administración remota segura y configuración de interfaces de red.",
      "Mantenimiento preventivo, parches de seguridad y recuperación ante desastres."
    ]
  },
  {
    id: "os-basics",
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    category: "cisco-os",
    badgeType: "cisco",
    badgeLabel: "Cisco Academy",
    date: "2026",
    description: "Comprensión profunda de la arquitectura interna de los sistemas operativos, interacción con el hardware, abstracción de recursos, sistemas de archivos y ejecución de comandos en terminales UNIX/Linux y Windows.",
    topics: ["Kernel & Arquitectura", "Procesos & Hilos", "Sistemas de Archivos", "Memoria Virtual", "Línea de Comandos (CLI)"],
    certificateUrl: null,
    details: [
      "Estructura del kernel y ciclo de vida de los procesos.",
      "Algoritmos de planificación de CPU (CPU Scheduling) y concurrencia.",
      "Organización y permisos en sistemas de archivos (ext4, NTFS).",
      "Manejo eficiente de la interfaz de línea de comandos (Bash CLI).",
      "Conceptos clave de virtualización y aislamiento de recursos."
    ]
  },
  {
    id: "iot-intro",
    title: "Introducción al Internet de las Cosas (IoT)",
    issuer: "Cisco Networking Academy",
    category: "iot",
    badgeType: "cisco",
    badgeLabel: "Cisco Academy",
    date: "2026",
    description: "Estudio de la transformación digital a través de dispositivos conectados, sensorización del entorno, integración de microcontroladores y flujo de datos hacia plataformas en la nube.",
    topics: ["Sensores & Actuadores", "Protocolos IoT", "Microcontroladores (Arduino)", "Conectividad IP", "Automatización"],
    certificateUrl: null,
    details: [
      "Integración de sensores de luz (LDR), humedad, temperatura y servomotores.",
      "Simulación y prototipado de circuitos electrónicos en Tinkercad.",
      "Protocolos de comunicación de red y convergencia de tecnologías de la información (TI/OT).",
      "Procesamiento de datos en el borde (Edge Computing) y servicios en la nube.",
      "Seguridad y privacidad en arquitecturas de dispositivos distribuidos."
    ]
  },
  {
    id: "web-frontend",
    title: "Desarrollo Web Frontend (HTML, CSS, JavaScript)",
    issuer: "UPChiapas & Práctica Profesional",
    category: "web",
    badgeType: "web",
    badgeLabel: "Frontend & Web",
    date: "2026",
    description: "Construcción de interfaces web interactivas, responsivas y optimizadas. Aplicación de buenas prácticas de maquetación semántica, CSS moderno y programación asíncrona en JavaScript.",
    topics: ["HTML5 Semántico", "CSS Grid & Flexbox", "JavaScript Moderno (ES6+)", "Manipulación del DOM", "Diseño Responsivo"],
    certificateUrl: null,
    details: [
      "Estructuras web accesibles y semánticas bajo estándares W3C.",
      "Diseño de sistemas visuales con variables CSS, animaciones y soporte Dark Mode.",
      "Programación reactiva y asíncrona con Fetch API, Promesas y Async/Await.",
      "Optimización de rendimiento y SEO en sitios estáticos y dinámicos.",
      "Integración y preparación hacia ecosistemas de componentes con React y Next.js."
    ]
  },
  {
    id: "cisco-networking",
    title: "Administración de Redes & Conectividad Cisco",
    issuer: "Formación Académica UPChiapas / Cisco",
    category: "cisco-os",
    badgeType: "cisco",
    badgeLabel: "Redes & Cisco",
    date: "2026",
    description: "Diseño, simulación y configuración de infraestructuras de red escalables. Implementación de enrutamiento dinámico, segmentación lógica mediante VLANs y auditoría con analizadores de paquetes.",
    topics: ["Cisco Packet Tracer", "OSPF / EIGRP / RIPng", "VLANs (802.1Q)", "Wireshark", "IPv4 / IPv6 Subnetting"],
    certificateUrl: null,
    details: [
      "Configuración de conmutadores (Switches) y enrutadores (Routers) mediante Cisco IOS.",
      "Enrutamiento inter-VLAN con protocolo 802.1Q (Router-on-a-Stick).",
      "Diseño de topologías de alta disponibilidad con protocolos de enrutamiento dinámico.",
      "Filtrado de paquetes y políticas de tráfico con Listas de Control de Acceso (ACL).",
      "Diagnóstico profundo de protocolos de red utilizando Wireshark."
    ]
  },
  {
    id: "cloud-linux",
    title: "Infraestructura Cloud (AWS) & Administración Linux",
    issuer: "AWS & Entornos Linux (Ubuntu / Arch)",
    category: "cloud",
    badgeType: "cloud",
    badgeLabel: "Cloud & DevOps",
    date: "2026",
    description: "Despliegue y mantenimiento de instancias en la nube (AWS EC2), configuración de servidores web (Apache), certificados de seguridad SSL/TLS y scripts Bash de monitoreo continuo.",
    topics: ["AWS EC2", "Ubuntu Server / Arch", "Apache & DNS", "Let's Encrypt / SSL", "Bash Scripting & Crontab"],
    certificateUrl: null,
    details: [
      "Aprovisionamiento y configuración de máquinas virtuales en AWS EC2 con Ubuntu Server.",
      "Mapeo de DNS (Registros A) y cifrado HTTPS automático con Let's Encrypt / Certbot.",
      "Desarrollo de scripts de monitoreo en Bash para telemetría de CPU, RAM y espacio en disco.",
      "Integración de alertas en tiempo real mediante bots de Telegram y automatización con cron.",
      "Fortalecimiento de seguridad del servidor con SSH keys y firewalls."
    ]
  }
];

// Renderizar Cursos
function renderCourses(filter = 'all') {
  const container = document.getElementById('courses-list');
  if (!container) return;

  const filtered = filter === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === filter);

  container.innerHTML = filtered.map(course => `
    <article class="course-card" data-id="${course.id}" style="cursor:default">
      <div class="course-header">
        <div class="course-badge-container">
          <span class="course-badge ${course.badgeType}">
            <span>${course.badgeType === 'cisco' ? '🌐' : course.badgeType === 'web' ? '⚡' : '☁️'}</span>
            ${course.badgeLabel}
          </span>
        </div>
        <div class="course-date">
          <span>📅</span>
          <span>${course.date}</span>
        </div>
      </div>

      <h3 class="course-title">${course.title}</h3>
      <div class="course-issuer">
        <span>🏛️</span>
        <span>${course.issuer}</span>
      </div>

      <p class="course-description">${course.description}</p>

      <div class="course-topics">
        ${course.topics.map(t => `<span class="course-topic-tag">${t}</span>`).join('')}
      </div>

      <div class="course-actions">
        <button class="btn-detail" onclick="openCourseModal('${course.id}')">
          <span>Ver temario y detalles</span>
          <span>&rarr;</span>
        </button>
        ${course.certificateUrl ? `
          <a href="${course.certificateUrl}" target="_blank" class="btn-cert-download">
            <span>📜</span>
            <span>Ver Certificado PDF</span>
          </a>
        ` : ''}
      </div>
    </article>
  `).join('');
}

// Abrir Modal de Detalles
window.openCourseModal = function(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('course-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="course-badge ${course.badgeType}" style="margin-bottom: 0.5rem;">
        ${course.badgeLabel}
      </span>
      <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-top: 0.35rem; line-height: 1.25;">
        ${course.title}
      </h2>
      <p style="color: var(--primary); font-size: 0.9rem; font-weight: 600; margin-top: 0.25rem;">
        🏛️ ${course.issuer} &nbsp;|&nbsp; 📅 ${course.date}
      </p>
    </div>

    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.6;">
      ${course.description}
    </p>

    <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
      <span>🎯</span> Temas y Competencias Desarrolladas
    </h4>

    <ul style="color: var(--text-secondary); font-size: 0.92rem; padding-left: 1.25rem; line-height: 1.7; margin-bottom: 1.5rem;">
      ${course.details.map(d => `<li style="margin-bottom: 0.4rem;">${d}</li>`).join('')}
    </ul>

    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center; justify-content: flex-end; padding-top: 1rem; border-top: 1px solid var(--card-border);">
      ${course.certificateUrl ? `
        <a href="${course.certificateUrl}" target="_blank" class="hero-btn hero-btn--primary" style="font-size:0.85rem;">
          <span>📜</span> Descargar / Ver Certificado
        </a>
      ` : ''}
      <button class="hero-btn" onclick="closeModal()">Cerrar</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Cerrar Modal
window.closeModal = function() {
  const modal = document.getElementById('course-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

// Copiar Email y Mostrar Toast
window.copyEmail = function() {
  const email = "solisesgar31@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast("📋 Correo copiado: " + email);
  }).catch(() => {
    showToast("📧 Correo: " + email);
  });
};

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Inicialización de filtros y eventos
document.addEventListener('DOMContentLoaded', () => {
  renderCourses('all');

  // Filtros
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderCourses(filterValue);
    });
  });

  // Cerrar modal al hacer click fuera
  const modal = document.getElementById('course-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Tecla ESC para cerrar modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
