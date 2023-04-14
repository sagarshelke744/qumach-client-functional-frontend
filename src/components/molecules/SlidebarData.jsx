import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SlidebarData = [
    {
        title: "Client",
        // path: "/",
        icon: <AiIcons.AiFillHome/>,
        iconclosed: <RiIcons.RiArrowDownFill/>,
        iconopened: <RiIcons.RiArrowUpFill/>,
        subnav: [
            {
                title: "Dashboard",
                path: "/client-dahsboard",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: "Table",
                path: "/client-table",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: "Create Client",
                path: "/create-client",
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },
{title: "Category",
icon: <AiIcons.AiFillHome/>,
iconclosed: <RiIcons.RiArrowDownFill/>,
iconopened: <RiIcons.RiArrowUpFill/>,
subnav: [
    {
        title: "Category",
        path: "/category-create",
        icon: <IoIcons.IoIosPaper/>,
    },
    {
        title: "Category List",
        path: "/category-list",
        icon: <IoIcons.IoIosPaper/>,
    },
    {
        title: "Category Description List",
        path: "/category-description-list",
        icon: <IoIcons.IoIosPaper/>,
    },
]
},
    {
        title: "Product",
        // path: "/",
        icon: <AiIcons.AiFillHome/>,
        iconclosed: <RiIcons.RiArrowDownFill/>,
        iconopened: <RiIcons.RiArrowUpFill/>,
        subnav: [
            {
                title: "Dashboard",
                path: "/product-dahsboard",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: "Table",
                path: "/products",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: "Create Product",
                path: "/create-product",
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },

    {
        title: "Quote",
        // path: "/",
        icon: <AiIcons.AiFillHome/>,
        iconclosed: <RiIcons.RiArrowDownFill/>,
        iconopened: <RiIcons.RiArrowUpFill/>,
        subnav: [
            {
                title: "Dashboard",
                path: "/quotations",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: "quotation-form",
                path: "/quotation-form",
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: "Create Client",
                path: "/create-quote",
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },

    {
        title: "Forms",
        path: "/all-forms",
        icon: <AiIcons.AiFillHome/>,
        iconclosed: <RiIcons.RiArrowDownFill/>,
        iconopened: <RiIcons.RiArrowUpFill/>,
    },


]