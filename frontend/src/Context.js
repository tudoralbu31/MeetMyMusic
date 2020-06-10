import React, {useState, createContext} from 'react'

export const TheContext = createContext();

export const TheProvider = props =>{
    const [info, setInfo] = useState(
        {
            nickname: 'TG White',
            followers: 3000,
            country: 'Romania',
            city: 'Timisoara',
            type: 'Trapper'

        }
    );

    return(
        <TheContext.Provider value='caca'>
            {props.children}
        </TheContext.Provider>
    )
}