import React from "react";
import {Box, CloseButton, Image, Stack} from "@mantine/core";
import {useRecoilState} from "recoil";
import {imagePreviewState} from "@/lib/recoil/imagePreviewAtom";

/**
 * interface
 */
interface Props {
}

/**
 * export page
 *
 * @param props
 * @constructor
 */
export default function ImagePreview(props: Props): React.JSX.Element {
    const {}: Props = props

    const [imagePreview, setImagePreview] = useRecoilState(imagePreviewState)

    const handleCloseButtonClick = () => {
        setImagePreview((prev) => {
            return {
                ...prev,
                opened: false
            }
        })
    }

    return (
        <Box sx={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 10,
            height: '100vh',
            display: imagePreview.opened ? 'block' : 'none'
        }}>
            <CloseButton onClick={handleCloseButtonClick} title="Close popover" size="xl" iconSize={20}
                         sx={{position: 'absolute', top: 20, right: 20}}/>
            <Stack align="center" py="10vh" h="100vh">
                <img src={imagePreview.src} alt={imagePreview.alt} style={{objectFit: 'contain', height: '100%'}}/>
            </Stack>
        </Box>
    )
}
