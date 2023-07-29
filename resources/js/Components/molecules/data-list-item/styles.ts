import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    titleLink: {
        textDecoration: "none",
        '&:hover': {
            textDecoration: "underline",
            textDecorationColor: theme.colors.blue[5],
            textDecorationThickness: '2px'
        },
        '&:focus': {
            textDecoration: "underline",
            textDecorationColor: theme.colors.blue[5],
            textDecorationThickness: '2px'
        }
    }
}));
