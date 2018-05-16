import {Controller, Get, Post, Req, Res} from "@nestjs/common";

@Controller('PreguntasFrecuentes')
export class PreguntasFrecuentesController {
    preguntasFrecuente = {
        pregunta: "¿Es cierto que Newton se inspiró en una manzana?",
        respuesta: "Si confiamos en la biografía de William Stukeley, " +
        "amigo personal de Newton, conservada por la Royal Society de Inglaterra, " +
        "la anécdota de la manzana podría ser verdad. Cuenta Stukeley que luego de " +
        "cenar en la casa de su amigo y para refrescarse, salieron al jardín a beber " +
        "té bajo la sombra de árboles de manzana. El me dijo que fue en la misma situación " +
        "cuando la noción de la gravitación vino a su mente. Fue ocasionada por la caída de " +
        "una manzana mientras estaba en un estado contemplativo. ¿Por qué la manzana siempre " +
        "desciende de manera perpendicular al suelo?, pensó."
    };
    preguntasFrecuentes = [];

    constructor() {
        this.preguntasFrecuentes.push(this.preguntasFrecuente);
    }

    @Post('agregarPregunta')
    crearUsuario(@Req() request, @Res() response) {
        const nuevaPregunta = {
            pregunta: request.query.pregunta,
            respuesta: "",
        };
        this.preguntasFrecuentes.push(nuevaPregunta);
        response
            .send(nuevaPregunta);
    }

    @Get('mostrarFAQs')
    mostrarUsuarioExpress(@Req() request, @Res() response) {
        let faqs = this.preguntasFrecuentes
            .map((faq: PreguntaFrecuente) => `\n<h1>${faq.pregunta}</h1>\n<p>${faq.respuesta}</p>`)
            .reduce((pregResAcumulada, pregRes) => pregResAcumulada + pregRes);
        console.log(faqs);
        return response
            .send(this.preguntasFrecuentes);
    }

}


interface PreguntaFrecuente {
    pregunta: string;
    respuesta: string;
}