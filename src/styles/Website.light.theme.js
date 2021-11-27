import { defaultColours } from "fictoan-react";


export const WebsiteLightTheme = {
    body : {
        bg : defaultColours.grey10
    },
    text : {
        font : {
            sans  : "Werksatz, sans-serif",
        },
        paras: {
            lineHeight : 1.56,
            color      : defaultColours.black,
            weight : 400
        },
        headings : {
            font   : "Werksatz, sans-serif",
            color  : defaultColours.black,
            weight : 600
        }
    },
    button : {
        font : "Werksatz Bold, sans-serif"
    },
    bullet : {
        bg : defaultColours.black
    }
};
