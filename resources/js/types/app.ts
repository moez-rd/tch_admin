import {BadgeProps, ButtonProps, MenuItemProps} from "@mantine/core";
import React, {HTMLProps} from "react";
import {InertiaLinkProps} from "@inertiajs/react";

export interface Link {
    link: string,
    basePath: string,
    label: string
}

export interface Badge extends BadgeProps {
    name: string
}

export type Menu = {
    label: string
    props: MenuItemProps
    linkProps: InertiaLinkProps
}

export interface Data {
    id: string
    title: string
    link?: string
    avatar?: string
    information?: string[]
    badges?: Badge[]
    menu?: Menu[]
}

export interface DataDisplay {
    title: string
    data: {
        key: string,
        value: React.ReactNode
        imagePreview?: boolean
        link?: string
    }[]
}

export interface DataDisplayChild {
    data: {
        key: string,
        value: React.ReactNode
        link?: string
    }[]
}
