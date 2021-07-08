import React from "react"
import ContentLoader from "react-content-loader"

    
    
    const MyLoader = (props) => (
      <ContentLoader 
     className="item__main"

        speed={3}
        width={477}
        height={486}
        viewBox="0 0 477 486"
        backgroundColor="#c9baba"
        foregroundColor="#ffffff"
        {...props}
      >
        <rect x="35" y="-10" rx="7" ry="7" width="300" height="300" /> 
        <rect x="37" y="310" rx="0" ry="0" width="300" height="30" /> 
        <rect x="38" y="359" rx="0" ry="0" width="300" height="127" /> 
        <rect x="38" y="500" rx="0" ry="0" width="300" height="32" /> 
        <rect x="39" y="548" rx="6" ry="6" width="153" height="37" /> 
        <rect x="214" y="550" rx="6" ry="6" width="120" height="37" />
      </ContentLoader>
    )
    
    export default MyLoader



