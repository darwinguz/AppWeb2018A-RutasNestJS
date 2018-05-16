import {Controller, Get, Req, Res} from "@nestjs/common";

const fs = require("fs");

@Controller('Inicio')
export class InicioController {

    @Get('Home')
    requestResponseHome(
        @Req() request,
        @Res() response
    ) {
        let footer = '';
        fs.readFile(
            __dirname + '/html/footer.html',
            'utf8',
            (error, contenidoFooter) => {
                if (error) {
                    console.log('Error', error);
                    return response
                        .status(500)
                        .send('Error');
                } else {
                    footer = contenidoFooter;
                    return response
                        .status(200)
                        .send(contenidoFooter);
                }
            }
        );

        let header = '';
        fs.readFile(
            __dirname + '/html/header.html',
            'utf8',
            (error, contenidoHeader) => {
                if (error) {
                    console.log('Error', error);
                    return response
                        .status(500)
                        .send('Error');
                } else {
                    header = contenidoHeader;
                    return response
                        .status(200)
                        .send(contenidoHeader);
                }
            }
        );

        let contenido = '';
        fs.readFile(
            __dirname + '/html/contenido.html',
            'utf8',
            (error, contenidoContenido) => {
                if (error) {
                    console.log('Error', error);
                    return response
                        .status(500)
                        .send('Error');
                } else {
                    contenido = contenidoContenido;
                    return response
                        .status(200)
                        .send(contenidoContenido);
                }
            }
        );

        let contenidoFinal = header.concat(contenido).concat(footer);
        console.log(contenidoFinal);
        return contenidoFinal;
    }
}