import React, {useState} from "react";
import './main.css'
import {produce} from "immer";






const Main = ({photo, setPhoto}) => {
    const random = () => {
        let a = Math.floor(Math.random() * photo.length)
        let b = Math.floor(Math.random() * photo.length)

        if (a === b) random()
        else {
        setId1(a)
        setId2(b)
        }
    }

    const [id1, setId1] = useState(Math.floor(Math.random() * photo.length))
    const [id2, setId2] = useState(Math.floor(Math.random() * photo.length))

    const onClickImg1 = () => {
        rating(photo[id1].rating, photo[id2].rating, 1, 0)
        random()
    }

    const onClickImg2 = () => {
        rating(photo[id1].rating, photo[id2].rating, 0, 1)
        random()


    }

    const onClickNext = () => {
        random()
        rating(photo[id1].rating, photo[id2].rating, 0.5, 0.5)
    }

    const rating = (Ra, Rb, Sa, Sb) => {
        const K = 10;
        let Ea;
        let Eb;
        let newRa;
        let newRb;

        Ea = 1 / (1 + Math.pow(10, ((Rb - Ra) / 400)))
        Eb = 1 / (1 + Math.pow(10, ((Ra - Rb) / 400)))

        newRa = Ra + K * (Sa - Ea)
        newRb = Rb + K * (Sb - Eb)

        const set = (state) => {
            return produce(state, (users) => {
                users[id1].rating = newRa;
                users[id2].rating = newRb;
            });
        }
        setPhoto(set)
    }

    return (
        <div className={'main'}>
            <div className="head">
                <p className={'heading'}>Who`s Hotter? Click to Choose</p>
            </div>
            <div className="play-area">
                <img
                    src={photo[id1].img}
                    className={'img'}
                    alt={'img1'}
                    onClick={onClickImg1}
                />
                <p className={'or'}>OR</p>
                <img
                    src={photo[id2].img}
                    className={'img'}
                    alt={'img2'}
                    onClick={onClickImg2}
                />
            </div>
            <p
                className={'next'}
                onClick={onClickNext}
            >--></p>
        </div>
    )
}

export default Main
