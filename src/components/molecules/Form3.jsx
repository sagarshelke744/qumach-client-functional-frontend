import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { NavbarStyle } from "./Molecule.style";
import { useSelector } from "react-redux";
import Form from "./Form";
import { Form2Style } from "./Molecule.style";
import { Form3Style } from "./Molecule.style";
const Form3 = () => {
  const { selected, setSelected } = useState();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // const { user } = useSelector((state) => state.user);
  // console.log(user.username);
  return (
    <>
    <Form3Style>
    <section class="heading">
        <h1>PRODUCT MANUAL</h1>
    </section>
<div class="container">
    <div class="box">
        <div class="column-1">
            <h2>Retail 500</h2>
            
            <button class="btn">Load More</button>
        </div>
        <div class="column-2">
            <table>
                <tr>
                    <th>Sr No.</th>
                    <th>title</th>
                    <th>price</th>
                    <th>quantity</th>
                </tr>
                <tr>
                    <td>1.</td>
                    <td>first title</td>
                    <td>first price</td>
                    <td>first quantity</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>second title</td>
                    <td>second price</td>
                    <td>second quantity</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>third title</td>
                    <td>third price</td>
                    <td>third quantity</td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td>fourth title</td>
                    <td>fourth price</td>
                    <td>fourth quantity</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="box">
        <div class="column-1">
            <h2>SA 2000</h2>
            
            <button class="btn">Load More</button>
        </div>
        <div class="column-2">
            <table>
                <tr>
                    <th>Sr No.</th>
                    <th>title</th>
                    <th>price</th>
                    <th>quantity</th>
                </tr>
                <tr>
                    <td>1.</td>
                    <td>first title</td>
                    <td>first price</td>
                    <td>first quantity</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>second title</td>
                    <td>second price</td>
                    <td>second quantity</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>third title</td>
                    <td>third price</td>
                    <td>third quantity</td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td>fourth title</td>
                    <td>fourth price</td>
                    <td>fourth quantity</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="box">
        <div class="column-1">
            <h2>SA 3000</h2>
            
            <button class="btn">Load More</button>
        </div>
        <div class="column-2">
            <table>
                <tr>
                    <th>Sr No.</th>
                    <th>title</th>
                    <th>price</th>
                    <th>quantity</th>
                </tr>
                <tr>
                    <td>1.</td>
                    <td>first title</td>
                    <td>first price</td>
                    <td>first quantity</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>second title</td>
                    <td>second price</td>
                    <td>second quantity</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>third title</td>
                    <td>third price</td>
                    <td>third quantity</td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td>fourth title</td>
                    <td>fourth price</td>
                    <td>fourth quantity</td>
                </tr>
            </table>
        </div>
    </div>
    </div>


    <section class="heading">
        <h1>CONVEYOR</h1>
    </section>
    <div class="container">
        <div class="box">
            <div class="column-1">
                <h2>Retail 500</h2>
                
                <button class="btn">Load More</button>
            </div>
            <div class="column-2">
                <table>
                    <tr>
                        <th>Sr No.</th>
                        <th>title</th>
                        <th>price</th>
                        <th>quantity</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>first title</td>
                        <td>first price</td>
                        <td>first quantity</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>second title</td>
                        <td>second price</td>
                        <td>second quantity</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>third title</td>
                        <td>third price</td>
                        <td>third quantity</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>fourth title</td>
                        <td>fourth price</td>
                        <td>fourth quantity</td>
                    </tr>
                </table>
            </div>
        </div>
    
        <div class="box">
            <div class="column-1">
                <h2>SA 2000</h2>
                
                <button class="btn">Load More</button>
            </div>
            <div class="column-2">
                <table>
                    <tr>
                        <th>Sr No.</th>
                        <th>title</th>
                        <th>price</th>
                        <th>quantity</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>first title</td>
                        <td>first price</td>
                        <td>first quantity</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>second title</td>
                        <td>second price</td>
                        <td>second quantity</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>third title</td>
                        <td>third price</td>
                        <td>third quantity</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>fourth title</td>
                        <td>fourth price</td>
                        <td>fourth quantity</td>
                    </tr>
                </table>
            </div>
        </div>
    
        <div class="box">
            <div class="column-1">
                <h2>SA 3000</h2>
                
                <button class="btn">Load More</button>
            </div>
            <div class="column-2">
                <table>
                    <tr>
                        <th>Sr No.</th>
                        <th>title</th>
                        <th>price</th>
                        <th>quantity</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>first title</td>
                        <td>first price</td>
                        <td>first quantity</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>second title</td>
                        <td>second price</td>
                        <td>second quantity</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>third title</td>
                        <td>third price</td>
                        <td>third quantity</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>fourth title</td>
                        <td>fourth price</td>
                        <td>fourth quantity</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </Form3Style>
    
    </>
  );
};

export default Form3;
