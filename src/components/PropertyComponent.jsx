import React from "react";
import Card from "@/components/card";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";

const HomeComponent = ({params}) => {
    const {data, loading, error} = useFetch(`http://localhost:8001/api/properties?${params}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5 ">
                {data.data.map((item, index) => (
                    <Card
                        key={index}
                        imageSrc={item.property_images[0]}
                        title={item.description}
                        price={item.price}
                        property_location={item.property_location}
                        badge={item.badge}
                        property={item.property}
                        sold_type={item.sold_type}
                    />
                ))}
            </div>
            <Link href="/properties"
                className="text-center text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl"
            >
                show more
            </Link>
        </div>
    );
};

export default HomeComponent;
