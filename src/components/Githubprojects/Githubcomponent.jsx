import { useEffect, useState } from 'react';
import Item from './Singlecardcomp';
import { CSSGrid, measureItems, makeResponsive } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100
  });

export const Githubprojects = (props) => {

    const { tech } = props;
    var all_data = [];

    const [repodata, repostatefun] = useState([]);

    const filterdata = (data) => {

        let filter_data = data.filter((item) => item.language === tech)

            

        
        console.log(filter_data);
        repostatefun(filter_data);

    }

    useEffect(() => {

        fetch('https://api.github.com/users/Nikunj-bisht/repos')
            .then(res => {
                console.log('fetched');
                return res.json();
            }).then(resp => {
               // all_data = 
               console.log(resp);
                filterdata(resp);

            });

    }, []);



    return (

<Grid
  component="ul"
  columns={8}
  columnWidth={350}
  gutterWidth={5}
  gutterHeight={5}
  itemHeight={700}
  springConfig={{ stiffness: 170, damping: 26 }}
>{

repodata &&   repodata.map((item) => {

       return (
           <li>

<Item key = '1' single_project = {item}></Item>
       
           </li>
       )

   })

}

</Grid>
    

    )

}