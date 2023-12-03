
export type GameState = 'playing' | 'win' | 'lose';

export const getAlphabet = (): string[] => Array.from(
    { length: 26 }, 
    (_, i) => String.fromCharCode(65 + i)
);

export interface IWord {
    tip: string;
    words: string[];
}
const WORDS: IWord[] = [
    {
        tip: 'Animais',
        words: [
            'CACHORRO',
            'GATO',
            'LEÃO',
            'TIGRE',
            'ELEFANTE',
            'GIRAFA',
            'GOLFINHO',
            'TARTARUGA',
            'CROCODILO',
            'HIPOPÓTAMO',
            'MACACO',
            'URSO',
            'RATO',
            'COELHO',
            'PORCO',
        ]
    },
    {
        tip: 'Frutas',
        words: [
            'BANANA',
            'MAÇA',
            'MORANGO',
            'LARANJA',
            'MELANCIA',
            'MELÃO',
            'MANGA',
            'ABACAXI',
            'UVA',
            'JABUTICABA',
            'CAJU',
            'ACEROLA',
            'COCO',
            'GOIABA',
            'LIMÃO',
        ]
    },
    {
        tip: 'Profissões',
        words: [
            'MÉDICO',
            'ENGENHEIRO',
            'PROFESSOR',
            'ADVOGADO',
            'DENTISTA',
            'CONTADOR',
            'FARMACÊUTICO',
            'PSICÓLOGO',
            'VETERINÁRIO',
            'FISIOTERAPEUTA',
            'ENFERMEIRO',
            'NUTRICIONISTA',
            'ADMINISTRADOR',
            'BOMBEIRO',
            'POLICIAL',
        ]
    },
    {
        tip: 'Esportes',
        words: [
            'FUTEBOL',
            'BASQUETE',
            'VOLEI',
            'TÊNIS',
            'NATAÇÃO',
            'CORRIDA',
            'FUTSAL',
            'HANDEBOL',
            'ATLETISMO',
            'GINÁSTICA',
            'JUDÔ',
            'KARATÊ',
            'BOXE',
            'ESGRIMA',
            'CICLISMO',
        ]
    },
    {
        tip: 'Países',
        words: [
            'BRASIL',
            'ESTADOS UNIDOS',
            'CHINA',
            'JAPÃO',
            'RÚSSIA',
            'CANADÁ',
            'MÉXICO',
            'ESPANHA',
            'FRANÇA',
            'ALEMANHA',
            'ITÁLIA',
            'ARGENTINA',
            'AUSTRÁLIA',
            'PORTUGAL',
            'ÍNDIA',
        ]
    },
    {
        tip: 'Cores',
        words: [
            'VERMELHO',
            'AZUL',
            'VERDE',
            'AMARELO',
            'ROXO',
            'LARANJA',
            'ROSA',
            'PRETO',
            'BRANCO',
            'MARROM',
            'CINZA',
            'BEGE',
            'VIOLETA',
            'DOURADO',
            'PRATEADO',
        ]
    },
    {
        tip: 'Comidas',
        words: [
            'ARROZ',
            'FEIJÃO',
            'MACARRÃO',
            'LASANHA',
            'PIZZA',
            'HAMBÚRGUER',
            'SANDUÍCHE',
            'SALADA',
            'SOPA',
            'BOLO',
            'PUDIM',
            'SUCO',
            'REFRIGERANTE',
            'SALGADINHO',
            'BISCOITO',
        ]
    },
    {
        tip: 'Objetos',
        words: [
            'CADEIRA',
            'MESA',
            'GELADEIRA',
            'FOGÃO',
            'TELEVISÃO',
            'CELULAR',
            'COMPUTADOR',
            'NOTEBOOK',
            'CAMA',
            'TRAVESSEIRO',
            'CORTINA',
            'JANELA',
            'PORTA',
            'CARRO',
            'MOTO',
        ]
    },
    {
        tip: 'Roupas',
        words: [
            'CAMISA',
            'CALÇA',
            'BERMUDA',
            'SAIA',
            'VESTIDO',
            'BLUSA',
            'SHORTS',
            'MEIA',
            'SAPATO',
            'SANDÁLIA',
            'CHINELO',
            'BONÉ',
            'TOUCA',
            'CUECA',
            'SUTIÃ',
        ]
    },
    {
        tip: 'Corpo Humano',
        words: [
            'CABEÇA',
            'BRAÇO',
            'PERNA',
            'MÃO',
            'PÉ',
            'OLHO',
            'NARIZ',
            'BOCA',
            'ORELHA',
            'COTOVELO',
            'JOELHO',
            'PESCOÇO',
            'BARRIGA',
            'COSTAS',
            'CINTURA',
        ]
    },
    {
        tip: 'Instrumentos Musicais',
        words: [
            'VIOLÃO',
            'GUITARRA',
            'BAIXO',
            'BATERIA',
            'TECLADO',
            'PIANO',
            'FLAUTA',
            'TROMPETE',
            'SAXOFONE',
            'VIOLINO',
            'ACORDEON',
            'TAMBOR',
            'TAMBORIM',
            'CUÍCA',
            'PANDEIRO',
        ]
    },
    {
        tip: 'Meios de Transporte',
        words: [
            'CARRO',
            'MOTO',
            'BICICLETA',
            'ÔNIBUS',
            'METRÔ',
            'TREM',
            'AVIÃO',
            'NAVIO',
            'BARCO',
            'CARROÇA',
            'CAVALO',
            'JEGUE',
            'BODE',
            'CAMINHÃO',
            'TRATOR',
        ]
    },
    {
        tip: 'Objetos de Casa',
        words: [
            'CADEIRA',
            'MESA',
            'GELADEIRA',
            'FOGÃO',
            'TELEVISÃO',
            'CELULAR',
            'COMPUTADOR',
            'NOTEBOOK',
            'CAMA',
            'TRAVESSEIRO',
            'CORTINA',
            'JANELA',
            'PORTA',
            'CARRO',
            'MOTO',
        ]
    },
    {
        tip: 'Objetos de Escola',
        words: [
            'LIVRO',
            'CANETA',
            'LÁPIS',
            'BORRACHA',
            'CADERNO',
            'MOCHILA',
            'RÉGUA',
            'ESTOJO',
            'LÁPIS DE COR',
            'GIZ DE CERA',
            'APONTADOR',
            'TESOURA',
            'COLA',
            'CARTOLINA',
            'PAPEL',
        ]
    },
    {
        tip: 'Objetos de Cozinha',
        words: [
            'PRATO',
            'GARFO',
            'FACA',
            'COLHER',
            'PANELA',
            'FRIGIDEIRA',
            'FOGÃO',
            'GELADEIRA',
            'MICROONDAS',
            'LIQUIDIFICADOR',
            'BATEDEIRA',
            'ESCORREDOR',
            'COPO',
            'XÍCARA',
            'COADOR',
        ]
    },
];

export const getRandTipWord = (): { tip: string, word: string} => {
    const randIndex = Math.floor(Math.random() * WORDS.length);
    const randWord = Math.floor(Math.random() * WORDS[randIndex].words.length);

    const obj = WORDS[randIndex];
    const tip = obj.tip;
    const word = obj.words[randWord];

    return { tip, word };
};
