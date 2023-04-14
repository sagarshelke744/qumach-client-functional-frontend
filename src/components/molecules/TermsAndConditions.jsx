import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { NavbarStyle } from "./Molecule.style";
import { useSelector } from "react-redux";
import Form from "./Form";
import { Form2Style } from "./Molecule.style";
import { TermStyle } from "./Molecule.style";
const TermsAndConditions = () => {
  const { selected, setSelected } = useState();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // const { user } = useSelector((state) => state.user);
  // console.log(user.username);
  return (
    <>
<TermStyle>
<section class="heading">
        <h1>TERMS & CONDITIONS</h1>
    </section>
    <section className="container">
        <div className="term">
          <h2><b>GST AND/OR OTHER TAXES:</b> TO CUSTOMERS ACCOUNT(GST-18%/NIL FOR EXPORTS)</h2>  
        </div>
        <div className="term">
          <h2><b>PACKAGING, FORWARDING:</b> 3% FIXED(NOT NEGOTIABLE)</h2>  
        </div>
        <div className="term">
          <h2><b>TRANSPORTATION AND INSURANCE:</b> EXTRA AT ACTUALS</h2>  
        </div>
        <div className="term">
          <h2><b>PRODUCT SPECIFICATIONS:</b> PRODUCT SPECIFICATIONS ARE SUBJECT TO CHANGE WITHOUT NOTICE TO IMPROVE RELIABLILITY, FUNCTION, DESIGN OR OTHERWISE</h2>  
        </div>
        <div className="term">
          <h2><b>SUPERVISION FOR ERECTION & COMMISIONSNNING:</b> RS 50000 FOR INSTALLATION IN INDIA AND NEPAL LOCAL BOARDING, LODINNG AND TRANSPORTATION TO CUSTOMERS ACCOUNT.</h2>  
        </div>
        <div className="term">
          <h2><b>PAYMENT TERMS:</b> 100% ADVANCE ALONG WITH PURCHASE ORDER. (NEGOTIABLE)</h2>  
        </div>
        <div className="term">
          <h2><b>GARUNTEE:</b> ONE YEAR GUARANTEE AGAINST ANY MANUFACUTRING DEFECTS THIS DOSE NOT COVER RUBBER FINGERS. BEAGINS & ANY ITEM UNER THE PERVIEW OF FAIR WARE AND TARE</h2>  
        </div>
        <div className="term">
          <h2><b>NOT IN SCOP OF SUPPLY:</b> <h3>
            <ul>
                <li>a. Electrical water, sewage. steam connections</li>
                <li>b. Welding machine and tools</li>
                <li>c. Labour for installation</li>
                <li>d. M S support framework</li>
                <li>e. Anything not specifically mentioned in the scope of supply.</li>
            </ul>
        </h3>
    </h2>  
        </div>
    <div className="term">
          <h2><b>NOT IN SCOP OF SUPPLY:</b> <h3>
            <ul>
                <li>1. We provide supervision only.</li>
                <li>2. The installation as per final layout of QuMach machines only</li>
                <li>3. Delay in installation due to client issues beyond 20 days will be charged @ 1000/day.</li>
                <li>4. Prior to cmmecncement, please ensure availability of:</li>
            </ul>
        </h3>
        <h4>
            <ul>
                <li>a. Sufficient testing materail, as required by our engineer/techician.</li>
                <li>b. All tools as well as hosting and lifting equipments required for installation</li>
                <li>c. Sufficient skilled staff compreising of an electrecian, welder, plumber, two mechanics and sufficient unskilled workes.</li>
                <li>d. M S support framework</li>
                <li>e. Civil works are completed.</li>
                <li>e. Water, gutter, and electrical facilities are operational.</li>
            </ul>
        </h4>
    </h2>  
    </div>
    </section>
</TermStyle>
    </>
  );
};

export default TermsAndConditions;
