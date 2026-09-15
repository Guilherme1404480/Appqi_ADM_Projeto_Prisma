// Conteúdo institucional e desafios estratégicos da Prisma BPO (empresa fictícia, dados simulados).
window.PRISMA_DATA = {
  portfolio: {
    lead: 'Terceirizamos departamento pessoal, financeiro, fiscal, compras e atendimento para empresas de varejo, distribuição e serviços. Nossos clientes ganham tempo, e nós garantimos números certos e prazos cumpridos.',
    chips: ['Desde 2016', 'São Paulo · Recife', 'Modelo híbrido', 'BPO administrativo'],
    numeros: [
      { valor: '10 anos', rotulo: 'de mercado, desde 2016' },
      { valor: '180', rotulo: 'colaboradores' },
      { valor: '64', rotulo: 'clientes ativos' },
      { valor: 'R$ 4,7 mi', rotulo: 'faturados em agosto' },
      { valor: '98,2%', rotulo: 'fechamentos no prazo' },
      { valor: '9,1', rotulo: 'satisfação dos clientes' }
    ],
    quemSomos: 'A Prisma Gestão Administrativa nasceu em março de 2016, em São Paulo, para assumir as rotinas que tiram o foco das empresas do próprio negócio. Começamos com folha de pagamento e hoje operamos departamento pessoal, financeiro, fiscal, compras e atendimento para 64 clientes, com uma filial em Recife que atende o Nordeste.',
    unidades: [
      { cidade: 'São Paulo (SP)', tipo: 'Sede', colab: 146, clientes: 53 },
      { cidade: 'Recife (PE)', tipo: 'Filial', colab: 34, clientes: 11 }
    ],
    missao: 'Cuidar da rotina administrativa dos clientes com precisão e prazo, para que eles cuidem do próprio negócio.',
    visao: 'Ser a operação administrativa de referência do Sudeste e Nordeste até 2030.',
    valores: ['Exatidão nos números', 'Prazo cumprido', 'Sigilo das informações', 'Respeito às pessoas', 'Melhoria contínua'],
    servicos: [
      { nome: 'Departamento Pessoal', icon: 'users', descricao: 'Folha de pagamento, admissões e rescisões, ponto eletrônico, eSocial e benefícios.', dados: [['41', 'clientes'], ['9.200', 'holerites/mês']] },
      { nome: 'Financeiro', icon: 'wallet', descricao: 'Contas a pagar e a receber, tesouraria, conciliação bancária e cobrança.', dados: [['38', 'clientes'], ['52 mil', 'títulos/mês']] },
      { nome: 'Fiscal e Contábil', icon: 'receipt', descricao: 'Escrituração fiscal, apuração de impostos, obrigações acessórias e contabilidade.', dados: [['46', 'clientes'], ['9.800', 'lançamentos/mês']] },
      { nome: 'Compras', icon: 'cart', descricao: 'Cotação, negociação e acompanhamento de pedidos com fornecedores.', dados: [['17', 'clientes'], ['3.400', 'pedidos/mês']] },
      { nome: 'Atendimento', icon: 'headset', descricao: 'Central de atendimento, SAC e suporte aos fornecedores dos clientes.', dados: [['22', 'clientes'], ['18 mil', 'atendimentos/mês']] },
      { nome: 'Transição Tributária', icon: 'scale', novo: true, descricao: 'Diagnóstico e adequação dos clientes à CBS e ao IBS da Reforma Tributária.', dados: [['3', 'clientes'], ['lançado', 'em 2026']] }
    ],
    receitaServicos: [
      { nome: 'BPO completo (vários serviços)', pct: 48 },
      { nome: 'Departamento Pessoal', pct: 19 },
      { nome: 'Financeiro', pct: 14 },
      { nome: 'Fiscal e Contábil', pct: 13 },
      { nome: 'Compras e Atendimento', pct: 6 }
    ],
    segmentos: [
      { nome: 'Varejo', clientes: 27, texto: 'Supermercados, farmácias e redes de lojas' },
      { nome: 'Serviços', clientes: 20, texto: 'Logística, saúde, educação e facilities' },
      { nome: 'Distribuição', clientes: 17, texto: 'Atacadistas e distribuidoras', extra: '+1 em implantação' }
    ],
    clientes: [
      { nome: 'Rede Varejo Solar' }, { nome: 'Distribuidora Horizonte' }, { nome: 'Grupo Atlântico Serviços' },
      { nome: 'Farmácias Pró-Vida' }, { nome: 'Atacadista Serra Azul' }, { nome: 'Logística Rota Norte' },
      { nome: 'Mercados Vila Nova' }, { nome: 'Distribuidora Litoral Sul', novo: true }
    ],
    processo: [
      { titulo: 'Diagnóstico e implantação', texto: 'Mapeamos a rotina do cliente e migramos os processos em 30 a 60 dias.' },
      { titulo: 'Operação diária', texto: 'Equipe dedicada executa as rotinas com prazos definidos em contrato (SLA).' },
      { titulo: 'Fechamento e conferência', texto: 'Fechamento mensal com checklist e conferência antes da entrega.' },
      { titulo: 'Relatórios e resultados', texto: 'Indicadores mensais e reunião de resultados com cada cliente.' }
    ],
    trajetoria: [
      { ano: '2016', texto: 'Fundação em São Paulo com 12 colaboradores e foco em folha de pagamento.' },
      { ano: '2018', texto: 'Início dos serviços financeiro e fiscal; 25 clientes na carteira.' },
      { ano: '2020', texto: 'Operação 100% remota na pandemia, sem perder nenhum prazo de fechamento.' },
      { ano: '2021', texto: 'Abertura da filial em Recife para atender clientes do Nordeste.' },
      { ano: '2023', texto: 'Modelo híbrido, 120 colaboradores e novos serviços de compras e atendimento.' },
      { ano: '2026', texto: '180 colaboradores, 64 clientes e lançamento do serviço de Transição Tributária.' }
    ],
    setores: [
      { nome: 'Diretoria e Planejamento', pessoas: 6, cargos: ['Diretor-executivo', 'Gerente de Planejamento', 'Analista de Projetos'] },
      { nome: 'Departamento Pessoal', pessoas: 38, cargos: ['Coordenador de DP', 'Analista de Folha de Pagamento', 'Assistente de Admissão e Rescisão', 'Auxiliar de Ponto Eletrônico'] },
      { nome: 'Financeiro', pessoas: 34, cargos: ['Coordenador Financeiro', 'Analista de Contas a Pagar', 'Analista de Contas a Receber', 'Assistente de Tesouraria e Conciliação'] },
      { nome: 'Fiscal e Contábil', pessoas: 36, cargos: ['Supervisor Fiscal', 'Analista Fiscal', 'Auxiliar de Escrituração', 'Analista Contábil'] },
      { nome: 'Comercial e Relacionamento', pessoas: 14, cargos: ['Gerente Comercial', 'Executivo de Contas', 'Analista de Sucesso do Cliente', 'Pré-vendas (SDR)'] },
      { nome: 'Operações e Qualidade', pessoas: 12, cargos: ['Coordenador de Processos', 'Analista de Qualidade', 'Auditor Interno'] },
      { nome: 'Tecnologia da Informação', pessoas: 11, cargos: ['Coordenador de TI', 'Analista de Sistemas', 'Suporte Técnico N1'] },
      { nome: 'Recursos Humanos', pessoas: 9, cargos: ['Gerente de RH', 'Analista de Recrutamento e Seleção', 'Analista de Treinamento', 'Técnico de Segurança do Trabalho'] },
      { nome: 'Administrativo e Facilities', pessoas: 20, cargos: ['Supervisor Administrativo', 'Assistente de Compras', 'Recepcionista', 'Auxiliar de Serviços Gerais'] }
    ]
  },

  reuniao: {
    titulo: 'Reunião Geral de Resultados',
    quando: 'Quinta-feira, 24/09, às 9h30 · Microsoft Teams · 40 minutos',
    pauta: [
      { min: 5, titulo: 'Abertura e resultados de agosto', texto: 'Faturamento 6% acima da meta, SLA de 98,2% e satisfação 9,1', link: '#metas' },
      { min: 8, titulo: 'Problemas enfrentados', texto: 'Retrabalho fiscal, inadimplência e horas extras', link: '#metas' },
      { min: 8, titulo: 'Desafio de curto prazo', texto: 'Reduzir o retrabalho fiscal de 7% para 4%', link: '#desafios/curto' },
      { min: 7, titulo: 'Desafio de médio prazo', texto: 'Preparação para a Reforma Tributária', link: '#desafios/medio' },
      { min: 7, titulo: 'Desafio de longo prazo', texto: 'Visão 2030: automação e Nordeste', link: '#desafios/longo' },
      { min: 5, titulo: 'Metas de outubro e perguntas', texto: 'Compromissos de cada setor', link: '#orcamento' }
    ]
  },

  desafios: [
    {
      id: 'curto',
      horizonte: 'h1',
      rotulo: 'Curto prazo',
      periodo: '90 dias',
      titulo: 'Reduzir o retrabalho no fechamento fiscal',
      subtitulo: 'Mais qualidade nos lançamentos fiscais dos 64 clientes',
      inicio: '2026-09-01',
      prazo: '2026-12-18',
      lider: 'Supervisor Fiscal',
      patrocinador: 'Diretor-executivo',
      setores: ['Fiscal e Contábil', 'Tecnologia da Informação', 'Recursos Humanos', 'Operações e Qualidade'],
      problema: 'Em agosto, 7% dos lançamentos fiscais precisaram ser refeitos, quase o dobro da meta de 4%. Cada erro consome horas da equipe, obriga a retificar declarações com multa e juros e ameaça o SLA de entrega dos fechamentos, que hoje está em 98,2%.',
      fatos: [
        { valor: '9.800', rotulo: 'lançamentos fiscais por mês' },
        { valor: '686', rotulo: 'lançamentos refeitos em agosto' },
        { valor: '286 h', rotulo: 'de retrabalho por mês' },
        { valor: 'R$ 24 mil', rotulo: 'de custo mensal com retrabalho e multas' }
      ],
      causasTitulo: 'Causas dos erros (análise de Pareto)',
      causas: [
        { texto: 'CFOP e NCM errados no cadastro de produtos dos clientes', peso: 38 },
        { texto: 'Divergência entre o XML da nota e o lançamento manual', peso: 27 },
        { texto: 'Conferência feita só no fim do mês, sob pressão de prazo', peso: 18 },
        { texto: 'Falta de checklist padrão por cliente', peso: 11 },
        { texto: 'Equipe reduzida: vaga de Analista Fiscal aberta', peso: 6 }
      ],
      objetivo: 'Reduzir a taxa de retrabalho fiscal de 7% para 4% até 18/12/2026, sem aumentar o prazo de fechamento e mantendo o SLA acima de 95%.',
      kpis: [
        { nome: 'Taxa de retrabalho fiscal', base: 7, atual: 6.1, meta: 4, unidade: '%' },
        { nome: 'Horas de retrabalho por mês', base: 286, atual: 249, meta: 160, unidade: 'h' },
        { nome: 'Multas e juros por retificação', base: 7400, atual: 5100, meta: 2000, unidade: 'R$' },
        { nome: 'Lançamentos com dupla conferência', base: 0, atual: 35, meta: 100, unidade: '%' }
      ],
      marcos: [
        { titulo: 'Diagnóstico dos erros por cliente (Pareto)', data: '2026-09-05', resp: 'Analista Fiscal', status: 'Concluído' },
        { titulo: 'Dupla conferência nos 10 maiores clientes', data: '2026-09-12', resp: 'Supervisor Fiscal', status: 'Concluído' },
        { titulo: 'Treinamento de CFOP, NCM e conferência de XML', data: '2026-09-22', resp: 'Analista de Treinamento', status: 'Em andamento' },
        { titulo: 'Checklist fiscal padrão para os 64 clientes', data: '2026-10-09', resp: 'Analista de Qualidade', status: 'Pendente' },
        { titulo: 'Importação automática de XML no ERP', data: '2026-10-30', resp: 'Analista de Sistemas', status: 'Pendente' },
        { titulo: 'Contratação do Analista Fiscal (via Indica+)', data: '2026-11-13', resp: 'Analista de Recrutamento e Seleção', status: 'Em andamento' },
        { titulo: 'Dupla conferência em 100% dos clientes', data: '2026-11-30', resp: 'Supervisor Fiscal', status: 'Pendente' },
        { titulo: 'Avaliação do resultado e padronização', data: '2026-12-18', resp: 'Coordenador de Processos', status: 'Pendente' }
      ],
      investimento: {
        previsto: 31400,
        executado: 12500,
        itens: [['Treinamento da equipe fiscal', 12500], ['Parametrização do ERP (importação de XML)', 9000], ['Contratação e integração do Analista Fiscal', 9900]]
      },
      retorno: { rotulo: 'Economia mensal esperada', valor: 12700, nota: 'menos horas de retrabalho e multas' },
      riscos: [
        { texto: 'Sobrecarga no fechamento de outubro atrasar a implantação', prob: 'Alta', impacto: 'Alto', mitigacao: 'Implantar em ondas, começando pelos clientes com mais erros.' },
        { texto: 'Resistência da equipe à dupla conferência', prob: 'Média', impacto: 'Médio', mitigacao: 'Mostrar a queda das horas extras e reconhecer quem reduz erros.' },
        { texto: 'Demora na contratação do Analista Fiscal', prob: 'Média', impacto: 'Médio', mitigacao: 'Usar o programa Indica+ e o banco de talentos do RH.' }
      ],
      conquistas: [
        'Retrabalho já caiu de 7% para 6,1% na primeira quinzena de setembro',
        'Dupla conferência funcionando nos 10 maiores clientes',
        'Nenhuma multa nova nos clientes com dupla conferência'
      ]
    },
    {
      id: 'medio',
      horizonte: 'h2',
      rotulo: 'Médio prazo',
      periodo: '10 meses',
      titulo: 'Preparar a Prisma e os clientes para a Reforma Tributária',
      subtitulo: 'Transição para CBS e IBS sem erros, e com uma nova fonte de receita',
      inicio: '2026-09-01',
      prazo: '2027-06-30',
      lider: 'Gerente de Planejamento',
      patrocinador: 'Diretor-executivo',
      setores: ['Fiscal e Contábil', 'Tecnologia da Informação', 'Comercial e Relacionamento', 'Recursos Humanos'],
      problema: 'A Lei Complementar 214/2025 regulamentou a Reforma Tributária do consumo. 2026 é o ano de teste da CBS e do IBS, que já aparecem nas notas fiscais, e em 2027 a CBS substitui o PIS e a COFINS. Os 64 clientes vão precisar revisar cadastros, sistemas e preços, e a equipe fiscal da Prisma ainda não está preparada para operar as novas regras.',
      fatos: [
        { valor: '64', rotulo: 'clientes impactados pela reforma' },
        { valor: '18%', rotulo: 'da equipe fiscal e contábil treinada' },
        { valor: '0', rotulo: 'clientes com simulação de impacto' },
        { valor: 'jan/2027', rotulo: 'início da cobrança da CBS' }
      ],
      causasTitulo: 'Pontos críticos',
      causas: [
        { texto: 'ERP ainda sem os campos de CBS e IBS homologados' },
        { texto: 'Cadastros fiscais dos clientes montados para PIS, COFINS, ICMS e ISS' },
        { texto: 'Pouco conhecimento da equipe sobre as novas regras e o período de convivência dos tributos' },
        { texto: 'Clientes pedindo orientação, mas sem um serviço estruturado para atender' },
        { texto: 'Regulamentação ainda recebendo ajustes da Receita Federal e do Comitê Gestor do IBS' }
      ],
      objetivo: 'Até 30/06/2027, revisar o cadastro fiscal e simular o impacto da reforma para 100% dos clientes, treinar toda a equipe fiscal e contábil, homologar o ERP e vender o serviço de Transição Tributária para 25 clientes.',
      kpis: [
        { nome: 'Clientes com cadastro fiscal revisado', base: 0, atual: 9, meta: 64, unidade: 'clientes' },
        { nome: 'Equipe fiscal e contábil treinada', base: 18, atual: 32, meta: 100, unidade: '%' },
        { nome: 'Notas de teste com CBS e IBS corretos', base: 71, atual: 84, meta: 100, unidade: '%' },
        { nome: 'Clientes no serviço de transição', base: 0, atual: 3, meta: 25, unidade: 'clientes' }
      ],
      marcos: [
        { titulo: 'Comitê interno da reforma criado', data: '2026-09-04', resp: 'Gerente de Planejamento', status: 'Concluído' },
        { titulo: 'Diagnóstico de impacto por segmento (varejo, distribuição e serviços)', data: '2026-10-16', resp: 'Analista de Projetos', status: 'Em andamento' },
        { titulo: 'Trilha de treinamento sobre CBS e IBS', data: '2026-11-20', resp: 'Analista de Treinamento', status: 'Pendente' },
        { titulo: 'Homologação do ERP com o fornecedor', data: '2026-12-11', resp: 'Coordenador de TI', status: 'Pendente' },
        { titulo: 'Revisão dos cadastros fiscais dos 64 clientes', data: '2027-02-26', resp: 'Supervisor Fiscal', status: 'Pendente' },
        { titulo: 'Lançamento comercial do serviço de Transição Tributária', data: '2027-03-15', resp: 'Gerente Comercial', status: 'Pendente' },
        { titulo: 'Simulação de carga tributária para todos os clientes', data: '2027-05-28', resp: 'Analista Contábil', status: 'Pendente' },
        { titulo: 'Avaliação final e plano para a fase do IBS (2029)', data: '2027-06-30', resp: 'Gerente de Planejamento', status: 'Pendente' }
      ],
      investimento: {
        previsto: 186000,
        executado: 14000,
        itens: [['Adequação e homologação do ERP', 95000], ['Treinamento e certificações', 48000], ['Consultoria tributária externa', 43000]]
      },
      retorno: { rotulo: 'Nova receita mensal esperada', valor: 112500, nota: '25 clientes × R$ 4.500 por mês' },
      riscos: [
        { texto: 'Novas mudanças na regulamentação', prob: 'Alta', impacto: 'Médio', mitigacao: 'Consultoria externa com boletim mensal e revisão trimestral do plano.' },
        { texto: 'Atraso do fornecedor do ERP', prob: 'Média', impacto: 'Alto', mitigacao: 'Contrato com prazo e multa, e testes em ambiente de homologação.' },
        { texto: 'Clientes não perceberem valor no novo serviço', prob: 'Média', impacto: 'Médio', mitigacao: 'Oferecer a simulação de impacto gratuita como porta de entrada.' }
      ],
      conquistas: [
        'Comitê da reforma formado com Fiscal, TI e Comercial',
        '3 clientes já contrataram o serviço de Transição Tributária',
        '84% das notas de teste emitidas com CBS e IBS corretos'
      ]
    },
    {
      id: 'longo',
      horizonte: 'h3',
      rotulo: 'Longo prazo',
      periodo: '4 anos',
      titulo: 'Visão 2030: crescer com automação e presença no Nordeste',
      subtitulo: 'Tornar-se a operação administrativa de referência do Sudeste e Nordeste',
      inicio: '2026-09-01',
      prazo: '2030-12-18',
      lider: 'Diretor-executivo',
      patrocinador: 'Sócios da Prisma',
      setores: ['Diretoria e Planejamento', 'Tecnologia da Informação', 'Comercial e Relacionamento', 'Operações e Qualidade', 'Recursos Humanos'],
      problema: 'A Prisma cresceu contratando pessoas: cada novo cliente exige mais analistas, e cerca de 70% das rotinas ainda são manuais. Ao mesmo tempo, a automação e a inteligência artificial estão baixando o preço dos serviços de BPO. Para cumprir a visão de 2030 sem perder margem, a empresa precisa ganhar clientes mais rápido do que contrata pessoas.',
      fatos: [
        { valor: 'R$ 26,7 mil', rotulo: 'de receita mensal por colaborador' },
        { valor: '70%', rotulo: 'das rotinas ainda manuais' },
        { valor: '11 de 64', rotulo: 'clientes atendidos no Nordeste' },
        { valor: '4 anos', rotulo: 'para cumprir a visão da empresa' }
      ],
      causasTitulo: 'Barreiras para crescer',
      causas: [
        { texto: 'Conciliações, lançamentos e folha feitos com planilhas e digitação' },
        { texto: 'Crescimento dependente de novas contratações' },
        { texto: 'Filial de Recife pequena para a demanda do Nordeste' },
        { texto: 'Falta das certificações ISO 9001 e ISO 27001, exigidas por clientes maiores' },
        { texto: 'Concorrentes digitais cobrando preços menores' }
      ],
      objetivo: 'Até dezembro de 2030, chegar a 130 clientes (40 no Nordeste), automatizar 60% das rotinas e elevar a receita mensal por colaborador de R$ 26,7 mil para R$ 37,5 mil, mantendo a satisfação dos clientes acima de 9.',
      kpis: [
        { nome: 'Clientes ativos', base: 64, atual: 65, meta: 130, unidade: 'clientes' },
        { nome: 'Clientes no Nordeste', base: 11, atual: 12, meta: 40, unidade: 'clientes' },
        { nome: 'Rotinas automatizadas', base: 30, atual: 31, meta: 60, unidade: '%' },
        { nome: 'Receita mensal por colaborador', base: 26100, atual: 26700, meta: 37500, unidade: 'R$' }
      ],
      marcos: [
        { titulo: 'Mapeamento dos processos e escolha da plataforma de automação', data: '2026-12-18', resp: 'Coordenador de Processos', status: 'Em andamento' },
        { titulo: 'Portal do cliente com envio de documentos e indicadores', data: '2027-06-30', resp: 'Coordenador de TI', status: 'Pendente' },
        { titulo: 'Automação da conciliação bancária e dos lançamentos recorrentes', data: '2027-12-17', resp: 'Analista de Sistemas', status: 'Pendente' },
        { titulo: 'Ampliação da filial de Recife (+40 posições)', data: '2028-03-31', resp: 'Supervisor Administrativo', status: 'Pendente' },
        { titulo: 'Certificações ISO 9001 e ISO 27001', data: '2028-11-30', resp: 'Auditor Interno', status: 'Pendente' },
        { titulo: 'Abertura de escritório em Fortaleza', data: '2029-06-29', resp: 'Gerente Comercial', status: 'Pendente' },
        { titulo: 'Assistentes de IA no atendimento e na conferência', data: '2029-12-14', resp: 'Coordenador de TI', status: 'Pendente' },
        { titulo: 'Visão 2030 alcançada: 130 clientes', data: '2030-12-18', resp: 'Diretor-executivo', status: 'Pendente' }
      ],
      investimento: {
        previsto: 4200000,
        executado: 180000,
        itens: [['Plataforma de automação e IA', 1650000], ['Expansão em Recife e escritório em Fortaleza', 1400000], ['Portal do cliente', 630000], ['Certificações ISO e segurança da informação', 520000]]
      },
      retorno: { rotulo: 'Aumento esperado no resultado mensal', valor: 1150000, nota: 'com 130 clientes e margem preservada' },
      riscos: [
        { texto: 'Medo da equipe de ser substituída pela automação', prob: 'Alta', impacto: 'Alto', mitigacao: 'Requalificar pessoas para funções analíticas e mostrar que a automação acompanha o crescimento.' },
        { texto: 'Vazamento de dados de clientes (LGPD)', prob: 'Média', impacto: 'Alto', mitigacao: 'ISO 27001, controle de acessos e treinamento de sigilo para todos.' },
        { texto: 'Crescimento comercial abaixo do esperado', prob: 'Média', impacto: 'Alto', mitigacao: 'Metas trimestrais por região e parcerias com escritórios de contabilidade.' }
      ],
      conquistas: [
        'Novo cliente de distribuição em implantação: Distribuidora Litoral Sul',
        'Faturamento de agosto 6% acima da meta',
        'Satisfação dos clientes em 9,1, acima da meta de 8,5'
      ]
    }
  ]
};
