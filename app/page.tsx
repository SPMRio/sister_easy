const modules = [
  {
    icon: "👥",
    title: "Sistema de Recepção",
    description:
      "Cadastro-base das mulheres atendidas e consulta dos registros de atendimento.",
    actions: [
      {
        label: "Registro de cadastro e atendimento",
        href: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=0e44e6f5476745009a1d5ebd1d5dea48&draft=true",
      },
      {
        label: "Consulta cadastro de atendimento",
        href: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=cea846a10740469da08f7522e1c7cd70",
      },
    ],
  },
  {
    icon: "🛡️",
    title: "Enfrentamento à Violência",
    description:
      "Registro especializado de atendimentos e acompanhamento das fichas.",
    actions: [
      {
        label: "Registro de ficha",
        href: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=cafd56e46f454363a1daed786f08c701",
      },
      {
        label: "Consulta de ficha de atendimento",
        disabled: true,
      },
    ],
  },
  {
    icon: "📋",
    title: "Registro de Atividades",
    description:
      "Registro de oficinas, palestras, ações e atividades externas.",
    actions: [
      {
        label: "Registro de atividade",
        disabled: true,
      },
    ],
  },
  {
    icon: "💳",
    title: "Acompanhamento dos Cartões",
    description:
      "Acompanhamento operacional e consulta do fluxo de cartões.",
    actions: [
      {
        label: "Acessar acompanhamento",
        disabled: true,
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <span className="hero-kicker">Plataforma integrada</span>
          <h1>SISTER</h1>
          <h2>Sistema da Mulher</h2>
          <p>
            Um único ponto de acesso para os sistemas de atendimento,
            acompanhamento e registro da Secretaria da Mulher.
          </p>
        </div>
        <div className="hero-mark" aria-hidden="true">S</div>
      </section>

      <section className="section-heading">
        <div>
          <span>ACESSO RÁPIDO</span>
          <h3>Módulos do sistema</h3>
          <p>Escolha o módulo que deseja acessar.</p>
        </div>
      </section>

      <section className="modules-grid">
        {modules.map((module) => (
          <article className="module-card" key={module.title}>
            <div className="module-icon" aria-hidden="true">
              {module.icon}
            </div>

            <div className="module-copy">
              <h4>{module.title}</h4>
              <p>{module.description}</p>
            </div>

            <div className="module-actions">
              {module.actions.map((action) =>
                action.disabled ? (
                  <button
                    className="module-button disabled"
                    disabled
                    key={action.label}
                    type="button"
                  >
                    {action.label}
                    <small>Em breve</small>
                  </button>
                ) : (
                  <a
                    className="module-button"
                    href={action.href}
                    key={action.label}
                  >
                    <span>{action.label}</span>
                    <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                ),
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="flow">
        <div>
          <span>FLUXO</span>
          <h3>Como funciona</h3>
        </div>

        <div className="flow-steps">
          <div className="flow-step">
            <strong>01</strong>
            <span>Cadastro e recepção</span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <strong>02</strong>
            <span>Atendimento especializado</span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <strong>03</strong>
            <span>Registro e acompanhamento</span>
          </div>
        </div>
      </section>

      <footer>
        <strong>SISTER</strong>
        <span>Sistema da Mulher</span>
      </footer>
    </main>
  );
}
