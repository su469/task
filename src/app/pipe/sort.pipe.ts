import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './../Users';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(Users:Users[],type:string): any {
    console.log("pipe", Users,type)
    if(type == "A-Z")
    {
      return Users.sort((x, y) => x.name.localeCompare(y.name));
    }else if ( type == "Z-A")
    {
      return Users.sort((x, y) => y.name.localeCompare(x.name));

    }else{
      return Users
    }
  }

}
