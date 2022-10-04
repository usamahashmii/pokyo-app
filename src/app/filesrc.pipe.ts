import { Pipe, PipeTransform } from '@angular/core';
let win: any = window; // hack ionic/angular compilator
@Pipe({
  name: 'filesrc'
})
export class FilesrcPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var myURL = win.Ionic.WebView.convertFileSrc(value);
    return myURL;
  }

}
