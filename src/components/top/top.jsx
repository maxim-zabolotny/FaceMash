import React from "react";
import './top.css'

const Top = ({photo}) => {


    let sort = [...photo].sort((a, b) => {
        return b.rating - a.rating
    })


    const Img = ({user}) => {
        let {name, rating, lastName, img} = user
        let rat = rating.toFixed(2)
        return (
            <div className={'users'}>
                <img src={img} alt={'img'} className={'image'}/>
                <p className={'info'}>{`${name} ${lastName}: ${rat}`}</p>
            </div>
        )
    }

    return (
        <div className={'top'}>
                <div className={'one'}>
                    <Img user={sort[0]}/>
                </div>
                <div className={'two'}>
                    <Img user={sort[1]}/>
                    <Img user={sort[2]}/>
                </div>
                <div className={'other'}>
                    <Img user={sort[3]}/>
                    <Img user={sort[4]}/>
                    <Img user={sort[5]}/>
                    <Img user={sort[6]}/>
                    <Img user={sort[7]}/>
                    <Img user={sort[8]}/>
                    <Img user={sort[9]}/>

                </div>
        </div>
    )
}

export default Top
