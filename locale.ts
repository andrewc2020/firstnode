import { formatRelative, subDays, format} from 'date-fns'
import { es, ru, fr } from 'date-fns/locale'

let str = formatRelative(subDays(new Date(), 3), new Date())
//=> "last Friday at 7:26 p.m."

console.log(str)

str = formatRelative(subDays(new Date(), 3), new Date(), { locale: es })
//=> "el viernes pasado a las 19:26"

console.log(str)

str = formatRelative(subDays(new Date(), 3), new Date(), { locale: ru })
//=> "в прошлую пятницу в 19:26"

console.log(str)

str = formatRelative(subDays(new Date(), 4), new Date(), { locale: fr })
//=> "dimanche dernier à 15:50"

console.log(str)

str = format(new Date(),'EEEE dd/MMMM/yyyy', { locale: fr })
//=> "dimanche dernier à 15:50"

console.log(str)