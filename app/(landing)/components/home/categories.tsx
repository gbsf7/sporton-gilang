import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
    {
        name: "Running",
        imageUrl: "category-running.png",
    },
    {
        name: "Tennis",
        imageUrl: "category-tennis.png",
    },
    {
        name: "Basketball",
        imageUrl: "category-basketball.png",
    },
    {
        name: "Football",
        imageUrl: "category-football.png",
    },
    {
        name: "Badminton",
        imageUrl: "category-badminton.png",
    },
    {
        name: "Swimming",
        imageUrl: "category-swimming.png",
    },

    
]

const CategoriesSection = () => {
    return <section id="category-section" className="container mx-auto pb-20">
        <div className="flex justify-between">
            <h2 className="font-bold text-2xl">
                Browse by Categories
            </h2>
            <Link href="#" className="flex gap-2 text-primary font-medium">
                <span className="self-center">See All Categories</span>
                <FiArrowRight className="self-center" />
            </Link>
        </div>
        <div className="grid grid-cols-6 gap-12 mt-8">
            {
                categoryList.map((category, index) => (
                    <div className="rounded-lg bg-gradient-to-r from[#F1F1F1] to-[#f7f7f7] w-full aspect-square flex justify-center " key={index}>
                        <div className="self-center">
                            <Image src={`/images/categories/${category.imageUrl}`} width={86} height={86} alt={category.name} className="mb-[10px]"/>
                            <div className="text-primary font-medium text-xl text-center">{category.name}</div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </section>
};

export default CategoriesSection;