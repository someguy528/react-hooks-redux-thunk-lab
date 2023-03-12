// write your CatList component here

export default function CatList({catPics}){
    const allCatPics = catPics.map(cat => (<img key={cat.id} src={cat.url} alt="cat" />) )

    return(
        <div>
            {allCatPics}
        </div>
    )
}