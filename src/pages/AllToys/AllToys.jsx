import { useEffect, useState } from "react";

const AllToys = () => {

    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch("https://toy-house-server-a2n426.vercel.app/allToys")
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])
    console.log(toys)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View in details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map((toy, index) => (
                                <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>X</td>
                                    <td>{toy.name}</td>
                                    <td>X</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.available_quantity}</td>
                                    <td><button className="btn btn-xs">view details</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;