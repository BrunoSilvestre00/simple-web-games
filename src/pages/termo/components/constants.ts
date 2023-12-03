
export const getAlphabet = (): string[] => Array.from(
    { length: 26 }, 
    (_, i) => String.fromCharCode(65 + i)
);

const WORDS_5_LETTERS: string[] = [
    'ABACO',
    'ABADA',
    'ABATE',
    'ABOIO',
    'ABRIR',
    'ACARO',
    'ACASO',
    'ACHAR',
    'ACIDO',
    'ACIMA',

    'BACIA',
    'BACON',
    'BAHIA',
    'BAILE',
    'BAIXO',
    'BALAO',
    'BALDE',
    'BALSA',
    'BANCO',
    'BANDA',
    
    'CABRA',
    'CACAR',
    'CACAU',
    'CACHO',
    'CAIXA',
    'CAJUS',
    'CALDO',
    'CALHA',
    'CAMPO',
    'CANAL',
    'CLUBE',

    'DADOS',
    'DANCA',
    'DARDO',
    'DEPOR',
    'DETER',
    'DIETA',
    
    'ELITE',
    'ELMOS',
    'ERVAS',
    'ESTAR',

    'FACAO',
    'FACIL',
    'FALSO',
    'FALTA',
    'FAROL',
    'FARPA',
    'FARSA',
    'FATOR',
    'FEBRE',
    'FELIZ',

    'GALHO',
    'GAMAO',
    'GARFO',
    'GAROA',

    'HABIL',
    
    'IGUAL',
    'ILESO',
    'IMPOR',
    'INDIO',
    'IRMAO',
    'ISCAS',

    'JANTA',
    'JOGAR',
    'JOGOS',
    'JARRO',

    'RISAO',

    'TEMPO',
];

const getAllWords = (): string[] => {
    return [
        ...WORDS_5_LETTERS
    ];
}

export const getRandWord = (): string => {
    const options = getAllWords();
    const randIndex = Math.floor(Math.random() * options.length);
    return options[randIndex];
}

export const isValidWord = (word: string): boolean => {
    return getAllWords().includes(word);
}

