import styled from "styled-components";

export const NavbarStyle = styled.div`
  .navigation {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.5rem 0rem;
    background-color: #fff;
    color: black;
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
  }

  .brand-name {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
  }
  .logo {
    width: 6rem;
  }
  .navigation-menu {
    margin-left: auto;
  }

  .navigation-menu ul {
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
  .navigation-menu li {
    // removes default disc bullet for li tags and applies margin to left & right side
    list-style-type: none;
    margin: 0 1rem;
  }
  .navigation-menu li a {
    // increases the surface area of the anchor tag to span more than just the anchor text
    text-decoration: none;
    display: block;
    width: 100%;
  }

  .hamburger {
    // removes default border on button element
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: var(--clr-secondary);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    // positions the icon to the right and center aligns it vertically
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
  }
  .hamburger:hover {
    background-color: #2642af;
  }

  @media screen and (max-width: 768px) {
    .navigation {
      z-index: 999;
    }
    .hamburger {
      display: block;
    }
    .nav-icon {
      color: #fff;
      font-size: 1.5rem;
    }
    .nav-icon:hover {
      color: #fff;
      font-size: 1.5rem;
    }

    .navigation-menu ul {
      /* previous styles */
      display: none;
    }
    .navigation-menu,
    .expanded ul {
      display: block;
    }
    .navigation-menu ul {
      // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
      position: absolute;
      top: 55px;
      left: 0;
      // stacks the li tags vertically
      flex-direction: column;
      // makes menu span full height and width
      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;
    }

    .navigation-menu li {
      // centers link text and strips off margin
      text-align: center;
      margin: 0;
    }
    .navigation-menu li a {
      color: black;
      // increases the surface area of the anchor tag to span the full width of the menu
      width: 100%;
      padding: 1.5rem 0;
    }
    .navigation-menu li:hover {
      background-color: #eee;
    }
  }
`;

export const ProductFormStyle = styled.div`
.main-form-section{
  position: relative;
  display: flex;
  flex-direction: column;
}
  .input-tag{
    width: 300px;
  }
  .form{
display: flex;
flex-direction: column;
/* width: 1400px; */
height: 300px;
padding-bottom: 10px;
margin: 0px;
  }
.main-form{
border: 1px solid black;
width: 1400px;
margin-left: 1%;
padding: 10px;
margin: auto;
 
}
  .second-col{
    width: 350px;
    margin-top:100px;
    /* align-items: center; */
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .first-col{
    display: flex;
    flex-direction: row;
  }
  .number-tag{
    width: 180px;
    margin-left: 20px;
  }
  .ant-col{
    width: 200px;
  }
  .third-col{
    /* padding-bottom: 40px; */
    position: absolute;
    right: 120px;
    bottom: 20px;
  }
  .number-tag{
    /* width: 100%; */
  }
`;

export const FormStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
.heading{
    width: 30%;
    text-align: center;
    margin: 2% auto;
    font-family: 'Poppins', sans-serif;
}
.heading h1{
    border-bottom: 3px solid black;
}
.main{
    width: 90%;
    margin: auto;
    border: 1px solid black;
}
.top-row{
    display: grid;
    grid-template-columns: 10% 50% 20% 20%;
    text-align: center;
    border-bottom: 1px solid black;
    border-top: 0px solid black;
}
.top-row{
    font-family: 'Poppins', sans-serif;
}
.head-row h1{
    margin-left: 2%;
    padding: 10px 0px;
    font-family: 'Poppins', sans-serif;
}
.sr-no{
    border-right: 1px solid black;
    padding-top: 10px;
}
.desc{
    border-right: 1px solid black;
    padding-top: 10px;
    padding-bottom: 10px;
}
.exfactory-rate{
    border-right: 1px solid black;
    padding-top: 10px;
    padding-bottom: 10px;
}
.sr-no h3{
  margin-top: 10px;
}
.remark{
  padding-top: 10px;
    padding-bottom: 10px;
}
.top-row.info{
    text-align: left;
    border-bottom: none;
    border-top: 1px solid black;
}
.top-row.info .sr-no{
    text-align: center;
    align-items: center;
}
.top-row.info .exfactory-rate{
    text-align: center;
    align-items: center;
    font-size: 1.3rem;
}
.top-row.info .desc{
    margin-left: 4%;
}
.top-row.info .desc h4{
    padding: 0;
    margin: 20px 0px;
}
.top-row.info .desc ul{
    list-style: none;
    margin-left: 0;
}
.top-row.info .remark{
    text-align: center;
}
.desc h3{
  margin: 6px 0px;
}
.desc ul li span{
  font-weight: 600;
  color: black;
}
.desc ul li{
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    padding-top: 4px;
    padding-bottom: 4px;
}
.desc ul li i{
    color: rgb(41, 40, 40);
}
.top-row.info .remark p{
    font-size: 1.3rem;
}
.top-row.info .desc b{
    color: rgb(255, 17, 0);
    font-size: 1.2rem;
}
.bottom-row{
    display: grid;
    grid-template-columns: 60% 20% 20%;
    border-top: 1px solid black;
    font-family: 'Poppins', sans-serif;
    border-bottom: 1px solid black;
}
.bottom-row h1{
    text-align: right;
    margin-right: 4%;
    margin-top: 1.5%;
}
.total{
    border-right: 1px solid black;
}
.bottom-row .exfactory-rate h1{
    text-align: center;
}
.bottom-row .remark h1{
    text-align: center;
    align-items: center;
}

`;

export const Form2Style = styled.div`
.container{
  width: 80%;
  margin: auto;
}
.container table{
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  border: 1px solid black;
  border-spacing: 0;
border-collapse: collapse;
}

.container table, tr{
  padding: 10px;
  border: none;
}
.column-1{
  border-top: 1px solid black;
  border-right: 1px solid black; 
  /* border-bottom: 1px solid black; */
  border-left: 1px solid black;
  padding: 10px;
  height: 100%;
  margin: 0;
}
.container tr td{
  position: relative;
}
.container tr td input{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  position: absolute;
  font-size: 1.2rem;
  padding-left: 15px;
}

.column-2{
  border-top: 1px solid black;
  border-right: 1px solid black;
  padding-left: 1%;
}
.column-1.last{
  /* border-bottom: 1px solid black; */
  border-left: 1px solid white;
  border-right: 1px solid white;
  width: 40%;
  height: 1%;
}
.column-2.last{
  /* border-bottom: 1px solid black; */
  border-right: 1px solid white;
  width: 60%;
  height: 1%;
}
.heading{
    width: 30%;
    text-align: center;
    margin: 2% auto;
    font-family: 'Poppins', sans-serif;
}
.heading h1{
    border-bottom: 3px solid black;
}
`;

export const Form3Style = styled.div`
  .container{
    width: 90%;
    margin: auto;
    font-family: 'Poppins', sans-serif;
}
.heading{
    width: 15%;
    text-align: center;
    margin: 2% auto;
    font-family: 'Poppins', sans-serif;
}
.heading h1{
    border-bottom: 3px solid black;
}
.box{
    display: grid;
    grid-template-columns: 20% 80%;
}
.column-1{
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;
    align-items: center;
}
.column-1 h2{
    font-size: 2.1rem;
    font-family: 'Poppins', sans-serif;
    margin-top: 4%;
    font-weight: 400;
}
.column-1 button{
    color: white;
    border: none;
    background-color: black;
    padding: 10px 20px;
    border-radius: 5px;
}
.column-2 table{
    width: 100%;
    text-align: left;
    border-spacing: 0;
    border-collapse: collapse;
}
table th{
    border: 1px solid black;
    padding: 1%;
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif;
}
table td{
    border: 1px solid black;
    padding: 1%;
    font-size: 1.3rem;
}
`;

export const Form4Style = styled.div`
  .heading{
    width: 30%;
    text-align: center;
    margin: 2% auto;
    font-family: 'Poppins', sans-serif;
}
.heading h1{
    border-bottom: 3px solid black;
}
.container table{
    width: 100%;
    text-align: left;
    border-spacing: 0;
    border-collapse: collapse;
}
.container tr td input{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  outline:none;
  position: static;
  font-size: 1.2rem;
  padding-left: 15px;
}
table th{
    border: 1px solid black;
    padding: 1%;
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif;
}
table td{
    border: 1px solid black;
    padding: 1%;
    font-size: 1.3rem;
}
.container{
  margin: auto;
  width: 90%;
}
.bot-heading{
  text-align: center;
  margin-top: 2%;
}
.container.grand-total{
  width: 70%;
  margin-top: 4%;
}
`;

export const TermStyle = styled.div`
  .heading{
    width: 30%;
    text-align: center;
    margin: 2% auto;
    font-family: 'Poppins', sans-serif;
}
.heading h1{
    border-bottom: 3px solid black;
}
.container{
  width: 90%;
  font-size:0.85rem;
  margin: auto;
}
.container .term{
  padding: 0.8% 0;
}
.container .term h2{
  font-weight: 400;
}
.container .term h2 b{
  font-weight: bolder;
}
.container .term h3{
  margin-left: 5%;
}
.container .term h3 ul{
  font-size: 1.2rem;
  font-weight: 400;
}
.container .term h3 ul li{
  list-style: none;
  padding-top: 7px;
}
.container .term h4{
  margin-left: 10%;
}
.container .term h4 ul{
  font-size: 1.2rem;
  font-weight: 400;
}
.container .term h4 ul li{
  list-style: none;
  padding-top: 7px;
}
`;

export const InputStyle = styled.div`
lable{
  font-size: 2rem;
}
.container{
  width: 90%;
  margin: auto;
}
.buttoncreate{
  margin-left: 10rem;
}
`;