import { PipeTransform, Pipe } from "@angular/core"

@Pipe({
  name: "cutText"
})


export class CutText implements PipeTransform{


  transform(text:string, limits:number=0, maxs:number=0){
      text =  text.substring(3, text.length)
      text = text.substring(3, text.length - 4)

      return text;
  }

}
