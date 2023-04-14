import React from "react";
import { useState } from "react";
import { Form4Style } from "../Molecule.style";

function PricingTableForm() {
  const [form, setForm] = useState({});
  return (
    <Form4Style>
    <div>
      <form>
        <table>
          <tr>
            <th>SR.NO</th>
            <th>ITEM</th>
            <th>INR</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>TOTAL 1</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Disc</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Total 2</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Packing</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Total 3</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Insurance</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td>Total 4</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>8.</td>
            <td>Installation</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>9.</td>
            <td>TOTAL 4</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>10.</td>
            <td>CGST @ 9%</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>11.</td>
            <td>Total 5</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>12.</td>
            <td>SGST @ 9%</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>13.</td>
            <td>Total 6</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>14.</td>
            <td>ISGT @ 18%</td>
           <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>15.</td>
            <td>Total 8</td>
            <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>16.</td>
            <td>Transport</td>
            <td>
              <input type={"text"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>17.</td>
            <td>Total 9</td>
           <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>R Off(+/-)</td>
           <td>
              <input type={"number"} value={form.total_1} name={"total_1"} />
            </td>
          </tr>
        </table>
      </form>
    </div>
    </Form4Style>
  );
}

export default PricingTableForm;
