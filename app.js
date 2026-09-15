(() => {
  'use strict';

  const STORAGE_KEY = 'prisma-fin-v1';
  const THEME_KEY = 'prisma-fin-theme';

  const SETORES = [
    'Diretoria e Planejamento', 'Departamento Pessoal', 'Financeiro', 'Fiscal e Contábil',
    'Comercial e Relacionamento', 'Operações e Qualidade', 'Tecnologia da Informação',
    'Recursos Humanos', 'Administrativo e Facilities'
  ];
  const CATEGORIAS = {
    receber: ['Contrato BPO completo', 'Folha de pagamento', 'Financeiro terceirizado', 'Fiscal e contábil', 'Implantação de cliente', 'Outras receitas'],
    pagar: ['Pessoal e folha', 'Encargos e benefícios', 'Impostos', 'Aluguel e ocupação', 'Tecnologia', 'Serviços de terceiros', 'Treinamento', 'Financiamentos', 'Despesas gerais']
  };
  const STATUS_ACAO = ['Não iniciado', 'Em andamento', 'Concluído'];
  const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  const MESES_LONGOS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  const I = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICON = {
    home: I('<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>'),
    wallet: I('<path d="M3 7a2 2 0 0 1 2-2h12v4"/><path d="M3 7v11a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H5a2 2 0 0 1-2-2"/><circle cx="16" cy="14" r="1.2"/>'),
    trend: I('<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'),
    pie: I('<path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/>'),
    target: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
    plus: I('<path d="M12 5v14M5 12h14"/>'),
    check: I('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    alert: I('<path d="M12 8v5"/><path d="M12 16.5v.01"/><circle cx="12" cy="12" r="9"/>'),
    clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    dots: I('<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>'),
    close: I('<path d="M6 6l12 12M18 6L6 18"/>'),
    search: I('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
    download: I('<path d="M12 4v11"/><path d="M7 10l5 5 5-5"/><path d="M5 20h14"/>'),
    info: I('<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8v.01"/>'),
    refresh: I('<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>'),
    building: I('<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/><path d="M10 21v-3h4v3"/>'),
    flag: I('<path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/>'),
    more: I('<path d="M4 6h16M4 12h16M4 18h16"/>'),
    back: I('<path d="M15 6l-6 6 6 6"/>'),
    chevron: I('<path d="M9 6l6 6-6 6"/>'),
    users: I('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/>'),
    calendar: I('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
    pin: I('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    receipt: I('<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>'),
    cart: I('<circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2.5 3h3l2.2 11.5h11l2-8H6.5"/>'),
    headset: I('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>'),
    scale: I('<path d="M12 3v18M7 21h10M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0z"/><path d="M19 7l-3 7a3 3 0 0 0 6 0z"/>'),
    shield: I('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
    star: I('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'),
    circle: I('<circle cx="12" cy="12" r="3"/>')
  };

  const NAV = [
    { id: 'inicio', label: 'Início', long: 'A empresa', icon: 'building', grupo: 'Empresa' },
    { id: 'painel', label: 'Painel', long: 'Painel financeiro', icon: 'home', grupo: 'Financeiro' },
    { id: 'contas', label: 'Contas', long: 'Contas a pagar e receber', icon: 'wallet', grupo: 'Financeiro' },
    { id: 'fluxo', label: 'Fluxo', long: 'Fluxo de caixa', icon: 'trend', grupo: 'Financeiro' },
    { id: 'orcamento', label: 'Orçamento', long: 'Orçamento por setor', icon: 'pie', grupo: 'Financeiro' },
    { id: 'metas', label: 'Metas', long: 'Metas e plano de ação', icon: 'target', grupo: 'Estratégia' },
    { id: 'desafios', label: 'Desafios', long: 'Gestão de desafios', icon: 'flag', grupo: 'Estratégia' }
  ];
  const TABS = ['inicio', 'painel', 'contas', 'desafios'];
  const STATUS_MARCO = ['Pendente', 'Em andamento', 'Concluído'];
  const DATA = window.PRISMA_DATA;

  /* ---------- Utilidades ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const uid = () => Math.random().toString(36).slice(2, 10);
  const pad = (n) => String(n).padStart(2, '0');
  const soma = (arr, f = (c) => c.valor) => arr.reduce((a, c) => a + (Number(f(c)) || 0), 0);
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const brl0 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const fmt = (v) => brl.format(v);
  const fmt0 = (v) => brl0.format(v);
  const num = (v, d = 1) => Number(v).toLocaleString('pt-BR', { maximumFractionDigits: d });
  function fmtC(v) {
    const a = Math.abs(v), s = v < 0 ? '−' : '';
    if (a >= 1e6) return `${s}R$ ${num(a / 1e6, 2)} mi`;
    if (a >= 1e3) return `${s}R$ ${num(a / 1e3, 1)} mil`;
    return `${s}R$ ${num(a, 0)}`;
  }
  function fmtEixo(v) {
    const a = Math.abs(v), s = v < 0 ? '−' : '';
    if (a >= 1e6) return `${s}${num(a / 1e6, 1)} mi`;
    if (a >= 1e3) return `${s}${num(a / 1e3, 0)} mil`;
    return `${s}${num(a, 0)}`;
  }
  const fmtPct = (v) => `${num(v, 1)}%`;
  const fmtData = (iso) => iso ? `${iso.slice(8, 10)}/${iso.slice(5, 7)}/${iso.slice(0, 4)}` : '—';
  const fmtDia = (iso) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;
  const mesCurto = (ym) => MESES[Number(ym.slice(5, 7)) - 1];
  const mesLongo = (ym) => `${MESES_LONGOS[Number(ym.slice(5, 7)) - 1]} de ${ym.slice(0, 4)}`;
  function hojeISO() {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }
  const diffDias = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 86400000);

  function fmtInd(v, unidade) {
    if (unidade === '%') return fmtPct(v);
    if (unidade === 'R$ mi') return `R$ ${num(v, 1)} mi`;
    if (unidade === 'dias') return `${num(v, 0)} dias`;
    return num(v, 1);
  }

  /* ---------- Dados de demonstração (Prisma BPO) ---------- */
  function seed() {
    const r = (descricao, parte, categoria, valor, vencimento, pago) =>
      ({ id: uid(), tipo: 'receber', descricao, parte, categoria, setor: 'Comercial e Relacionamento', valor, vencimento, pago, dataPagamento: pago ? vencimento : null });
    const p = (descricao, parte, categoria, setor, valor, vencimento, pago) =>
      ({ id: uid(), tipo: 'pagar', descricao, parte, categoria, setor, valor, vencimento, pago, dataPagamento: pago ? vencimento : null });

    return {
      versao: 2,
      mesRef: '2026-09',
      desafios: clone(DATA.desafios),
      saldoInicial: 1250000,
      historico: [
        { mes: '2026-04', receita: 4220000, despesa: 3440000 },
        { mes: '2026-05', receita: 4310000, despesa: 3490000 },
        { mes: '2026-06', receita: 4280000, despesa: 3520000 },
        { mes: '2026-07', receita: 4450000, despesa: 3550000 },
        { mes: '2026-08', receita: 4700000, despesa: 3580000 }
      ],
      contas: [
        r('Mensalidade BPO — setembro', 'Rede Varejo Solar', 'Contrato BPO completo', 412000, '2026-09-05', true),
        r('Mensalidade BPO — setembro', 'Distribuidora Horizonte', 'Contrato BPO completo', 365000, '2026-09-08', true),
        r('Folha e DP terceirizados', 'Grupo Atlântico Serviços', 'Folha de pagamento', 298500, '2026-09-10', true),
        r('Financeiro terceirizado', 'Mercados Vila Nova', 'Financeiro terceirizado', 241800, '2026-09-10', false),
        r('Escrituração fiscal e contábil', 'Farmácias Pró-Vida', 'Fiscal e contábil', 187300, '2026-09-12', true),
        r('Mensalidade BPO — setembro', 'Atacadista Serra Azul', 'Contrato BPO completo', 176900, '2026-09-15', false),
        r('Mensalidade BPO — setembro', 'Logística Rota Norte', 'Contrato BPO completo', 154200, '2026-09-18', false),
        r('Mensalidades BPO — setembro', 'Carteira Varejo (24 clientes)', 'Contrato BPO completo', 1120000, '2026-09-20', false),
        r('Implantação — novo cliente de distribuição', 'Distribuidora Litoral Sul', 'Implantação de cliente', 220000, '2026-09-22', false),
        r('Mensalidades BPO — setembro', 'Carteira Serviços (19 clientes)', 'Contrato BPO completo', 870000, '2026-09-25', false),
        r('Mensalidades BPO — setembro', 'Carteira Distribuição (14 clientes)', 'Contrato BPO completo', 754300, '2026-09-28', false),

        p('Vale-refeição e vale-alimentação', 'Cartão de benefícios', 'Encargos e benefícios', 'Recursos Humanos', 171000, '2026-09-01', true),
        p('Aluguel da sede — São Paulo', 'Paulista Patrimonial Imóveis', 'Aluguel e ocupação', 'Administrativo e Facilities', 96000, '2026-09-05', true),
        p('Aluguel da filial — Recife', 'Recife Center Locações', 'Aluguel e ocupação', 'Administrativo e Facilities', 38500, '2026-09-05', true),
        p('Plano de saúde dos colaboradores', 'Operadora de saúde', 'Encargos e benefícios', 'Recursos Humanos', 162000, '2026-09-10', true),
        p('Licenças do ERP e softwares', 'Fornecedores de software', 'Tecnologia', 'Tecnologia da Informação', 58400, '2026-09-10', true),
        p('Manutenção do ar-condicionado', 'Clima Tech Refrigeração', 'Serviços de terceiros', 'Administrativo e Facilities', 6900, '2026-09-11', false),
        p('Energia elétrica e internet', 'Concessionárias', 'Aluguel e ocupação', 'Administrativo e Facilities', 24800, '2026-09-12', true),
        p('Parcela do financiamento de equipamentos', 'Banco (financiamento)', 'Financiamentos', 'Tecnologia da Informação', 52000, '2026-09-15', false),
        p('Limpeza e segurança patrimonial', 'Servix Facilities', 'Serviços de terceiros', 'Administrativo e Facilities', 41200, '2026-09-15', false),
        p('Seguros empresariais', 'Corretora de seguros', 'Despesas gerais', 'Administrativo e Facilities', 9600, '2026-09-16', false),
        p('Material de escritório', 'Papelaria Central', 'Despesas gerais', 'Administrativo e Facilities', 7400, '2026-09-18', false),
        p('Auditoria externa', 'Auditores independentes', 'Serviços de terceiros', 'Operações e Qualidade', 18500, '2026-09-18', false),
        p('INSS e FGTS (competência agosto)', 'Receita Federal / Caixa', 'Encargos e benefícios', 'Departamento Pessoal', 512000, '2026-09-20', false),
        p('Treinamento de dupla conferência fiscal', 'Instituto de Capacitação Contábil', 'Treinamento', 'Fiscal e Contábil', 12500, '2026-09-22', false),
        p('Digitalização e guarda de documentos', 'DocGuard Serviços', 'Serviços de terceiros', 'Operações e Qualidade', 145000, '2026-09-22', false),
        p('ISS, PIS e COFINS sobre serviços', 'Prefeitura / Receita Federal', 'Impostos', 'Fiscal e Contábil', 470000, '2026-09-25', false),
        p('Vale-transporte', 'Operadora de transporte', 'Encargos e benefícios', 'Recursos Humanos', 64800, '2026-09-25', false),
        p('Marketing e eventos comerciais', 'Agência parceira', 'Despesas gerais', 'Comercial e Relacionamento', 38000, '2026-09-28', false),
        p('Folha de pagamento — setembro', 'Colaboradores (180)', 'Pessoal e folha', 'Departamento Pessoal', 1380000, '2026-09-30', false),
        p('Horas extras do fechamento de clientes', 'Colaboradores', 'Pessoal e folha', 'Departamento Pessoal', 86000, '2026-09-30', false),
        p('IRPJ e CSLL (3º trimestre)', 'Receita Federal', 'Impostos', 'Fiscal e Contábil', 210000, '2026-09-30', false),
        p('Brindes da SIPAT 2026', 'Brindes & Cia', 'Despesas gerais', 'Recursos Humanos', 4800, '2026-09-30', false),
        p('Bônus Indica+ (2 indicações)', 'Colaboradores indicadores', 'Pessoal e folha', 'Recursos Humanos', 1000, '2026-09-30', false)
      ],
      orcamento: [
        { setor: 'Diretoria e Planejamento', orcado: 185000, realizado: 172400 },
        { setor: 'Departamento Pessoal', orcado: 420000, realizado: 471500 },
        { setor: 'Financeiro', orcado: 310000, realizado: 298700 },
        { setor: 'Fiscal e Contábil', orcado: 365000, realizado: 389200 },
        { setor: 'Comercial e Relacionamento', orcado: 240000, realizado: 226300 },
        { setor: 'Operações e Qualidade', orcado: 198000, realizado: 181500 },
        { setor: 'Tecnologia da Informação', orcado: 275000, realizado: 262800 },
        { setor: 'Recursos Humanos', orcado: 230000, realizado: 214600 },
        { setor: 'Administrativo e Facilities', orcado: 290000, realizado: 281300 }
      ],
      indicadores: [
        { id: 'fat', nome: 'Faturamento de agosto', atual: 4.7, meta: 4.4, unidade: 'R$ mi', sentido: 'maior', nota: '6% acima da meta' },
        { id: 'sla', nome: 'SLA de entrega dos fechamentos', atual: 98.2, meta: 95, unidade: '%', sentido: 'maior', nota: 'Fechamentos entregues no prazo' },
        { id: 'nps', nome: 'Satisfação dos clientes', atual: 9.1, meta: 8.5, unidade: 'nota', sentido: 'maior', nota: 'Pesquisa de agosto (0 a 10)' },
        { id: 'afast', nome: 'Redução de afastamentos', atual: 20, meta: 15, unidade: '%', sentido: 'maior', nota: 'Comparado a 2025' },
        { id: 'margem', nome: 'Margem operacional do mês', auto: 'margem', meta: 20, unidade: '%', sentido: 'maior' },
        { id: 'retrab', nome: 'Retrabalho em lançamentos fiscais', atual: 7, meta: 4, unidade: '%', sentido: 'menor', nota: 'Dupla conferência já iniciada pelo Fiscal' },
        { id: 'inad', nome: 'Inadimplência de clientes', auto: 'inadimplencia', meta: 2.5, unidade: '%', sentido: 'menor' },
        { id: 'pmr', nome: 'Prazo médio de recebimento', atual: 38, meta: 30, unidade: 'dias', sentido: 'menor', nota: 'Tempo entre faturar e receber' },
        { id: 'hext', nome: 'Horas extras sobre a folha', atual: 6.2, meta: 4, unidade: '%', sentido: 'menor', nota: 'Fechamentos concentrados no fim do mês' }
      ],
      acoes: [
        { id: uid(), problema: 'Retrabalho fiscal em 7% (meta 4%)', acao: 'Implantar dupla conferência nos lançamentos fiscais, checklist por cliente e treinamento da equipe.', responsavel: 'Supervisor Fiscal', setor: 'Fiscal e Contábil', prazo: '2026-10-31', custo: 12500, status: 'Em andamento' },
        { id: uid(), problema: 'Inadimplência acima da meta', acao: 'Criar régua de cobrança: lembrete 5 dias antes, cobrança no dia seguinte ao vencimento e contato do Executivo de Contas após 7 dias.', responsavel: 'Analista de Contas a Receber', setor: 'Financeiro', prazo: '2026-10-15', custo: 0, status: 'Em andamento' },
        { id: uid(), problema: 'Horas extras 12% acima do orçado no DP', acao: 'Escalonar o calendário de fechamento dos clientes e automatizar a conciliação bancária.', responsavel: 'Coordenador de Processos', setor: 'Operações e Qualidade', prazo: '2026-11-30', custo: 18000, status: 'Não iniciado' },
        { id: uid(), problema: 'Prazo médio de recebimento de 38 dias', acao: 'Renegociar vencimentos para até o dia 10 e oferecer PIX automático e boleto registrado.', responsavel: 'Gerente Comercial', setor: 'Comercial e Relacionamento', prazo: '2026-11-30', custo: 0, status: 'Não iniciado' },
        { id: uid(), problema: 'Manter a queda dos afastamentos', acao: 'Realizar a SIPAT 2026 com foco em ergonomia, pausas e saúde no trabalho administrativo.', responsavel: 'Técnico de Segurança do Trabalho', setor: 'Recursos Humanos', prazo: '2026-10-23', custo: 4800, status: 'Em andamento' }
      ]
    };
  }

  /* ---------- Estado ---------- */
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s && s.versao === 1) {
          s.desafios = clone(DATA.desafios);
          s.versao = 2;
        }
        if (s && s.versao === 2) return s;
      }
    } catch (e) { /* segue com dados de demonstração */ }
    return seed();
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* armazenamento indisponível */ }
  }

  let state = load();
  const ui = { tipo: 'receber', filtro: 'todas', busca: '' };

  /* ---------- Cálculos ---------- */
  function statusConta(c) {
    if (c.pago) return 'pago';
    const h = hojeISO();
    if (c.vencimento < h) return 'vencido';
    return diffDias(h, c.vencimento) <= 7 ? 'proximo' : 'aberto';
  }
  const contasDoMes = (tipo) => state.contas.filter((c) => c.tipo === tipo && c.vencimento.startsWith(state.mesRef));

  function resumoMes() {
    const rec = contasDoMes('receber'), pag = contasDoMes('pagar');
    const receitas = soma(rec), despesas = soma(pag);
    const recebido = soma(rec.filter((c) => c.pago)), pago = soma(pag.filter((c) => c.pago));
    const vencidoRec = soma(rec.filter((c) => statusConta(c) === 'vencido'));
    return {
      receitas, despesas, recebido, pago, vencidoRec,
      resultado: receitas - despesas,
      margem: receitas ? (receitas - despesas) / receitas * 100 : 0,
      saldoAtual: state.saldoInicial + recebido - pago,
      inadimplencia: receitas ? vencidoRec / receitas * 100 : 0
    };
  }
  function valorIndicador(ind, r) {
    if (ind.auto === 'margem') return r.margem;
    if (ind.auto === 'inadimplencia') return r.inadimplencia;
    return ind.atual;
  }
  const atingiu = (ind, v) => ind.sentido === 'maior' ? v >= ind.meta : v <= ind.meta;
  function progressoInd(ind, v) {
    if (ind.sentido === 'maior') return ind.meta ? Math.max(0, Math.min(1, v / ind.meta)) : 1;
    if (v <= ind.meta) return 1;
    return ind.meta > 0 ? Math.max(0.05, ind.meta / v) : Math.max(0.05, 1 - v / 100);
  }
  function listaIndicadores() {
    const r = resumoMes();
    return state.indicadores.map((i) => {
      const valor = valorIndicador(i, r);
      return { ...i, valor, ok: atingiu(i, valor), prog: progressoInd(i, valor) };
    });
  }

  function diasDoMes() {
    const [y, m] = state.mesRef.split('-').map(Number);
    const n = new Date(y, m, 0).getDate();
    let saldo = state.saldoInicial;
    const pts = [];
    for (let d = 1; d <= n; d++) {
      const iso = `${state.mesRef}-${pad(d)}`;
      const itens = state.contas.filter((c) => c.vencimento === iso);
      const ent = soma(itens.filter((c) => c.tipo === 'receber'));
      const sai = soma(itens.filter((c) => c.tipo === 'pagar'));
      saldo += ent - sai;
      pts.push({ iso, ent, sai, saldo, itens });
    }
    return pts;
  }

  /* ---------- Componentes ---------- */
  function badgeConta(c) {
    const s = statusConta(c), h = hojeISO();
    if (s === 'pago') return `<span class="badge good">${ICON.check}${c.tipo === 'receber' ? 'Recebido' : 'Pago'}</span>`;
    if (s === 'vencido') return `<span class="badge crit">${ICON.alert}Vencido há ${diffDias(c.vencimento, h)} d</span>`;
    if (s === 'proximo') {
      const d = diffDias(h, c.vencimento);
      return `<span class="badge warn">${ICON.clock}${d === 0 ? 'Vence hoje' : `Vence em ${d} d`}</span>`;
    }
    return '<span class="badge neutral">Em aberto</span>';
  }
  function badgeInd(i, curto) {
    if (i.ok) return `<span class="badge good">${ICON.check}${curto ? 'Atingida' : 'Meta atingida'}</span>`;
    return `<span class="badge crit">${ICON.alert}${curto ? 'Atenção' : 'Fora da meta'}</span>`;
  }
  const kpi = (label, value, sub, title) =>
    `<div class="kpi"><div class="kpi-label">${label}</div><div class="kpi-value"${title ? ` title="${esc(title)}"` : ''}>${value}</div><div class="kpi-sub">${sub}</div></div>`;
  const tipRow = (sw, label, value, cls = '') =>
    `<div class="tip-row ${cls}"><span>${sw ? `<i class="sw ${sw}"></i>` : ''}${label}</span><span class="v">${value}</span></div>`;

  /* ---------- Tooltip ---------- */
  function showTip(e, html) {
    const t = $('#tooltip');
    t.innerHTML = html;
    t.hidden = false;
    const w = t.offsetWidth, h = t.offsetHeight, m = 12;
    let x = e.clientX + 14, y = e.clientY - h - 14;
    if (x + w > innerWidth - m) x = e.clientX - w - 14;
    if (x < m) x = m;
    if (y < m) y = e.clientY + 18;
    t.style.left = `${x}px`;
    t.style.top = `${y}px`;
  }
  function hideTip() {
    $('#tooltip').hidden = true;
    document.querySelectorAll('.chart.hovering').forEach((c) => c.classList.remove('hovering'));
    document.querySelectorAll('.bar-group.on').forEach((g) => g.classList.remove('on'));
    document.querySelectorAll('.chart .crosshair').forEach((g) => g.setAttribute('visibility', 'hidden'));
  }
  document.addEventListener('pointerdown', (e) => { if (!e.target.closest('.chart')) hideTip(); });
  window.addEventListener('scroll', () => { if (!$('#tooltip').hidden) hideTip(); }, { passive: true });

  /* ---------- Gráficos ---------- */
  function niceScale(min, max, count = 4) {
    const range = (max - min) || Math.abs(max) || 1;
    const raw = range / count;
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    const n = raw / p;
    const step = (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p;
    const lo = Math.floor(min / step) * step, hi = Math.ceil(max / step) * step;
    const ticks = [];
    for (let t = lo; t <= hi + step / 2; t += step) ticks.push(t);
    return { lo, hi, ticks };
  }
  function barPath(x, y, w, h, cls) {
    if (h <= 0) return '';
    const r = Math.min(4, w / 2, h);
    return `<path class="bar ${cls}" d="M${x},${y + h}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h}Z"/>`;
  }

  function chartBarras(el, data) {
    if (!el) return;
    const W = Math.max(280, Math.round(el.clientWidth)), H = 230;
    const m = { t: 10, r: 6, b: 26, l: 48 };
    const pw = W - m.l - m.r, ph = H - m.t - m.b;
    const sc = niceScale(0, Math.max(...data.flatMap((d) => [d.receita, d.despesa])), 4);
    const y = (v) => m.t + ph - (v - sc.lo) / (sc.hi - sc.lo) * ph;
    const gw = pw / data.length;
    const bw = Math.max(6, Math.min(26, (gw * 0.62 - 2) / 2));
    let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Receitas e despesas por mês">`;
    sc.ticks.forEach((t) => {
      s += `<line class="grid" x1="${m.l}" x2="${W - m.r}" y1="${y(t)}" y2="${y(t)}"/>`;
      s += `<text class="tick" x="${m.l - 8}" y="${y(t) + 4}" text-anchor="end">${fmtEixo(t)}</text>`;
    });
    data.forEach((d, i) => {
      const cx = m.l + gw * i + gw / 2;
      s += `<g class="bar-group" data-i="${i}">`;
      s += barPath(cx - 1 - bw, y(d.receita), bw, y(sc.lo) - y(d.receita), 's1');
      s += barPath(cx + 1, y(d.despesa), bw, y(sc.lo) - y(d.despesa), 's2');
      s += `<rect class="hit" x="${m.l + gw * i}" y="${m.t}" width="${gw}" height="${ph + m.b}"/></g>`;
      s += `<text class="tick" x="${cx}" y="${H - 7}" text-anchor="middle">${esc(d.label)}</text>`;
    });
    s += `<line class="axis" x1="${m.l}" x2="${W - m.r}" y1="${y(sc.lo)}" y2="${y(sc.lo)}"/></svg>`;
    el.innerHTML = s;

    el.querySelectorAll('.bar-group').forEach((g) => {
      const d = data[Number(g.dataset.i)];
      const show = (e) => {
        el.querySelectorAll('.bar-group.on').forEach((o) => o !== g && o.classList.remove('on'));
        el.classList.add('hovering');
        g.classList.add('on');
        showTip(e, `<b>${esc(d.titulo)}</b>` +
          tipRow('s1', 'Receitas', fmtC(d.receita)) +
          tipRow('s2', 'Despesas', fmtC(d.despesa)) +
          tipRow('', 'Resultado', fmtC(d.receita - d.despesa), 'total'));
      };
      g.addEventListener('pointermove', show);
      g.addEventListener('pointerdown', show);
      g.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') hideTip(); });
    });
  }

  function chartSaldo(el, pts, hojeIdx) {
    if (!el) return;
    const W = Math.max(280, Math.round(el.clientWidth)), H = 240;
    const m = { t: 18, r: 10, b: 26, l: 52 };
    const pw = W - m.l - m.r, ph = H - m.t - m.b;
    const vals = pts.map((p) => p.saldo);
    const sc = niceScale(Math.min(0, ...vals), Math.max(...vals), 4);
    const n = pts.length;
    const x = (i) => m.l + (n === 1 ? pw / 2 : i / (n - 1) * pw);
    const y = (v) => m.t + ph - (v - sc.lo) / (sc.hi - sc.lo) * ph;
    const line = (a, b) => pts.slice(a, b + 1).map((p, k) => `${k ? 'L' : 'M'}${x(a + k).toFixed(1)},${y(p.saldo).toFixed(1)}`).join('');

    let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Saldo de caixa dia a dia">`;
    sc.ticks.forEach((t) => {
      s += `<line class="grid" x1="${m.l}" x2="${W - m.r}" y1="${y(t)}" y2="${y(t)}"/>`;
      s += `<text class="tick" x="${m.l - 8}" y="${y(t) + 4}" text-anchor="end">${fmtEixo(t)}</text>`;
    });
    [1, 8, 15, 22, n].forEach((d) => {
      s += `<text class="tick" x="${x(d - 1)}" y="${H - 7}" text-anchor="${d === 1 ? 'start' : d === n ? 'end' : 'middle'}">${fmtDia(pts[d - 1].iso)}</text>`;
    });
    s += `<path class="area" d="${line(0, n - 1)}L${x(n - 1)},${y(sc.lo)}L${x(0)},${y(sc.lo)}Z"/>`;
    if (hojeIdx >= 0) s += `<path class="line" d="${line(0, Math.min(hojeIdx, n - 1))}"/>`;
    if (hojeIdx < n - 1) s += `<path class="line proj" d="${line(Math.max(hojeIdx, 0), n - 1)}"/>`;
    if (hojeIdx >= 0 && hojeIdx < n) {
      s += `<line class="today" x1="${x(hojeIdx)}" x2="${x(hojeIdx)}" y1="${m.t}" y2="${m.t + ph}"/>`;
      s += `<text class="note" x="${x(hojeIdx)}" y="${m.t - 6}" text-anchor="middle">hoje</text>`;
    }
    s += `<line class="axis" x1="${m.l}" x2="${W - m.r}" y1="${y(sc.lo)}" y2="${y(sc.lo)}"/>`;
    s += `<g class="crosshair" visibility="hidden"><line class="cross" y1="${m.t}" y2="${m.t + ph}"/><circle class="dot" r="5"/></g>`;
    s += `<rect class="hit" x="${m.l}" y="${m.t}" width="${pw}" height="${ph}"/></svg>`;
    el.innerHTML = s;

    const svg = el.querySelector('svg'), ch = el.querySelector('.crosshair');
    const move = (e) => {
      const rect = svg.getBoundingClientRect();
      const px = (e.clientX - rect.left) * (W / rect.width);
      const i = Math.max(0, Math.min(n - 1, Math.round((px - m.l) / pw * (n - 1))));
      const p = pts[i];
      ch.setAttribute('visibility', 'visible');
      ch.querySelector('line').setAttribute('x1', x(i));
      ch.querySelector('line').setAttribute('x2', x(i));
      ch.querySelector('circle').setAttribute('cx', x(i));
      ch.querySelector('circle').setAttribute('cy', y(p.saldo));
      showTip(e, `<b>${fmtData(p.iso)}${i > hojeIdx ? ' · previsto' : ''}</b>` +
        tipRow('s1', 'Saldo', fmtC(p.saldo)) +
        tipRow('', 'Entradas', p.ent ? `+${fmtC(p.ent)}` : '—') +
        tipRow('', 'Saídas', p.sai ? `−${fmtC(p.sai)}` : '—'));
    };
    const hit = el.querySelector('.hit');
    hit.addEventListener('pointermove', move);
    hit.addEventListener('pointerdown', move);
    hit.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') hideTip(); });
  }

  /* ---------- Telas ---------- */
  let charts = [];

  function viewPainel() {
    const r = resumoMes();
    const alertas = state.contas
      .filter((c) => ['vencido', 'proximo'].includes(statusConta(c)))
      .sort((a, b) => a.vencimento.localeCompare(b.vencimento));
    const serie = [
      ...state.historico.filter((h) => h.mes < state.mesRef).slice(-5).map((h) => ({ label: mesCurto(h.mes), titulo: mesLongo(h.mes), receita: h.receita, despesa: h.despesa })),
      { label: `${mesCurto(state.mesRef)}*`, titulo: `${mesLongo(state.mesRef)} (previsto)`, receita: r.receitas, despesa: r.despesas }
    ];
    const inds = listaIndicadores();
    const okCount = inds.filter((i) => i.ok).length;
    charts.push(() => chartBarras($('#chart-barras'), serie));

    return `
      <div class="page-head">
        <div><p class="eyebrow">${mesLongo(state.mesRef)}</p><h1>Painel financeiro</h1></div>
      </div>
      <div class="kpis">
        ${kpi('Saldo em caixa', fmtC(r.saldoAtual), `Início do mês: ${fmtC(state.saldoInicial)}`, fmt(r.saldoAtual))}
        ${kpi('Receitas do mês', fmtC(r.receitas), `Recebido: ${fmtC(r.recebido)}`, fmt(r.receitas))}
        ${kpi('Despesas do mês', fmtC(r.despesas), `Pago: ${fmtC(r.pago)}`, fmt(r.despesas))}
        ${kpi('Resultado previsto', fmtC(r.resultado), `Margem de ${fmtPct(r.margem)}`, fmt(r.resultado))}
      </div>

      <div class="grid-2">
        <section class="card">
          <div class="card-head"><div><h2>Receitas x despesas</h2><p class="sub">Últimos 6 meses · * mês atual previsto</p></div></div>
          <div class="legend"><span><i class="sw s1"></i>Receitas</span><span><i class="sw s2"></i>Despesas</span></div>
          <div class="chart" id="chart-barras"></div>
          <details class="table-toggle">
            <summary>Ver dados em tabela</summary>
            <div class="table-wrap"><table class="table">
              <thead><tr><th>Mês</th><th class="num">Receitas</th><th class="num">Despesas</th><th class="num">Resultado</th></tr></thead>
              <tbody>${serie.map((d) => `<tr><td>${esc(d.label)}</td><td class="num">${fmtC(d.receita)}</td><td class="num">${fmtC(d.despesa)}</td><td class="num">${fmtC(d.receita - d.despesa)}</td></tr>`).join('')}</tbody>
            </table></div>
          </details>
        </section>

        <section class="card">
          <div class="card-head"><div><h2>Alertas de vencimento</h2><p class="sub">Contas vencidas e dos próximos 7 dias</p></div><a class="link" href="#contas">Ver contas</a></div>
          <div class="alert-list">
            ${alertas.length ? alertas.slice(0, 7).map((c) => `
              <button class="alert-item" type="button" data-action="ir-conta" data-tipo="${c.tipo}" data-filtro="${statusConta(c) === 'vencido' ? 'vencido' : 'aberto'}">
                <span class="tag">${c.tipo === 'receber' ? 'Receber' : 'Pagar'}</span>
                <span class="alert-main"><b>${esc(c.parte)}</b><small>${esc(c.descricao)} · ${fmtDia(c.vencimento)}</small></span>
                <span class="alert-side"><b>${fmtC(c.valor)}</b>${badgeConta(c)}</span>
              </button>`).join('') : '<p class="empty">Nenhuma conta vencida ou próxima do vencimento.</p>'}
            ${alertas.length > 7 ? `<p class="sub" style="padding-top:8px">e mais ${alertas.length - 7} conta(s)</p>` : ''}
          </div>
        </section>
      </div>

      <section class="card">
        <div class="card-head"><div><h2>Indicadores x meta</h2><p class="sub">${okCount} de ${inds.length} metas atingidas</p></div><a class="link" href="#metas">Plano de ação</a></div>
        <div class="ind-mini-grid">
          ${inds.map((i) => `
            <div class="ind-mini">
              <div class="ind-mini-top"><span>${esc(i.nome)}</span>${badgeInd(i, true)}</div>
              <div class="ind-mini-val"><b>${fmtInd(i.valor, i.unidade)}</b>meta ${i.sentido === 'menor' ? 'até ' : ''}${fmtInd(i.meta, i.unidade)}</div>
              <div class="progress ${i.ok ? 'good' : 'crit'}"><i style="width:${(i.prog * 100).toFixed(1)}%"></i></div>
            </div>`).join('')}
        </div>
      </section>`;
  }

  const FILTROS = [
    { id: 'todas', label: 'Todas' },
    { id: 'aberto', label: 'Em aberto' },
    { id: 'vencido', label: 'Vencidas' },
    { id: 'pago', label: 'Pagas' }
  ];

  function viewContas() {
    const n = (t) => state.contas.filter((c) => c.tipo === t).length;
    charts.push(renderListaContas);
    return `
      <div class="page-head">
        <div><p class="eyebrow">Controle de títulos</p><h1>Contas a pagar e receber</h1></div>
        <button class="btn primary" type="button" data-action="nova-conta">${ICON.plus}<span>Nova conta</span></button>
      </div>
      <div class="seg" role="tablist">
        <button type="button" role="tab" aria-selected="${ui.tipo === 'receber'}" data-action="tipo" data-v="receber">A receber <span class="count">${n('receber')}</span></button>
        <button type="button" role="tab" aria-selected="${ui.tipo === 'pagar'}" data-action="tipo" data-v="pagar">A pagar <span class="count">${n('pagar')}</span></button>
      </div>
      <div class="toolbar">
        <div class="chips">${FILTROS.map((f) => `<button type="button" class="chip" aria-pressed="${ui.filtro === f.id}" data-action="filtro" data-v="${f.id}">${f.id === 'pago' && ui.tipo === 'receber' ? 'Recebidas' : f.label}</button>`).join('')}</div>
        <label class="search">${ICON.search}<input id="busca" type="search" autocomplete="off" placeholder="Buscar ${ui.tipo === 'receber' ? 'cliente' : 'fornecedor'} ou descrição" value="${esc(ui.busca)}"></label>
      </div>
      <div class="summary" id="resumo-contas"></div>
      <div class="list" id="lista-contas"></div>`;
  }

  function renderListaContas() {
    const lista = $('#lista-contas');
    if (!lista) return;
    const q = norm(ui.busca.trim());
    const itens = state.contas.filter((c) => {
      if (c.tipo !== ui.tipo) return false;
      const s = statusConta(c);
      if (ui.filtro === 'aberto' && c.pago) return false;
      if (ui.filtro === 'vencido' && s !== 'vencido') return false;
      if (ui.filtro === 'pago' && !c.pago) return false;
      return !q || norm(`${c.descricao} ${c.parte} ${c.categoria} ${c.setor}`).includes(q);
    }).sort((a, b) => (a.pago - b.pago) || a.vencimento.localeCompare(b.vencimento));

    const aberto = soma(itens.filter((c) => !c.pago));
    const vencido = soma(itens.filter((c) => statusConta(c) === 'vencido'));
    $('#resumo-contas').innerHTML = `
      <div><span>Total</span><b title="${fmt(soma(itens))}">${fmtC(soma(itens))}</b></div>
      <div><span>Em aberto</span><b title="${fmt(aberto)}">${fmtC(aberto)}</b></div>
      <div><span>Vencido</span><b title="${fmt(vencido)}">${fmtC(vencido)}</b></div>`;

    lista.innerHTML = itens.length ? itens.map((c) => `
      <article class="item${c.pago ? ' is-paid' : ''}" data-action="editar-conta" data-id="${c.id}" tabindex="0">
        <div class="item-main">
          <div class="item-title">${esc(c.parte)}</div>
          <div class="item-meta">${esc(c.descricao)}</div>
          <div class="item-meta">Vence ${fmtData(c.vencimento)}${c.tipo === 'pagar' ? ` · ${esc(c.setor)}` : ''}</div>
        </div>
        <div class="item-side">
          <div class="item-value">${fmt(c.valor)}</div>
          ${badgeConta(c)}
          ${c.pago ? '' : `<button type="button" class="btn small" data-action="baixar" data-id="${c.id}">${ICON.check}${c.tipo === 'receber' ? 'Receber' : 'Pagar'}</button>`}
        </div>
      </article>`).join('') : '<p class="empty">Nenhuma conta encontrada com esses filtros.</p>';
  }

  function viewFluxo() {
    const pts = diasDoMes();
    const h = hojeISO();
    const n = pts.length;
    const hojeIdx = h < pts[0].iso ? -1 : h > pts[n - 1].iso ? n - 1 : pts.findIndex((p) => p.iso === h);
    const ent = soma(pts, (p) => p.ent), sai = soma(pts, (p) => p.sai);
    const menor = pts.reduce((a, p) => (p.saldo < a.saldo ? p : a), pts[0]);
    const final = pts[n - 1].saldo;
    const comMov = pts.filter((p) => p.ent || p.sai);
    charts.push(() => chartSaldo($('#chart-saldo'), pts, hojeIdx));

    return `
      <div class="page-head">
        <div><p class="eyebrow">${mesLongo(state.mesRef)}</p><h1>Fluxo de caixa</h1></div>
      </div>
      <div class="kpis">
        ${kpi('Saldo inicial', fmtC(state.saldoInicial), `Em 01/${state.mesRef.slice(5, 7)}`, fmt(state.saldoInicial))}
        ${kpi('Entradas previstas', fmtC(ent), 'Contas a receber do mês', fmt(ent))}
        ${kpi('Saídas previstas', fmtC(sai), 'Contas a pagar do mês', fmt(sai))}
        ${kpi('Saldo final previsto', fmtC(final), `Variação de ${fmtC(final - state.saldoInicial)}`, fmt(final))}
      </div>

      <section class="card" style="margin-top:14px">
        <div class="card-head"><div><h2>Saldo de caixa dia a dia</h2><p class="sub">Calculado pela data de vencimento das contas</p></div></div>
        <div class="legend"><span><i class="sw solid"></i>Até hoje</span><span><i class="sw dash"></i>Projeção</span></div>
        <div class="chart" id="chart-saldo"></div>
        <div class="callout">${ICON.info}<span>Menor saldo previsto no mês: <b>${fmt0(menor.saldo)}</b> em ${fmtData(menor.iso)}. ${menor.saldo >= 0 ? 'O caixa cobre todos os compromissos, inclusive a folha de pagamento.' : 'Atenção: o caixa fica negativo — antecipe recebimentos ou renegocie pagamentos.'}</span></div>
      </section>

      <section class="card">
        <div class="card-head"><div><h2>Movimentação por dia</h2><p class="sub">${comMov.length} dias com lançamentos</p></div></div>
        <div class="table-wrap"><table class="table">
          <thead><tr><th>Data</th><th class="num">Entradas</th><th class="num">Saídas</th><th class="num">Saldo</th></tr></thead>
          <tbody>
            <tr><td class="muted">Saldo inicial</td><td></td><td></td><td class="num">${fmt0(state.saldoInicial)}</td></tr>
            ${comMov.map((p) => `
              <tr class="${p.iso === h ? 'today' : ''}">
                <td><b>${fmtDia(p.iso)}</b><div class="muted small">${p.itens.length} lançamento${p.itens.length > 1 ? 's' : ''}</div></td>
                <td class="num">${p.ent ? `+${fmt0(p.ent)}` : '—'}</td>
                <td class="num">${p.sai ? `−${fmt0(p.sai)}` : '—'}</td>
                <td class="num${p.saldo < 0 ? ' neg' : ''}"><b>${fmt0(p.saldo)}</b></td>
              </tr>`).join('')}
          </tbody>
        </table></div>
      </section>`;
  }

  function statusOrc(pct) {
    if (pct > 100) return `<span class="badge crit">${ICON.alert}Acima do orçado</span>`;
    if (pct >= 95) return `<span class="badge warn">${ICON.clock}No limite</span>`;
    return `<span class="badge good">${ICON.check}Dentro do orçado</span>`;
  }

  function viewOrcamento() {
    const tot = soma(state.orcamento, (o) => o.orcado), real = soma(state.orcamento, (o) => o.realizado);
    const linhas = state.orcamento
      .map((o, i) => ({ ...o, i, pct: o.orcado ? o.realizado / o.orcado * 100 : 0 }))
      .sort((a, b) => b.pct - a.pct);
    const acima = linhas.filter((l) => l.pct > 100);

    return `
      <div class="page-head">
        <div><p class="eyebrow">${mesLongo(state.mesRef)}</p><h1>Orçamento por setor</h1></div>
      </div>
      <div class="kpis three">
        ${kpi('Orçado', fmtC(tot), '9 setores', fmt(tot))}
        ${kpi('Realizado', fmtC(real), `${fmtPct(tot ? real / tot * 100 : 0)} do orçado`, fmt(real))}
        ${kpi('Diferença', fmtC(tot - real), tot - real >= 0 ? 'Economia' : 'Estouro', fmt(tot - real))}
      </div>
      ${acima.length ? `<div class="callout">${ICON.alert}<span><b>${acima.length} setor${acima.length > 1 ? 'es' : ''} acima do orçado:</b> ${acima.map((a) => `${esc(a.setor)} (+${fmtPct(a.pct - 100)})`).join(', ')}. As ações corretivas estão em Metas.</span></div>` : ''}
      <section class="card" style="margin-top:14px">
        <div class="card-head"><div><h2>Realizado x orçado</h2><p class="sub">Toque em um setor para atualizar os valores</p></div></div>
        ${linhas.map((l) => {
          const over = l.realizado > l.orcado;
          const base = Math.max(l.orcado, l.realizado) || 1;
          const w1 = (over ? l.orcado : l.realizado) / base * 100;
          const w2 = over ? (l.realizado - l.orcado) / base * 100 : 0;
          return `
            <div class="orc-row" data-action="editar-setor" data-i="${l.i}" tabindex="0">
              <div class="orc-top"><b>${esc(l.setor)}</b>${statusOrc(l.pct)}</div>
              <div class="progress"><i style="width:${w1.toFixed(1)}%"></i>${over ? `<i class="over" style="width:${w2.toFixed(1)}%"></i>` : ''}</div>
              <div class="orc-meta"><span>${fmt0(l.realizado)} de ${fmt0(l.orcado)}</span><b>${fmtPct(l.pct)}</b></div>
            </div>`;
        }).join('')}
      </section>`;
  }

  function classeStatus(s) {
    return s === 'Concluído' ? 's-ok' : s === 'Em andamento' ? 's-and' : 's-nao';
  }

  function viewMetas() {
    const inds = listaIndicadores();
    const atencao = inds.filter((i) => !i.ok), positivos = inds.filter((i) => i.ok);
    const card = (i) => `
      <article class="ind" data-action="editar-ind" data-id="${i.id}" tabindex="0">
        <div class="ind-top"><span class="ind-name">${esc(i.nome)}</span>${badgeInd(i)}</div>
        <div class="ind-value"><b>${fmtInd(i.valor, i.unidade)}</b><span>meta ${i.sentido === 'menor' ? 'até ' : ''}${fmtInd(i.meta, i.unidade)}</span></div>
        <div class="progress ${i.ok ? 'good' : 'crit'}"><i style="width:${(i.prog * 100).toFixed(1)}%"></i></div>
        <div class="ind-note">${i.auto ? 'Calculado automaticamente pelas contas do mês' : esc(i.nota || '')}</div>
      </article>`;
    const concl = state.acoes.filter((a) => a.status === 'Concluído').length;

    return `
      <div class="page-head">
        <div><p class="eyebrow">Resultados e estratégia</p><h1>Metas e plano de ação</h1></div>
      </div>

      <h2 class="section-title">Pontos de atenção <span class="count">${atencao.length}</span></h2>
      <div class="ind-grid">${atencao.map(card).join('') || '<p class="empty">Todas as metas estão sendo atingidas.</p>'}</div>

      <section class="card" style="margin-top:22px">
        <div class="card-head">
          <div><h2>Plano de ação</h2><p class="sub">${concl} de ${state.acoes.length} ações concluídas · o quê, quem, quando e quanto</p></div>
          <button class="btn primary" type="button" data-action="nova-acao">${ICON.plus}<span>Nova ação</span></button>
        </div>
        <div class="acoes">
          ${state.acoes.map((a) => `
            <article class="acao" data-action="editar-acao" data-id="${a.id}" tabindex="0">
              <div class="acao-top">
                <span class="tag">${esc(a.setor)}</span>
                <select class="status-select ${classeStatus(a.status)}" data-change="status-acao" data-id="${a.id}" aria-label="Status da ação">
                  ${STATUS_ACAO.map((s) => `<option${s === a.status ? ' selected' : ''}>${s}</option>`).join('')}
                </select>
              </div>
              <h3>${esc(a.problema)}</h3>
              <p>${esc(a.acao)}</p>
              <dl class="acao-meta">
                <div><dt>Quem</dt><dd>${esc(a.responsavel)}</dd></div>
                <div><dt>Até</dt><dd>${fmtData(a.prazo)}</dd></div>
                <div><dt>Custo</dt><dd>${a.custo ? fmt0(a.custo) : 'Sem custo'}</dd></div>
              </dl>
            </article>`).join('')}
        </div>
      </section>

      <h2 class="section-title">Destaques positivos <span class="count">${positivos.length}</span></h2>
      <div class="ind-grid">${positivos.map(card).join('')}</div>`;
  }

  /* ---------- Início: portfólio da empresa ---------- */
  const HERO_ART = `
    <svg viewBox="0 0 240 180" fill="none" aria-hidden="true">
      <path d="M0 104 L92 92" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".9"/>
      <path d="M128 88 L240 40" stroke="#86b6ef" stroke-width="6" stroke-linecap="round"/>
      <path d="M130 94 L240 92" stroke="#f5a27a" stroke-width="6" stroke-linecap="round"/>
      <path d="M128 100 L240 144" stroke="#6fdcb4" stroke-width="6" stroke-linecap="round"/>
      <path d="M110 20 L50 150 H170 Z" fill="rgba(255,255,255,.10)" stroke="#fff" stroke-width="5" stroke-linejoin="round"/>
      <path d="M110 58 L78 128 H142 Z" fill="rgba(255,255,255,.06)"/>
      <text x="236" y="30" text-anchor="end" fill="#fff" opacity=".85" font-size="11" font-weight="700">CURTO</text>
      <text x="236" y="84" text-anchor="end" fill="#fff" opacity=".85" font-size="11" font-weight="700">MÉDIO</text>
      <text x="236" y="166" text-anchor="end" fill="#fff" opacity=".85" font-size="11" font-weight="700">LONGO</text>
    </svg>`;

  function viewInicio() {
    const P = DATA.portfolio;
    const maxPct = Math.max(...P.receitaServicos.map((x) => x.pct));
    const totalClientes = soma(P.segmentos, (s) => s.clientes);
    const fat = state.historico.find((h) => h.mes === '2026-08');
    const fatAgo = fat ? fat.receita : 4700000;

    return `
      <section class="hero">
        <div>
          <p class="hero-eyebrow">Prisma Gestão Administrativa Ltda.</p>
          <h1>A rotina administrativa da sua empresa, feita com precisão e no prazo.</h1>
          <p class="hero-lead">${esc(P.lead)}</p>
          <div class="hero-chips">${P.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div>
          <div class="hero-cta">
            <a class="btn light" href="#desafios">${ICON.flag}Desafios estratégicos</a>
            <a class="btn outline-light" href="#painel">${ICON.home}Painel financeiro</a>
          </div>
        </div>
        <div class="hero-art">${HERO_ART}</div>
      </section>

      <div class="stats">${P.numeros.map((n) => `<div class="stat"><b>${esc(n.valor)}</b><span>${esc(n.rotulo)}</span></div>`).join('')}</div>

      <h2 class="section-title">Quem somos</h2>
      <div class="grid-2 even" style="margin-top:0">
        <section class="card">
          <p class="lead-text">${esc(P.quemSomos)}</p>
          <div class="units">
            ${P.unidades.map((u) => `
              <div class="unit">${ICON.pin}<div><b>${esc(u.cidade)}</b><span>${esc(u.tipo)}</span><small>${u.colab} colaboradores · ${u.clientes} clientes</small></div></div>`).join('')}
          </div>
        </section>
        <section class="mvv">
          <div class="mvv-item"><span class="mvv-label">Missão</span><p>${esc(P.missao)}</p></div>
          <div class="mvv-item"><span class="mvv-label">Visão</span><p>${esc(P.visao)}</p></div>
          <div class="mvv-item"><span class="mvv-label">Valores</span><div class="value-chips">${P.valores.map((v) => `<span>${esc(v)}</span>`).join('')}</div></div>
        </section>
      </div>

      <h2 class="section-title">O que fazemos</h2>
      <div class="services">
        ${P.servicos.map((s) => `
          <article class="service">
            <div class="service-icon">${ICON[s.icon]}</div>
            <div>
              <h3>${esc(s.nome)}${s.novo ? '<span class="badge brand">Novo</span>' : ''}</h3>
              <p>${esc(s.descricao)}</p>
              <div class="service-data">${s.dados.map((d) => `<span><b>${esc(d[0])}</b> ${esc(d[1])}</span>`).join('')}</div>
            </div>
          </article>`).join('')}
      </div>

      <div class="grid-2 even">
        <section class="card">
          <div class="card-head"><div><h2>Receita por linha de serviço</h2><p class="sub">Agosto de 2026 · faturamento de ${fmtC(fatAgo)}</p></div></div>
          <div class="hbars">
            ${P.receitaServicos.map((x) => `
              <div class="hbar" title="${esc(x.nome)}: ${fmt0(x.pct / 100 * fatAgo)}">
                <div class="hbar-top"><span>${esc(x.nome)}</span><b>${x.pct}%</b></div>
                <div class="hbar-track"><i style="width:${(x.pct / maxPct * 100).toFixed(1)}%"></i></div>
                <small>${fmtC(x.pct / 100 * fatAgo)} no mês</small>
              </div>`).join('')}
          </div>
        </section>
        <section class="card">
          <div class="card-head"><div><h2>Segmentos atendidos</h2><p class="sub">${totalClientes} clientes ativos e 1 em implantação</p></div></div>
          <div class="segments">
            ${P.segmentos.map((s) => `
              <div class="segment"><b>${s.clientes}</b><span>${esc(s.nome)}</span><small>${esc(s.texto)}${s.extra ? ` · ${esc(s.extra)}` : ''}</small></div>`).join('')}
          </div>
          <div class="progress" style="margin-top:12px;height:10px" title="Participação de cada segmento na carteira">
            ${P.segmentos.map((s, i) => `<i style="width:${(s.clientes / totalClientes * 100).toFixed(1)}%;background:var(--series-${i + 1})"></i>`).join('')}
          </div>
          <div class="legend" style="margin-top:8px">${P.segmentos.map((s, i) => `<span><i class="sw" style="background:var(--series-${i + 1})"></i>${esc(s.nome)} ${Math.round(s.clientes / totalClientes * 100)}%</span>`).join('')}</div>
          <h3 class="mini-title">Alguns clientes</h3>
          <div class="clients">${P.clientes.map((c) => `<span class="client">${esc(c.nome)}${c.novo ? '<em>novo</em>' : ''}</span>`).join('')}</div>
        </section>
      </div>

      <h2 class="section-title">Como trabalhamos</h2>
      <ol class="steps">
        ${P.processo.map((s, i) => `<li><span class="step-n">${i + 1}</span><div><b>${esc(s.titulo)}</b><p>${esc(s.texto)}</p></div></li>`).join('')}
      </ol>

      <div class="grid-2 even">
        <section class="card">
          <div class="card-head"><div><h2>Nossa trajetória</h2><p class="sub">De 12 para 180 colaboradores em 10 anos</p></div></div>
          <ol class="history">${P.trajetoria.map((t) => `<li><span class="year">${t.ano}</span><p>${esc(t.texto)}</p></li>`).join('')}</ol>
        </section>
        <section class="card">
          <div class="card-head"><div><h2>Estrutura organizacional</h2><p class="sub">9 setores · ${soma(P.setores, (s) => s.pessoas)} colaboradores · toque para ver os cargos</p></div></div>
          <div class="org">
            ${P.setores.map((s) => `
              <details class="org-item">
                <summary><b>${esc(s.nome)}</b><span>${s.pessoas} pessoas</span></summary>
                <div class="org-roles">${s.cargos.map((c) => `<span>${esc(c)}</span>`).join('')}</div>
              </details>`).join('')}
          </div>
        </section>
      </div>

      <p class="disclaimer">Prisma BPO é uma empresa fictícia criada para atividade acadêmica. Nomes, CNPJ e números são simulados.</p>`;
  }

  /* ---------- Gestão de desafios ---------- */
  function fmtUn(v, u) {
    if (u === '%') return fmtPct(v);
    if (u === 'R$') return fmtC(v);
    if (u === 'h') return `${num(v, 0)} h`;
    if (u === 'clientes') return num(v, 0);
    return num(v, 1);
  }
  const progKpi = (k) => (k.meta === k.base ? 1 : clamp((k.atual - k.base) / (k.meta - k.base), 0, 1));
  const nivelRisco = (v) => (/^Alt/.test(v) ? 'crit' : /^M[ée]d/.test(v) ? 'warn' : 'good');
  const mesAno = (iso) => `${MESES[Number(iso.slice(5, 7)) - 1]}/${iso.slice(0, 4)}`;

  function infoDesafio(d) {
    const h = hojeISO();
    const total = d.marcos.length;
    const concl = d.marcos.filter((m) => m.status === 'Concluído').length;
    const atrasados = d.marcos.filter((m) => m.status !== 'Concluído' && m.data < h).length;
    const tempo = clamp((Date.parse(h) - Date.parse(d.inicio)) / (Date.parse(d.prazo) - Date.parse(d.inicio)), 0, 1);
    const kpiProg = d.kpis.length ? soma(d.kpis, progKpi) / d.kpis.length : 0;
    const status = concl === total
      ? { cls: 'good', txt: 'Concluído', icon: 'check' }
      : atrasados === 0 ? { cls: 'good', txt: 'No prazo', icon: 'check' }
        : atrasados === 1 ? { cls: 'warn', txt: 'Atenção', icon: 'clock' }
          : { cls: 'crit', txt: 'Atrasado', icon: 'alert' };
    return { total, concl, atrasados, tempo, kpiProg, prog: total ? concl / total : 0, status, dias: diffDias(h, d.prazo) };
  }
  const badgeDesafio = (i) => `<span class="badge ${i.status.cls}">${ICON[i.status.icon]}${i.status.txt}</span>`;
  const barra = (label, valor, cls) => `
    <div><div class="bar-label"><span>${label}</span><b>${Math.round(valor * 100)}%</b></div>
    <div class="progress ${cls}"><i style="width:${(valor * 100).toFixed(1)}%"></i></div></div>`;

  function viewDesafios(param) {
    const lista = state.desafios || [];
    const d = param && lista.find((x) => x.id === param);
    if (d) return viewDesafio(d, lista);

    const infos = lista.map((x) => ({ d: x, i: infoDesafio(x) }));
    const totalMarcos = soma(infos, (x) => x.i.total), marcosOk = soma(infos, (x) => x.i.concl);
    const previsto = soma(lista, (x) => x.investimento.previsto), executado = soma(lista, (x) => x.investimento.executado);

    const ini = Date.parse('2026-09-01'), fim = Date.parse('2031-01-01');
    const pos = (iso) => clamp((Date.parse(iso) - ini) / (fim - ini) * 100, 0, 100);
    const anos = ['2027-01-01', '2028-01-01', '2029-01-01', '2030-01-01'];
    const hojePos = pos(hojeISO());
    const R = DATA.reuniao;

    return `
      <div class="page-head">
        <div><p class="eyebrow">Estratégia 2026–2030</p><h1>Gestão de desafios</h1></div>
      </div>
      <div class="kpis">
        ${kpi('Desafios ativos', String(lista.length), 'Curto, médio e longo prazo')}
        ${kpi('Marcos concluídos', `${marcosOk} de ${totalMarcos}`, `${Math.round(totalMarcos ? marcosOk / totalMarcos * 100 : 0)}% do plano`)}
        ${kpi('Investimento previsto', fmtC(previsto), `Executado: ${fmtC(executado)}`, fmt(previsto))}
        ${kpi('Rumo às metas', `${Math.round(infos.length ? soma(infos, (x) => x.i.kpiProg) / infos.length * 100 : 0)}%`, 'Média dos 3 desafios')}
      </div>

      <section class="card" style="margin-top:14px">
        <div class="card-head"><div><h2>Linha do tempo dos desafios</h2><p class="sub">Da largada em setembro de 2026 até a Visão 2030 · toque para abrir</p></div></div>
        <div class="roadmap">
          <div class="rm-axis"><span></span><div class="rm-years">${anos.map((a) => `<span style="left:${pos(a)}%">${a.slice(0, 4)}</span>`).join('')}</div></div>
          ${infos.map(({ d: x, i }) => `
            <a class="rm-row ${x.horizonte}" href="#desafios/${x.id}">
              <span class="rm-label"><b>${x.rotulo}</b><small>até ${mesAno(x.prazo)}</small></span>
              <div class="rm-track">
                ${anos.map((a) => `<span class="rm-tick" style="left:${pos(a)}%"></span>`).join('')}
                <div class="rm-bar" style="left:${pos(x.inicio)}%;width:${(pos(x.prazo) - pos(x.inicio)).toFixed(2)}%" title="${esc(x.titulo)}: ${i.concl} de ${i.total} marcos concluídos"><i style="width:${(i.prog * 100).toFixed(1)}%"></i></div>
                <span class="rm-today" style="left:${hojePos}%"></span>
              </div>
            </a>`).join('')}
          <div class="rm-note"><span><i class="k-done"></i>Marcos concluídos</span><span><i class="k-plan"></i>Período planejado</span><span><i class="k-today"></i>Hoje</span></div>
        </div>
      </section>

      <div class="desafios">
        ${infos.map(({ d: x, i }) => {
          const k = x.kpis[0];
          return `
            <a class="desafio-card ${x.horizonte}" href="#desafios/${x.id}">
              <div class="dc-top"><span class="horizon">${x.rotulo} · ${x.periodo}</span>${badgeDesafio(i)}</div>
              <h3>${esc(x.titulo)}</h3>
              <p>${esc(x.subtitulo)}</p>
              <div class="dc-kpi"><span>${esc(k.nome)}</span><div>${fmtUn(k.base, k.unidade)} → <strong>${fmtUn(k.atual, k.unidade)}</strong> → meta ${fmtUn(k.meta, k.unidade)}</div></div>
              <div><div class="bar-label"><span>Marcos concluídos</span><b>${i.concl} de ${i.total}</b></div><div class="progress tint"><i style="width:${(i.prog * 100).toFixed(1)}%"></i></div></div>
              <div class="dc-foot"><span>${ICON.calendar}até ${fmtData(x.prazo)}</span><span>${ICON.users}${esc(x.lider)}</span></div>
            </a>`;
        }).join('')}
      </div>

      <section class="card" style="margin-top:14px">
        <div class="card-head"><div><h2>Roteiro da reunião online</h2><p class="sub">${esc(R.titulo)} · ${esc(R.quando)}</p></div></div>
        <ol class="agenda">
          ${R.pauta.map((p) => `
            <li><a href="${p.link}"><span class="agenda-time">${p.min} min</span><span class="agenda-main"><b>${esc(p.titulo)}</b><small>${esc(p.texto)}</small></span>${ICON.chevron}</a></li>`).join('')}
        </ol>
      </section>`;
  }

  function viewDesafio(d, lista) {
    const i = infoDesafio(d);
    const h = hojeISO();
    const inv = d.investimento;
    const pctExec = inv.previsto ? clamp(inv.executado / inv.previsto, 0, 1) : 0;
    const payback = d.retorno.valor ? inv.previsto / d.retorno.valor : 0;
    const temPeso = d.causas.some((c) => c.peso);
    const maxPeso = Math.max(1, ...d.causas.map((c) => c.peso || 0));

    return `
      <a class="back" href="#desafios">${ICON.back}Todos os desafios</a>
      <div class="seg three">
        ${lista.map((x) => `<a class="${x.horizonte}" href="#desafios/${x.id}" aria-selected="${x.id === d.id}">${x.rotulo}</a>`).join('')}
      </div>

      <section class="dhero ${d.horizonte}">
        <div class="dc-top"><span class="horizon">${d.rotulo} · ${d.periodo}</span>${badgeDesafio(i)}</div>
        <h1>${esc(d.titulo)}</h1>
        <p>${esc(d.subtitulo)}</p>
        <div class="dhero-meta">
          <div><span>Líder</span><b>${esc(d.lider)}</b></div>
          <div><span>Patrocinador</span><b>${esc(d.patrocinador)}</b></div>
          <div><span>Período</span><b>${fmtData(d.inicio)} a ${fmtData(d.prazo)}</b></div>
          <div><span>Prazo</span><b>${i.dias > 0 ? `Faltam ${num(i.dias, 0)} dias` : i.dias === 0 ? 'Termina hoje' : 'Prazo encerrado'}</b></div>
        </div>
        <div class="dhero-bars">
          ${barra('Tempo decorrido', i.tempo, 'time')}
          ${barra(`Marcos concluídos (${i.concl} de ${i.total})`, i.prog, 'tint')}
          ${barra('Indicadores rumo à meta', i.kpiProg, 'tint')}
        </div>
      </section>

      <div class="detail-grid ${d.horizonte}">
        <div class="col">
          <section class="card">
            <h2 class="h">O problema</h2>
            <p class="body-text">${esc(d.problema)}</p>
            <div class="facts">${d.fatos.map((f) => `<div class="fact"><b title="${esc(f.valor)}">${esc(f.valor)}</b><span>${esc(f.rotulo)}</span></div>`).join('')}</div>
          </section>

          <section class="card">
            <h2 class="h">${esc(d.causasTitulo)}</h2>
            <ul class="causes">
              ${d.causas.map((c) => temPeso ? `
                <li class="cause">
                  <div class="cause-top"><span>${esc(c.texto)}</span><b>${c.peso}%</b></div>
                  <div class="hbar-track"><i style="width:${(c.peso / maxPeso * 100).toFixed(1)}%"></i></div>
                </li>` : `<li class="cause-plain">${ICON.alert}<span>${esc(c.texto)}</span></li>`).join('')}
            </ul>
            ${temPeso ? `<p class="hint" style="margin-top:10px">As duas primeiras causas explicam ${d.causas.slice(0, 2).reduce((a, c) => a + c.peso, 0)}% dos erros: atacá-las primeiro traz o maior resultado.</p>` : ''}
          </section>

          <section class="card objective">
            <h2 class="h">Objetivo SMART</h2>
            <p>${esc(d.objetivo)}</p>
            <div class="smart"><span>Específico</span><span>Mensurável</span><span>Atingível</span><span>Relevante</span><span>Com prazo</span></div>
          </section>

          <section class="card">
            <h2 class="h">Plano e marcos</h2>
            <ol class="milestones">
              ${d.marcos.map((m, idx) => {
                const late = m.status !== 'Concluído' && m.data < h;
                const cls = m.status === 'Concluído' ? 'done' : late ? 'late' : m.status === 'Em andamento' ? 'doing' : '';
                const icon = m.status === 'Concluído' ? ICON.check : late ? ICON.alert : m.status === 'Em andamento' ? ICON.clock : ICON.circle;
                return `
                  <li class="ms ${cls}">
                    <span class="ms-dot">${icon}</span>
                    <div class="ms-body">
                      <b>${esc(m.titulo)}</b>
                      <small>${fmtData(m.data)} · ${esc(m.resp)}</small>
                      <div class="ms-actions">
                        <select class="status-select ${classeStatus(m.status)}" data-change="status-marco" data-desafio="${d.id}" data-i="${idx}" aria-label="Status do marco">${options(STATUS_MARCO, m.status)}</select>
                        ${late ? `<span class="badge crit">${ICON.alert}Atrasado</span>` : ''}
                      </div>
                    </div>
                  </li>`;
              }).join('')}
            </ol>
          </section>
        </div>

        <div class="col">
          <section class="card">
            <h2 class="h">Indicadores do desafio</h2>
            <div class="dkpis">
              ${d.kpis.map((k, idx) => {
                const p = progKpi(k);
                return `
                  <div class="dkpi" data-action="editar-kpi-desafio" data-desafio="${d.id}" data-i="${idx}" tabindex="0" title="Toque para atualizar">
                    <div class="dkpi-top"><span>${esc(k.nome)}</span><b>${Math.round(p * 100)}% do caminho</b></div>
                    <div class="dkpi-val"><strong>${fmtUn(k.atual, k.unidade)}</strong><span>hoje · meta ${fmtUn(k.meta, k.unidade)}</span></div>
                    <div class="progress tint"><i style="width:${(p * 100).toFixed(1)}%"></i></div>
                    <div class="dkpi-scale"><span>Início: ${fmtUn(k.base, k.unidade)}</span><span>Meta: ${fmtUn(k.meta, k.unidade)}</span></div>
                  </div>`;
              }).join('')}
            </div>
          </section>

          <section class="card">
            <h2 class="h">Investimento e retorno</h2>
            <div class="inv-top">
              <div><span>Previsto</span><b title="${fmt(inv.previsto)}">${fmtC(inv.previsto)}</b></div>
              <div><span>Executado</span><b title="${fmt(inv.executado)}">${fmtC(inv.executado)}</b></div>
            </div>
            <div class="progress tint"><i style="width:${(pctExec * 100).toFixed(1)}%"></i></div>
            <p class="hint" style="margin-top:6px">${fmtPct(pctExec * 100)} do investimento já executado</p>
            <ul class="inv-items">${inv.itens.map((it) => `<li><span>${esc(it[0])}</span><b>${fmtC(it[1])}</b></li>`).join('')}</ul>
            <div class="return">
              <span>${esc(d.retorno.rotulo)}</span>
              <b>${fmtC(d.retorno.valor)}</b>
              <small>${esc(d.retorno.nota)} · o investimento se paga em cerca de ${num(Math.max(payback, 0.1), 1)} ${payback <= 1 ? 'mês' : 'meses'}${d.id === 'curto' ? '' : ' após a implantação completa'}</small>
            </div>
          </section>

          <section class="card">
            <h2 class="h">Riscos e como evitar</h2>
            <ul class="risks">
              ${d.riscos.map((r) => `
                <li class="risk">
                  <b>${esc(r.texto)}</b>
                  <div class="risk-tags"><span class="badge ${nivelRisco(r.prob)}">Probabilidade ${esc(r.prob.toLowerCase())}</span><span class="badge ${nivelRisco(r.impacto)}">Impacto ${esc(r.impacto.toLowerCase())}</span></div>
                  <p>${ICON.shield}<span>${esc(r.mitigacao)}</span></p>
                </li>`).join('')}
            </ul>
          </section>

          <section class="card">
            <h2 class="h">O que já conquistamos</h2>
            <ul class="wins">${d.conquistas.map((c) => `<li>${ICON.star}<span>${esc(c)}</span></li>`).join('')}</ul>
          </section>

          <section class="card">
            <h2 class="h">Setores envolvidos</h2>
            <div class="chips-wrap">${d.setores.map((s) => `<span class="tag">${esc(s)}</span>`).join('')}</div>
          </section>
        </div>
      </div>`;
  }

  const VIEWS = { inicio: viewInicio, painel: viewPainel, contas: viewContas, fluxo: viewFluxo, orcamento: viewOrcamento, metas: viewMetas, desafios: viewDesafios };

  /* ---------- Modal ---------- */
  let modalCfg = null;
  function openModal(cfg) {
    modalCfg = cfg;
    $('#modal-title').textContent = cfg.title;
    $('#modal-body').innerHTML = cfg.body;
    $('#modal-submit').hidden = !cfg.onSubmit;
    $('#modal-submit').textContent = cfg.submitLabel || 'Salvar';
    $('#modal-delete').hidden = !cfg.onDelete;
    $('#modal-cancel').textContent = cfg.onSubmit ? 'Cancelar' : 'Fechar';
    $('#modal').hidden = false;
    document.body.classList.add('modal-open');
    hideTip();
    if (cfg.onOpen) cfg.onOpen($('#modal-form'));
  }
  function closeModal() {
    $('#modal').hidden = true;
    document.body.classList.remove('modal-open');
    modalCfg = null;
  }
  $('#modal-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!modalCfg || !modalCfg.onSubmit) return;
    if (modalCfg.onSubmit(new FormData(e.target), e.target) !== false) closeModal();
  });
  $('#modal-delete').addEventListener('click', () => {
    if (modalCfg && modalCfg.onDelete && confirm('Excluir este registro? Essa ação não pode ser desfeita.')) {
      modalCfg.onDelete();
      closeModal();
    }
  });
  $('#modal').addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });

  const options = (list, sel) => list.map((o) => `<option${o === sel ? ' selected' : ''}>${esc(o)}</option>`).join('');

  function formConta(conta) {
    const c = conta || { tipo: ui.tipo, descricao: '', parte: '', categoria: CATEGORIAS[ui.tipo][0], setor: 'Financeiro', valor: '', vencimento: hojeISO(), pago: false };
    openModal({
      title: conta ? 'Editar conta' : 'Nova conta',
      body: `
        <div class="seg">
          <label><input type="radio" name="tipo" value="receber"${c.tipo === 'receber' ? ' checked' : ''}>A receber</label>
          <label><input type="radio" name="tipo" value="pagar"${c.tipo === 'pagar' ? ' checked' : ''}>A pagar</label>
        </div>
        <label class="field"><span id="lbl-parte">Cliente</span><input name="parte" required maxlength="80" value="${esc(c.parte)}"></label>
        <label class="field">Descrição<input name="descricao" required maxlength="100" value="${esc(c.descricao)}"></label>
        <div class="row2">
          <label class="field">Valor (R$)<input name="valor" type="number" inputmode="decimal" min="0.01" step="0.01" required value="${c.valor}"></label>
          <label class="field">Vencimento<input name="vencimento" type="date" required value="${c.vencimento}"></label>
        </div>
        <label class="field">Categoria<select name="categoria"></select></label>
        <label class="field" id="campo-setor">Setor responsável<select name="setor">${options(SETORES, c.setor)}</select></label>
        <label class="check"><input type="checkbox" name="pago"${c.pago ? ' checked' : ''}><span id="lbl-pago">Já foi recebida</span></label>`,
      onOpen(form) {
        const sync = (keepCat) => {
          const tipo = form.tipo.value;
          const cat = form.categoria;
          const atual = keepCat ? c.categoria : cat.value;
          cat.innerHTML = options(CATEGORIAS[tipo], CATEGORIAS[tipo].includes(atual) ? atual : CATEGORIAS[tipo][0]);
          $('#lbl-parte').textContent = tipo === 'receber' ? 'Cliente' : 'Fornecedor';
          $('#lbl-pago').textContent = tipo === 'receber' ? 'Já foi recebida' : 'Já foi paga';
          $('#campo-setor').hidden = tipo === 'receber';
        };
        sync(true);
        form.querySelectorAll('input[name=tipo]').forEach((r) => r.addEventListener('change', () => sync(false)));
      },
      onSubmit(fd) {
        const tipo = fd.get('tipo');
        const dados = {
          tipo,
          parte: fd.get('parte').trim(),
          descricao: fd.get('descricao').trim(),
          valor: Math.round(parseFloat(fd.get('valor')) * 100) / 100,
          vencimento: fd.get('vencimento'),
          categoria: fd.get('categoria'),
          setor: tipo === 'receber' ? 'Comercial e Relacionamento' : fd.get('setor'),
          pago: fd.get('pago') === 'on'
        };
        if (conta) {
          dados.dataPagamento = dados.pago ? (conta.dataPagamento || hojeISO()) : null;
          Object.assign(conta, dados);
        } else {
          state.contas.push({ id: uid(), ...dados, dataPagamento: dados.pago ? hojeISO() : null });
          ui.tipo = tipo;
        }
        save();
        render();
        toast(conta ? 'Conta atualizada' : 'Conta cadastrada');
      },
      onDelete: conta ? () => {
        state.contas = state.contas.filter((x) => x.id !== conta.id);
        save();
        render();
        toast('Conta excluída');
      } : null
    });
  }

  function formSetor(i) {
    const o = state.orcamento[i];
    openModal({
      title: o.setor,
      body: `
        <div class="row2">
          <label class="field">Orçado (R$)<input name="orcado" type="number" inputmode="decimal" min="0" step="0.01" required value="${o.orcado}"></label>
          <label class="field">Realizado (R$)<input name="realizado" type="number" inputmode="decimal" min="0" step="0.01" required value="${o.realizado}"></label>
        </div>
        <p class="hint">Custos diretos do setor no mês (pessoal, serviços e despesas próprias).</p>`,
      onSubmit(fd) {
        o.orcado = parseFloat(fd.get('orcado')) || 0;
        o.realizado = parseFloat(fd.get('realizado')) || 0;
        save();
        render();
        toast('Orçamento atualizado');
      }
    });
  }

  function formIndicador(id) {
    const ind = state.indicadores.find((i) => i.id === id);
    if (!ind) return;
    const valor = valorIndicador(ind, resumoMes());
    openModal({
      title: ind.nome,
      body: `
        <div class="row2">
          <label class="field">Resultado atual (${ind.unidade})<input name="atual" type="number" inputmode="decimal" step="0.1" value="${num(valor, 1).replace(/\./g, '').replace(',', '.')}"${ind.auto ? ' disabled' : ' required'}></label>
          <label class="field">Meta (${ind.unidade})<input name="meta" type="number" inputmode="decimal" step="0.1" required value="${ind.meta}"></label>
        </div>
        <p class="hint">${ind.sentido === 'maior' ? 'Quanto maior, melhor.' : 'Quanto menor, melhor.'}${ind.auto ? ' O resultado é calculado automaticamente a partir das contas do mês.' : ''}</p>
        ${ind.auto ? '' : `<label class="field">Observação<input name="nota" maxlength="90" value="${esc(ind.nota || '')}"></label>`}`,
      onSubmit(fd) {
        if (!ind.auto) {
          ind.atual = parseFloat(fd.get('atual')) || 0;
          ind.nota = (fd.get('nota') || '').trim();
        }
        ind.meta = parseFloat(fd.get('meta')) || 0;
        save();
        render();
        toast('Indicador atualizado');
      }
    });
  }

  function formAcao(acao) {
    const a = acao || { problema: '', acao: '', responsavel: '', setor: SETORES[0], prazo: hojeISO(), custo: 0, status: 'Não iniciado' };
    openModal({
      title: acao ? 'Editar ação' : 'Nova ação',
      body: `
        <label class="field">Problema (por quê?)<input name="problema" required maxlength="80" value="${esc(a.problema)}"></label>
        <label class="field">Ação (o quê e como?)<textarea name="acao" required maxlength="240">${esc(a.acao)}</textarea></label>
        <label class="field">Responsável (quem?)<input name="responsavel" required maxlength="60" value="${esc(a.responsavel)}"></label>
        <label class="field">Setor (onde?)<select name="setor">${options(SETORES, a.setor)}</select></label>
        <div class="row2">
          <label class="field">Prazo (quando?)<input name="prazo" type="date" required value="${a.prazo}"></label>
          <label class="field">Custo (quanto?)<input name="custo" type="number" inputmode="decimal" min="0" step="0.01" value="${a.custo}"></label>
        </div>
        <label class="field">Status<select name="status">${options(STATUS_ACAO, a.status)}</select></label>`,
      onSubmit(fd) {
        const dados = {
          problema: fd.get('problema').trim(),
          acao: fd.get('acao').trim(),
          responsavel: fd.get('responsavel').trim(),
          setor: fd.get('setor'),
          prazo: fd.get('prazo'),
          custo: parseFloat(fd.get('custo')) || 0,
          status: fd.get('status')
        };
        if (acao) Object.assign(acao, dados);
        else state.acoes.push({ id: uid(), ...dados });
        save();
        render();
        toast(acao ? 'Ação atualizada' : 'Ação adicionada');
      },
      onDelete: acao ? () => {
        state.acoes = state.acoes.filter((x) => x.id !== acao.id);
        save();
        render();
        toast('Ação excluída');
      } : null
    });
  }

  function formKpiDesafio(desafioId, i) {
    const d = (state.desafios || []).find((x) => x.id === desafioId);
    const k = d && d.kpis[i];
    if (!k) return;
    openModal({
      title: k.nome,
      body: `
        <div class="row2">
          <label class="field">Resultado atual<input name="atual" type="number" inputmode="decimal" step="any" required value="${k.atual}"></label>
          <label class="field">Meta<input name="meta" type="number" inputmode="decimal" step="any" required value="${k.meta}"></label>
        </div>
        <p class="hint">Ponto de partida: ${fmtUn(k.base, k.unidade)}. ${k.meta < k.base ? 'Quanto menor, melhor.' : 'Quanto maior, melhor.'} Desafio: ${esc(d.titulo)}.</p>`,
      onSubmit(fd) {
        k.atual = parseFloat(fd.get('atual')) || 0;
        k.meta = parseFloat(fd.get('meta')) || 0;
        save();
        render();
        toast('Indicador do desafio atualizado');
      }
    });
  }

  /* ---------- Instalação e tema ---------- */
  let deferredPrompt = null;
  const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $('#install-btn').hidden = false;
  });
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    $('#install-btn').hidden = true;
    toast('App instalado!');
  });

  async function instalar() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      $('#install-btn').hidden = true;
      closeModal();
      return;
    }
    openModal({
      title: 'Instalar no celular',
      body: isStandalone() ? '<p>O app já está instalado e aberto em tela cheia.</p>' : `
        <div class="menu-group"><h3>iPhone (Safari)</h3><p>Toque em <b>Compartilhar</b> (quadrado com seta) e depois em <b>Adicionar à Tela de Início</b>.</p></div>
        <div class="menu-group"><h3>Android (Chrome)</h3><p>Toque no menu <b>⋮</b> e depois em <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>.</p></div>
        <p class="hint">Depois de instalado, o app abre em tela cheia e funciona mesmo sem internet.</p>`
    });
  }

  function temaAtual() {
    try { return localStorage.getItem(THEME_KEY) || 'auto'; } catch (e) { return 'auto'; }
  }
  function aplicarTema(t) {
    const root = document.documentElement;
    if (t === 'light' || t === 'dark') root.dataset.theme = t;
    else delete root.dataset.theme;
    try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* sem armazenamento */ }
    const dark = root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    $('meta[name=theme-color]').content = dark ? '#0f0e14' : '#f5f4f8';
  }
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => aplicarTema(temaAtual()));

  function abrirMenu(comNav) {
    const t = temaAtual();
    const nav = comNav ? `
        <div class="menu-group">
          <h3>Mais telas</h3>
          <div class="menu-nav">
            ${NAV.filter((n) => !TABS.includes(n.id)).map((n) => `<a class="menu-link" href="#${n.id}" data-close>${ICON[n.icon]}<span>${n.long || n.label}</span>${ICON.chevron}</a>`).join('')}
          </div>
        </div>` : '';
    openModal({
      title: comNav ? 'Mais' : 'Opções',
      body: `${nav}
        <div class="menu-group">
          <h3>Aparência</h3>
          <div class="theme-seg">
            ${[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Escuro']].map(([v, l]) => `<button type="button" data-tema="${v}" aria-pressed="${t === v}">${l}</button>`).join('')}
          </div>
        </div>
        <div class="menu-group">
          <h3>Aplicativo</h3>
          <button type="button" class="btn ghost block" id="m-instalar">${ICON.download}Instalar no celular</button>
          <button type="button" class="btn ghost block" id="m-reset">${ICON.refresh}Restaurar dados de demonstração</button>
        </div>
        <div class="menu-group about">
          <h3>Sobre a empresa</h3>
          <dl>
            <dt>Razão social</dt><dd>Prisma Gestão Administrativa Ltda.</dd>
            <dt>CNPJ</dt><dd>41.882.307/0001-64 (fictício)</dd>
            <dt>Segmento</dt><dd>BPO — serviços administrativos terceirizados</dd>
            <dt>Sede</dt><dd>São Paulo (SP), filial em Recife (PE)</dd>
            <dt>Equipe</dt><dd>180 colaboradores · 64 clientes</dd>
          </dl>
          <p class="hint">Missão: cuidar da rotina administrativa dos clientes com precisão e prazo, para que eles cuidem do próprio negócio.</p>
        </div>`,
      onOpen(form) {
        form.querySelectorAll('[data-tema]').forEach((b) => b.addEventListener('click', () => {
          aplicarTema(b.dataset.tema);
          form.querySelectorAll('[data-tema]').forEach((x) => x.setAttribute('aria-pressed', x === b));
        }));
        $('#m-instalar').addEventListener('click', instalar);
        $('#m-reset').addEventListener('click', () => {
          if (!confirm('Apagar as alterações e voltar aos dados de demonstração da Prisma BPO?')) return;
          state = seed();
          save();
          closeModal();
          render();
          toast('Dados de demonstração restaurados');
        });
      }
    });
  }

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2400);
  }

  /* ---------- Navegação e eventos ---------- */
  let rotaAtual = '';
  function render() {
    const [id, param] = location.hash.slice(1).split('/');
    const rota = VIEWS[id] ? id : 'inicio';
    charts = [];
    hideTip();
    $('#view').innerHTML = VIEWS[rota](param);
    charts.forEach((fn) => fn());
    const tabAtiva = TABS.includes(rota) ? rota : 'mais';
    document.querySelectorAll('[data-nav]').forEach((a) => {
      const alvo = a.classList.contains('tab') ? tabAtiva : rota;
      if (a.dataset.nav === alvo) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    const item = NAV.find((n) => n.id === rota);
    const desafio = rota === 'desafios' && param && (state.desafios || []).find((x) => x.id === param);
    document.title = `${desafio ? `Desafio de ${desafio.rotulo.toLowerCase()}` : (item.long || item.label)} · Prisma Fin`;
    $('#month-pill').textContent = `${mesCurto(state.mesRef)}/${state.mesRef.slice(0, 4)}`;
    if (location.hash !== rotaAtual) window.scrollTo(0, 0);
    rotaAtual = location.hash;
  }

  $('#view').addEventListener('click', (e) => {
    if (e.target.closest('select')) return;
    const t = e.target.closest('[data-action]');
    if (!t) return;
    const { action, id } = t.dataset;
    if (action === 'tipo') { ui.tipo = t.dataset.v; render(); }
    else if (action === 'filtro') { ui.filtro = t.dataset.v; render(); }
    else if (action === 'nova-conta') formConta(null);
    else if (action === 'editar-conta') formConta(state.contas.find((c) => c.id === id));
    else if (action === 'baixar') {
      const c = state.contas.find((x) => x.id === id);
      if (!c) return;
      c.pago = true;
      c.dataPagamento = hojeISO();
      save();
      renderListaContas();
      toast(c.tipo === 'receber' ? 'Recebimento registrado' : 'Pagamento registrado');
    }
    else if (action === 'ir-conta') {
      ui.tipo = t.dataset.tipo;
      ui.filtro = t.dataset.filtro;
      ui.busca = '';
      location.hash = 'contas';
    }
    else if (action === 'editar-kpi-desafio') formKpiDesafio(t.dataset.desafio, Number(t.dataset.i));
    else if (action === 'editar-setor') formSetor(Number(t.dataset.i));
    else if (action === 'editar-ind') formIndicador(id);
    else if (action === 'nova-acao') formAcao(null);
    else if (action === 'editar-acao') formAcao(state.acoes.find((a) => a.id === id));
  });
  $('#view').addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('article[data-action], .orc-row[data-action], .dkpi[data-action]')) {
      e.preventDefault();
      e.target.click();
    }
  });
  $('#view').addEventListener('change', (e) => {
    const s = e.target.closest('[data-change]');
    if (!s) return;
    if (s.dataset.change === 'status-acao') {
      const a = state.acoes.find((x) => x.id === s.dataset.id);
      if (!a) return;
      a.status = s.value;
      save();
      render();
      toast(`Status: ${a.status}`);
    } else if (s.dataset.change === 'status-marco') {
      const d = (state.desafios || []).find((x) => x.id === s.dataset.desafio);
      const m = d && d.marcos[Number(s.dataset.i)];
      if (!m) return;
      m.status = s.value;
      save();
      render();
      toast(`Marco: ${m.status}`);
    }
  });
  $('#view').addEventListener('input', (e) => {
    if (e.target.id !== 'busca') return;
    ui.busca = e.target.value;
    renderListaContas();
  });

  let largura = innerWidth, resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (innerWidth === largura) return;
      largura = innerWidth;
      hideTip();
      charts.forEach((fn) => { if (fn !== renderListaContas) fn(); });
    }, 150);
  });
  window.addEventListener('hashchange', render);

  /* ---------- Inicialização ---------- */
  const grupos = [...new Set(NAV.map((n) => n.grupo))];
  $('#side-nav').innerHTML = grupos.map((g) => `<p class="side-group">${g}</p>` +
    NAV.filter((n) => n.grupo === g).map((n) => `<a href="#${n.id}" data-nav="${n.id}">${ICON[n.icon]}<span>${n.long || n.label}</span></a>`).join('')).join('');
  $('#tabbar').innerHTML = TABS.map((id) => {
    const n = NAV.find((x) => x.id === id);
    return `<a href="#${id}" data-nav="${id}" class="tab">${ICON[n.icon]}<span>${n.label}</span></a>`;
  }).join('') + `<button type="button" class="tab" data-nav="mais" id="tab-mais">${ICON.more}<span>Mais</span></button>`;
  $('#tab-mais').addEventListener('click', () => abrirMenu(true));
  $('#menu-btn').innerHTML = ICON.dots;
  $('#install-btn').innerHTML = ICON.download;
  $('#modal-x').innerHTML = ICON.close;
  $('#menu-btn').addEventListener('click', abrirMenu);
  $('#install-btn').addEventListener('click', instalar);

  aplicarTema(temaAtual());
  render();

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
