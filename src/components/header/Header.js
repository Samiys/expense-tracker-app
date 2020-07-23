import React from "react";
import Divider from '@material-ui/core/Divider';

const Header = () => {
    return (
      <div>
        <h1 className="header" >Expense Tracker App <br/> </h1>
          <Divider style={{width: 350}}/>
      </div>
    );
}

export default Header;
