import naruto from './src/images/naruto.jpeg'
import fullmetal from './src/images/fullmetal.jpeg'
import ippo from './src/images/ippo.jpeg'

interface DummyDataProps{
    title:string;
    image?:string;
    description:string;
}
export const dummyData:DummyDataProps[]=[
    {
        title:'Hajime no Ippo',
        description:'Ippo wants to become a boxer',
        image:ippo
    },
    {
        title:'full Metal',
        description:'Being the full metal',
        image:fullmetal,
    },
    {
        title:'Naruto',
        description:'Naruto',
        image:naruto
    }
]