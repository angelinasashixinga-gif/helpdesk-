export type Prioridade = 'baixa' | 'media' |'alta' | 'critica';
export type EstadoTicket = 'aberto' | 'em-progresso' | 'resolvido' | 'fechado';
export type Categoria = 'hardware' | 'software' | 'rede' | 'acesso';

export interface Ticket {
    id: number;
    titulo: string;
    descricao: string;
    prioridade: Prioridade;
    estado: EstadoTicket;
    tecnico: string | null; 
    categoria: Categoria;
    dataCriacao: Date;
}

export interface Tecnico {
    id: number
    nome: string;
    especialidade: string;
}

export const TECNICOS_MOCK:Tecnico[] = [
      {
    id: 1,
    nome: 'João Manuel',
    especialidade: 'Hardware e Redes'
  },
  {
    id: 2,
    nome: 'Maria José',
    especialidade: 'Software'
  },
  {
    id: 3,
    nome: 'Pedro António',
    especialidade: 'Redes e Segurança'
  }
]

export const TICKETS_MOCK: Ticket[] = [
    {
        id: 1,
        titulo: 'Impressora do 2.º piso não impreme',
        descricao: 'A impressora HP LaserJet apresenta erro E5 ao imprimir.',
        prioridade: 'media',
        estado: 'aberto',
        tecnico: null,
        categoria: 'hardware',
        dataCriacao: new Date('2026-03-02t09:15:00')
    },
    {
        id: 2,
        titulo: 'Computdor não liga',
        descricao: 'O computador do departamento financeiro não inicia.',
        prioridade: 'alta',
        estado: 'em-progresso',
        tecnico: 'João Manuel', 
        categoria: 'hardware',
        dataCriacao: new Date('2026-03-03t10:30:00')
    },
     {
        id: 3,
        titulo: 'Erro ao entrar no sistema',
        descricao: 'O utilizador não consegue iniciar sessão no sistema.',
        prioridade: 'critica',
        estado: 'aberto',
        tecnico: null, 
        categoria: 'acesso',
        dataCriacao: new Date('2026-03-04t08:20:00')
    },
     {
        id: 4,
        titulo: 'Internent Lenta',
        descricao: 'A ligação a internet está muito lenta no escritório.',
        prioridade: 'alta',
        estado: 'resolvido',
        tecnico: 'Pedro António', 
        categoria: 'rede',
        dataCriacao: new Date('2026-03-05t14:00:00')
    },
     {
        id: 5,
        titulo: 'Falha no servidor',
        descricao: 'O servidor apresenta falhas durante o processamento.',
        prioridade: 'critica',
        estado: 'em-progresso',
        tecnico: 'João Manuel', 
        categoria: 'rede',
        dataCriacao: new Date('2026-03-07t16:10:00')
    },
 {
    id: 6,
    titulo: 'Atualização de software',
    descricao: 'É necessária uma atualização do software utilizado pelo setor.',
    prioridade: 'media',
    estado: 'aberto',
    tecnico: 'Maria José',
    categoria: 'software',
    dataCriacao: new Date('2026-03-08T09:00:00')
  },
  {
    id: 7,
    titulo: 'Conta bloqueada',
    descricao: 'A conta do utilizador foi bloqueada após várias tentativas.',
    prioridade: 'alta',
    estado: 'fechado',
    tecnico: 'Pedro António',
    categoria: 'acesso',
    dataCriacao: new Date('2026-03-09T13:25:00')
  },
  {
    id: 8,
    titulo: 'Conta bloqueada',
    descricao: 'A conta do utilizador foi bloqueada após várias tentativas.',
    prioridade: 'alta',
    estado: 'fechado',
    tecnico: 'Pedro António',
    categoria: 'acesso',
    dataCriacao: new Date('2026-03-09T13:25:00')
  }
]

