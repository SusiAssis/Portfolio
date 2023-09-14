'use client'
import styled from 'styled-components'

const HeaderStyle = styled.header`
background-color:#001D53;
z-index: 2;
color: #ffffff;
position: fixed;
width: 100%;
border-bottom: 4px solid #5667A5;

p{
    background-color: #001D53;
    padding: 1em;
    font-size: 1.5em;
}

nav {
    background-color: #001D53;
    margin: 0 auto;
    max-width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

ul {
   background-color: #001D53;
   display: flex;
   padding: 1em;
   gap: 1.5em;
   list-style: none;
   color: #ffffff;
   font-size: 1.1em;
}

a {
    background-color: #001D53;
    color: #ffffff;
    text-decoration: none;
    font-size: 1em;
    cursor: pointer;
}

.mobile{
    display: none;
}


@media (max-width: 750px) {
   .mobile{
    display: block;
    margin-right: 1em ;
   }

   .menu_web{
      display: none;
   }
}

`

export default HeaderStyle;