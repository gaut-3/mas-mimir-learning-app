import {useState} from "react";
import de from '../i18n/de.json';
import en from '../i18n/de.json';


export function useTranslation() {
    const test = de;
    const test2 = JSON.stringify(test)
    console.log("asdfasd", test2)
    //https://phrase.com/blog/posts/roll-your-own-i18n-solution-react-redux/
   /* de.map((data, key) => {
        console.log(data, key)
    })*/
}