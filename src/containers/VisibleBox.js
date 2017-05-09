import { connect } from 'react-redux';
import DraggableBox from '../components/DraggableBox';
import DroppableBox from '../components/DroppableBox';
import React from 'react';

// const mapStateToProp = (state) => {
//     return { menus: state.menus }
// }

// const DraggableMenuList = connect(
//     // mapStateToProp
// )(MenuList);

class VisibleBox extends React.Component {
    render (){
        return (
            <div>
                <DraggableBox />
                <DroppableBox />
            </div>
        );
    }
}

export default VisibleBox;