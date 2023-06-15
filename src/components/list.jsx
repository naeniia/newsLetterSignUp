import React from "react";

function List() {
    return(
        <div id="list">
            <ul>
                <li>
                   <img src="./images/icon-list.svg" className="bullet"></img>
                   <p>Product discovery and building what <span className="spanl">matters</span></p>
                </li>
                <li>
                   <img src="./images/icon-list.svg" className="bullet"></img>
                   <p>Measuring to ensure updates are a <span className="spanl">success</span></p>
                </li>
                <li>
                   <img src="./images/icon-list.svg" className="bullet"></img>
                   <p>And much more!</p>
                </li>
            </ul>
        </div>
    )
}

export default List;