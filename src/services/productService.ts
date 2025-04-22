export type Product = {
    readonly id: number;
    readonly title: string;
    readonly imageUrl: string;
    readonly description: string;
    readonly link: string;
  };
  
  export function fetchProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "AppFinanças",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description:
              "Gestão financeira pessoal e empresarial com relatórios e metas.",
            link: "#",
          },
          {
            id: 2,
            title: "EdukaOnline",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description:
              "Plataforma EAD com gamificação e relatórios de desempenho.",
            link: "#",
          },
          {
            id: 3,
            title: "LogiTrack",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description:
              "Monitoramento logístico em tempo real com mapas interativos.",
            link: "#",
          },
          {
            id: 4,
            title: "HealthSync",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description:
              "Integração de prontuários eletrônicos com atendimento remoto.",
            link: "#",
          },
          {
            id: 5,
            title: "MarketBoost",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description: "Ferramentas de automação de marketing digital e CRM.",
            link: "#",
          },
          {
            id: 6,
            title: "SafeAccess",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description:
              "Controle de acesso físico e digital com autenticação biométrica.",
            link: "#",
          },
          {
            id: 7,
            title: "AgroData",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description:
              "Análise de dados agrícolas com previsões climáticas integradas.",
            link: "#",
          },
          {
            id: 8,
            title: "BuildPlan",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description: "Gestão de obras e planejamento com dashboard visual.",
            link: "#",
          },
          {
            id: 9,
            title: "RetailMax",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description: "ERP para varejo com controle de estoque e vendas.",
            link: "#",
          },
          {
            id: 10,
            title: "EcoMonitor",
            imageUrl:
              "https://impactosociedade.com.br/images/nupis_transparent.png",
            description:
              "Soluções ambientais para monitoramento de emissões e resíduos.",
            link: "#",
          },
        ]);
      }, 1000); // simula 1 segundo de "carregamento"
    });
  }