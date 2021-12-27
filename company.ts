

interface ICompany{
    name: string,
    category: string,
    start: number,
    end?: number 
}


// Extract the Hour

const currentYear: number = Number(new Date().toLocaleDateString(
    'en-gb',
    {
      year: 'numeric',
      timeZone: 'utc'
    }
  )); //?

  console.log(currentYear)

Intl.DateTimeFormat('en', { year: 'numeric' }).formatToParts(Date.now())[0].value // 2


const companies: ICompany[] = [
    {name: 'company one', category: 'finance', start: 1981},
    {name: 'company two', category: 'retail', start: 1983, end: 1987},
    {name: 'company three', category: 'auto', start: 1991, end: 2009},
    {name: 'company four', category: 'retail', start: 2011, end: 2019},
    {name: 'company five', category: 'technology', start: 2016, end: 2019},
    {name: 'company six', category: 'technology', start: 2011, end: 2019},
    {name: 'company seven', category: 'technology', start: 1911, end: 2019},
    {name: 'company eight', category: 'technology', start: 2014},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 22, 60, 3]

const can_drink = [
    {name:'frank', age: 33},
    {name:'jim', age: 15},
    {name:'shirley', age: 44},
    {name:'sue', age: 12},
    

    

]

//for each
companies.forEach( (company)  => console.log(company))

//filter

ages.filter((age) => age >= 18 ).sort() //?

can_drink.filter((person) =>  person.age >= 18) //?

const retail = companies.filter(company => company.category === 'retail') //?

const millenial_companies = companies.filter(company => company.start >=2000)//?

const eighties_companies = companies.filter((company) => company.start >= 1980 && company.end? `${currentYear}`: company.end < 1990)//?

const lasted_at_least_10yrs = companies.filter((company) => company.end? company.end: currentYear - company.start >= 10)//?

//map

const company_names = companies.map((company) => (company.name))//?
const company_shortdetails = companies.map(company => `${company.name} [ ${company.start} - ${company.end}]`)//?
//sort
 companies.sort((c1 , c2) => c1.start > c2.start? 1 : -1)//?
const sort_ages = ages.sort((a,b) => a >b? 1: -1)//?


 //reduce

 //sum of ages

 const sumofages = ages.reduce((total,age) => total + age, 0)//?

 //total years for all companies

 const totalyears = companies.reduce( ( total , company) => total + (company.end - company.start)
    ,0)//?
