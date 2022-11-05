type labelValueObject = {
    label: string;
    value: string;
}

export const nivelEscolaridadeObject: { [key: string]: labelValueObject } = {
    TECNICO: {
        label: 'Tecnico',
        value: 'TECNICO'
    },
    MEDIO: {
        label: "Médio",
        value: 'MEDIO'
    },
    FUNDAMENTAL: {
        label: "Fundamental",
        value: 'FUNDAMENTAL'
    },
    SUPERIOR: {
        label: "Superior",
        value: 'SUPERIOR'
    },
}

export const tipoContatoObject: { [key: string]: labelValueObject } = {
    CELULAR: {
        label: 'Celular',
        value: 'CELULAR'
    },
    TEL_FIXO: {
        label: 'Telefone fixo',
        value: 'TEL_FIXO'
    },
    EMAIL: {
        label: 'E-mail',
        value: 'EMAIL'
    }
}

export const statusHistoricoEscolarObject: { [key: string]: labelValueObject } = {
    CONCLUIDO: {
        label: 'Concluído',
        value: 'CONCLUIDO'
    },
    CURSANDO: {
        label: 'Cursando',
        value: 'CURSANDO'
    }
}