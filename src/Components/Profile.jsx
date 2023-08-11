import { useEffect, useState } from 'react'



function Profile() {

    const [name, setName] = useState("")
    const [homeworld, setHomeworld] = useState("")
    const [height, setHeight] = useState(0)
    const [imageUrl, setImageUrl] = useState("")
    const [render, setRender] = useState(true)
    const [loading, setLoading] = useState(true)

    const randomProfile = Math.ceil(Math.random() * 88)

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomProfile}.json`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setLoading(false)
                setName(data.name)
                setHomeworld(data.homeworld)
                setHeight(data.height)
                setImageUrl(data.image)
            })
            .catch(error => console.log("Error fetching data:", error))
    }, [render])

    if (loading) {
        return <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

    }

    return (
        <>
            <img src={imageUrl} alt="profile-image" width="250" />
            <h1 className='p-4'>{name}</h1>
            <p>{height} cm</p>
            <p>Homeworld: {homeworld}</p>

            <div>
                <button className='btn btn-warning m-4 p-3' onClick={() => {
                    setRender(!render)
                }}>Randomize Character</button>
            </div>
        </>


    )
}

export default Profile