import { PipeTransform, Pipe } from "@angular/core"

@Pipe({
  name: "cutText"
})


export class CutText implements PipeTransform{


  transform(text:any, limits:any=0, maxs:any=0){

      text =  text.substring(2, text.length)
      text = text.substring(1, text.length - 4)



      return text;
  }

}
