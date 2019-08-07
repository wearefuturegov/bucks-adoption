import React from "react"

const Breadcrumbs = ({breadcrumbs}) =>
    <ul className="breadcrumbs">
        {breadcrumbs.map((breadcrumb, i)=>
            <li key={i} className="breadcrumbs__item">
                {(breadcrumb.href)?
                    <a href={breadcrumb.href} className="breadcrumbs__link">{breadcrumb.title}</a>
                    : breadcrumb.title }
            </li>
        )}
    </ul>

export default Breadcrumbs
