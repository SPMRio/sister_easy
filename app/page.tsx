const modules = [
  {
    icon: "diversity_3",
    title: "Recepção",
    description:
      "Cadastro inicial e atendimento das mulheres que chegam aos equipamentos da SPM-Rio. O módulo reúne as informações de identificação, contato, território, perfil sociodemográfico e encaminhamentos, além de permitir a consulta dos cadastros já realizados.",
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
      "Registro e acompanhamento dos atendimentos realizados com mulheres em situação de violência. O módulo concentra as informações da ficha de atendimento, histórico do acompanhamento, encaminhamentos realizados e dados necessários para o monitoramento dos casos pela equipe.",
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
      "Registro das oficinas, palestras, ações, mobilizações e demais atividades realizadas pela SPM-Rio. O módulo permite organizar informações como data, local, público participante, equipe responsável e quantidade de pessoas alcançadas, facilitando o acompanhamento das ações desenvolvidas.",
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
      "Acompanhamento do fluxo dos cartões desde a solicitação até a entrega. O módulo permitirá consultar a situação de cada cartão, acompanhar etapas do processo, identificar pendências e organizar o controle das beneficiárias atendidas.",
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
          <h1>SISTER</h1>
          <h2>Sistema da Mulher</h2>
          <p>
            Acesso integrado aos sistemas de atendimento e acompanhamento
            da Secretaria de Políticas para Mulher e Cuidado do Município do Rio de Janeiro.
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
        <div className="footer-logo-crop" aria-label="Rio">
          <img
            className="footer-logo"
            src="/logo_vertical.png"
            alt="Rio"
          />
        </div>
      </footer>
    </main>
  );
}
