function SlideCard({img, name, role}){
    return(
        <div className="slide-item">
            <p className="slide-item-t">{name}</p>
            <img src={img} alt="a" />
            <p className="slide-item-st">{role}</p>
        </div>
    )
}

export default SlideCard;