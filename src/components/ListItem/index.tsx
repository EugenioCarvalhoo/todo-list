import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles'

type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) => {

    const [isChecked ,setChecked] = useState(item.done);
    
    return (
       <C.Container done={isChecked}>
           <input type="checkbox" 
                checked={isChecked} 
                onChange={e => setChecked(e.target.checked)}
           />
          < label>{item.name}</label>
       </C.Container>
    );
}

