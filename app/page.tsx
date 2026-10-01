const modules = [
  {
    icon: "diversity_3",
    title: "Recepção",
    description:
      "Cadastro inicial e consulta das mulheres atendidas pela rede.",
    actions: [
      {
        label: "Registrar cadastro e atendimento",
        href: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=0e44e6f5476745009a1d5ebd1d5dea48&draft=true",
      },
      {
        label: "Consultar cadastros",
        href: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=cea846a10740469da08f7522e1c7cd70",
      },
    ],
  },
  {
    icon: "health_and_safety",
    title: "Enfrentamento à Violência",
    description:
      "Registro das fichas e acompanhamento dos atendimentos especializados.",
    actions: [
      {
        label: "Registrar ficha de atendimento",
        href: "https://siurb.rio/portal/apps/experiencebuilder/experience/?id=cafd56e46f454363a1daed786f08c701",
      },
      {
        label: "Consultar fichas",
        disabled: true,
      },
    ],
  },
  {
    icon: "assignment",
    title: "Atividades",
    description:
      "Registro de oficinas, palestras, ações e demais atividades realizadas.",
    actions: [
      {
        label: "Registrar atividade",
        disabled: true,
      },
    ],
  },
  {
    icon: "credit_card",
    title: "Cartões",
    description:
      "Acompanhamento do fluxo e da situação dos cartões.",
    actions: [
      {
        label: "Acompanhar cartões",
        disabled: true,
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-kicker">SISTER</span>
          <h1>Sistema da Mulher</h1>
          <p>
            Acesso integrado aos sistemas de atendimento e acompanhamento
            da Secretaria da Mulher.
          </p>
        </div>

        <img
          className="hero-logo"
          src="/logo.png"
          alt="SISTER - Sistema da Mulher"
        />
      </section>

      <section className="section-heading">
        <div>
          <span>Acesso rápido</span>
          <h2>O que você precisa acessar?</h2>
          <p>Escolha um módulo para continuar.</p>
        </div>
      </section>

      <section className="modules-grid">
        {modules.map((module) => (
          <article className="module-card" key={module.title}>
            <div className="module-icon" aria-hidden="true">
              <span className="material-symbols-rounded">{module.icon}</span>
            </div>

            <div className="module-copy">
              <h3>{module.title}</h3>
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
                    <span>{action.label}</span>
                    <small>Em breve</small>
                  </button>
                ) : (
                  <a
                    className="module-button"
                    href={action.href}
                    key={action.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{action.label}</span>
                    <span className="material-symbols-rounded action-icon" aria-hidden="true">
                      open_in_new
                    </span>
                  </a>
                ),
              )}
            </div>
          </article>
        ))}
      </section>

      <footer>
        <strong>SISTER</strong>
        <span>Sistema da Mulher</span>
      </footer>
    </main>
  );
}
