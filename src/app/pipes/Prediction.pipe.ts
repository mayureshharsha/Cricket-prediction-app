import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'predictionPipe'})
export class PredictionPipe implements PipeTransform {
  transform(result: string): string {
    if(result == 'W')
      return 'Win';
    if(result == 'L')
      return 'Lose';
    if(result == 'D')
      return 'Draw';
    if(!result)
      return 'Match is yet to be played';
  }
}
