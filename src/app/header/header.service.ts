import { Injectable } from '@angular/core';

import { Header } from './header';
import { HEADERS } from './data-header';

@Injectable()
export class HeaderService{
    getHeaders():Promise<Header[]>{
        return Promise.resolve(HEADERS);
    }
}