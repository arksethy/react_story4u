import React from 'react';
import { Helmet } from 'react-helmet';
import mainLogo from'../../../images/anterghat.jpeg';

 const MetaDecorator = ({ title, description, imgSrc=mainLogo }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgSrc} />

      {/* <!-- Primary Meta Tags --> */}
{/* <title>Story 4u+</title>
<meta name="title" content="Story 4u1" />
<meta name="description" content="aa आज प्रातः 6 बजे परम पूज्य बाबा जयगुरूदेव जी महाराज ने थाना गाजी" /> */}

{/* <!-- Open Graph / Facebook --> */}
{/* <meta property="og:type" content="website" />
<meta property="og:url" content="https://story4u.info/jgd-satsang/" />
<meta property="og:title" content="Story 4u fb" />
<meta property="og:description" content="fb आज प्रातः 6 बजे परम पूज्य बाबा जयगुरूदेव जी महाराज ने थाना गाजी" />
<meta property="og:image" content={mainLogo} /> */}
    </Helmet>
  );
};

export default MetaDecorator;
