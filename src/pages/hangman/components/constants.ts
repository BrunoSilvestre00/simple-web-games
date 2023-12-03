
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
            'HIPOPOTAMO',
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
            'MEDICO',
            'ENGENHEIRO',
            'PROFESSOR',
            'ADVOGADO',
            'DENTISTA',
            'CONTADOR',
            'FARMACÊUTICO',
            'PSICOLOGO',
            'VETERINARIO',
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
            'GINASTICA',
            'JUDO',
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
            'CANADA',
            'MEXICO',
            'ESPANHA',
            'FRANÇA',
            'ALEMANHA',
            'ITALIA',
            'ARGENTINA',
            'AUSTRALIA',
            'PORTUGAL',
            'INDIA',
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
            'SANDUICHE',
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
            'SANDALIA',
            'CHINELO',
            'BONE',
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
            'PE',
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
            'VIOLAO',
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
            'CUICA',
            'PANDEIRO',
        ]
    },
    {
        tip: 'Meios de Transporte',
        words: [
            'CARRO',
            'MOTO',
            'BICICLETA',
            'ONIBUS',
            'METRO',
            'TREM',
            'AVIÃO',
            'NAVIO',
            'BARCO',
            'CARROÇA',
            'CAVALO',
            'JEGUE',
            'BODE',
            'CAMINHAO',
            'TRATOR',
        ]
    },
    {
        tip: 'Objetos de Casa',
        words: [
            'CADEIRA',
            'MESA',
            'GELADEIRA',
            'FOGAO',
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
            'LAPIS',
            'BORRACHA',
            'CADERNO',
            'MOCHILA',
            'REGUA',
            'ESTOJO',
            'LAPIS DE COR',
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
            'XICARA',
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
