import "./video.css"
import channeljson from '../files/json/channel.json'
import videojson from '../files/json/video.json'
export const Videos = () => {
    
    const calculDeltaTime = (date) => {
        const datenow = new Date();
        let somme = datenow - date;
        console.log(datenow - date);
        if (somme > 86400000){
            somme /= 86400000;
            return {unite : "jours", value : somme};
        } else if  (somme < 86400000 && somme > 36000000){
            somme /= 3600000;
            return {unite : "Heures", value : somme};
        }else{

            return {unite : "< à une heure", value : -1};
        }
    }



    const video = (item) => {
        const channel = channeljson.find((val) => {return(val.channel == item.channel)});
        const time = calculDeltaTime(new Date(item.time));
        if (channel == undefined){
            window.alert("Une des vidéo ne marche pas");
        }

        return(
            <div className="video">
                <div className="img" style={{backgroundImage : 'url(' + item.icon + ')', backgroundSize : 'contain'}}>

                </div>
                <div className="description">
                    <div className="title">
                        <img src = {channel.icon}
                        >
                        </img>
                        <span>{item.title}</span>
                        <span></span>
                    </div>


                    <div className="channelName">
                        <img src = {null}
                        >
                        </img>
                        <span>{channel.channel}</span>
                    </div>

                <div className="vue">

                    {
                        item.vue > 1000000 ? 
                        <span>{item.vue / 1000000} M vues</span>:
                        <span>{item.vue} vues</span>
                    }
                    <span> . </span>
                    <span>il y a {Math.round(time.value)} {time.unite}</span>
                </div>

                </div>

            </div>


        );
    }

    return(
        <div className="Videos">
            {videojson.map(video)}
        </div>

    );

}