import * as contentful from 'contentful';

export const client = contentful.createClient({
    // space : 'sgg6avvpa0wn',
    // accessToken : 'ghvtrSVkS83wnjrvJ0v_--JqmD9z6kW2fz7nDc8VzqI'
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})