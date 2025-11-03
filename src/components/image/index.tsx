interface IPropes{
src:string;
alt:string;
className?:string;

}
const index=({src,alt,className}:IPropes)=>{
    return(
        <img src={src} alt={alt} className={className}  />
    )
}
export default index;
