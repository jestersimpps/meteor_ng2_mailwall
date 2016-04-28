import {Pipe} from 'angular2/core';
/*
 * Convert \n to <br> in strings
 * Usage:
 *   value | n2br
 * Example:
 *   {{ 'blablabla\nblablabla |  n2br }}
 *   formats to: blablabla<br>blablabla
*/

@Pipe({ name: 'n2br' })

export class n2br {
    transform(input: string, args: any[]) {
        if (input !== void 0) {
            return input.replace(/\n/g, '<br>');
        }
    }
}