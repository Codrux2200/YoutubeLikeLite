import { useState, useEffect } from "react"
import "./section.css"
import sectionjson from "../files/json/section.json"

export const Sections = () => {
    const [selectedid, setSelectedId] = useState(0);


    const section = (item) => {
        return(
            <button
                style={item.id == selectedid ? styles.Active : styles.Inactive}
                className="section"
                onClick={() => {
                    setSelectedId(item.id)
                }}
            >
                {item.title}

            </button>
        );

    };

    return(
        <div className = "sections">
            {sectionjson.map(section)}
        </div>
    );
}


const styles = {
    Active: {
        color : 'white', 
        backgroundColor : 'black',
        display : 'flex',
        alignItems : 'center',
        borderRadius : "5px",
        border : "1px",
        fontSize : "15px",
        borderColor : 'grey',
        padding : "8px",
        cursor : 'pointer'
    },
    Inactive: {
        color : 'black', 
        padding : "8px",
        backgroundColor : '#d3d3d3',
        display : 'flex',
        alignItems : 'center',
        borderRadius : "5px",
        border : "1px",
        fontSize : "15px",
        borderColor : 'grey',
        cursor : 'pointer'
    },
}
