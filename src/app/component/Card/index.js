import Image from "next/image"

const Card = ({title, thumbnail}) => {
    return (
        <div className="grid grid-cols-5 gap-5 h-32">
        <div> 
            <Image src={thumbnail} alt="..." width={300} height={300}/> 
        <h1>{title}</h1>
        </div>  
        </div>
    )
}

export default Card