import { Pipe, PipeTransform } from '@angular/core'
import { UsersService } from '../../services/users/users.service'

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  constructor(private userService: UsersService) {
  }

  transform(userId: number): string {
    if (!userId) return 'Unknown'

    return this.userService.userById(userId).name
  }

}
