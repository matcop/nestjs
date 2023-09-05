import { Car } from 'src/cars/interface/car.interface';
import { Persona } from 'src/personas/entities/persona.entity';
import { v4 as uuid } from 'uuid';



export const PERSONAS_SEED: Persona[] = [

    {
        id: uuid(),
        ComplementoVisible: "0",
        NumeroDocumento: "8262558",
        Complemento: "1I",
        Nombres: "IDVEN EDWIN",
        PrimerApellido: "MAMANI",
        SegundoApellido: "CHAMBI",
        FechaNacimiento: "01/09/1988",
        LugarNacimientoPais: "BOLIVIA",
        LugarNacimientoDepartamento: "LA PAZ",
        LugarNacimientoProvincia: "SUD YUNGAS",
        LugarNacimientoLocalidad: "HUIRI LANZA",
        Fotografia: "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",
        Domicilio: "AV. JUAN XXIII Nº 34 Z/ VILLA ARMONIA",
        Genero: "MASCULINO"

    },
    {
        id: uuid(),
        ComplementoVisible: "0",
        NumeroDocumento: "4900325",
        Complemento: "1I",
        Nombres: "MARCELO ",
        PrimerApellido: "TITO",
        SegundoApellido: "CCOPA",
        FechaNacimiento: "10/09/1983",
        LugarNacimientoPais: "BOLIVIA",
        LugarNacimientoDepartamento: "LA PAZ",
        LugarNacimientoProvincia: "SUD YUNGAS",
        LugarNacimientoLocalidad: "HUIRI LANZA",
        Fotografia: "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",
        Domicilio: "AV. JUAN XXIII Nº 34 Z/ VILLA ARMONIA",
        Genero: "MASCULINO"

    },
    {
        id: uuid(),
        ComplementoVisible: "0",
        NumeroDocumento: "6005234",
        Complemento: "1I",
        Nombres: "JORGE",
        PrimerApellido: "TICONA",
        SegundoApellido: "COLQUE",
        FechaNacimiento: "01/09/1988",
        LugarNacimientoPais: "BOLIVIA",
        LugarNacimientoDepartamento: "LA PAZ",
        LugarNacimientoProvincia: "SUD YUNGAS",
        LugarNacimientoLocalidad: "HUIRI LANZA",
        Fotografia: "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",
        Domicilio: "AV. JUAN XXIII Nº 34 Z/ VILLA ARMONIA",
        Genero: "MASCULINO"

    }



]