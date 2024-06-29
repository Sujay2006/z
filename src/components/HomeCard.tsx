import { cn } from '@/lib/utils';
import Image from 'next/image'

interface HomeCardProps {
  className: string,
  img: string,
  tittle: string,
  description: string,
  handleClick: ()=> void;
}

const HomeCard = ({ className, img, tittle, description, handleClick}: HomeCardProps) => {
  return (
    <div>
      <div className={cn(" px-6 py-4 flex flex-col justify-between w-full xl:max-w-[50vh] min-h-[260px] rounded-[24px] cursor-pointer", className)}
        onClick={handleClick}>
            <div className="flex justify-center items-center glassmorphism size-12 rounded-[14px] ">
                <Image src={img} alt="meeting" width={27} height={27}/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-extrabold">{tittle}</h1>
                <p className="text-lg font-normal">{description}</p>
            </div>
        </div>
    </div>
  )
}

export default HomeCard
