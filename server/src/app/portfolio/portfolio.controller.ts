import { Controller, Get } from '@nestjs/common';

@Controller('portfolio')
export class PortfolioController {
    constructor() { }

    @Get()
    getHello(): string {
        return 'Hello World!';
    }
}
