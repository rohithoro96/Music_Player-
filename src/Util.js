import { v4 as uuidv4 } from 'uuid';

const chillHop = () => {
    return [
        {
            name: "I-285",
            artist: "Kreatev",
            cover: "https://chillhop.com/wp-content/uploads/2023/09/7afea79a0653c549148b2f1138b0f62e27e0d77d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            audio: "https://stream.chillhop.com/mp3/68346",
            color: ["#221535", "#4C506E"]
        },
        {
            name: "Panda",
            artist: "Philanthrope",
            cover: "https://chillhop.com/wp-content/uploads/2023/07/b22ea178ab3c93276fbccc06e9421d8997ff464d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            audio: "https://stream.chillhop.com/mp3/64118",
            color: ["#1B4448", "#463B29"]



        }

    ]
}
export default chillHop;