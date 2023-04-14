import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { NavbarStyle } from "./Molecule.style";
import { useSelector } from "react-redux";
import Form from "./Form";
import { Form2Style } from "./Molecule.style";
import { Button } from "antd";
import styled from "styled-components";

const ProductDescriptionForm = ({
  getDescriptionData,
  form,
  setFormData,
  isCategoryCreate,
}) => {
  const { selected, setSelected } = useState();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  //   const [form, setForm] = useState({processing: 'BOILER'})
  //   console.log(form.processing)
  // const { user } = useSelector((state) => state.user);
  // console.log(user.username);
  console.log(form, "pricingd d");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form, "form data");
    getDescriptionData(form);
    // handle form submission here
  };

  return (
    <Style>
    <div className="container">
      <Form2Style>
        <section class="heading">
          <h1>500 BPH EXPANDABLE TO 1000 BPH</h1>
        </section>
        <div className="container">
          <table>
            <tr className="first-column">
              <td className="column-1">Product Category</td>
              <td className="column-2">
                <input
                  type="text"
                  id="productCategory"
                  name="productCategory"
                  value={form?.productCategory}
                  onChange={handleChange}
                  disabled
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">SUTABLE FOR PROCESSING</td>
              <td className="column-2">
                <input
                  type="text"
                  id="suitableForProcessing"
                  name="suitableForProcessing"
                  value={form.suitableForProcessing}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">WITH AVERAGE LIVE WEIGHTS OF</td>
              {/* <td className="column-2">1.8 KG*</td> */}
              <td className="column-2">
                <input
                  type="text"
                  id="averageLiveWeight"
                  name="averageLiveWeight"
                  value={form.averageLiveWeight}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">MINIMUM WEIGHT</td>
              {/* <td className="column-2">1.2 KG*</td> */}
              <td className="column-2">
                <input
                  type="text    "
                  id="minimumWeight"
                  name="minimumWeight"
                  value={form.minimumWeight}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">MAXIMUM WEIGHT</td>
              {/* <td className="column-2">2.5 KG*</td> */}
              <td className="column-2">
                <input
                  type="text    "
                  id="maximumWeight"
                  name="maximumWeight"
                  value={form.maximumWeight}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">CAPACITY</td>
              {/* <td className="column-2">500 BIRDS PER HOUR EXPANDABLE</td> */}
              <td className="column-2">
                <input
                  type="text"
                  id="capacity"
                  name="capacity"
                  value={form.capacity}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">NUMBER OF SHIFTS</td>
              {/* <td className="column-2">NO LIMITATIONS</td> */}
              <td className="column-2">
                <input
                  type="text"
                  id="numberOfShifts"
                  name="numberOfShifts"
                  value={form.numberOfShifts}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">BLEEDING TIME</td>
              {/* <td className="column-2">240 SECONDS*</td> */}
              <td className="column-2">
                <input
                  type="text"
                  id="bleedingTime"
                  name="bleedingTime"
                  value={form.bleedingTime}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">FOLLOWING SCALDING SYSTEM</td>
              {/* <td className="column-2">90 SECONDS AT APPROX 56 DEG CELSIUS</td> */}
              <td className="column-2">
                <input
                  type="text"
                  id="followingScaldingSystem"
                  name="followingScaldingSystem"
                  value={form.followingScaldingSystem}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">PRODUCT</td>
              {/* <td className="column-2">FRESH / CHILLED **</td> */}
              <td className="column-2">
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">ELECTRICAL</td>
              <td className="column-2">
                <input
                  type="text"
                  id="electrical"
                  name="electrical"
                  value={form.electrical}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">ELECTRICAL CONSUMPTION</td>
              <td className="column-2">
                <input
                  type="text"
                  id="electricalConsumption"
                  name="electricalConsumption"
                  value={form.electricalConsumption}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">WATER CONSUPTION</td>
              <td className="column-2">
                <input
                  type="text"
                  id="waterConsumption"
                  name="waterConsumption"
                  value={form.waterConsumption}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1">ICE CONSUMPTION</td>
              <td className="column-2">
                <input
                  type="text"
                  id="iceConsumption"
                  name="iceConsumption"
                  value={form.iceConsumption}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr className="first-column">
              <td className="column-1 last"></td>
              <td className="column-2 last"></td>
            </tr>
          </table>
        </div>//
        <div className="button-category-create">
        {isCategoryCreate ? (
          <Button
          type="primary"
          style={{ padding: ".5rem 5rem", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center"}}
          size="large"
          onClick={handleSubmit}>
          Submit
          </Button>
          ) : null}
          </div>
      </Form2Style>
    </div>
    </Style>
  );
};

export default ProductDescriptionForm;

const Style = styled.div`
.button-category-create{
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
